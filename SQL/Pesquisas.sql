
SELECT matricula 
FROM tb_historico_academico 
WHERE nota < 90 AND codigo_turma LIKE "BD12015-1";


SELECT matricula, 
(SELECT AVG(nota) FROM tb_historico_academico WHERE codigo_turma LIKE "POO2015-1") AS "Média Alunos" 
FROM tb_historico_academico 
WHERE codigo_turma LIKE "POO2015-1";


SELECT codigo_professor 
FROM tb_turma 
WHERE codigo_turma LIKE "WEB2015-1";


SELECT hist_acad.matricula, hist_acad.codigo_turma, turma.codigo_disciplina, turma.codigo_professor, 
hist_acad.frequencia, hist_acad.nota 
FROM tb_historico_academico hist_acad 
INNER JOIN tb_turma turma 
ON hist_acad.codigo_turma = turma.codigo_turma 
WHERE hist_acad.matricula LIKE '2015010106';