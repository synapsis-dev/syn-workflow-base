/* eslint-disable @typescript-eslint/camelcase */
declare const $j: JQueryStatic;
declare class Validation {
    public static validate(element: string): boolean;
}

declare const $JR: {
    DIALOG: {};
    EXCEPTION: {};
    JRFORM: {};
    LAYERS: {};
    MODULE: {};
    NOTIFICATION: {
        removeAll: () => void;
        show: (message: string, type?: "info" | "success" | "warn" | "error", timeoutInSeconds?: number) => void;
        showWithElementReference: (message: string, type?: "info" | "success" | "warn" | "error", elementId?: string, timeoutInSeconds?: number) => void;
    };
    POPUP: {};
    UTILITY: {};
    dialog: {};
    widget: {};
};

declare const $JRApp: {
    registry: IJRRegistry;
};

declare interface IJRRegistry {
    getComponent(id: string): IJRRegistryComponent;
}

declare interface IJRRegistryComponent {
    _dataTablesConfig: {
        aaData: string[][];
    }
}

declare const $JRSTEP: {
    debugSubmit: boolean;
    stepData: {
        _object: {
            common: {
                _object: {
                    jr_workflowid: string;
                    jr_processid: string;
                    jr_processname: string;
                    jr_version: number;
                    jr_inbox_id: null;
                    jr_simulation: number;
                    jr_fullscreen: null;
                    jr_step: number;
                    jr_newwindow: number;
                    jr_backCmd: string;
                    jr_backUrl: string;
                    jr_backVersion: null;
                    jr_window_height: string;
                    jr_window_width: string;
                    jr_window_x: string;
                    jr_window_y: string;
                    jr_status: number;
                    jr_new_step: boolean;
                    jr_mode: string;
                    jr_dialog: string;
                };
            };
        };
    };
    result: string;
    type: string;
    processid: string;
    workflowid: string;
    simulation: string;
    processname: string;
    version: string;
    step: string;
    newWindow: string;
    dialogHash: number;
    dialogHashActive: boolean;
    dialogHashActiveInit: boolean;

    abortStep: never;
    answerStep: never;
    assignStep: never;
    backStep: never;
    finishStep: never;
    jumpToStep: never;
    requestStep: never;
    resubmissionStep: never;
    saveStep: never;
    sendStep: never;

    __proto__: {
        abortStep: never;
        answerStep: never;
        assignStep: never;
        backStep: never;
        finishStep: never;
        jumpToStep: never;
        requestStep: never;
        resubmissionStep: never;
        saveStep: never;
        sendStep: never;
    };
};


