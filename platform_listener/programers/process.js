function result_state(bodyData) {
    if (bodyData.includes('정답')) {
        return ResultState.AC;
    } else {
        return ResultState.FAIL;
    }
}

function get_problem_info(dom) {

    const get_id = function (dom) {
        return dom.getAttribute('data-lesson-id');
    }

    const get_name = function (dom) {
        return dom.getAttribute('data-lesson-title');
    }

    const get_url = function (dom) {
        return window.location.href;
    }

    return {
        id: get_id(dom),
        name: get_name(dom),
        url: get_url(dom),
    }
}

function create_dto(bodyData) {
    const status = result_state(bodyData);
    const dom = document.querySelector('.lesson-content');
    const {id, name, url} = get_problem_info(dom);
    const currentDate = new Date();
    return new ProblemStateDto(Platform.PROGRAMERS, status, id, name, url, currentDate)
}

function process(mutations) {
    const modal_title = mutations[0].target.querySelector(".modal-title");

    if (modal_title !== null) {
        const bodyData = modal_title.textContent;
        const dto = create_dto(bodyData);
        console.log(dto);
        // send(dto);
    }
}