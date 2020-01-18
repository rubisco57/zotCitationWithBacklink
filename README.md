# zotCitationWithBacklink
## Zotero's backlinks
The consultation of referenced sources is eased by Zotero's backlinks which allow to open a referenced item in the zotero application `zotero://select/items/[itemLibraryID]_[itemKey]`. If the item's attachment is a pdf file, it can be linked to directly and opened at a specific page with `zotero://open-pdf/library/items/[itemKey]?page=[page]`.

## Goal
Create a [translator](https://www.zotero.org/support/dev/translators) for Zotero that wraps a citation (in predefined style) into a html link which points to the cited item in the Zotero library. If the item has a pdf attachment it should directly open at the specified page.

*Examples*:
```html
<a href="zotero://select/items/1_EHZV8CDE">
  Kaare Brandt Petersen, and Michael Syskind Pedersen. The Matrix Cookbook, 2012.
</a>

<a href="zotero://open-pdf/library/items/1_EHZVEDE?page=155">
  Kaare Brandt Petersen, and Michael Syskind Pedersen. The Matrix Cookbook, 2012.
</a>
```
## Questions/Issues
1. How to setup a developement environment in order to get IntelliSense for a zotero translator?
2. How to incorporate an existing citation style into a translator?
3. Can a window for user interaction (entry of page number) be brought up from within a translator?
4. How to get an item's attachment when it has not been directly selected and retrieve its ID?

I am thankful for any suggestion/hint regarding my questions above (via Github Issues or the [Zotero Forum](https://forums.zotero.org/discussion/80895/backlinks-to-zotero-entries-in-bibliographic-references)).