declare const $JR_JS_CONSTANTS: {
    "CONST_1_TO_1_RATIO": "Passend";
    "CONST_ABORT": "Abbrechen";
    "CONST_ACCOUNT_SETTINGS_CHANGE_AVATAR": "Profilbild ändern";
    "CONST_ACCOUNT_SETTINGS_DISCARD_AVATAR": "Bild verwerfen";
    "CONST_ACCOUNT_SETTINGS_INVALID_IMAGE_FORMAT": "Die ausgewählte Datei ist kein gültiges Bild.";
    "CONST_ACT_BATCH_SETTINGS": "Funktionen";
    "CONST_ACT_DATATYPE": "Datentyp";
    "CONST_ACT_FIXED_VALUE": "Fester Wert";
    "CONST_ACT_PARAMETER": "Parameter";
    "CONST_ACT_SOURCE_TYPE": "Ressource";
    "CONST_ACT_SUBTABLE_OR_VIEW": "Untertabelle/Ansicht";
    "CONST_ACT_TYPE": "Typ";
    "CONST_ACT_VALUE": "Wert";
    "CONST_ACTIVE": "Aktiv";
    "CONST_ACTUAL_SIZE": "Originalgröße";
    "CONST_ADD": "Hinzufügen";
    "CONST_ADD_PROCESS_MESSAGE": "Prozessmeldung hinzufügen";
    "CONST_ADDING_COLUMN": "Spalte wird hinzugefügt.";
    "CONST_ADDING_ELEMENT": "Element wird hinzugefügt.";
    "CONST_ADDING_ELEMENT_ERROR": "Fehler beim Hinzufügen des Elements";
    "CONST_ADDING_PAGE": "Seite wird hinzugefügt.";
    "CONST_ADDING_ROW": "Zeile wird hinzugefügt.";
    "CONST_ADDING_ROW_ERROR": "Fehler beim Hinzufügen der Zeile";
    "CONST_ADDING_SECTION": "Abschnitt wird hinzugefügt.";
    "CONST_ADDITIONAL_INFORMATION": "Zusatzinformationen";
    "CONST_AJAX_IN_PROGRESS": "Der Schritt kann erst gesendet werden, wenn sich der Dialog vollständig aufgebaut hat. Bitte versuchen Sie es in ein paar Sekunden noch einmal.";
    "CONST_AJAX_REQUEST_ERROR": "Es ist ein Fehler beim Senden der AJAX-Requests aufgetreten";
    "CONST_ALL_PAGES": "Alle";
    "CONST_ALLOW_DOWNLOAD": "Download ermöglichen";
    "CONST_ALLOW_VIEWING": "Anzeige ermöglichen";
    "CONST_ALLOWED_FILE_FORMATS": "Zulässige(s) Format(e):";
    "CONST_ALREADY_IN_TRANSACTION_FUNCTIONS_ERROR": "Innerhalb der Transaktion ausführen ist nur für folgende Funktionen verfügbar: #{functions}.";
    "CONST_ANALYSE": "Analysieren";
    "CONST_ANALYSE_JOBROUTER": "JobRouter jetzt analysieren";
    "CONST_AND": "und";
    "CONST_ANNOTATE": "Annotationen";
    "CONST_ANNOTATE_REDACT": "Annotationen";
    "CONST_ANNOTATION_CHECKMARK": "Kontrollhaken";
    "CONST_ANNOTATION_CIRCLE": "Kreis";
    "CONST_ANNOTATION_LINE": "Linie";
    "CONST_ANNOTATION_RECTANGLE": "Rechteck";
    "CONST_ANNOTATION_SELECT": "Auswahl";
    "CONST_ANNOTATION_TEXT": "Text";
    "CONST_ANNOTATION_TEXT_SIZE_LARGE": "Groß";
    "CONST_ANNOTATION_TEXT_SIZE_MEDIUM": "Mittel";
    "CONST_ANNOTATION_TEXT_SIZE_SMALL": "Klein";
    "CONST_ANNOTATIONS": "Annotationen";
    "CONST_ANNOTATIONS_LOADED": "Annotationen geladen";
    "CONST_ANNOTATIONS_SAVED": "Annotations gespeichert";
    "CONST_ANOTHER_EXPORT": "Eine Fehlerberichtsdatei";
    "CONST_APPLY": "Übernehmen";
    "CONST_ARCHIVE": "Archiv";
    "CONST_ARCHIVEINDEXFIELD": "Indexfeld";
    "CONST_ARCHIVENAME": "Archivname";
    "CONST_ARE_YOU_SURE": "Sind Sie sicher?";
    "CONST_AREA_SELECTION_TOOL": "Bereich auswählen";
    "CONST_ASSIGNMENT": "Zuweisung";
    "CONST_BACK": "Zurück";
    "CONST_BASE_ELEMENTS": "Workflow-Elemente";
    "CONST_BIGINT": "Große Ganzzahl";
    "CONST_BORDER_COLOR": "Rahmenfarbe";
    "CONST_BORDER_THICKNESS": "Rahmendicke";
    "CONST_BOXACTION_CONFIRM": "Wollen Sie die Aktion '#{boxAction}' wirklich ausführen?";
    "CONST_CALLOUT_TYPE": "Callout Typ";
    "CONST_CALLOUT_VISIBLE": "Callout sichtbar";
    "CONST_CANCEL": "Abbrechen";
    "CONST_CHANGE_DWCONNECTION_CONFIRM": "Wollen Sie die DocuWare-Verbindung wirklich zurücksetzen?";
    "CONST_CHANGE_ESCALATION": "Bearbeitungsfrist ändern";
    "CONST_CHANGE_UPLOADS_MODE_WARNING": "Die Umstellung des Speichermodus für Uploads erfordert unter Umständen die Anpassungen selbst geschriebener PHP-Skripte. Möchten Sie die Änderung wirklich durchführen?";
    "CONST_CHARACTER": "Zeichen";
    "CONST_CHOOSE_DB_CONNECTION": "Bitte wählen Sie eine Datenbankverbindung aus.";
    "CONST_CHOOSE_ENTRY": "Bitte wählen Sie einen Eintrag aus...";
    "CONST_CHOOSE_TABLE": "Bitte wählen Sie eine Tabelle aus.";
    "CONST_CLEAR_RESULTS": "Ergebnisse löschen";
    "CONST_CLIPBOARD": "Zwischenablage";
    "CONST_CLIPBOARD_NAME_PROMPT": "Bitte geben Sie eine Bezeichnung an, unter der die ausgewählten Objekte in der Zwischenablage abgelegt werden sollen:";
    "CONST_CLIPPED_FILES": "Geklammerte Dateien";
    "CONST_CLOSE": "Schließen";
    "CONST_CLOSE_NOTIFICATION": "Meldung schließen";
    "CONST_COLUMN_EXISTS": "Spalte existiert bereits.";
    "CONST_COLUMN_NAME_CONTAINS_JR": "Der Spaltenname \"#{column}\" darf nicht mit \"JR\" beginnen.";
    "CONST_COLUMN_NAME_TOO_LONG": "Der Spaltenname \"#{column}\" ist zu lang.";
    "CONST_COLUMN_PROPERTIES": "Spalteneigenschaften";
    "CONST_COLUMNS": "Spalten";
    "CONST_COMMENTS": "Kommentare";
    "CONST_CONFIRM": "Bestätigen";
    "CONST_CONFIRM_DELETE_ELEMENTS": "Wollen Sie diese Elemente löschen?";
    "CONST_CONFIRM_DISCARD_SETTINGS": "Die aktuellen Einstellungen werden verworfen";
    "CONST_CONFIRM_RESET_JOBIMPORTS": "Möchten Sie die ausgewählten Importaufträge wirklich zurücksetzen?";
    "CONST_CONFIRM_RESET_TO_DEFAULTS": "Achtung: Die Einstellungen werden auf die Standardwerte zurückgesetzt.";
    "CONST_CONSOLE": "Konsole";
    "CONST_COPIED_TO_CLIPBOARD": "In Zwischenablage kopiert";
    "CONST_COPY_TO_DOCUMENT_HUB": "Datei in Document Hub kopieren";
    "CONST_COPYING_ROW_DATA": "Zeilendaten werden kopiert.";
    "CONST_COULD_NOT_COPY_DOCUMENT_TO_HUB": "Die Datei konnte nicht kopiert werden!";
    "CONST_COULD_NOT_LOAD_LANGUAGES": "Die Systemsprachen konnten nicht geladen werden!";
    "CONST_CREATE_ELLIPSE_MARK": "Ellipsenmarkierung ers.";
    "CONST_CREATE_FREEHAND_MARK": "Freihandmarkierung erstellen";
    "CONST_CREATE_LINE_MARK": "Zeilenmarkierung ers.";
    "CONST_CREATE_POLYGON_MARK": "Polygonmarkierung erstellen";
    "CONST_CREATE_POLYLINE_MARK": "Polylinemarkierung erstellen";
    "CONST_CREATE_RECTANGLE_MARK": "Rechteckmarkierung ers.";
    "CONST_CREATE_TEXT_MARK": "Textmarkierung erstellen";
    "CONST_CREATED_BY": "Erstellt von";
    "CONST_CURRENT_JOBROUTER": "Diesen JobRouter";
    "CONST_CURRENT_PAGE": "Aktuelle Seite";
    "CONST_DASHBOARD_DELETE_CONFIRMATION": "Dashboard löschen?\r\nGelöschtes Dashboard kann nicht wieder hergestellt werden.";
    "CONST_DASHBOARD_EMPTY_INSTRUCTION": "Fügen Sie über die Schaltfläche „#{newWidget}“ ein erstes Widget hinzu.";
    "CONST_DASHBOARD_EMPTY_MESSAGE": "Das Dashboard ist noch leer.";
    "CONST_DASHBOARD_SETTINGS": "Dashboard-Einstellungen";
    "CONST_DATA_TRANSFER": "Datenübertragung";
    "CONST_DATABASE": "Datenbank";
    "CONST_DATATABLES_ONLY_INFO": "_START_ bis _END_ von _TOTAL_ Einträgen";
    "CONST_DATATABLES_ONLY_INFO_EMPTY": "0 bis 0 von 0 Einträgen";
    "CONST_DATATABLES_ONLY_INFO_FILTERED": "(gefiltert von _MAX_ Einträgen)";
    "CONST_DATATABLES_ONLY_INFO_FILTERED_SHORT": "gefiltert von _MAX_ Einträgen";
    "CONST_DATATABLES_ONLY_LENGTH_MENU": "Zeilen pro Seite _MENU_";
    "CONST_DATE": "Datum";
    "CONST_DB_CONNECTION": "DB-Verbindung";
    "CONST_DB_SETTINGS": "Datenbankverbindung";
    "CONST_DECIMAL": "Dezimalzahl";
    "CONST_DECISION_STEP": "Entscheidung";
    "CONST_DELETE": "Löschen";
    "CONST_DELETE_COLUMN_PROMPT_FOR_CONFIRMATION": "Möchten Sie die Spalte wirklich löschen?";
    "CONST_DELETE_DASHBOARD": "Dashboard löschen";
    "CONST_DELETE_DASHBOARD_DESCRIPTION": "Beim Löschen dieses Dashboards gehen sämtliche Widgets und Einstellungen verloren. Das Dashboard kann nach dem Löschen nicht wieder hergestellt werden.";
    "CONST_DELETE_DOCUMENT": "Dokument löschen";
    "CONST_DELETE_ELEMENT_PROMPT_FOR_CONFIRMATION": "Möchten Sie das Element wirklich löschen?";
    "CONST_DELETE_MARK": "Markierung löschen";
    "CONST_DELETE_MOBILE_DIALOG": "Mobilen Dialog löschen";
    "CONST_DELETE_MOBILE_DIALOG_CONFIRM": "Möchten Sie wirklich den mobilen Dialog löschen? Gelöschte Dialogelemente können nicht wiederhergestellt werden.";
    "CONST_DELETE_PAGE_PROMPT_FOR_CONFIRMATION": "Möchten Sie die Seite wirklich löschen?";
    "CONST_DELETE_ROW_PROMPT_FOR_CONFIRMATION": "Möchten Sie die Zeile wirklich löschen?";
    "CONST_DELETE_SECTION_PROMPT_FOR_CONFIRMATION": "Möchten Sie den Abschnitt wirklich löschen?";
    "CONST_DELETE_TABLEFIELDS_WARNING": "Achtung: Die Felder werden in allen vorhergehenden sowie der aktuellen Version des Prozesses gelöscht. Sämtliche Vorgangsdaten, die bereits in den Feldern gespeichert sind, gehen unwiderruflich verloren!";
    "CONST_DELETE_TABLES_CONFIRM_TEXT": "Wollen Sie die Tabellen wirklich löschen? Gelöschte Daten können nicht wieder hergestellt werden.";
    "CONST_DELETING_COLUMN": "Spalte wird gelöscht.";
    "CONST_DELETING_ELEMENT": "Element wird gelöscht.";
    "CONST_DELETING_FILE": "Lösche Datei.";
    "CONST_DELETING_PAGE": "Seite wird gelöscht.";
    "CONST_DELETING_ROW": "Zeile wird gelöscht.";
    "CONST_DELETING_SECTION": "Abschnitt wird gelöscht.";
    "CONST_DEREGISTER": "Deregistrieren";
    "CONST_DIALOG": "Dialog";
    "CONST_DIALOGDESIGNER_ELEMENT_ARCHIVERESULTLIST_REQUIRED": "Bitte wählen Sie eine Ergebnisliste aus.";
    "CONST_DIALOGDESIGNER_ELEMENT_DWARCHIVE_REQUIRED": "Bitte wählen Sie ein DocuWare Archiv aus.";
    "CONST_DIALOGDESIGNER_ELEMENT_DWCONNECTIONNAME_REQUIRED": "Bitte wählen Sie eine DocuWare Verbindung aus.";
    "CONST_DIALOGDESIGNER_ELEMENT_DWWEBINSTANCE_REQUIRED": "Bitte wählen Sie eine DocuWare Web-Instanz aus.";
    "CONST_DIALOGDESIGNER_ELEMENT_DWWEBINTEGRATION_REQUIRED": "Bitte wählen Sie eine DocuWare Web-Integration aus.";
    "CONST_DIALOGDESIGNER_ELEMENT_JOBARCHIVE_REQUIRED": "Bitte wählen Sie ein Archiv aus.";
    "CONST_DIALOGDESIGNER_ELEMENT_JOBDOCVIEWER_REQUIRED": "Eine Anzeigeoption muss ausgewählt werden";
    "CONST_DIALOGDESIGNER_ELEMENT_JOBVIEWER_REQUIRED": "Bitte wählen Sie einen Viewer aus.";
    "CONST_DIALOGDESIGNER_ELEMENT_LABEL_MAX_LENGTH_EXCEEDED": "Die Bezeichnung darf maximal 50 Zeichen lang sein.";
    "CONST_DIALOGDESIGNER_ELEMENT_LABEL_REQUIRED": "Bitte geben Sie eine Bezeichnung ein.";
    "CONST_DIALOGDESIGNER_ELEMENT_LISTNAME_REQUIRED": "Bitte wählen Sie eine Liste aus.";
    "CONST_DIALOGDESIGNER_ELEMENT_NAME_FORBIDDEN": "Der Name ist unzulässig. Folgende Namen dürfen nicht verwendet werden: #{forbiddenNames}.";
    "CONST_DIALOGDESIGNER_ELEMENT_NAME_INVALID": "Der Name ist ungültig. Ein gültiger Name muss dem Format [a-zA-Z][a-zA-Z0-9\\-_\\:]* entsprechen.";
    "CONST_DIALOGDESIGNER_ELEMENT_NAME_INVALID_PREFIX": "Der Name darf nicht mit \"jr_\" beginnen.";
    "CONST_DIALOGDESIGNER_ELEMENT_NAME_MAX_LENGTH_EXCEEDED": "Der Name darf maximal 50 Zeichen lang sein.";
    "CONST_DIALOGDESIGNER_ELEMENT_NAME_REQUIRED": "Bitte geben Sie einen Namen ein.";
    "CONST_DIALOGDESIGNER_ELEMENT_RETURNCOLUMN_REQUIRED": "Bitte geben Sie eine Rückgabespalte ein.";
    "CONST_DIALOGDESIGNER_ELEMENT_SUBTABLEVIEW_REQUIRED": "Bitte wählen Sie eine Untertabellenansicht aus.";
    "CONST_DIALOGDESIGNER_ELEMENT_UNIQUE_NAME_REQUIRED": "Der Name wird bereits verwendet";
    "CONST_DIALOGDESIGNER_ELEMENT_UNIQUE_NAME_REQUIRED_STV_MATCH": "In diesem Dialog gibt es bereits ein SUBTABLE_VIEW-Element, welches eine gleichnamige Untertabellenansicht verwendet.";
    "CONST_DIALOGDESIGNER_ELEMENT_UNIQUE_NAME_REQUIRED_STV_NAME_ALREADY_USED": "In diesem Dialog gibt es bereits ein Element mit dem gleichen Namen wie diese Untertabellenansicht.";
    "CONST_DIALOGDESIGNER_ELEMENT_VIEWMODE_REQUIRED": "Bitte wählen Sie einen Anzeigemodus aus.";
    "CONST_DIRECT_SEARCH": "Direkte Suche";
    "CONST_DISCARD": "Verwerfen";
    "CONST_DISPLAY_DOCUMENT_ERROR": "Dokument kann nicht angezeigt werden.";
    "CONST_DISPLAY_NOT_POSSIBLE": "Keine Anzeige möglich";
    "CONST_DOCUMENT_COPIED_TO_HUB": "Die Datei wurde in den Document Hub kopiert.";
    "CONST_DOCUMENT_HUB_INSTRUCTION": "Strg + Ziehen/Klicken kopiert die ausgewählte Datei.";
    "CONST_DOCUMENT_LOCKED_BY_OTHER_USER": "Das Dokument wird gerade von #{user} bearbeitet und kann daher von Ihnen nicht bearbeitet werden.";
    "CONST_DOCUMENT_PREVIEW": "Vorschau des Dokuments";
    "CONST_DOCUMENTHUB_DELETE_INSTRUCTION": "Klicken Sie hier, um Dokumente aus dem DocumentHub zu löschen.";
    "CONST_DOCUMENTHUB_EMPTY": "Es sind noch keine Dokumente verfügbar.";
    "CONST_DOCUMENTHUB_EMPTY_MESSAGE": "Es sieht so aus, als ob keine Dateien in DocumentHub vorhanden wären. Oder ein Hund hat sie alle gefressen.";
    "CONST_DOCUMENTHUB_EMPTY_SEARCH_MESSAGE": "Für die Suchanfrage wurden keine Dokumente gefunden.";
    "CONST_DOCUMENTHUB_SESSION_EXPIRED": "Ihre Sitzung ist abgelaufen. Bitte laden Sie die Seite neu.";
    "CONST_DOCUWARE_CONFIRM_FIELDNAME_CONVERSION": "Die Konfigurationen von DocuWare Systemaktivitäten und Regeln, die diese Verbindung verwenden, werden unwiderruflich auf die Platform Services Struktur konvertiert. Falls DocuWare auf eine Version höher als 6.7 upgegradet wurde, ist diese automatische Konvertierung nicht mehr möglich.";
    "CONST_DOWNLOAD": "Download";
    "CONST_DRAG_DROP_FILES_HERE": "Dateien hier per Drag & Drop hineinziehen oder klicken, um eine Datei auszuwählen";
    "CONST_DUPLICATE_VALUE_EXISTS": "Der Wert #{value} existiert bereits.";
    "CONST_DW_CONNECTION_ERROR": "Es ist ein Fehler beim Verbinden zu DocuWare aufgetreten.";
    "CONST_DW_STORED_IN_CONNECTION": "In Konfiguration hinterlegt";
    "CONST_EDIT_INCIDENT_ESCALATION": "Vorgangseskalation bearbeiten";
    "CONST_EDIT_MARKS": "Markierungen bearbeiten";
    "CONST_EDIT_PROCESS_MESSAGE": "Prozessmeldung bearbeiten";
    "CONST_EDIT_STEPPRIORITY": "Schritt-Priorität bearbeiten";
    "CONST_EDIT_TRANSLATION": "Übersetzung bearbeiten";
    "CONST_ELEMENT_PROPERTIES": "Elementeigenschaften";
    "CONST_ELEMENT_TYPE": "Elementtyp";
    "CONST_ELEMENTS_RENAMED": "Folgende Elemente wurden beim Einfügen umbenannt";
    "CONST_EMPTY_TABLE": "Keine Daten vorhanden";
    "CONST_ENTRIES": "Einträge";
    "CONST_ENTRIES_DELETED": "Einträge wurden gelöscht!";
    "CONST_ENTRY": "Eintrag";
    "CONST_ENTRY_DELETED": "Eintrag wurde gelöscht";
    "CONST_ENTRY_TOO_LONG": "Eintrag zu lang!";
    "CONST_ENTRY_UPDATED_BUT_NOT_IN_PROFILE": "Der Eintrag wurde aktualisiert, wird jedoch aufgrund Ihrer Tabellenberechtigungen nicht angezeigt.";
    "CONST_ERROR": "Fehler";
    "CONST_ERROR_100": "Eintrag nicht gefunden";
    "CONST_ERROR_COMMENT_EMPTY": "Kommentar darf nicht leer sein";
    "CONST_ERROR_FILETYPE_NOT_ALLOWED": "Dateityp ist nicht erlaubt";
    "CONST_ERROR_LOADING_ANNOTATIONS": "Fehler beim Laden der Annotationen";
    "CONST_ERROR_MESSAGE": "Fehlermeldung";
    "CONST_ERROR_MESSAGES": "Fehlermeldungen";
    "CONST_ERROR_OCCURRED": "Es ist ein Fehler aufgetreten. Bitte wenden Sie sich an Ihren Administrator.";
    "CONST_ERROR_SAVING": "Fehler beim Speichern";
    "CONST_ESCALATION_DATE": "Eskalationsdatum";
    "CONST_ESCALATION_TIME": "Bearbeitungsfrist";
    "CONST_EXCEL_COLUMNS": "Excel-Spalten";
    "CONST_EXCEL_IMPORT": "Excel-Import";
    "CONST_EXCEL_IMPORT_CONFIRMATION": "Wollen Sie alle Daten der Tabelle löschen und durch die Daten aus der Excel-Datei ersetzen?";
    "CONST_EXECUTE": "Ausführen";
    "CONST_EXECUTE_ALWAYS": "Immer ausführen";
    "CONST_EXECUTE_CONDITION": "Abfrage definieren";
    "CONST_EXECUTE_FUNCTION": "Funktion abfragen";
    "CONST_EXECUTE_IF": "Bedingung definieren";
    "CONST_EXPORT": "Export";
    "CONST_EXPORT_REPORT_AS_ZIP": "Fehlerbericht als ZIP exportieren";
    "CONST_FIELD_DOES_NOT_EXIST": "Dieses Datenbankfeld existiert nicht.";
    "CONST_FIELD_NAME_ALREADY_EXISTS": "Dieses Datenbankfeld existiert bereits.";
    "CONST_FIELDNAME_FORBIDDEN": "Dieser Name für das Datenbankfeld ist nicht erlaubt.";
    "CONST_FILE": "Datei";
    "CONST_FILE_TOO_LARGE": "Die Datei \"#{filename}\" ist zu groß (>#{maxsize}MB)";
    "CONST_FILENAME": "Dateiname";
    "CONST_FILENAME_ALLOWED_CHARACTERS": "Ein Dateiname darf nur die folgenden Zeichen enthalten: A-Z,a-z,0-9,_";
    "CONST_FILL_COLOR": "Farbe füllen";
    "CONST_FILTER_ACTIVATE": "Filter aktivieren";
    "CONST_FILTER_CLEAR": "Filter aufheben";
    "CONST_FIT_TO_WIDTH": "An Breite anpassen";
    "CONST_FLYING_MAGNIFIER_TOOL": "Flying Magnifier Tool";
    "CONST_FOLLOWING_COLUMNS_ARE_MISSING": "Die folgenden Spalten fehlen: #{columns}";
    "CONST_FONT": "Schriftart";
    "CONST_FORBIDDEN_EXTENSION": "Die Dateiendung \"#{extension}\" ist nicht erlaubt.";
    "CONST_FORMAT": "Format";
    "CONST_FULL_HEIGHT": "Volle Höhe";
    "CONST_FULL_IMAGE": "Vollbild";
    "CONST_FULL_WIDTH": "Volle Breite";
    "CONST_GENERAL": "Allgemein";
    "CONST_HEADLINE": "Überschrift";
    "CONST_HIDDEN": "Verstecktes Feld";
    "CONST_HIDDEN_CONTAINER_NOT_FOUND": "Verstecktes HTML-Element für das Speichern der Felddefinition nicht gefunden";
    "CONST_IMPORT": "Import";
    "CONST_IMPORT_AND_REPLACE": "Importieren und ersetzen";
    "CONST_IMPORT_IT": "Importieren";
    "CONST_IMPORT_ONLY_EXCEL_FILES": "Es können nur Excel-Dateien im xlsx-Format importiert werden.";
    "CONST_IMPORT_PROCESS_FILE": "Import eines Prozesses aus einer Datei";
    "CONST_INACTIVE": "Inaktiv";
    "CONST_INBOX": "Eingang";
    "CONST_INCIDENT": "Vorgang";
    "CONST_INCIDENT_NUMBER": "Vorgangsnummer";
    "CONST_INCLUDE_ANNOTATIONS": "Annotationen drucken";
    "CONST_INDATE": "Eingangsdatum";
    "CONST_INDEX_DIALOG": "Indexdialog";
    "CONST_INDEXFIELDS": "Indexfelder";
    "CONST_INFO": "Info";
    "CONST_INPUT_VALIDATION": "Eingabevalidierung";
    "CONST_INSTANCE_CONFIGURATION_NOT_COMPARABLE": "Die Verbindungseinstellungen für die Instanz #{instanceId} können nicht mit der Konfiguration in der entsprechenden config.php verglichen werden. Sie verfügen wahrscheinlich nicht über die notwendigen Berechtigungen zum Lesen der Datei.";
    "CONST_INTEGER": "Ganzzahl";
    "CONST_INVALID_DATE_FORMAT": "Ungültiges Datumsformat";
    "CONST_INVALID_FILE_FORMAT": "Unzulässiges Dateiformat";
    "CONST_INVALID_FILESIZE": "Unzulässige Dateigröße";
    "CONST_INVALID_LOGIN": "Falscher Benutzername oder falsches Passwort.";
    "CONST_INVALID_PAGE_RANGE": "Sie haben eine ungültige Seiten-Auswahl angegeben";
    "CONST_JOB_FUNCTION": "Rolle";
    "CONST_JOBARCHIVE_RESET_FIELD_LISTS": "Bei der Auswahl eines anderen Archivs werden die Auswahllisten mit Indexfeldern zurückgesetzt.";
    "CONST_JOBARCHIVE_RESET_FILTERS": "Bei der Auswahl eines anderen Archivs werden die Filter zurückgesetzt.";
    "CONST_JOBARCHIVE_RESET_FILTERS_AND_RESULTLISTS": "Bei der Auswahl eines anderen Archivs werden Filter und Ergebnislisten zurückgesetzt.";
    "CONST_JOBARCHIVE_RESET_RESULTLISTS": "Bei der Auswahl eines anderen Archivs werden die aktuell ausgewählten Felder der Ergebnisliste zurückgesetzt.";
    "CONST_JOBARCHIVEVIEW": "Archivansichten";
    "CONST_JOBDATA_APPLY_COLUMN_DELETION": "Ihre Änderungen beinhalten das Löschen von mindestens einer Spalte. Durch das Speichern werden alle Daten in dieser Spalte unwiderruflich verloren gehen. Änderungen speichern?";
    "CONST_JOBDATA_APPLY_UNSAVED_CHANGES": "Ungespeicherte Änderungen in den Datensatz übernehmen?";
    "CONST_JOBDATA_DEREGISTER_TABLES": "Tabellen deregistrieren";
    "CONST_JOBDATA_DEREGISTER_WIZARD_INFO": "Die Konfigurationen folgender Tabellen werden gelöscht. JobData-Profile für die Tabellen werden aus JobRouter entfernt. Die Tabellen bleiben jedoch in der Datenbank bestehen.";
    "CONST_JOBDATA_DISCARD_AND_RELOAD": "Verwerfen und neu laden";
    "CONST_JOBDATA_DISCARD_AND_RELOAD_RECORD": "Eigene Änderungen verwerfen und Datensatz neu laden?";
    "CONST_JOBDATA_ERROR_DEREGISTERED": "Eine oder mehrere Tabellen konnten nicht deregistriert werden.";
    "CONST_JOBDATA_LAST_COLUMN_CAN_NOT_BE_HIDDEN": "Die Spalte konnte nicht ausgeblendet werden. Die Anzeige muss für mindestens eine Spalte aktiviert sein.";
    "CONST_JOBDATA_LIST_ENTRY_NOT_FOUND": "Der Wert '#{value}' ist in der Liste '#{list}' nicht verfügbar. Durch das Speichern wird diese Liste unwiderruflich geändert. Bitte wenden Sie sich an Ihren Administrator.";
    "CONST_JOBDATA_RECORD_HAS_CHANGED": "Dieser Datensatz wurde zwischenzeitlich modifiziert.";
    "CONST_JOBDATA_REGISTER_TABLE": "Tabelle registrieren";
    "CONST_JOBDATA_SUCCESSFULLY_DEREGISTERED": "Erfolgreich deregistriert";
    "CONST_JOBDATA_SUCCESSFULLY_REGISTERED": "Erfolgreich registriert: #{tablename}";
    "CONST_JOBFUNCTION": "Rolle";
    "CONST_JOBFUNCTIONUSERS": "Benutzer der Rolle";
    "CONST_JOBMIND_ITEMS": "JobMind Items";
    "CONST_JOBROUTER_REPORT": "Fehlerbericht";
    "CONST_JOBROUTER_SYSTEM_ANALYSIS": "Systemanalyse";
    "CONST_JOIN_STEP": "Parallelisierung Ende";
    "CONST_JRSETTINGS": "JRSETTINGS";
    "CONST_KEY": "Schlüssel";
    "CONST_LABEL": "Bezeichnung";
    "CONST_LANGUAGE_IMPORT_SUCCEEDED": "Sprache #{language} erfolgreich importiert.";
    "CONST_LINE": "Zeile";
    "CONST_LOAD_ANNOTATIONS": "Annotationen laden";
    "CONST_LOAD_DATA_FROM_CLIPBOARD_MSG": "Daten werden aus Zwischenablage geladen...";
    "CONST_LOADING_RECORDS": "Wird geladen...";
    "CONST_LOG": "Protokoll";
    "CONST_LOGFILES": "Log-Dateien";
    "CONST_MAGNIFIER_TOOL": "Lupe";
    "CONST_MANUAL": "Handbuch";
    "CONST_MATCH_ALL_RESTRICTIONS": "Alle Einschränkungen müssen erfüllt sein";
    "CONST_MAXIMUM_FILESIZE": "Maximale Dateigröße";
    "CONST_MESSAGE_ON_FAILING_VALIDATION": "Meldung bei fehlgeschlagener Validierung";
    "CONST_MESSAGES": "Nachrichten";
    "CONST_MINIMUM_FILESIZE": "Minimale Dateigröße";
    "CONST_MIRROR_HORIZONTAL": "Horizontal spiegeln";
    "CONST_MIRROR_VERTICAL": "Vertikal spiegeln";
    "CONST_MOD_JOBARCHIVE_ARCHIVES_DESC": "Bitte geben Sie die Basisdaten der Archivtabelle an";
    "CONST_MOD_JOBARCHIVE_ARCHIVEVIEWS_ARCHIVE_DESC": "Bitte wählen Sie ein Archiv für diese Archivansicht aus. Hinweis: Eine Änderung setzt die Filter- und Ergebniskonfiguration zurück";
    "CONST_MOD_JOBARCHIVE_ARCHIVEVIEWS_FILTER_DESC": "Konfigurieren Sie die Filter-Toolbar für eine Archivansicht.";
    "CONST_MOD_JOBARCHIVE_ARCHIVEVIEWS_SETTINGS_DESC": "Hier können Sie allgemeine Einstellungen für eine Archivansicht vornehmen";
    "CONST_MOD_JOBSTART_CHOOSE_START_TASK_SCHEDULER_TYPE": "Bitte wählen Sie, wie der Zeitauftrag gestartet werden soll!";
    "CONST_MOD_MINDOX_OVERWRITE_FILLED_FIELDS": "Bereits gefüllte Felder werden überschrieben.";
    "CONST_MODULETIMERS": "Moduleinstellungen";
    "CONST_MOUSE_TOOLS": "Mauswerkzeuge";
    "CONST_MOVE": "Verschieben";
    "CONST_MOVE_BACKWARD": "Ebene niedriger";
    "CONST_MOVE_FORWARD": "Ebene höher";
    "CONST_MOVE_TO_BACK": "In den Hintergrund";
    "CONST_MOVE_TO_FRONT": "In den Vordergrund";
    "CONST_MOVING_COLUMN": "Spalte wird verschoben.";
    "CONST_MOVING_COLUMN_LEFT": "Spalte wird nach links verschoben.";
    "CONST_MOVING_COLUMN_RIGHT": "Spalte wird nach rechts verschoben.";
    "CONST_MOVING_ELEMENT": "Element wird verschoben.";
    "CONST_MOVING_ELEMENT_DOWN": "Element wird nach unten verschoben.";
    "CONST_MOVING_ELEMENT_UP": "Element wird nach oben verschoben.";
    "CONST_MOVING_PAGE_DOWN": "Seite wird nach hinten verschoben.";
    "CONST_MOVING_PAGE_UP": "Seite wird nach vorne verschoben.";
    "CONST_MOVING_ROW": "Zeile wird verschoben.";
    "CONST_MOVING_ROW_DOWN": "Zeile wird nach unten verschoben.";
    "CONST_MOVING_ROW_UP": "Zeile wird nach oben verschoben.";
    "CONST_MOVING_SECTION": "Abschnitt wird verschoben.";
    "CONST_MOVING_SECTION_DOWN": "Abschnitt wird nach unten verschoben.";
    "CONST_MOVING_SECTION_UP": "Abschnitt wird nach oben verschoben.";
    "CONST_MULTILINE_TEXT_SELECTION": "Mehrzeilige Textauswahl";
    "CONST_MULTIPLE_TARGET_OBJECTS_MSG": "Mehrere Zielobjekte ausgewählt. Bitte genau ein Zielobjekt wählen!";
    "CONST_NAME": "Name";
    "CONST_NEW_DASHBOARD_INSTRUCTION": "Klick Sie hier, um ein neues Dashboard hinzuzufügen.";
    "CONST_NEW_ENTRY_CREATED_BUT_NOT_IN_PROFILE": "Der neue Eintrag wurde hinzugefügt, wird jedoch aufgrund Ihrer Tabellenberechtigungen nicht angezeigt.";
    "CONST_NEW_ESCALATION_DATE": "Neues Eskalationsdatum";
    "CONST_NEW_LEVEL_SELECT_CONFIRM": "Neue Elementebene ausgewählt. Bisherige Auswahl geht verloren. Fortfahren?";
    "CONST_NEW_NOTICE": "Neue Bemerkung";
    "CONST_NEW_PRIORITY": "Neue Priorität";
    "CONST_NEW_RECIPIENT": "Neuer Empfänger";
    "CONST_NEW_RESUBMISSION_DATE": "Neues Wiedervorlage-Datum";
    "CONST_NEW_RULE": "Neue Regel";
    "CONST_NEW_WIDGET": "Neues Widget";
    "CONST_NEXT": "Weiter";
    "CONST_NO": "Nein";
    "CONST_NO_ARCHIVE_SELECTED": "Kein Archiv zum Exportieren ausgewählt.";
    "CONST_NO_COLUMN_MAPPED": "Es muss mindestens eine Spalte verknüpft sein.";
    "CONST_NO_FILE_SELECTED": "Es wurde keine Datei ausgewählt.";
    "CONST_NO_FURTHER_STEPS": "Keine weiteren Schritte vorhanden.";
    "CONST_NO_ITEMS_SELECTED": "Keine Objekte zum Kopieren in die Zwischenablage ausgewählt!";
    "CONST_NO_MANUAL_AVAILABLE": "Es ist kein Handbuch verfügbar";
    "CONST_NO_SEARCHABLE_TEXT": "Dieses Dokument beinhaltet keinen durchsuchbaren Text";
    "CONST_NO_TARGET_OBJECT_MSG": "Kein Zielobjekt zum Einfügen aus Zwischenablage ausgewählt. Bitte zunächst Zielobjekt auswählen!";
    "CONST_NO_WIDGETS_AVAILABLE": "Keine Widgets vorhanden!";
    "CONST_NOTHING_FOUND": "Keine Ergebnisse gefunden";
    "CONST_NUMBER_SHORT_FORM": "Nr.";
    "CONST_OK": "OK";
    "CONST_OLD_ESCALATION_DATE": "Bisheriges Eskalationsdatum";
    "CONST_OLD_NOTICE": "Bisherige Bemerkung";
    "CONST_OLD_PRIORITY": "Bisherige Priorität";
    "CONST_OLD_RECIPIENT": "Bisheriger Empfänger";
    "CONST_OLD_RESUBMISSION_DATE": "Bisheriges Wiedervorlage-Datum";
    "CONST_ONLY_VALUES_FROM_TO_ARE_ALLOWED": "Es sind nur Werte von #{minValue} bis #{maxValue} zulässig.";
    "CONST_OPACITY": "Deckkraft";
    "CONST_OPAQUE": "Schwarz";
    "CONST_OPTIONS": "Optionen";
    "CONST_ORDERING": "Reihenfolge";
    "CONST_ORIENTATION": "Ausrichtung";
    "CONST_OVERRIDE": "Überschreiben";
    "CONST_PAGE_PROPERTIES": "Seiteneigenschaften";
    "CONST_PAGE_X_OF_Y": "Seite #{current} von #{total}";
    "CONST_PAGER_FIRST_PAGE": "Erste Seite";
    "CONST_PAGER_FROM": "von";
    "CONST_PAGER_LAST_PAGE": "Letzte Seite";
    "CONST_PAGER_NEXT_DOCUMENT": "Nächstes Dokument";
    "CONST_PAGER_NEXT_PAGE": "Nächste Seite";
    "CONST_PAGER_PAGE": "Seite";
    "CONST_PAGER_PREVIOUS_DOCUMENT": "Vorheriges Dokument";
    "CONST_PAGER_PREVIOUS_PAGE": "Vorherige Seite";
    "CONST_PAN_TOOL": "Verschieben";
    "CONST_PASTE_FROM_CLIPBOARD_PROMPT": "Bitte geben Sie die Bezeichnung des Eintrags in der Zwischenablage an, den Sie einfügen möchten:";
    "CONST_PERSON": "Person";
    "CONST_PHP_ERRORS": "PHP Fehler";
    "CONST_PHP_FUNCTION_CONTENT": "Hier der Funktionsinhalt";
    "CONST_PHP_FUNCTION_OTHER_METHODS": "Hier ggf. weitere (Hilfs-)Methoden";
    "CONST_PLEASE_CHECK": "Bitte prüfen";
    "CONST_PLEASE_COMPLETE_CONFIGURATION": "Bitte vervollständigen Sie die Konfiguration!";
    "CONST_PLEASE_FILL_REQUIRED_FIELDS": "Bitte füllen Sie alle Pflichtfelder aus.";
    "CONST_PLEASE_SELECT_A_REPORT_FILE": "Bitte wählen Sie eine Fehlerberichtsdatei aus!";
    "CONST_PLEASE_UPLOAD_A_FILE": "Bitte wählen Sie eine Datei aus, die hochgeladen werden soll";
    "CONST_POSITION": "Position";
    "CONST_PREVIOUS": "Zurück";
    "CONST_PRINT": "Drucken";
    "CONST_PRINT_PAGE_MARGIN": "Seitenrand";
    "CONST_PRINT_PAGES": "Drucken";
    "CONST_PRINTABLE_MULTIPLE_PAGES": "#{pageCount} Seiten";
    "CONST_PRINTABLE_SINGLE_PAGE": "1 Seite";
    "CONST_PRIORITY_HIGH": "hoch";
    "CONST_PRIORITY_MEDIUM": "mittel";
    "CONST_PRIORITY_STANDARD": "niedrig";
    "CONST_PROCESS": "Prozess";
    "CONST_PROCESS_AND_SYSTEM_FIELDS": "Prozess- und Systemfelder";
    "CONST_PROCESS_COMMENTS": "Prozesskommentare";
    "CONST_PROCESS_DETAILS": "Vorgangshistorie";
    "CONST_PROCESS_MESSAGES": "Prozessmeldungen";
    "CONST_PROCESS_TABLE": "Prozesstabelle";
    "CONST_PROCESS_TABLE_FIELDS": "Prozesstabellenfelder";
    "CONST_PROCESSING": "Laden ...";
    "CONST_PROMPT_FOR_CONFIRMATION": "Sicherheitsabfrage";
    "CONST_PROPERTIES": "Eigenschaften";
    "CONST_PUBLIC_START_STEP": "Öffentlicher Start";
    "CONST_RANGE": "Bereich";
    "CONST_REENTER_PASSWORD": "Bitte geben Sie Ihr Passwort erneut ein.";
    "CONST_REFRESH": "Aktualisieren";
    "CONST_REGULAR_EXPRESSION": "Regulärer Ausdruck";
    "CONST_RELEASE_STEP": "Schritt freigeben";
    "CONST_REPORT_ANALYSIS": "Fehlerbericht analysieren";
    "CONST_REQUIRED": "Pflichtfeld";
    "CONST_RESEND_STEP": "Schritt erneut senden";
    "CONST_RESERVE_STEP": "Schritt reservieren";
    "CONST_RESET": "Zurücksetzen";
    "CONST_RESET_DEFAULTS_WARNING": "Die Standardeinstellung wird wieder hergestellt.";
    "CONST_RESTRICTIONS": "Einschränkungen";
    "CONST_RESULT": "Ergebnis";
    "CONST_RESULTLIST": "Ergebnisliste";
    "CONST_REVISION_BROWSER": "Versionen";
    "CONST_ROTATE": "Drehen";
    "CONST_ROTATE_CLOCKWISE": "Im Uhrzeigersinn drehen";
    "CONST_ROTATE_COUNTER_CLOCKWISE": "Gegen den Uhrzeigersinn";
    "CONST_ROTATE_DOCUMENT": "Dokument Drehen";
    "CONST_ROTATE_PAGE": "Seite Drehen";
    "CONST_ROTATE_PAGE_90_DEGREES_CLOCKWISE": "Seite im Uhrzeigersinn um 90° drehen";
    "CONST_ROW_PROPERTIES": "Zeileneigenschaften";
    "CONST_RUN_MARKS": "Markierungen speichern";
    "CONST_SA_ELEMENTS": "Systemaktivitäten";
    "CONST_SAVE": "Sichern";
    "CONST_SAVE_ANNOTATIONS": "Annotationen speichern";
    "CONST_SAVE_CHANGES": "Änderungen speichern";
    "CONST_SAVE_STEP": "Schritt sichern";
    "CONST_SEARCH": "Suchen";
    "CONST_SEARCH_IN_DOCUMENTHUB": "DocumentHub durchsuchen";
    "CONST_SECTION_PROPERTIES": "Abschnittseigenschaften";
    "CONST_SELECT_TEXT": "Text auswählen";
    "CONST_SELECT_VIEWER": "Viewer auswählen";
    "CONST_SELECTBOX_HEADING": "Suche";
    "CONST_SEND": "Senden";
    "CONST_SERVERINFO": "Server-Info";
    "CONST_SESSION_EXPIRED": "Sitzung ist abgelaufen";
    "CONST_SETTINGS": "Einstellungen";
    "CONST_SHOWING_ENTRIES_FROM_TO": "#{from} bis #{to} von #{total} Einträgen";
    "CONST_SPLIT_STEP": "Parallelisierung Start";
    "CONST_SQL_SETTINGS": "SQL-Einstellungen";
    "CONST_SQL_STRING": "SQL-Abfrage";
    "CONST_STAMP": "Stempel";
    "CONST_STANDARD_STEP": "Benutzeraktivität";
    "CONST_START_STEP": "Startschritt";
    "CONST_STATUS_BACK": "Zurück";
    "CONST_STATUS_ERROR": "Fehler";
    "CONST_STEP": "Schritt";
    "CONST_STEP_NUMBER": "Schrittnummer";
    "CONST_STEP_PROPERTIES": "Schritteigenschaften";
    "CONST_STEP_RELEASED": "Der Schritt wurde freigegeben";
    "CONST_STEP_RESERVED": "Der Schritt wurde reserviert";
    "CONST_STEP_RESERVERATION_DISABLED": "Das Reservieren von diesem Schritt ist nicht erlaubt.";
    "CONST_STEP_SEND_ERROR": "Das Senden des Schrittes ist fehlgeschlagen.";
    "CONST_STORAGE": "Speicher";
    "CONST_STORING_TO_CLIPBOARD_MSG": "Speicherung in Zwischenablage...";
    "CONST_SUBTABLE": "Untertabelle";
    "CONST_SUBTABLE_TEMPLATES": "Untertabellenvorlagen";
    "CONST_SUBTABLE_VIEW": "Untertabellenansicht";
    "CONST_SUBTABLE_VIEW_MAX_ROWS": "Maximale Anzahl von Zeilen";
    "CONST_SUBTABLE_VIEW_MIN_ROWS": "Minimale Anzahl von Zeilen";
    "CONST_SUBTABLE_VIEWS": "Untertabellenansichten";
    "CONST_SUBTABLES": "Untertabellen";
    "CONST_SUCCESSFULLY_IMPORTED": "Erfolgreich importiert";
    "CONST_SUMMARY": "Betreff";
    "CONST_SWITCH_TO_NEXT_DOCUMENT_NOTICE": "Klicken Sie erneut, um das nächste unterstützte Dokument zu öffnen.";
    "CONST_SWITCH_TO_PREVIOUS_DOCUMENT_NOTICE": "Klicken Sie erneut, um das vorherige unterstützte Dokument zu öffnen.";
    "CONST_SYNCHRONIZE": "Synchronisieren";
    "CONST_SYSTEM_ACTIVITY": "Systemaktivität";
    "CONST_SYSTEM_ANALYSIS_EXPORT_DESCRIPTION": "Eine aktuelle Systemanalyse wird erstellt und exportiert. Bitte beachten Sie, dass der Export sensible Daten enthalten kann und daher nur an vertrauenswürdige Personen weitergegeben werden sollte.";
    "CONST_SYSTEM_ANALYSIS_EXPORT_TITLE": "Systemanalyse exportieren";
    "CONST_SYSTEM_ANALYSIS_IMPORT_DESCRIPTION": "Bitte laden Sie eine Datei hoch, um die Analyseergebnisse anzuzeigen.";
    "CONST_SYSTEM_ANALYSIS_IMPORT_TITLE": "Systemanalyse importieren";
    "CONST_TABLE": "Tabelle";
    "CONST_TABLE_COLUMNS": "Tabellenspalten";
    "CONST_TABLENAME_CONTAINS_JR": "Tabellenname darf nicht mit \"JR\" beginnen.";
    "CONST_TARGET_COLUMN": "Zielspalte";
    "CONST_TARGET_PAGE": "Zielseite";
    "CONST_TARGET_ROW": "Zielzeile";
    "CONST_TARGET_SECTION": "Zielabschnitt";
    "CONST_TEXT": "Text";
    "CONST_TEXT_LONG": "Langer Text";
    "CONST_THICKNESS": "Dicke";
    "CONST_THUMBNAILS": "Thumbnails";
    "CONST_TITLE_STARTCATEGORY_LONG": "Start";
    "CONST_TOGGLE_ANNOTATION_VISIBILITY": "Annotationen ein-/ausblenden";
    "CONST_TOO_MANY_FILES": "Die maximale Anzahl der hochzuladenden Dateien wurde überschritten";
    "CONST_TRANSFER_ELEMENTS_FROM_DESKTOP_DIALOG": "Dialogelemente übernehmen";
    "CONST_TRANSFERING_DATA": "Daten werden übertragen.";
    "CONST_TRANSLUCENT": "Transparent";
    "CONST_TRIANGLE": "Dreieck";
    "CONST_UNIQUE": "Eindeutig";
    "CONST_UNMAPPABLE_COLUMNS": "Einige Spalten können nicht verknüpft werden.";
    "CONST_UPDATING_COLUMN": "Spalte wird aktualisiert.";
    "CONST_UPDATING_ELEMENT": "Element wird aktualisiert.";
    "CONST_UPDATING_PAGE": "Seite wird aktualisiert.";
    "CONST_UPDATING_ROW": "Zeile wird aktualisiert.";
    "CONST_UPDATING_SECTION": "Abschnitt wird aktualisiert.";
    "CONST_UPLOAD_FAILED": "Upload fehlgeschlagen!";
    "CONST_UPLOAD_FILE": "Datei hochladen";
    "CONST_UPLOAD_INSTRUCTION": "Klicken Sie hier, um eine Datei hochzuladen.";
    "CONST_UPLOADED_FILE": "Hochgeladene Datei";
    "CONST_UPLOADED_FILES": "Hochgeladene Dateien";
    "CONST_UPLOADING_FILE": "Lade Datei hoch.";
    "CONST_USE_PDF_BROWSER_PLUGIN": "PDF-Browser-Plug-In nutzen";
    "CONST_VALIDATION": "Validierung";
    "CONST_VALIDATION_DATE_FORMAT": "Bitte geben Sie ein gültiges Datum im Format {1} ein.";
    "CONST_VALIDATION_DECIMAL_FORMAT": "Bitte geben Sie eine Dezimalzahl im Format {3} ein.";
    "CONST_VALIDATION_DECIMAL_LENGTH": "Bitte geben Sie höchstens 16 Zeichen ein.";
    "CONST_VALIDATION_FAILED": "Validierung fehlgeschlagen.";
    "CONST_VALIDATION_MIN_LENGTH": "Mindestlänge der Eingabe";
    "CONST_VALIDATION_MSG_ALPHA": "Bitte geben Sie ausschließlich Buchstaben (a-z) ein.";
    "CONST_VALIDATION_MSG_ALPHANUM": "Bitte geben Sie ausschließlich Buchstaben (a-z) oder Ziffern (0-9) ein.";
    "CONST_VALIDATION_MSG_ALPHANUMERICS_REQUIRED": "Bitte geben Sie mindestens einen Buchstaben ein.";
    "CONST_VALIDATION_MSG_AUTOCOMPLETE_VALID": "Eingabe muss gültig sein.";
    "CONST_VALIDATION_MSG_DATE": "Bitte geben Sie ein gültiges Datum ein.";
    "CONST_VALIDATION_MSG_DATE_FORMAT": "Bitte geben Sie ein gültiges Datum im Format #{format} ein.";
    "CONST_VALIDATION_MSG_DECIMAL": "Bitte geben Sie eine gültige Dezimalzahl ein.";
    "CONST_VALIDATION_MSG_DECIMAL_FORMAT": "Bitte geben Sie eine Dezimalzahl im Format #{format} ein.";
    "CONST_VALIDATION_MSG_DIGITS": "Bitte geben Sie ausschließlich Ziffern ein.";
    "CONST_VALIDATION_MSG_DIGITS_REQUIRED": "Bitte geben Sie mindestens eine Ziffer ein.";
    "CONST_VALIDATION_MSG_EMAIL": "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
    "CONST_VALIDATION_MSG_FORBIDDEN_CHARS": "Die Eingabe darf folgende Zeichen nicht enthalten: #{forbiddenChars}";
    "CONST_VALIDATION_MSG_INTERNAL_NAME": "Die Eingabe muss mit einem Buchstaben beginnen und darf lediglich Buchstaben, Zahlen und Unterstriche enthalten.";
    "CONST_VALIDATION_MSG_MAX_DATE": "Bitte geben Sie ein Datum kleiner/gleich #{maxDate} ein.";
    "CONST_VALIDATION_MSG_MAX_LENGTH": "Bitte geben Sie höchstens #{maxLength} Zeichen ein.";
    "CONST_VALIDATION_MSG_MAX_VALUE": "Bitte geben Sie einen Wert kleiner/gleich #{maxValue} ein.";
    "CONST_VALIDATION_MSG_MIN_DATE": "Bitte geben Sie ein Datum größer/gleich #{minDate} ein.";
    "CONST_VALIDATION_MSG_MIN_LENGTH": "Bitte geben Sie mindestens #{minLength} Zeichen ein.";
    "CONST_VALIDATION_MSG_MIN_VALUE": "Bitte geben Sie einen Wert größer/gleich #{minValue} ein.";
    "CONST_VALIDATION_MSG_NUMBER": "Bitte geben Sie eine gültige Zahl ein.";
    "CONST_VALIDATION_MSG_NUMERIC": "Bitte geben Sie einen gültigen numerischen Wert ein.";
    "CONST_VALIDATION_MSG_ONE_REQUIRED": "Bitte wählen Sie eine der Optionen.";
    "CONST_VALIDATION_MSG_REQUIRED": "In diesem Feld ist eine Eingabe erforderlich.";
    "CONST_VALIDATION_MSG_RETYPE_REQUIRED": "Bitte wiederholen Sie die Eingabe.";
    "CONST_VALIDATION_MSG_SELECTBOX": "Bitte überprüfen Sie die Eingabe.";
    "CONST_VALIDATION_MSG_SELECTION": "Bitte treffen Sie eine Auswahl.";
    "CONST_VALIDATION_MSG_SPECIAL_CHARS_REQUIRED": "Bitte geben Sie mindestens ein Sonderzeichen ein.";
    "CONST_VALIDATION_MSG_TIME": "Bitte geben Sie eine gültige Uhrzeit ein.";
    "CONST_VALIDATION_MSG_UPPERLOWER_REQUIRED": "Bitte verwenden Sie Klein- und Großbuchstaben.";
    "CONST_VALIDATION_MSG_URL": "Bitte geben Sie eine gültige URL ein.";
    "CONST_VALUE": "Wert";
    "CONST_VALUE_ALREADY_EXISTS": "Dieser Wert existiert bereits";
    "CONST_VALUE_ALREADY_SELECTED": "Dieser Wert wurde bereits ausgewählt";
    "CONST_VERSION": "Version";
    "CONST_VIEWER_DOWNLOAD_CLIPPED_FILE": "Datei herunterladen";
    "CONST_VIEWER_DOWNLOAD_NOT_ALLOWED": "Die Datei „#{fileName}“ kann nicht angezeigt werden. Der Dateityp wird nicht unterstützt. Das Herunterladen ist aufgrund von fehlenden Berechtigungen nicht möglich.";
    "CONST_VIEWER_ROTATE_TO_INTERACT_WITH_ANNOTATION": "Drehen Sie das Dokument um #{rotateBy}°, um Änderungen am Inhalt der Annotation durchführen zu können.";
    "CONST_VIEWER_UNSUPPORTED_FILE_EXTENSION": "Die von Ihnen angeforderte Datei kann nicht im Viewer angezeigt werden. Der Dateityp wird nicht unterstützt. Klicken Sie bitte auf die Schaltfläche, um die Datei herunterzuladen.";
    "CONST_VIRTUAL_HOST_INCORRECT": "Der virtuelle Host ist nicht korrekt.";
    "CONST_WARN_IGNORE_SSL_ERRORS": "Beim Aktivieren dieser Einstellung wird die Vertrauenswürdigkeit der Verbindung nicht überprüft. Sind Sie sich sicher?";
    "CONST_WIDGET_ALREADY_PRESENT": "Widget existiert bereits";
    "CONST_WITH_ANNOTATIONS": "Mit Annotationen";
    "CONST_WITHOUT_ANNOTATIONS": "Ohne Annotationen";
    "CONST_WRONG_EXTENSION_WITH_ALLOWED_EXTENSIONS": "Falscher Dateityp. Es sind nur folgende Dateitypen erlaubt:";
    "CONST_YES": "Ja";
    "CONST_ZIP_FILE": "ZIP-Datei";
    "CONST_ZOOM_IN": "Vergrößern";
    "CONST_ZOOM_OUT": "Verkleinern";
    "CONST_ZOOM_RECTANGLE_TOOL": "Auswahl zoomen";
    "CONST_ZOOM_TO_FILL": "An Fensterbreite anpassen";
    "CONST_ZOOM_TO_FIT": "An Fenstergröße anpassen";
};

