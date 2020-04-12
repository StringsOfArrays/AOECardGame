import React, { FunctionComponent, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

// style
import controlPanelStyle from '../style/controlPanel.module.scss';

enum SubmissionState {
    neutral,
    inProcess,
    failure,
    success
}

const ControlPanel:FunctionComponent<{sort: (ascending:boolean) => void, submit: () => Promise<boolean>}> = (props) => {

    // state
    const [submissionState, setSubmissionState] = useState<SubmissionState>(SubmissionState.neutral);

    // functions
    async function handleClick(event:React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        switch(event.currentTarget.name){
            case 'sort-asc':
                props.sort(true);
                break;
            case 'sort-des':
                props.sort(false);
                break;
            case 'submit':
                if(submissionState !== SubmissionState.inProcess){
                    setSubmissionState(SubmissionState.inProcess);
                    const success = await props.submit();
                    success ? setSubmissionState(SubmissionState.success) : setSubmissionState(SubmissionState.failure);
                    setTimeout( () => setSubmissionState(SubmissionState.neutral), 5000);
                    break;
                }
        }
    }

    return(
        <div className={controlPanelStyle.container}>
            <h1>Controls</h1>
            <p>You can sort your cards in an ascending or descending order by pressing the equivalent button.<br/>
            Once you have chosen a card, you can submit it by pressing the submit button.</p>
            <div className={controlPanelStyle.buttonContainer}>
                <button className={controlPanelStyle.btnSmall} onClick={handleClick} name='sort-asc'>Sort Ascending</button>
                <button className={controlPanelStyle.btnSmall} onClick={handleClick} name='sort-des'>Sort Descending</button>
                <br/>
                <button className={controlPanelStyle.btnBig} onClick={handleClick} name='submit'>
                    {submissionState === SubmissionState.inProcess ? 'Processing ...' : 'Submit'}
                </button>
            </div>
            {submissionState === SubmissionState.success &&
                <div className={controlPanelStyle.statusFeedbackOkay}>
                    <FontAwesomeIcon icon={faCheckCircle}/>
                    <span>Success!</span>
                </div>}
            {submissionState === SubmissionState.failure &&
                <div className={controlPanelStyle.statusFeedbackFail}>
                    <FontAwesomeIcon icon={faTimesCircle}/>
                    <span>Failed! Make sure you select a card</span>
                </div>}
        </div>
    );
}

export default ControlPanel;