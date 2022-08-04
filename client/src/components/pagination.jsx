import { React, useState } from "react";
import styles from "../styles/pagination.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setPage, nextPage, prevPage } from "../redux/actions";

export function Pagination({ maximo }) {
    const dispatch = useDispatch();
    const { currentPage } = useSelector((state) => state);
    console.log(maximo);
    let index = [];
    for (let i = 1; i <= maximo; i++) {
        index.push(i);
    }

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
            >
                PREV
            </button>
            {index?.map((i) => (
                <button
                    className={styles.button}
                    onClick={() => onClickSetPage(i)}
                >
                    {i}
                </button>
            ))}
            <button
                onClick={() => onCLickNext()}
                disabled={currentPage === maximo ? true : false}
            >
                Next
            </button>
        </div>
    );
}