declare const $JRSETTINGS: {
    administrator: string;
    administratorEmail: string;
    workdays: number;
    language: string;
    dateFormat: string;
    decimalSeparator: string;
    applicationTitle: null;
    thousandsSeparator: string;
    maxUploadSize: number;
    forbiddenUploadExtensions: string[];
};

declare const $JRUSER: {
    userName: string;
    email: string;
    title: string;
    lastName: string;
    preName: string;
    department: string;
    phone: string;
    fax: string;
    supervisor: string;
    language: string;
    userDefined1: string;
    userDefined2: string;
    userDefined3: string;
    userDefined4: string;
    userDefined5: string;
    dateFormat: number;
    dateFormatString: string;
    decimalSeparator: string;
    thousandsSeparator: string;
};

declare type JR_STEP_ACTION = "send" | "save" | "assign" | "request" | "back" | "release" | "jumpTo" | "abort" | "resubmission" | "finish";
declare type JR_EXECUTE_MODE = "send" | "finish" | "save" | "abort" | "request" | "assign" | "resubmission" | "answer" | "back" | "reserve";

declare interface JRSubtableActionObject {
    addRowActionCanceled:         boolean;
    additionalParams:             object;
    afterAddRowCallbacks:         unknown[];
    afterAddRowEventCanceled:     boolean;
    afterRemoveRowCallbacks:      unknown[];
    afterRemoveRowEventCanceled:  boolean;
    ajaxRequestInProgress:        boolean;
    ajaxRequestQueue:             unknown[];
    beforeAddRowCallbacks:        unknown[];
    beforeAddRowEventCanceled:    boolean;
    beforeRemoveRowCallbacks:     unknown[];
    beforeRemoveRowEventCanceled: boolean;
    directOpen:                   boolean;
    elementObservers:             object;
    hiddenColumns:                object;
    ignoreMaxRows:                boolean;
    ignoreMinRows:                boolean;
    maxRows:                      null;
    minRows:                      null;
    process:                      string;
    processId:                    string;
    processName:                  string;
    publicStart:                  boolean;
    removeRowActionCanceled:      boolean;
    step:                         string;
    subtable:                     string;
    subtableElementName:          string;
    subtableName:                 string;
    version:                      string;
    visibleColumns:               object;
    workflowId:                   string;
}

