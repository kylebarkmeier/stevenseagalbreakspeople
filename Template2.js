d = document;
d.write("<body bgcolor=#CCD1E9 leftmargin='0' topmargin='0' marginwidth='0' marginheight='0'>");
d.write("<table border='0' cellspacing='0' cellpadding='0' width=750>");
d.write("<tr valign='top'>   <td colspan='2'>");
d.write("<map name='NavMap'>");
d.write("<area shape='rect' coords='153,64,207,81' id='Home' href='index.html'>");
d.write("<area shape='rect' coords='238,64,344,81' id='IMDB'"); d.write("href='http://www.imdb.com/name/nm0000219/' target=new>");
d.write("<area shape='rect' coords='381,64,420,81' id='FAQ' href='FAQ.html'>");
d.write("<area shape='rect' coords='447,65,528,83' id='Rankings' href='Rankings.html'>");
d.write("<area shape='rect' coords='556,65,625,81' id='Contact' href='Contact.html'></map>");
d.write("<img src='TopBar.jpg' width='695' height='88' usemap='#NavMap' border='0' alt='Welcome!'></td>");
d.write("</tr>");

d.write("<td width=130 valign=top>");
d.write("<table valign=top border=0 cellspacing='0' cellpadding='0' width=130>");
d.write("<tr valign='top'>");
d.write("<td width='130' colspan='2'>");
d.write("<img src='TopBorderMoviesNoTexture.jpg' width='123' height='49' alt='Welcome!'></td>");
d.write("</tr>");



d.write("<tr valign='top'><td width='117' align=center bgcolor=#878FB5>");
d.write("<font size=4>Movies</font> <hr NOSHADE color=black width=90%></td>");
d.write("<td width='13' align=left>");
d.write("<img src='RightBorderMovies.jpg'border='0' height='37' width='5' alt='Welcome!'></td></tr>");


for(i=0; i<Movies.length; i++)
   {MovieURL= Movies[i].replace(/ /g,"_") + ".html";
    document.write("<tr valign='top'><td width='117' align=center bgcolor=#878FB5>");
    document.write("<a href='"+MovieURL+"'>"+Movies[i] + "</td>");
    document.write("<td width='13' align=left>");
    document.write("<img src='RightBorderMovies.jpg' border='0' height='30' width='5' alt='Dan smells like poo :('></td></tr>");
   }


d.write("<tr valign=top><td valign=top align=left colspan=2> <img src='BottomBorderMovies.jpg'> </td> </tr>");
d.write("</table></td>");

d.write("<td width=620 VALIGN=top align=center>");

