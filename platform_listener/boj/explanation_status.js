const ExplanationStatus = {
    wait: 'result-wait',
    complie: 'result-compile',
    judging: 'result-judging',
    ac: 'result-ac',

    isAc: function (classList) {
        return classList.contains(this.ac);
    }
};

Object.freeze(ExplanationStatus);

const StatusGroup = {
    ready: [ExplanationStatus.wait, ExplanationStatus.complie, ExplanationStatus.judging],
    ac: [ExplanationStatus.ac],
    isReady: function (classList) {
        return this.ready.some(element => classList.contains(element));
    }
};
Object.freeze(StatusGroup);