/**
 * Gibt an ob noch xml request am laufen sind.
 * Wird nur mit der {checkRequestsInProgress} Funktion aktualisiert.
 */
declare const jr_xml_request_in_progress: boolean;

/**
 * Prüft ob xml request am laufen sind.
 * Setzt die variable {jr_xml_request_in_progress} auf true wenn noch request am laufen sind.
 *
 */
declare function checkRequestsInProgress(): void;

/**
 * Zeigt die Vorgangshistorie eines Prozessschrits.
 *
 * @param {string} url The tracking url with the process id and jr key
 * @example index.php?cmd=Tracking_ShowTracking&jrprocessid=e7047e2b268662c8f7210eef1381eb7b0000087678&jrkey=4f4fad8e24e7045419227f3f92f1eeb0&backlink=admintools_dashboard_Runningincidents
 */
declare function showIncidentTrackingLayer(url: string);

//#region Globale Funktionen

/**
 * Diese Funktion gibt die Instanz-ID mit dem Datentyp Number zurück.
 * In einer nicht instanziierten JobRouter-Umgebung erhalten Sie immer den Wert 0.
 *
 * @returns {number}
 */
declare function jr_get_instance_id(): number;

//#endregion

//#region Dialogaktionen

/**
 * Mit dieser Funktion können PHP-Funktionen des Typs Dialogfunktion auf dem Server ausgeführt und die Rückgaben anschließend clientseitig ausgewertet werden. Während der Ausführung im Rahmen eines AJAX-Requests werden alle Dialogaktionen deaktiviert.
 *
 * @param {string} functionId Funktionsname der Dialogfunktion
 * @param {object} [userParameters] Ein Objekt mit benutzerdefinierten Parametern, auf die in der Dialogfunktion mit $this->getParameter() zugegriffen werden kann.
 * @param {(returnObject: object) => void} [successCallback] Angabe einer Callback-Funktion, die ausgeführt werden soll, sofern die Dialogfunktion und der AJAX-Request erfolgreich ausgeführt wurden.
 * @param {(returnObject: object) => void} [errorCallback] Angabe einer Callback-Funktion, die im Fehlerfall ausgeführt werden soll, sofern ein Fehler während der Ausführung der Dialogfunktion oder des AJAX-Requests aufgetreten ist.
 */
