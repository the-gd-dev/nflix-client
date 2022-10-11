import React from 'react'

const Footer = props => {
  return (
    <div className='footer-container'>
        <div className='dev__signature'>A good developer production</div>
        <div className='technologies__used'>
            <div><img src="https://nodejs.org/static/images/logo.svg" height="50" /></div>
            <div><img src="https://webimages.mongodb.com/_com_assets/cms/kuyj3d95v5vbmm2f4-horizontal_white.svg?auto=format%252Ccompress" height="35" /></div>
            <div><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" height="35" /></div>
            <div className='plus__icon'>+</div>
            <div><img src="https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" height="35" /></div>
        </div>
        <div>Netflix Clone &copy;2022</div>
    </div>
  )
}


export default Footer