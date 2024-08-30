
export function getPostData(id) {
    const postOne = {
       title: 'One',
       id: 'one',
       date: '7/12/2020'
    }
 
    const postTwo = {
       title: 'Two',
       id: 'two',
       date: '7/12/2020'
    }
    if (id === 'one') {
       return postOne;
    } else if (id === 'two') {
       return postTwo;
    }
    return null; // or handle not found case
 }
 
 export function getAllPostIds() {
    return [
       {
          params: {
             id: 'one'
          }
       },
       {
          params: {
             id: 'two'
          }
       }
    ];
 }