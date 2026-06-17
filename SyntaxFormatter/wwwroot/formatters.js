window.syntaxFormatter = {
    formatJs: function (code) {
        return js_beautify(code, { indent_size: 2, space_in_empty_paren: true, end_with_newline: true });
    },
    formatHtml: function (code) {
        return html_beautify(code, { indent_size: 2, wrap_line_length: 120, end_with_newline: true });
    },
    formatSql: function (code, dialect) {
        return sqlFormatter.format(code, { language: dialect, tabWidth: 4, keywordCase: 'upper', linesBetweenQueries: 2 });
    },
    formatYaml: function (code) {
        var parsed = jsyaml.load(code);
        return jsyaml.dump(parsed, { indent: 2, lineWidth: -1, noRefs: true });
    },
    syncScroll: function (sourceId, targetId) {
        var src = document.getElementById(sourceId);
        var tgt = document.getElementById(targetId);
        if (src && tgt) tgt.scrollTop = src.scrollTop;
    }
};