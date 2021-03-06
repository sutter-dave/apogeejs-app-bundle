import ParentComponentView from "/apogeejs-app-bundle/src/componentdisplay/ParentComponentView.js";
import LiteratePageComponentDisplay from "/apogeejs-app-bundle/src/componentdisplay/LiteratePageComponentDisplay.js";


/** This component represents a table object. */
export default class FolderComponentView extends ParentComponentView {

    constructor(appViewInterface,folderComponent) {
        super(appViewInterface,folderComponent);
    }

    instantiateTabDisplay() {
        return new LiteratePageComponentDisplay(this); 
    }

}

//======================================
// This is the component generator, to register the component
//======================================

FolderComponentView.componentName = "apogeeapp.PageComponent";
FolderComponentView.hasTabEntry = true;
FolderComponentView.hasChildEntry = false;
FolderComponentView.ICON_RES_PATH = "/icons3/pageIcon.png";
FolderComponentView.TREE_ENTRY_SORT_ORDER = ParentComponentView.FOLDER_COMPONENT_TYPE_SORT_ORDER;
