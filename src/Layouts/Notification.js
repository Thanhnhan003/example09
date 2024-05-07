import React from 'react'

function Notification() {
    const handleCloseNotification = () => {
        const notification = document.querySelector('.notification-toast');
        notification.style.display = 'none'; // Ẩn thông báo khi nhấp vào nút đóng
    };

    return (
        <div className="notification-toast" data-toast>
            {/* Nút đóng thông báo */}
            <button className="toast-close-btn" data-toast-close onClick={handleCloseNotification}>
                <ion-icon name="close-outline" role="img" className="md hydrated" aria-label="close outline" />
            </button>
            <div className="toast-banner">
                <img src={require("../assets/images/products/jewellery-1.jpg")} alt="Rose Gold Earrings" width={80} height={70} />
            </div>
            <div className="toast-detail">
                <p className="toast-message">
                    Someone in new just bought
                </p>
                <p className="toast-title">
                    Rose Gold Earrings
                </p>
                <p className="toast-meta">
                    <time dateTime="PT2M">2 Minutes</time> ago
                </p>
            </div>
        </div>

    )
}

export default Notification
