import { useEffect, useState } from 'react';

export const useWords = (inputWords: string[]) => {
  let currentIndex = 0;

  const [data, setData] = useState<{ currentIndex: number; word: string }>({
    currentIndex,
    word: '',
  });

  useEffect(() => {
    let timer: NodeJS.Timer;

    timer = setInterval(() => {
      setData({
        currentIndex,
        word: inputWords[currentIndex],
      });

      currentIndex++;

      if (currentIndex > inputWords.length - 1) return clearInterval(timer);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [inputWords]);

  // console.log(inputWords, data);

  return { total: inputWords.length, currentIndex: data.currentIndex, word: data.word };
};
