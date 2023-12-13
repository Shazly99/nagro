import React from 'react'

const Instagram = ({ color }) => {
    return (
        <> 
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.856 1H5.85596C4.79509 1 3.77768 1.42143 3.02753 2.17157C2.27738 2.92172 1.85596 3.93913 1.85596 5V15C1.85596 16.0609 2.27738 17.0783 3.02753 17.8284C3.77768 18.5786 4.79509 19 5.85596 19H15.856C16.9168 19 17.9342 18.5786 18.6844 17.8284C19.4345 17.0783 19.856 16.0609 19.856 15V5C19.856 3.93913 19.4345 2.92172 18.6844 2.17157C17.9342 1.42143 16.9168 1 15.856 1Z" stroke={color} stroke-width="1.5" stroke-linejoin="round" />
                <path d="M10.856 14C11.9168 14 12.9342 13.5786 13.6844 12.8284C14.4345 12.0783 14.856 11.0609 14.856 10C14.856 8.9391 14.4345 7.92172 13.6844 7.17157C12.9342 6.42143 11.9168 6 10.856 6C9.7951 6 8.7777 6.42143 8.0275 7.17157C7.27738 7.92172 6.85596 8.9391 6.85596 10C6.85596 11.0609 7.27738 12.0783 8.0275 12.8284C8.7777 13.5786 9.7951 14 10.856 14Z" stroke={color} stroke-width="1.5" stroke-linejoin="round" />
                <path d="M16.356 5.5C16.6212 5.5 16.8755 5.39464 17.0631 5.20711C17.2506 5.01957 17.356 4.76522 17.356 4.5C17.356 4.23478 17.2506 3.98043 17.0631 3.79289C16.8755 3.60536 16.6212 3.5 16.356 3.5C16.0907 3.5 15.8364 3.60536 15.6488 3.79289C15.4613 3.98043 15.356 4.23478 15.356 4.5C15.356 4.76522 15.4613 5.01957 15.6488 5.20711C15.8364 5.39464 16.0907 5.5 16.356 5.5Z" fill={color} />
            </svg> 
        </>
    )
}

export default Instagram