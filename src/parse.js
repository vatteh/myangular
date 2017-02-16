'use strict';

function parse(expr) {
    var lexer = new Lexer();
    var parser = new Parser(lexer);
    return parser.parse(expr);
}

function Lexer() {

}

Lexer.prototype.lex = function(text) {
    this.text = text;
    this.index = 0;
    this.ch = undefined;
    this.tokens = [];

    while (this.index < this.text.length) {
        this.ch = this.text.charAt(this.index);
        if (this.isNumber(this.ch)) {
            this.readNumber();
        } else {
            throw 'Unexpected next character: ' + this.ch;
        }
    }

    return this.tokens;
};

Lexer.prototype.isNumber = function(ch) {
    return '0' <= ch && ch <= '9';
};

function AST(lexer) {
    this.lexer = lexer;
}

AST.prototype.ast = function(text) {
    this.tokens = this.lexer.lex(text);
    // body...
};

function ASTCompiler(astBuilder) {
    this.astBuilder = astBuilder;
}

ASTCompiler.prototype.compile = function(text) {
    var ast = this.astBuilder.ast(text);
};

function Parser(lexer) {
    this.lexer = lexer;
    this.ast = new AST(this.lexer);
    this.astCompiler = new ASTCompiler(this.ast);
}

Parser.prototype.parse = function(text) {
    return this.astCompiler.compile(text);
};

module.exports = parse;
