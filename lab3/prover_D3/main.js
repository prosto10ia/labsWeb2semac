document.getElementById('button').addEventListener("click", function() {
   const existUl = d3.select('ul');
   
   const listItems = [];
   existUl.selectAll('ol li').each(function() {
      listItems.push(d3.select(this).text());
   });


   const newUl = document.createElement('ul');

   d3.select(newUl)
      .selectAll('li')
      .data(listItems)
      .enter()
      .append('li')
      .text(d => d);


   existUl.node().parentNode.insertBefore(newUl, existUl.node().nextSibling);
   this.remove();
});
