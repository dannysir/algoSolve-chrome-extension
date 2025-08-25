function result_state(classList) {
    if (ExplanationStatus.isAc(classList)) {
        return ResultState.AC;
    }
    return ResultState.FAIL;
}

function get_problem_info(dom) {

    const get_id = function (dom) {
        return dom.textContent.trim();
    }

    const get_name = function (dom) {
        return dom.getAttribute('data-original-title');
    }

    const get_url = function (dom) {
        return dom.getAttribute('href');
    };

    return {
        id: get_id(dom),
        name: get_name(dom),
        url: 'www.acmicpc.net' + get_url(dom),
    }
}

function create_dto(classList) {
    const status = result_state(classList);
    const dom = document.querySelector('.problem_title');
    const {id, name, url} = get_problem_info(dom);
    const currentDate = new Date();
    return new ProblemStateDto(Platform.BOJ, status, id, name, url, currentDate)
}

function process(mutations) {
    const classList = mutations[0].target.classList;
    if (!StatusGroup.isReady(classList)) {
        console.log(create_dto(classList));
        // send(create_dto(classList));
    }
}
