function change(){
    

    var follow = document.getElementById('follow-button');

    if(follow.textContent=='Follow'){

    follow.textContent = 'Following';

    

    follow.classList.remove('bg-blue-400');

    follow.classList.add('bg-green-400','hover:bg-green-700');

    

}

else {

    follow.textContent = 'Follow';

    follow.classList.remove('bg-green-400','hover:bg-green-700');

    follow.classList.add('bg-blue-400');
}


}