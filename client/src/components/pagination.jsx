import { React, useState } from "react";
import styles from "../styles/pagination.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setPage, nextPage, prevPage } from "../redux/actions";

export function Pagination({ maximo }) {
    const dispatch = useDispatch();
    const { currentPage } = useSelector((state) => state);

    let index = [];
    for (let i = 1; i <= maximo; i++) {
        index.push(i);
    }
    console.log("Pagination");
    const onCLickPrev = () => {
        dispatch(prevPage());
    };
    const onCLickNext = () => {
        dispatch(nextPage());
    };
    const onClickSetPage = (i) => {
        dispatch(setPage(i));
    };
    return (
        <div className={styles.pagContainer}>
            <button
                onClick={onCLickPrev}
                disabled={currentPage === 1 ? true : false}
                className={styles.button3}
            >
                PREV
            </button>
            {index?.map((i) => (
                <button
                    className={
                        currentPage === i ? styles.button1 : styles.button2
                    }
                    onClick={() => onClickSetPage(i)}
                    key={i}
                >
                    {i}
                </button>
            ))}
            <button
                onClick={() => onCLickNext()}
                disabled={currentPage === maximo ? true : false}
                className={styles.button3}
            >
                Next
            </button>
        </div>
    );
}
