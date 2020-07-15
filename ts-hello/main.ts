import {LikeButton} from './like';

let likeButton = new LikeButton(10, true);
likeButton.onClick();
//likeButton.onClick();
console.log(`likesCount: ${likeButton.likesCount}, isSelected: ${likeButton.isSelected}`);