declare function jr_execute_dialog_function(functionId: string, userParameters?: object, successCallback?: (returnObject: object) => void, errorCallback?: (returnObject: object) => void): void;

/**
 * Mit dieser Funktion können Sie die Dialogaktionen (wie z.B. „Senden“ oder „Rückfrage““) ausführen.
 *
 * @param {JR_EXECUTE_MODE} mode
 */
declare function jr_execute(mode: JR_EXECUTE_MODE): void;

/**
 * Mit dieser Funktion kann ein Dialog ausgedruckt werden. Dabei öffnet sich ein neues Fenster, in dem der Browser-eigene Drucken-Dialog angezeigt wird.
 *
 * @param {Function} [callback] Angabe einer Callback-Funktion, die nach Erfolg ausgeführt werden soll.
 */
declare function jr_print(callback?: () => void): void;

/**
 * Mit dieser Funktion kann der Titel des Dialog-Browserfensters geändert werden.
 *
 * @param {string} title Neuer Titel des Browserfensters
 */
declare function jr_set_window_title(title: string): void;

//#endregion

//#region Benachrichtigungen

/**
 * Diese Funktion gibt eine Erfolgsmeldung aus.
 *
 * @param {string} message Inhalt der Benachrichtigung
 * @param {number} [timeoutInSeconds] Zeitdauer, bis die Benachrichtigung ausgeblendet wird (optional)
 */
