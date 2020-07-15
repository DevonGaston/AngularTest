"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeButton = void 0;
var LikeButton = /** @class */ (function () {
    function LikeButton(_likesCount, _isSelected) {
        this._likesCount = _likesCount;
        this._isSelected = _isSelected;
    }
    Object.defineProperty(LikeButton.prototype, "likesCount", {
        get: function () {
            return this._likesCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LikeButton.prototype, "isSelected", {
        get: function () {
            return this._isSelected;
        },
        enumerable: false,
        configurable: true
    });
    LikeButton.prototype.onClick = function () {
        this._likesCount += (this._isSelected) ? -1 : 1;
        this._isSelected = !this._isSelected;
    };
    return LikeButton;
}());
exports.LikeButton = LikeButton;
