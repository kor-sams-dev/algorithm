-- 코드를 입력하세요
SELECT category, sum(sales)
FROM BOOK A
JOIN BOOK_SALES B ON A.BOOK_ID = B.BOOK_ID
WHERE LEFT(SALES_DATE,7) = '2022-01'
GROUP BY CATEGORY
ORDER BY CATEGORY