declare function jr_notify_success(message: string, timeoutInSeconds?: number): void;

/**
 * DDiese Funktion gibt eine informative Meldung aus.
 *
 * @param {string} message Inhalt der Benachrichtigung
 * @param {number} [timeoutInSeconds] Zeitdauer, bis die Benachrichtigung ausgeblendet wird (optional)
 */
declare function jr_notify_info(message: string, timeoutInSeconds?: number): void;

/**
 * Diese Funktion gibt eine Warnmeldung aus.
 *
 * @param {string} message Inhalt der Benachrichtigung
 * @param {number} [timeoutInSeconds] Zeitdauer, bis die Benachrichtigung ausgeblendet wird (optional)
 */
declare function jr_notify_warn(message: string, timeoutInSeconds?: number): void;

/**
 * Diese Funktion gibt eine Fehlermeldung aus.
 *
 * @param {string} message Inhalt der Benachrichtigung
 * * @param {number} [timeoutInSeconds] Zeitdauer, bis die Benachrichtigung ausgeblendet wird (optional)
 */
declare function jr_notify_error(message: string, timeoutInSeconds?: number): void;

//#endregion

//#region Prozessmeldungen

/**
 * Die Funktion bietet Ihnen die Möglichkeit eine Prozessmeldung in einem Popup auszugeben.Dabei können Sie Parameter übergeben, welche in die Meldung eingefügt werden.
 *
 * @param {string} messageName Name der Prozessmeldung
 * @param {object} [data] Objekt, welches Parameter enthält, die im Text ersetzt werden sollen
 * @example Beispiel für das Füllen der Platzhalter #{var1} und #{var2} in einer Prozessmeldung:
 * {var1:"Wert1", var2:"Wert2"} oder {var1:"Wert1", var2:jr_get_value("limit")}
 */
declare function jr_message(messageName: string, data?: object): void;

/**
 * Die Funktion bietet Ihnen die Möglichkeit eine Prozessmeldung abzurufen. Dabei können Sie Parameter übergeben, welche in die Meldung eingefügt werden.
 *
 * @param {string} messageName Name der Prozessmeldung
 * @param {object} [data] Objekt, welches Parameter enthält, die im Text ersetzt werden sollen
 * @example Beispiel für das Füllen der Platzhalter #{var1} und #{var2} in einer Prozessmeldung:
 * {var1:"Wert1", var2:"Wert2"} oder {var1:"Wert1", var2:jr_get_value("limit")}
 * @returns {string} Diese Funktion liefert die Meldung als Text.
 */
declare function jr_get_message(messageName: string, data?: object): string;

//#endregion

//#region Datumsfunktionen

/**
 * Diese Funktion dient zum Berechnen eines neuen Datums. Dazu kann eine beliebige Anzahl von Sekunden, Minuten, Stunden oder Tagen von einem beliebigen Datum abgezogen oder hinzugefügt werden.
 *
 * @param {Date} dateValue Datumsobjekt
 * @param {number} value Anzahl der zu addierenden Zeiteinheiten
 * @param {string} timeUnit Zeiteinheit, mit der gerechnet werden soll s: Sekunden m: Minuten h: Stunden d: Tage
 * @returns {Date} Als Ergebnis liefert diese Funktion ein Datumsobjekt vom Typ Date zurück.
 */
declare function jr_date_add(dateValue: Date, value: number, timeUnit: string): Date;

/**
 * Diese Funktion dient zum Berechnen der Differenz zwischen zwei Datumswerten.
 *
 * @param {Date} date1 Datumsobjekt 1
 * @param {Date} date2 Datumsobjekt 2
 * @param {string} timeUnit Zeiteinheit, in der das Ergebnis ausgegeben wird s: Sekunden m: Minuten h: Stunden d: Tage
 * @returns {number} Als Ergebnis liefert diese Funktion eine Anzahl von Zeiteinheiten als Zahl zurück.
 */
declare function jr_date_diff(date1: Date, date2: Date, timeUnit: string): number;

//#endregion

//#region Kontrolle des Sendens

/**
 * Die Funktion erlaubt das Senden des Schrittes. Standardmäßig ist das Senden für einen Schritt immer erlaubt.
 *
 */
declare function jr_enable_send(): void;

/**
 * Durch Ausführen dieser Funktion wird das Senden des Schrittes verhindert. Standardmäßig ist das Senden für einen Schritt immer erlaubt.
 *
 */
declare function jr_disable_send(): void;

/**
 * Die Funktion erlaubt oder verbietet das Senden des Schrittes abhängig vom übergebenen Parameterwert. Standardmäßig ist das Senden für einen Schritt immer erlaubt.
 *
 * @param {boolean} [value] true: Senden wird erlaubt | false: Senden wird verhindert
 */
declare function jr_allow_send(value?: boolean);

//#endregion

//#region Überwachung von Änderungen

/**
 * Diese Funktion prüft, ob die Überwachung von Dialogänderungen aktiv ist.
 *
 * @returns {boolean} Gibt true zurück, wenn die Überwachung aktiv ist, andernfalls false.
 */
declare function jr_is_dialog_changecheck_enabled(): boolean;

/**
 * Diese Funktion aktiviert die Überwachung von Dialogänderungen, auch wenn diese zuvor über die Schrittkonfiguration deaktiviert wurde.
 *
 */
declare function jr_enable_dialog_changecheck(): void;

/**
 * Diese Funktion deaktiviert die Überwachung von Dialogänderungen, auch wenn diese zuvor über die Schrittkonfiguration aktiviert wurde.
 *
 */
declare function jr_disable_dialog_changecheck(): void;

/**
 * Diese Funktion prüft, ob Änderungen im aktuellen Dialog durchgeführt wurden.
 *
 * @returns {boolean} Gibt true zurück, wenn es Änderungen gab, andernfalls false.
 */
declare function jr_has_dialog_changed(): boolean;

/**
 * Diese Funktion markiert den Dialog als unverändert, auch dann, wenn bereits Änderungen durchgeführt wurden. Dies ist insbesondere dann hilfreich, wenn direkt nach dem Laden automatisch Änderungen am Dialog erfolgen (z.B. durch einen SQL-Refresh).
 *
 */
declare function jr_set_dialog_unchanged(): void;

//#endregion

//#region Funktionen für Dialogelemente

/**
 * Mit dieser Funktion kann überprüft werden, ob ein Eingabefeld angezeigt wird oder versteckt ist.
 *
 * @param {string} element Name des Dialogelements
 * @returns {boolean} Als Rückgabe liefert diese Funktion einen booleschen Wert (true oder false).
 */
declare function jr_is_visible(element: string): boolean;

/**
 * Mit dieser Funktion lässt sich ermitteln, ob ein Dialogelement momentan als Pflichtfeld markiert ist.
 *
 * @param {string} element Name des Dialogelements
 * @returns {boolean} Als Rückgabe liefert diese Funktion einen booleschen Wert (true oder false).
 */
declare function jr_is_required(element: string): boolean;

/**
 * Mit dieser Funktion kann überprüft werden, ob ein Element deaktiviert ist.
 *
 * @param {string} element Name des Dialogelements
 * @returns {boolean} Als Rückgabe liefert diese Funktion einen booleschen Wert (true oder false).
 */
declare function jr_is_disabled(element: string): boolean;

/**
 * Mit dieser Funktion kann die aktuelle Bezeichnung eines Dialogelementes ermittelt werden.
 * Handelt es sich bei dem Element um einen Radiobutton, muss zusätzlich der Parameter radioValue mit dem Wert (Vorbelegung) des jeweiligen Radiobuttons gefüllt werden (z.B. „1“).
 *
 * @param {string} element Name des Dialogelements
 * @param {string} [radioValue] Vorbelegung bei Radiobuttons
 * @returns {string}
 */
declare function jr_get_label(element: string, radioValue?: string): string;

/**
 * Mit dieser Funktion kann die zweite Bezeichnung eines Dialogelementes, welche hinter dem Eingabeelement steht, ermittelt werden.
 * Handelt es sich bei dem Element um einen Radiobutton, muss zusätzlich der Parameter radioValue mit dem Wert (Vorbelegung) des jeweiligen Radiobuttons gefüllt werden (z.B. „1“).
 *
 * @param {string} element Name des Dialogelements
 * @param {string} [radioValue] Vorbelegung bei Radiobuttons
 * @returns {string}
 */
declare function jr_get_label2(element: string, radioValue?: string): string;

/**
 * Mit dieser Funktion kann überprüft werden, ob ein Element schreibgeschützt ist.
 *
 * @param {string} element Name des Dialogelements
 * @returns {boolean} Als Rückgabe liefert diese Funktion einen booleschen Wert (true oder false).
 */
declare function jr_is_readonly(element: string): boolean;

/**
 * Diese Funktion gibt die Bezeichnung eines Schrittes aus der Titelleiste zurück.
 *
 * @returns {string}
 */
declare function jr_get_steplabel(): string;

/**
 * Diese Funktion öffnet einen geschlossenen/eingeklappten Dialogabschnitt.
 *
 * @param {string} section Name des Abschnittes
 */
declare function jr_open_section(section: string): void;

/**
 * Diese Funktion schließt einen geöffneten/ausgeklappten Dialogabschnitt.
 *
 * @param {string} section Name des Abschnittes
 */
declare function jr_close_section(section: string): void;

/**
 * Diese Funktion zeigt ein verstecktes Dialogelement an.
 *
 * @param {(string|string[])} element Name des Dialogelements
 */
declare function jr_show(element: string | string[]): void;

/**
 * Diese Funktion versteckt ein Dialogelement. Für versteckte Dialogelemente wird automatisch keine Pflichtfeldprüfung beim Senden durchgeführt.
 *
 * @param {(string | string[])} element Name des Dialogelements
 */
declare function jr_hide(element: string | string[]): void;

/**
 * Diese Funktion zeigt eine versteckte Seite eines Dialogs wieder an.
 *
 * @param {(string | string[])} page Name der Dialogseite bzw ein Array mit den Namen der Seiten, welche eingeblendet werden sollen.
 */
declare function jr_show_page(page: string | string[]): void;

/**
 * Diese Funktion versteckt eine Seite des Dialogs. Pflichtfelder auf dieser Seite werden beim Senden nicht mehr geprüft.
 *
 * @param {(string | string[])} page Name der Dialogseite bzw ein Array mit den Namen der Seiten, welche ausgeblendet werden sollen.
 */
declare function jr_hide_page(page: string | string[]): void;

