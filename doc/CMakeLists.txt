cmake_minimum_required(VERSION 2.8)
project (hearts-score-book-doc)
include (../UseLATEX.cmake)

set (doc-staging-area "./doc-staging")

add_latex_document (
  score-book.tex
  CONFIGURE score-book.tex
  DEFAULT_PDF
)
