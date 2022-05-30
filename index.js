function lintCode(context, node) {
  context.report({
    node,
    message: "function name should end with an underscore",
    fix: (fixer) => fixer.insertTextAfter(node, "_"),
  });
}

// https://astexplorer.net/
// https://eslint.org/docs/developer-guide/working-with-rules
module.exports = {
  rules: {
    "expect-private-functions": {
      name: "expect-private-functions",
      meta: {
        fixable: "code",
        docs: {
          suggestion: true,
          description: "Enforce using private functions",
          recommended: "error",
        },
        messages: {
          "expect-private-functions": "Enforce using private functions",
        },
        schema: [],
        type: "problem",
      },
      defaultOptions: [],
      create: (context) => ({
        FunctionDeclaration(node) {
          if (!node.id.name.endsWith("_")) {
            lintCode(context, node.id);
          }
        },
        ArrowFunctionExpression(node) {
          // do nothing if function in not declared in global scope.
          if (node.parent.parent.parent.type === "BlockStatement") {
            return;
          }

          // node.parent.type = "VariableDeclarator"
          if (node.parent.id && !node.parent.id.name.endsWith("_")) {
            lintCode(context, node.parent.id);
          }

          // node.parent.type = "AssignmentExpression"
          if (node.parent.left && !node.parent.left.name.endsWith("_")) {
            lintCode(context, node.parent.left);
          }
        },
      }),
    },
  },
  environments: {
    globals: {
      globals: {
        AdSense: false,
        AdminDirectory: false,
        AdminGroupsMigration: false,
        AdminGroupsSettings: false,
        AdminLicenseManager: false,
        AdminReports: false,
        AdminReseller: false,
        Analytics: false,
        AnalyticsReporting: false,
        AppsActivity: false,
        BigQuery: false,
        Browser: false,
        CacheService: false,
        Calendar: false,
        CalendarApp: false,
        CardService: false,
        Charts: false,
        Classroom: false,
        ConferenceDataService: false,
        ContactsApp: false,
        ContentService: false,
        DataStudioApp: false,
        Docs: false,
        DocumentApp: false,
        DoubleClickCampaigns: false,
        Drive: false,
        DriveActivity: false,
        DriveApp: false,
        FormApp: false,
        FusionTables: false,
        Gmail: false,
        GmailApp: false,
        GroupsApp: false,
        HtmlService: false,
        Jdbc: false,
        LanguageApp: false,
        LinearOptimizationService: false,
        LockService: false,
        Logger: false,
        MailApp: false,
        Maps: false,
        MimeType: false,
        Mirror: false,
        People: false,
        PropertiesService: false,
        ScriptApp: false,
        Session: false,
        Sheets: false,
        ShoppingContent: false,
        SitesApp: false,
        Slides: false,
        SlidesApp: false,
        SpreadsheetApp: false,
        TagManager: false,
        Tasks: false,
        UrlFetchApp: false,
        Utilities: false,
        XmlService: false,
        YouTube: false,
        YouTubeAnalytics: false,
        YouTubeContentId: false,
        console: false,
      },
    },
  },
};

