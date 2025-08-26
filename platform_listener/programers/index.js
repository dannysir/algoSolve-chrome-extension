const button = document.querySelector("#submit-code");
button.addEventListener('click', function () {
    const modal = document.querySelector(".modal");
    const observer = new MutationObserver((mutations) => {
        if (mutations[0].target.querySelector(".modal-title")) {
            observer.disconnect();

            process(mutations)
        }
    })

    const option = {
        attributes: true,
    };

    observer.observe(modal, option);
})
// 결과 비동기 처리로 인해 정확성이 떨어짐
//
// const observer = new MutationObserver(mutations => {
//     process(mutations);
// });
//
// const option = {
//     attributes: true,
// };
//
// function table_first_line  () {
//     const table_lines = document.querySelectorAll('.SubmissionListstyle__ListItemColumnWrapper-sc-dysuo0-5');
//     console.log(table_lines);
//     return table_lines[1].querySelector(".SubmissionListstyle__ScoreText-sc-dysuo0-11");
// }
//
// observer.observe(table_first_line(), option);