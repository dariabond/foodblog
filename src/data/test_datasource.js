/**
 * Created by dariabondarchuk on 2/27/18.
 */
import {postsData, aboutData} from './test_data.js';

export function getMainPageData() {
    return new Promise(function (resolve, reject) {
        resolve(postsData);
    });
}

export function getRecipeFeedData() {
    return new Promise(function (resolve, reject) {
        resolve(postsData);
    });
}

export function getAboutData() {
    return new Promise(function (resolve, reject) {
        resolve(aboutData);
    });
}

//TODO figure out what to do with this
export default {};