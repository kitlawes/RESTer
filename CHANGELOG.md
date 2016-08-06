# Change Log
All notable changes to this project will be documented in this file.

## [Unreleased]

## [1.13.0] - 2016-07-30
### Added
- Shortcut Ctrl+E, which cycles through the active environments.
- Support for OAuth 2 Resource Owner Password Credentials flow.
- Use environment variables in OAuth 2 configurations.

### Fixed
- Attempt to fix issue with missing toolbar icon by providing icons in all supported sizes.

## [1.12.1] - 2016-07-16
### Fixed
- Improved all autocomplete fields (request method, headers, collection name). It's now possible to select any other input field or button with only one mouse click, when the dropdown is open.

## [1.12.0] - 2016-07-10
### Added
- Added option to pin sidenav, so it always stays open (even on small screens).
- Experimental response rendering, which should be better for large responses. Activate in settings.

### Changed
- Send requests by pressing enter/return inside of an input field.

## [1.11.0] - 2016-06-27
### Added
- Better structuring for requests in left navigation by nesting collections. Just use slashes in your collection names to create subnavigations.
- Pretty print for XML responses.
- Improve request body input (code folding, beautify code for JSON and XML).
- Added more HTTP verbs to request method autocompletion.

### Fixed
- Show dropdown of request method input field directly on focus.
- Correctly use the entered text without the need to select something from the dropdown in request method input field.

## [1.10.0] - 2016-05-27
### Changed
- Improve rendering of reponses. Should handle large responses a lot better now.

## [1.9.1] - 2016-05-24
### Fixed
- Fixed bug for Firefox 46.

## [1.9.0] - 2016-05-22
### Added
- Added request inspections about variable usage. This should help to avoid accidental mistakes like:
    - Using placeholders with disabled variable feature.
    - Using variales with empty values.

## [1.8.1] - 2016-05-17
### Fixed
- Previous version did not pass the review, because MD5 hashes of angular did not match the ones from the angular repository. This was due to git converting line endings to CRLF during bower install.

## [1.8.0] - 2016-05-16
### Added
- Show elapsed milliseconds for each request.
- Quick open dialog (Ctrl+P) now search the request method and url in addition to the title.

## [1.7.0] - 2016-04-23
### Added
- Added preview mode for HTML responses.
- Added about page.

### Changed
- Don't automatically strip default headers like Accept or User-Agent. There is now a setting to do this.

## [1.6.0] - 2016-04-03
### Added
- New feature "environments": Allows to define stored sets of variables, which can be used in any request. May be used to test the same API against different hosts (e.g. local, dev, production).
- UI improvements for navigation.

## [1.5.2] - 2016-03-17
### Fixed
- Last version didn't really fix the problem. This one does.

## [1.5.1] - 2016-03-15
### Fixed
- Fixed issue caused by last update, which made it impossible to send requests, when the new variable feature was disabled.

## [1.5.0] - 2016-03-13
### Added
- New variables feature: You can define placeholders in the form {id} in any field in the request and fill the values in a separate tab. The values for these variables are not saved, which allows you to save a collection of request templates and only will in the needed values when you execute it.

### Fixed
- Fix some bugs with the navigation when adding/updating requests.

## [1.4.0] - 2016-02-15
### Added
- Added support for HTTP Basic authentication in access token request of OAuth 2 code flow.

### Fixed
- Fixed issue with OAuth 2 implicit flow.

## [1.3.2] - 2016-02-10
### Fixed
- Fixed bug in quick open dialog.

## [1.3.1] - 2016-02-09
### Fixed
- Fixed bug when loading old history data.

## [1.3.0] - 2016-02-08
### Added
- Special input fields for form data in body (application/x-www-form-urlencoded).
- Button in request body to switch input modes (plain, xml, json, form data), which can automatically apply the correct Content-Type header.
- Special input fields for query parameters in url.
- Support for pressing enter in the dialogs to save.

### Changed
- Removed tabs for response. Just show body underneath the headers.

### Fixed
- Performance improvement of request page (sorry for making this page slow in the first place). Also response body language selection is nicer now.

