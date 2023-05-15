import React, { Component } from 'react';
import "./ScrollableArray.css";


// class ScrollableArray extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       scrollPosition: 0,
//       items: [1,2,3,4,5,6] // your array of items
//     };
//   }

//   scrollLeft = () => {
//     const { scrollPosition } = this.state;
//     const newScrollPosition = scrollPosition - 1;
//     this.setState({ scrollPosition: newScrollPosition });
//   }

//   scrollRight = () => {
//     const { scrollPosition } = this.state;
//     const newScrollPosition = scrollPosition + 1;
//     this.setState({ scrollPosition: newScrollPosition });
//   }

//   render() {
//     const { scrollPosition, items } = this.state;

//     return (
//       <div className="scrollable-container">
//         <button onClick={this.scrollLeft}>&#8592;</button> {/* Left arrow */}
        
//         <div className="scrollable-array">
//           <div
//             className="scrollable-content"
//             style={{ transform: `translateX(${scrollPosition * -100}%)` }}
//           >
//             {items.map((item, index) => (
//               <div key={index}>{item}</div>
//             ))}
//           </div>
//         </div>
        
//         <button onClick={this.scrollRight}>&#8594;</button> {/* Right arrow */}
//       </div>
//     );
//   }
// }

// export default ScrollableArray;






class ScrollableArray extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0, 
      itemsPerPage: 4,
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] // your array of items
    };
  }

  scrollLeft = () => {
    const { currentPage } = this.state;
    const newPage = currentPage - 1 >= 0 ? currentPage - 1 : 0;
    this.setState({ currentPage: newPage });
  }

  scrollRight = () => {
    const { currentPage, itemsPerPage, items } = this.state;
    const maxPage = Math.ceil(items.length / itemsPerPage) - 1;
    const newPage = currentPage + 1 <= maxPage ? currentPage + 1 : maxPage;

    const visibleItems = items.slice(newPage * itemsPerPage, (newPage + 1) * itemsPerPage);
    if (visibleItems.length > 0) {
      this.setState({ currentPage: newPage });
    }
  }

  render() {
    const { currentPage, itemsPerPage, items } = this.state;
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const visibleItems = items.slice(startIndex, endIndex);

    return (
      <div className="scrollable-container">
        <button onClick={this.scrollLeft}>&#8592;</button> {/* Left arrow */}

        <div className="scrollable-array">
          <div
            className="scrollable-content"
            style={{ transform: `translateX(-${currentPage * 100}%)` }}
          >
            {visibleItems.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>
        </div>

        <button onClick={this.scrollRight}>&#8594;</button> {/* Right arrow */}
      </div>
    );
  }
}

export default ScrollableArray;
