import { useState } from "react";
import { useInterval } from "../../../hooks/useInterval";
import { useEffect } from "react";

import styles from './Auth.module.css'
import { useMediaQuery } from "react-responsive";


const loadingInterval = 1;
const bootingInterval = 500;

export default function Boot({ restart, sleep, setBooting }) {
  const [loading, setLoading] = useState(false);
  const [percent, setPercent] = useState(0);

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  useEffect(() => {
    if (restart && !sleep) setLoading(true);
  }, [restart, sleep]);

  useInterval(
    () => {
      const newPercent = percent + (isMobile ? 0.6 : 0.35);
      if (newPercent >= 100) {
        setTimeout(() => {
          setBooting(false);
          setLoading(false);
        }, bootingInterval);
      } else setPercent(newPercent);
    },
    loading ? loadingInterval : null
  );

  const handleClick = () => {
    if (sleep) setBooting(false);
    else if (restart || loading) return;
    else setLoading(true);
  };

  return (
    <div className={styles.loading} onClick={handleClick}>
      <div className="i-fa-brands:apple text-white  -mt-12 md:-mt-4 size-20 sm:size-24" />
      {loading && (
        <div
          className="absolute top-1/2 inset-x-0 w-36 md:w-56 h-1 sm:h-1.5 bg-gray-500 rounded overflow-hidden"
          m=" sm:t-28 t-22  x-auto"
        >
          <span
            className="absolute top-0 bg-white h-full rounded-sm"
            style={{
              width: `${percent.toString()}%`
            }}
          />
        </div>
      )}
      {/* {!restart && !loading && (
        <div
          pos="absolute top-1/2 inset-x-0"
          m="t-16 sm:t-20 x-auto"
          text="sm gray-200 center"
        >
          Click to {sleep ? "wake up" : "boot"}
        </div>
      )} */}
    </div>
  );
}
