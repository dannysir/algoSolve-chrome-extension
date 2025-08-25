const ExplanationStatus = {
    wait : 'result-wait',
    complie : 'result-compile',
    judging : 'result-judging',
    ac : 'result-ac',

    isAc : (classList) => {
        return classList.contains(this.ac);
    }
};

Object.freeze(ExplanationStatus);

export const StatusGroup = {
    ready : [ExplanationStatus.wait,ExplanationStatus.complie,ExplanationStatus.judging],
    ac : [ExplanationStatus.ac],

    isReady(classList){
       return this.ready.some(element => classList.contains(element));
    }
};
Object.freeze(StatusGroup);