/**
 * Diese Funktion setzt den Fokus auf die entsprechende Seite im Dialog. Wenn die Seite vorher ausgeblendet war, so wird sie mit dieser Funktion auch eingeblendet.
 *
 * @param {string} page Name der Dialogseite
 */
declare function jr_select_page(page: string): void;

/**
 * Diese Funktion definiert ein Eingabeelement als Pflichtfeld oder hebt die Pflichtfeldprüfung auf.
 *
 * @param {string} element Name des Dialogelements
 * @param {boolean} [required] true: Pflichtfeld false: kein Pflichtfeld - Geben Sie keinen Wert ein, so wird automatisch true verwendet.
 */
declare function jr_set_required(element: string, required?: boolean): void;

/**
 * Mit dieser Funktion kann der Schreibschutz für ein Eingabeelement aktiviert oder deaktiviert werden.
 *
 * @param {string} element Name des Dialogelements
 * @param {boolean} [readonly] true: Schreibgeschützt false: Eingaben können getätigt werden - Geben Sie keinen Wert ein, so wird automatisch true verwendet.
 */
declare function jr_set_readonly(element: string, readonly?: boolean): void;

/**
 * Mit dieser Funktion können Sie ein Eingabeelement deaktivieren.
 *
 * @param {string} element Name des Dialogelements
 * @param {boolean} [disabled] true: Deaktiviert false: Aktiviert - Geben Sie keinen Wert ein, so wird automatisch true verwendet.
 */
declare function jr_set_disabled(element: string, disabled?: boolean): void;

/**
 * Mit dieser Funktion kann die Hintergrundfarbe für ein Element gesetzt werden.
 *
 * @param {string} element Name des Dialogelements
 * @param {string} color HTML-Farbcode (z.B. #aaffcc)
 */
declare function jr_set_background_color(element: string, color: string): void;

/**
 * Diese Funktion setzt die Bezeichnung von einem Dialogelementen.
 * Handelt es sich bei dem Element um einen Radiobutton, muss zusätzlich der Parameter radioValue mit dem Wert (Vorbelegung) des jeweiligen Radiobuttons gefüllt werden (z.B. „1“).
 *
 * @param {string} element Name des Dialogelements
 * @param {string} label Neue Bezeichnung
 * @param {string} [radioValue] Vorbelegung bei Radiobuttons
 */
declare function jr_set_label(element: string, label: string, radioValue?: string): void;

/**
 * Diese Funktion setzt die Bezeichnung, welche hinter einem Dialogelement steht.
 * Handelt es sich bei dem Element um einen Radiobutton, muss zusätzlich der Parameter radioValue mit dem Wert (Vorbelegung) des jeweiligen Radiobuttons gefüllt werden (z.B. „1“).
 *
 * @param {string} element Name des Dialogelements
 * @param {string} label Neue Bezeichnung
 * @param {string} [radioValue] Vorbelegung bei Radiobuttons
 */
declare function jr_set_label2(element: string, label: string, radioValue?: string): void;

/**
 * Mit dieser Funktion kann die Bezeichnung eines Schrittes in der Titelleiste geändert werden.
 *
 * @param {string} label Neue Bezeichnung
 */
declare function jr_set_steplabel(label: string): void;

/**
 * Die Funktion ermittelt den Wert eines Elements als JavaScript-Datentyp. Dieser Datentyp ist abhängig vom Elementtyp.
 *
 * @param {string} element Name des Dialogelements
 * @returns {(string | number | boolean | Date)}
 */
declare function jr_get_value(element: string): string | number | boolean | Date;

/**
 * Die Funktion liefert den Wert eines Dialogelements in Textform zurück, wie es im Dialog dargestellt wird. So werden beispielsweise Datumsformatierungen unter Berücksichtigung der beim Anwender hinterlegten Formatierung ausgegeben.
 *
 * @param {string} element Name des Dialogelements
 * @returns {string}
 */
declare function jr_get_display_value(element: string): string;

/**
 * Diese Funktion setzt den Wert eines Dialogelements. Als Eingabe erhält die Funktion JavaScript-Datenelemente (z.B. String-, Number- oder Date-Elemente).
 *
 * @param {string} element Name des Dialogelements
 * @param {(string | number | boolean | Date)} value Wert des Dialogelements
 */
declare function jr_set_value(element: string, value: string | number | boolean | Date): void;

/**
 * Diese Funktion setzt den Wert eines Dialogelements auf den Wert zurück, den es beim Öffnen des Dialogs gehabt hat.
 *
 * @param {string} element Name des Dialogelements
 */
declare function jr_reset_value(element: string): void;

//#endregion

//#region Funktionen für Untertabellen

/**
 * Diese Funktion ermittelt die Spaltenüberschrift einer Untertabellenansicht und gibt sie als Text zurück.
 *
 * @param {string} subtableViewName Name der Untertabellenansicht
 * @param {string} columnName Name der Spalte
 * @returns {string}
 */
declare function jr_get_column_label(subtableViewName: string, columnName: string): string;

/**
 * Diese Funktion ermittelt die Spaltenüberschrift einer SQL-Tabelle und gibt sie als Text zurück.
 *
 * @param {string} tableName Name der SQL-Tabelle
 * @param {string} columnName Name der Spalte
 * @returns {string}
 */
declare function jr_get_column_label(tableName: string, columnName: string): string;

/**
 * Diese Funktion ermittelt die 2. Bezeichnung für eine Zelle einer Untertabellenansicht und gibt sie als Text zurück.
 * Handelt es sich bei dem Element um einen Radiobutton, muss zusätzlich der Parameter radioValue mit dem Wert (Vorbelegung) des jeweiligen Radiobuttons übergeben werden (z.B. „1“).
 *
 * @param {string} subtableViewName Name der Untertabellenansicht
 * @param {number} rowId ID der Zeile
 * @param {string} columnName Name der Spalte
 * @param {string} [radioValue] Vorbelegung (optional, nur bei Radiobuttons)
 * @returns {string}
 */
declare function jr_get_cell_label2(subtableViewName: string, rowId: number, columnName: string, radioValue?: string): string;

/**
 * Diese Funktion blendet eine Spalte einer Untertabellenansicht ein.
 * Handelt es sich bei der Spalte um einen Teil einer Radiobutton-Gruppe, muss zusätzlich der Parameter radioValue mit dem Wert (Vorbelegung) des jeweiligen Radiobuttons gefüllt werden (z.B. „1“).
 *
 * @param {string} subtableViewName Name der Untertabellenansicht
 * @param {string} columnName Name der Spalte
 * @param {string} [radioValue] Vorbelegung bei RadioButtons
 */
declare function jr_show_subtable_column(subtableViewName: string, columnName: string, radioValue?: string): void;

/**
 * Diese Funktion blendet eine Spalte einer Untertabellenansicht aus.
 * Handelt es sich bei der Spalte um einen Teil einer Radiobutton-Gruppe, muss zusätzlich der Parameter radioValue mit dem Wert (Vorbelegung) des jeweiligen Radiobuttons gefüllt werden (z.B. „1“).
 *
 * @param {string} subtableViewName Name der Untertabellenansicht
 * @param {string} columnName Name der Spalte
 * @param {string} [radioValue] Vorbelegung bei RadioButtons
 */
declare function jr_hide_subtable_column(subtableViewName: string, columnName: string, radioValue?: string): void;

/**
 * Diese Funktion blendet eine Zeile einer Untertabellenansicht aus.
 *
 * @param {string} subtableViewName Name der Untertabellenansicht
 * @param {number} rowId ID der Zeile
 */
declare function jr_hide_subtable_row(subtableViewName: string, rowId: number): void;

/**
 * Diese Funktion setzt die Spaltenüberschrift einer Untertabellenansicht.
 *
 * @param {string} subtableViewName Name der Untertabellenansicht
 * @param {string} columnName Name der Spalte
 * @param {string} label Neue Spaltenüberschrift
 */
declare function jr_set_column_label(subtableViewName: string, columnName: string, label: string): void;

/**
 * Diese Funktion setzt die Spaltenüberschrift einer SQL-Tabelle.
 *
 * @param {string} tableName Name der SQL-Tabelle
 * @param {string} columnName Name der Spalte
 * @param {string} label Neue Spaltenüberschrift
 */
declare function jr_set_column_label(tableName: string, columnName: string, label: string): void;

/**
 * Diese Funktion setzt die 2. Bezeichnung für eine Zelle einer Untertabellenansicht.
 * Handelt es sich bei dem Element um einen Radiobutton, muss zusätzlich der Parameter radioValue mit dem Wert (Vorbelegung) des jeweiligen Radiobuttons übergeben werden (z.B. „1“).
 *
 * @param {string} subtableViewName Name der Untertabellenansicht
 * @param {number} rowId ID der Zeile
 * @param {string} columnName Name der Spalte
 * @param {string} label Neue Bezeichnung
 * @param {string} [radioValue] Vorbelegung (optional, nur bei Radiobuttons)
 */
declare function jr_set_cell_label2(subtableViewName: string, rowId: number, columnName: string, label: string, radioValue?: string): void;

/**
 * Diese Funktion setzt die Hintergrundfarbe in Untertabellenansichten. Hierbei kann die Hintergrundfarbe für einzelne Zellen oder ganze Spalten gesetzt werden.
 *
 * @param {string} subtableViewName Name der Untertabellenansicht
 * @param {number} rowId ID der Zeile (beginnend mit 0, "*" für alle Zeilen)
 * @param {string} columnName Name der Spalte
 * @param {string} color HTML Farbcode (z.B. #AAFFAA)
 */
declare function jr_set_table_background_color(subtableViewName: string, rowId: number, columnName: string, color: string): void;

/**
 * Diese Funktion setzt die Hintergrundfarbe für SQL- und Sharepoint-Tabellen. Hierbei kann die Hintergrundfarbe für einzelne Zellen, ganze Spalten oder ganze Zeilen gesetzt werden.
 *
 * @param {string} tableName Name der SQL- oder Sharepoint-Tabelle
 * @param {number} rowId ID der Zeile (beginnend mit 0), * für alle Zeilen, header für die Kopfzeile
 * @param {string} columnName Name der Spalte, * für alle Spalten
 * @param {string} color HTML Farbcode (z.B. #aaffaa)
 */
declare function jr_set_table_background_color(tableName: string, rowId: number, columnName: string, color: string): void;

/**
 * Die Funktion ermittelt den Wert eines Elements als JavaScript-Datentyp. Dieser Datentyp ist abhängig vom Elementtyp.
 *
 * @param {string} subtableViewName Name der Untertabellenansicht
 * @param {number| "sum"} rowId ID der Zeile
 * @param {string} columnName Name der Spalte
 * @returns {(string | number | boolean | Date)}
 */
declare function jr_get_subtable_value(subtableViewName: string, rowId: number | "sum", columnName: string): string | number | boolean | Date;

/**
 * Die Funktion bildet eine Summe für eine Spalte in einer Untertabellenansicht.
 *
 * @param {string} subtableViewName Name der Untertabellenansicht
 * @param {string} columnName Name der Spalte
 * @param {string} [thousandsSeparator] Geben Sie ein Tausender-Trennzeichen an
 * @param {string} [decimalSeparator] Geben Sie ein Dezimal-Trennzeichen an
 * @param {number} [decimalPlaces] Geben Sie die Anzahl der Nachkommastellen an
 * @param {string} [sumField] Name des Summenfelds
 * @returns {number} Als Rückgabewert liefert diese Funktion die Summe einer Spalte als Dezimalzahl.
 */
declare function jr_sum_subtable_column(subtableViewName: string, columnName: string, thousandsSeparator?: string, decimalSeparator?: string, decimalPlaces?: number, sumField?: string): number;

/**
 * Diese Funktion liefert die Anzahl der Zeilen einer Untertabellenansicht
 *
 * @param {string} subtableViewName Name der Untertabellenansicht
 * @returns {number} Als Rückgabewert liefert diese Funktion die Anzahl der Zeilen als Zahl.
 */
declare function jr_get_subtable_count(subtableViewName: string): number;

/**
 * Die Funktion liefert die maximale ID einer Untertabellenansicht.
 *
 * @param {string} subtableViewName Name der Untertabellenansicht
 * @returns {number} Als Rückgabewert liefert diese Funktion die höchste ID der Untertabellenansicht als Zahl.
 */
declare function jr_get_subtable_max_id(subtableViewName: string): number;

/**
 * Die Funktion liefert alle IDs einer Untertabellenansicht. Das zurückgelieferte Array kann für weitere Arbeiten mit der Untertabellenansicht verwendet werden.
 *
 * @param {string} subtableViewName Name der Untertabellenansicht
 * @returns {number[]}
 */
declare function jr_get_subtable_row_ids(subtableViewName: string): number[];

