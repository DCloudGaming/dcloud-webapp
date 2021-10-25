import React, { useState, useRef, useCallback } from "react";
import CForm from "./components/form";
import Card from "./components/card";
import ActionModal from "../../../ActionModal";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const initialState = {
  cardNumber: "#### #### #### ####",
  cardHolder: "FULL NAME",
  cardMonth: new Date().getMonth() + 1,
  cardYear: new Date().getFullYear(),
  cardCvv: "",
  isCardFlipped: false,
  firstTime: true,
};

const MainScreen = ({ children, role }) => {
  const [state, setState] = useState(initialState);
  const [currentFocusedElm, setCurrentFocusedElm] = useState(null);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const updateStateValues = useCallback(
    (keyName, value) => {
      if (state.firstTime) {
        setTimeout(toggle, 5000);
      }

      setState({
        ...state,
        firstTime: false,
        [keyName]: value || initialState[keyName],
      });
    },
    [state]
  );

  // References for the Form Inputs used to focus corresponding inputs.
  let formFieldsRefObj = {
    cardNumber: useRef(),
    cardHolder: useRef(),
    cardDate: useRef(),
    cardCvv: useRef(),
  };

  let focusFormFieldByKey = useCallback((key) => {
    formFieldsRefObj[key].current.focus();
  });

  // This are the references for the Card DIV elements.
  let cardElementsRef = {
    cardNumber: useRef(),
    cardHolder: useRef(),
    cardDate: useRef(),
  };

  let onCardFormInputFocus = (_event, inputName) => {
    const refByName = cardElementsRef[inputName];
    setCurrentFocusedElm(refByName);
  };

  let onCardInputBlur = useCallback(() => {
    setCurrentFocusedElm(null);
  }, []);

  return (
    <div>
      <Modal
        isOpen={modal}
        toggle={toggle}
        size="lg"
        className="Paycard_ActionModal"
      >
        <ActionModal
          desc="You seem interested! Meet the new platform taking all hassles away for your play-from-anywhere lifestyle."
          action="LET'S GO"
          className="mb-11"
        />
      </Modal>
      <div className="wrapper">
        <CForm
          contentChildren={children}
          role={role}
          cardMonth={state.cardMonth}
          cardYear={state.cardYear}
          onUpdateState={updateStateValues}
          cardNumberRef={formFieldsRefObj.cardNumber}
          cardHolderRef={formFieldsRefObj.cardHolder}
          cardDateRef={formFieldsRefObj.cardDate}
          onCardInputFocus={onCardFormInputFocus}
          onCardInputBlur={onCardInputBlur}
        >
          <Card
            role={role}
            cardNumber={state.cardNumber}
            cardHolder={state.cardHolder}
            cardMonth={state.cardMonth}
            cardYear={state.cardYear}
            cardCvv={state.cardCvv}
            isCardFlipped={state.isCardFlipped}
            currentFocusedElm={currentFocusedElm}
            onCardElementClick={focusFormFieldByKey}
            cardNumberRef={cardElementsRef.cardNumber}
            cardHolderRef={cardElementsRef.cardHolder}
            cardDateRef={cardElementsRef.cardDate}
          >
            {children}
          </Card>
        </CForm>
      </div>
    </div>
  );
};

export default MainScreen;