## [1.2.2] - 2016-01-14
### Fixed
- Removed validation of URL field to allow all kind of characters, e.g. spaces. This was especially annoying when typing in OData queries.

## [1.2.1] - 2015-10-28
### Fixed
- Fixed rendering of text/plain responses.
- Fixed requests with multiple completely identical headers.

## [1.2.0] - 2015-10-25
### Added
- Smoother syntax highlighting for very large responses. The page will now always be fully responsive.
- Options to toggle word wrap and pretty printing (pretty print is only available for JSON responses).
- Option to manually set response language (in case the server did not return a content type header).

## [1.1.0] - 2015-10-11
### Added
- Added shortcuts for some often used actions including a quick open dialog for saved requests similar to the file open function in Sublime Text. Just hit the question mark key (?) to see which shortcuts are available in the current context.

## [1.0.2] - 2015-09-16
### Added
- When an authorization token is expired, this is now directly visible.
- Intellisense for the request body is now determined from the Content-Type header.

### Fixed
- There was a strange problem when typing a header name or value. This should now be fixed. Also it's now possible to add multiple headers with the same name.

## [1.0.1] - 2015-09-02
### Fixed
- Removed OAuth 2 token_type check. This was implemented in a wrong way and is probably unnecessary anyway.

## [1.0.0] - 2015-09-01
### Added
- Authorization for requests (OAuth 2, Basic and custom).

### Fixed
- Smaller bugfixes and improvements.

## [0.0.2] - 2015-08-18
### Fixed
- Fixed transition to new page after saving a request.
- Fixed for multiprocess architecture.

## 0.0.1 - 2015-08-17
### Added
- First release.

[Unreleased]: https://github.com/frigus02/RESTer/compare/1.13.0...HEAD
[1.13.0]: https://github.com/frigus02/RESTer/compare/1.12.1...1.13.0
[1.12.1]: https://github.com/frigus02/RESTer/compare/1.12.0...1.12.1
[1.12.0]: https://github.com/frigus02/RESTer/compare/1.11.0...1.12.0
[1.11.0]: https://github.com/frigus02/RESTer/compare/1.10.0...1.11.0
[1.10.0]: https://github.com/frigus02/RESTer/compare/1.9.1...1.10.0
[1.9.1]: https://github.com/frigus02/RESTer/compare/1.9.0...1.9.1
[1.9.0]: https://github.com/frigus02/RESTer/compare/1.8.1...1.9.0
[1.8.1]: https://github.com/frigus02/RESTer/compare/1.8.0...1.8.1
[1.8.0]: https://github.com/frigus02/RESTer/compare/1.7.0...1.8.0
[1.7.0]: https://github.com/frigus02/RESTer/compare/1.6.0...1.7.0
[1.6.0]: https://github.com/frigus02/RESTer/compare/1.5.2...1.6.0
[1.5.2]: https://github.com/frigus02/RESTer/compare/1.5.1...1.5.2
[1.5.1]: https://github.com/frigus02/RESTer/compare/1.4.0...1.5.1
[1.4.0]: https://github.com/frigus02/RESTer/compare/1.3.2...1.4.0
[1.3.2]: https://github.com/frigus02/RESTer/compare/1.3.1...1.3.2
[1.3.1]: https://github.com/frigus02/RESTer/compare/1.3.0...1.3.1
[1.3.0]: https://github.com/frigus02/RESTer/compare/1.2.2...1.3.0
[1.2.2]: https://github.com/frigus02/RESTer/compare/1.2.1...1.2.2
[1.2.1]: https://github.com/frigus02/RESTer/compare/1.2.0...1.2.1
[1.2.0]: https://github.com/frigus02/RESTer/compare/1.1.0...1.2.0
[1.1.0]: https://github.com/frigus02/RESTer/compare/1.0.2...1.1.0
[1.0.2]: https://github.com/frigus02/RESTer/compare/1.0.1...1.0.2
[1.0.1]: https://github.com/frigus02/RESTer/compare/1.0.0...1.0.1
[1.0.0]: https://github.com/frigus02/RESTer/compare/0.0.2...1.0.0
[0.0.2]: https://github.com/frigus02/RESTer/compare/0.0.1...0.0.2