/**
 * Die Funktion liefert die IDs der angehakten Zeilen einer Untertabellenansicht.
 *
 * @param {string} subtableViewName Name der Untertabellenansicht
 * @returns {number[]} Als Rückgabewert liefert diese Funktion die IDs als Array.
 */
declare function jr_get_subtable_checked_row_ids(subtableViewName: string): number[];

/**
 * Die Funktion bietet die Möglichkeit in einer Schleife über eine Untertabellenansicht zu iterieren und Funktionen für die einzelnen Zeilen auszuführen. Sie benötigen lediglich die Angabe der Untertabellenansicht sowie der Funktion, welche Sie zuvor für die Verarbeitung der einzelnen Zeilen erstellt haben. Diese Funktion wird nun pro Zeile der Untertabellenansicht aufgerufen und erhält als Parameter den Namen der Untertabellenansicht sowie die ID der aktuellen Zeile. Mit diesen Parametern können Sie nun beliebige Daten aus der Zeile auslesen.
 *
 * @param {string} subtableViewName Name der Untertabellenansicht
 * @param {(subtable:string, rowId:number) => void} [callback] Angabe einer Callback-Funktion, welche für jede Zeile aufgerufen wird. Als Parameter werden ihr den Namen der Untertabellenansicht und die Zeilennummer übergeben.
 */
declare function jr_loop_table(subtableViewName: string, callback?: (subtable: string, rowId: number) => void): void;

/**
 * Die Funktion setzt den Wert eines Elements. Als Eingabe erhält die Funktion JavaScript-Datenelemente (z.B. String-, Number- oder Date-Elemente).
 *
 * @param {string} subtableViewName Name der Untertabellenansicht
 * @param {number} rowId ID der Zeile
 * @param {string} columnName Name der Spalte
 * @param {(string | number | boolean | Date)} value Neuer Wert des Elements
 */
declare function jr_set_subtable_value(subtableViewName: string, rowId: number, columnName: string, value: string | number | boolean | Date): void;

/**
 * Die Funktion setzt den Anzeigewert eines Elements. Als Eingabe erhält die Funktion den Wert als Text in der Formatierung, wie er dem Anwender angezeigt werden soll.
 *
 * @param {string} subtableViewName Name des Untertabellenansicht
 * @param {number} rowId ID der Zeile
 * @param {string} columnName Name der Spalte
 * @param {string} value Neuer Anzeigewert des Elements
 */
declare function jr_set_subtable_display_value(subtableViewName: string, rowId: number, columnName: string, value: string): void;

/**
 * Die Funktion fügt eine oder mehrere Zeilen zu einer Untertabellenansicht hinzu.
 *
 * @param {string} subtableViewName Name der Untertabellenansicht
 * @param {(number | object | object[])} rows int: Anzahl der Zeilen, die zu der Ansicht hinzugefügt werden sollen | object: JavaScript-Objekt mit den Werten für eine einzelne Zeile | array: Array mit JavaScript-Objekten, jedes mit den Werten für eine einzelne Zeile
 * @param {boolean} [ignoreMaxRows] Mit diesem Parameter kann eingestellt werden, ob die Validierung auf die maximale Anzahl der Zeilen deaktiviert werden soll. Standardmäßig ist die Validierung aktiviert (false).
 * @param {(addedRows:number)=>void} [onFinish] Callback-Funktion, die nach dem Hinzufügen aller Zeilen einmal ausgeführt wird. Als Parameter wird ihr die Anzahl der erfolgreich hinzugefügten Zeilen übergeben.
 */
declare function jr_add_subtable_row(subtableViewName: string, rows: number | object | object[], ignoreMaxRows?: boolean, onFinish?: (addedRows: number) => void): void;

/**
 * Die Funktion entfernt eine oder mehrere Zeilen aus einer Untertabellenansicht.
 *
 * @param {string} subtableViewName Name der Untertabellenansicht
 * @param {(number | number[])} rowId ID der zu löschenden Zeile oder Array, welches die IDs mehrerer zu löschender Zeilen enthält
 * @param {boolean} [ignoreMaxRows] Mit diesem Parameter kann eingestellt werden, ob die Validierung auf die minimale Anzahl der Zeilen deaktiviert werden soll. Standardmäßig ist die Validierung aktiviert (false).
 */
declare function jr_remove_subtable_row(subtableViewName: string, rowId: number | number[], ignoreMaxRows?: boolean): void;

/**
 * Diese Funktion kopiert eine oder mehrere bestehende Zeilen einer Untertabellenansicht.
 *
 * @param {string} subtableViewName Name der Untertabellenansicht
 * @param {(number | number[])} rows ID der zu kopierenden Zeile oder Array, welches die IDs mehrerer zu kopierender Zeilen enthält
 */
declare function jr_copy_subtable_row(subtableViewName: string, rows: number | number[]): void;

/**
 * Die Funktion lädt eine gesamte Untertabellenansicht neu und füllt sie mit Daten. Sie dient dazu, mehrere Zeilen auf einmal eingeben zu können, ohne die Zeilen nacheinander anlegen zu müssen. Die bestehenden Daten der Untertabellenansicht werden gelöscht.
 *
 * @param {string} element Name der Untertabellenansicht im Dialog (nicht: Name der Untertabellenansicht!)
 * @param {object} subtableData JavaScript-Objekt mit den Werten der einzelnen Zeilen (Aufbau s. unten)
 * @param {(subtableViewName: string) => void} [onSuccess] Angabe einer Callback-Funktion, die nach Erfolg ausgeführt werden soll. Als Parameter wird ihr den Namen der Untertabellenansicht übergeben.
 * @param {(subtableViewName: string, errorMessage: string) => void} [onError] Angabe einer Callback-Funktion, die im Fehlerfall ausgeführt werden soll. Als Parameter werden ihr den Namen der Untertabellenansicht und die Fehlermeldung übergeben.
 */
declare function jr_subtable_init(element: string, subtableData: object, onSuccess?: (subtableViewName: string) => void, onError?: (subtableViewName: string, errorMessage: string) => void): void;

//#endregion

//#region Funktionen für SQL-Elemente

/**
 * Diese Funktion blendet eine einzelne Spalte einer SQL-Tabelle ein.
 *
 * @param {string} tableName Name der SQL-Tabelle
 * @param {string} columnName Name der Spalte
 */
declare function jr_show_table_column(tableName: string, columnName: string): void;

/**
 * Diese Funktion blendet eine einzelne Spalte einer SQL-Tabelle aus.
 *
 * @param {string} tableName Name der SQL-Tabelle
 * @param {string} columnName Name der Spalte
 */
declare function jr_hide_table_column(tableName: string, columnName: string): void;

/**
 * Diese Funktion liefert den Inhalt einer Zelle einer SQL-Tabelle als Text.
 *
 * @param {string} tableName Name der SQL-Tabelle
 * @param {number} rowId ID der Zeile (beginnend mit 0)
 * @param {string} columnName Name der Spalte
 * @returns {string}
 */
declare function jr_get_table_value(tableName: string, rowId: number, columnName: string): string;

/**
 * Diese Funktion liefert die Anzahl der Zeilen einer SQL-Tabelle als Ganzzahl.
 *
 * @param {string} tableName Name der SQL-Tabelle
 * @returns {number}
 */
declare function jr_get_table_count(tableName: string): number;

/**
 * Die Funktion liefert die höchste ID einer SQL-Tabelle als Ganzzahl.
 *
 * @param {string} tableName Name der SQL-Tabelle
 * @returns {number}
 */
declare function jr_get_table_max_id(tableName: string): number;

/**
 * Diese Funktion aktualisiert SQL-Elemente in einem Dialog. Der aktuelle Status (z.B. deaktiviert) eines Elements wird hiervon nicht beeinflusst.
 *
 * @param {(string | string[])} element Name des Dialogelements oder Array mehrerer Dialogelemente, die aktualisiert werden sollen.
 * @param {(element: string, oldValue) => void} [onSuccess] Angabe einer Callback-Funktion, die nach Erfolg ausgeführt werden soll. Als Parameter werden ihr den Namen des Elements und den bisherigen Wert übergeben.
 * @param {(element: string, error: string) => void} [onError] Angabe einer Callback-Funktion die im Fehlerfall ausgeführt werden soll. Als Parameter werden ihr den Namen des Elements und die Fehlermeldung übergeben.
 * @param {boolean} [sequential] Angabe, ob die Aktualisierung von mehreren Elementen sequentiell oder parallel erfolgen soll.
 */
declare function jr_sql_refresh(element: string | string[], onSuccess?: (element: string, oldValue) => void, onError?: (element: string, error: string) => void, sequential?: boolean): void;

/**
 * Diese Funktion aktualisiert SQL-Elemente in einer Untertabellenansicht. Der aktuelle Status (z.B. deaktiviert) eines Elements wird hiervon nicht beeinflusst.
 *
 * @param {string} subtableViewName Name der Untertabellenansicht
 * @param {string} [columnName] Name der Spalte, welche aktualisiert werden soll. Wird der Parameter nicht bzw. als "*" übergeben, werden alle Spalten aktualisiert.
 * @param {number} [rowId] Id der Zeile, die aktualisiert werden soll. Wird der Parameter nicht bzw. als "*" übergeben, werden alle Zeilen aktualisiert.
 * @param {(subtableViewName: string, columnName: string, rowId: number) => void} [onSuccess] Angabe einer Callback-Funktion, die nach Erfolg ausgeführt werden soll. Als Parameter werden ihr den Namen der Untertabellenansicht, den Namen der Spalte und die Zeilennummer übergeben.
 * @param {(subtableViewName: string, columnName: string, rowId: number, error: Error) => void} [onError] Angabe einer Callback-Funktion, die im Fehlerfall ausgeführt werden soll. Als Parameter werden ihr den Namen der Untertabellenansicht, den Namen der Spalte, die Zeilennummer und die Fehlermeldung übergeben.
 */
declare function jr_subtable_refresh(subtableViewName: string, columnNameß: string, rowId?: number, onSuccess?: (subtableViewName: string, columnName: string, rowId: number) => void, onError?: (subtableViewName: string, columnName: string, rowId: number, error: Error) => void): void;

//#endregion

//#region Schrittaktionen

/**
 * Diese Funktion versteckt eine oder mehreren Schrittaktionen im Dialog.
 *
 * @param {(JR_STEP_ACTION | string[])} action Aktionsname bzw. ein Array mit den Namen der Aktionen, welche ausgeblendet werden sollen.
 */
declare function jr_hide_step_action(action: JR_STEP_ACTION | string[]): void;

/**
 * Diese Funktion blendet eine oder mehreren Schrittaktionen im Dialog ein.
 *
 * @param {(JR_STEP_ACTION | string[])} action Aktionsname bzw. ein Array mit den Namen der Aktionen, welche eingeblendet werden sollen.
 */
declare function jr_show_step_action(action: JR_STEP_ACTION | string[]): void;

/**
 * Diese Funktion ändert die Beschriftung einer Schrittaktion im Dialog, der sich im Bearbeitungsmodus befindet..
 *
 * @param {JR_STEP_ACTION} action Name der Aktion, deren Beschriftung geändert werden sollen.
 * @param {string} label Neue Beschriftung
 */
declare function jr_set_step_action_label(action: JR_STEP_ACTION, label: string): void;

//#endregion

//#region Funktionen für Integrationen

/**
 * Diese Funktion fügt einen Stempel in die Werkzeugleiste des JobViewer 2 hinzu. Es liefert ein Stempel-Objekt zurück, welches zum Löschen wiederverwendet werden kann.
 *
 * @param {string} text Text, der auf dem Stempel angezeigt wird (zwischen 1 und 20 Zeichen)
 * @param {{ includeTime: boolean, includeDate: boolean, color: string, onStamp: (stamp: object) => void }} [options] Options
 * @return {object}
 */
declare function jr_viewer_stamp_create(text: string, options?: { includeTime: boolean; includeDate: boolean; color: string; onStamp: (stamp: object) => void }): object;

/**
 * Diese Funktion aktiviert einen zuvor angelegten Stempel, sodass ein Anwender diesen direkt anbringen kann, ohne vorher den Stempel in der Werkzeugleiste auszuwählen.
 *
 * @param {object} stamp Stempel-Objekt, welches von jr_viewer_stamp_create zurückgegeben wurde.
 */
declare function jr_viewer_stamp_activate(stamp: object): void;

/**
 * Diese Funktion entfernt einen bestehenden Stempel wieder aus der Werkzeugleiste des JobViewer 2.
 *
 * @param {object} stamp Stempel-Objekt, welches von jr_viewer_stamp_create zurückgegeben wurde
 */
declare function jr_viewer_stamp_remove(stamp: object): void;
//#endregion
