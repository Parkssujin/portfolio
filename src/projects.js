'use strict';

// 프로젝트 필터링 관련 로직 처리
const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
const projectsContainer = document.querySelector('.projects');
// querySelector는 선택자에 해당하는 요소중에 찾은것중 첫번째 아이템만 리턴
// querySelectorAll 은 해당선택자에 매칭되는 모든 요소들을 찾아주는 것
categories.addEventListener('click', (event) => {
    const filter = event.target.dataset.category;
    if(filter == null) {
        return;
    }
    // return 은 함수를 종료한다는 의미

    handleActiveSelection(event.target);
    filterProjects(filter);
});     



function handleActiveSelection(target) {
    const active = document.querySelector('.category--selected');
    active.classList.remove('category--selected');
    target.classList.add('category--selected');
}
 
function filterProjects(filter) {
    projectsContainer.classList.add('anim-out');
    projects.forEach(project => {
        if(filter === 'all' || filter === project.dataset.type) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none'; 
        }
    });
    setTimeout(() => {
    projectsContainer.classList.remove('anim-out');   
    }, 250);
}

// forEach 순회하면서 한가지씩 일을 해결해주는 명령
//display 속성을 사용해서 block 보여주고, none 보여주지 않고를 설정 