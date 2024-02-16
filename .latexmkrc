# LaTeXmk configuration file

# Set the output directory for generated files

# Set the output format to PDF
$pdf_mode = 1;

# Enable continuous preview mode
$preview_continuous_mode = 1;

# Enable automatic compilation on file change
$preview_continuous_mode_delay = 0.5;

# Enable automatic cleanup of intermediate files
$clean_ext = 'bbl lof lot out toc aux';
@default_files = ('src/gr.tex');

# Set the default compiler to pdflatex
$pdf_mode = 1;
$pdflatex="pdflatex %O %S";

@default_files = ('cv/src/gr.tex');
$out_dir = 'cv/dist';
$aux_dir = 'cv/dist_aux';

# Set the default viewer to SumatraPDF
$pdf_previewer = 'C:\Users\Greg\AppData\Local\SumatraPDF\SumatraPDF.exe';
