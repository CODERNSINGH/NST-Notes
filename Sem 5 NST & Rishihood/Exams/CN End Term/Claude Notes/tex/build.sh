#!/bin/bash
# usage: build.sh N  -> builds standalone LectureNN.pdf
cd "$(dirname "$0")"
n=$1; nn=$(printf "%02d" $n)
cat > Lecture$nn.tex <<EOT
\documentclass[11pt]{report}
\input{preamble}
\begin{document}
\setcounter{chapter}{$((n-1))}
\input{lec$nn}
\end{document}
EOT
pdflatex -interaction=nonstopmode -halt-on-error Lecture$nn.tex >/dev/null 2>&1; pdflatex -interaction=nonstopmode -halt-on-error Lecture$nn.tex > build$nn.log 2>&1
if [ $? -ne 0 ]; then grep -A5 '^!' Lecture$nn.log | head -20; else echo "OK $nn $(pdfinfo Lecture$nn.pdf | grep Pages)"; grep -c 'Overfull' Lecture$nn.log; fi
exit 0
