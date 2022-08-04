import { React, useState } from "react";
import styles from "../styles/pagination.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setPage, nextPage, prevPage } from "../redux/actions";

export function Pagination(props) {
    const dispatch = useDispatch();
    let index = [];
    const { currentPage } = useSelector((state) => state);
    for (let i = 1; i <= props.max; i++) {
        index.push(
            <li>
                <button onClick={dispatch(setPage(i))}>{i}</button>
            </li>
        );
    }

    return (
        <div className={styles.container}>
            <ul>
                <li>
                    {
                        (currentPage = 1 ? (
                            <button onClick={dispatch(prevPage())}>PREV</button>
                        ) : (
                            <button>PREV</button>
                        ))
                    }
                </li>
                {index}
                <li>
                    {
                        (currentPage = 1 ? (
                            <button onClick={dispatch(nextPage())}>NEXT</button>
                        ) : (
                            <button>PREV</button>
                        ))
                    }
                </li>
            </ul>
        </div>
    );
}
