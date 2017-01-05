(function () {

    const api = {
        info: {
            get () {
                return chrome.runtime.getManifest();
            }
        },
        request: {
            send (request) {
                return rester.request.send(request);
            },
            sendBrowser (request) {
                return rester.browserRequest.send(request);
            }
        },
        data: rester.data,
        settings: rester.settings
    };

    chrome.browserAction.onClicked.addListener(() => {
        chrome.tabs.create({
            url: chrome.extension.getURL('site/index.html')
        });
    });

    chrome.runtime.onConnect.addListener(port => {
        function onDataChange(args) {
            port.postMessage({action: 'event.dataChange', args: JSON.stringify(args)});
        }

        function onSettingsChange(args) {
            port.postMessage({action: 'event.settingsChange', args: JSON.stringify(args)});
        }

        rester.data.onChange.addListener(onDataChange);
        rester.settings.onChange.addListener(onSettingsChange);

        port.onMessage.addListener(({id, action, args, fields}) => {
            if (!action.startsWith('api.')) return;

            const actionPath = action.split('.'),
                  actionFunc = actionPath.reduce((api, path) => api && api[path], {api});

            if (!actionFunc) return;

            Promise.resolve(actionFunc(args && JSON.parse(args)))
                .then(result => {
                    if (fields) {
                        result = rester.utils.fields.select(result, fields);
                    }

                    port.postMessage({id, action: 'apiresponse', result: JSON.stringify(result)});
                })
                .catch(error => {
                    if (error.message) {
                        error = error.message;
                    }

                    port.postMessage({id, action: 'apiresponse', error: JSON.stringify(error)});
                });
        });

        port.onDisconnect.addListener(() => {
            rester.data.onChange.removeListener(onDataChange);
            rester.settings.onChange.removeListener(onSettingsChange);
        });
    });

})();
