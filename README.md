# unread

Chrome extension that opens a random bookmark whose title contains the word "unread".

Only looks at the default "Other Bookmarks" folder. Check the code if you need to update that.

## Install

1. Clone or download repository
1. Go to `chrome://extensions/` and select `Developer mode` (top right)
1. Click `Load unpacked` and select the extension’s directory

## Caveats

1. Expects a "Other Bookmarks" folder to have id "2".
1. Use JavaScript [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) on your entire "Other Bookmarks" folder.
1. Use JavaScript [Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random).

## Credits

Icon made by [Perfect Pixel](https://www.flaticon.com/authors/pixel-perfect) from [www.flaticon.com](https://www.flaticon.com/)
