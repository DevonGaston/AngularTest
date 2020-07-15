"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var like_1 = require("./like");
var likeButton = new like_1.LikeButton(10, true);
likeButton.onClick();
//likeButton.onClick();
console.log("likesCount: " + likeButton.likesCount + ", isSelected: " + likeButton.isSelected);
