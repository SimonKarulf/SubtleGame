import {PrimaryButton} from "@fluentui/react";
import {useState} from "react";
import {Loader} from "../Utilities/Loader";

export const ModalText = ({
                              combatLog,
                              setIsModalOpen,
                              isPlayerDead,
                              setIsPlayerDead,
                              setAttack,
                              setStrength,
                              setDefense,
                              attack,
                              strength,
                              defense,
                              setIsShowingModal,
                              setKilledRoom
                          }) => {

    const [isInCombat, setIsInCombat] = useState(true);

    const closeModal = () => {
        setIsModalOpen(false);
        setIsPlayerDead(false);
        setIsShowingModal(false);
    }

    const closeModalWithAttack = () => {
        setIsModalOpen(false);
        const currentAttack = attack;
        setAttack(currentAttack + 1);
        setIsShowingModal(false);
    }

    const closeModalWithStrength = () => {
        setIsModalOpen(false);
        const currentStrength = strength;
        setStrength(currentStrength + 1);
        setIsShowingModal(false);
    }

    const closeModalWithDefense = () => {
        setIsModalOpen(false);
        const currentDefense = defense;
        setDefense(currentDefense + 1);
        setIsShowingModal(false);
    }

    const buttons = () => {
        return (
            isPlayerDead ? (
                <div className="combat-content resurrect">
                    <PrimaryButton onClick={closeModal} style={{height: "auto"}}>
                        You died... Drink an elixir and try again from full health!
                    </PrimaryButton>
                </div>
            ) : (
                <div className="combat-content">
                    <PrimaryButton onClick={closeModalWithAttack} width="50px" color="black"
                                   style={{padding: 0, backgroundColor: "darkred", borderColor: "black", margin: "10px"}}>
                        Get an attack level!
                    </PrimaryButton>
                    <PrimaryButton onClick={closeModalWithStrength} width="50px" color="black"
                                   style={{padding: 0, backgroundColor: "darkred", borderColor: "black", margin: "10px"}}>
                        Get a strength level!
                    </PrimaryButton>
                    <PrimaryButton onClick={closeModalWithDefense} width="50px" color="black"
                                   style={{padding: 0, backgroundColor: "darkred", borderColor: "black", margin: "10px"}}>
                        Get a defense level!
                    </PrimaryButton>
                </div>
            )
        )
    }

    return (
        <div className="ability">
            {isInCombat ? (
                <Loader messages={combatLog} callback={setIsInCombat} classname="combat-content"/>
            ) : (
                <div>
                    {buttons()}
                </div>
            )}
        </div>
    )
}
