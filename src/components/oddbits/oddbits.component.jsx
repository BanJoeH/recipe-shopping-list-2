import { useState, useEffect } from "react";
import IngredientInput from "../ingredient-input/ingredient-input.component.js";
import { useFirestore } from "react-redux-firebase";
import { useSelector } from "react-redux";

const OddBits = () => {
  const oddBits = useSelector((state) => state.firebase.profile.oddBits);
  const { uid } = useSelector((state) => state.firebase.auth);

  const firestore = useFirestore();
  const [inputList, setInputList] = useState([
    { ingredient: "", ingredientRef: null },
  ]);

  useEffect(() => {
    if (oddBits?.length) {
      setInputList(
        oddBits.map((item) => ({
          ingredient: item,
          ingredientRef: null,
        }))
      );
    }
  }, [oddBits]);

  const lossOfFocus = () => {
    if (uid) {
      let ingredients = inputList.map((input, i) => {
        return input.ingredient;
      });
      firestore.collection("users").doc(uid).set(
        {
          oddBits: ingredients,
        },
        { merge: true }
      );
    }
  };

  return (
    <article className="card">
      <div className="card-header">
        <h2 className="card-title">Odd Bits</h2>
      </div>
      <div className="card-body ">
        <IngredientInput
          inputList={inputList}
          setInputList={setInputList}
          lossOfFocus={lossOfFocus}
          label="Odd bit"
        />
      </div>
    </article>
  );
};

export default OddBits;
