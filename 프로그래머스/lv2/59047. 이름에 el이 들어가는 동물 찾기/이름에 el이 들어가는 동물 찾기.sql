-- 코드를 입력하세요
SELECT ANIMAL_ID, NAME 
FROM ANIMAL_INS 
WHERE INSTR(NAME, 'el') > 0 AND ANIMAL_TYPE = 'Dog'
ORDER BY NAME