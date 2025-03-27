import 'leaflet/dist/leaflet.css';
import * as L from 'leaflet';

export class MapWidget {
    constructor(domNode) {
        this.map = L.map(domNode, {
            zoomControl: false, // Tắt nút điều khiển thu phóng (+/-) trên bản đồ.
            doubleClickZoom: false, // Tắt tính năng thu phóng khi nhấp đúp chuột.
            boxZoom: false, // Tắt tính năng thu phóng bằng cách kéo khung (box) trên bản đồ.
            keyboard: false, // Tắt điều khiển bản đồ bằng bàn phím (ví dụ: mũi tên).
            scrollWheelZoom: false, // Tắt thu phóng bằng bánh xe chuột.
            zoomAnimation: false, // Tắt hiệu ứng chuyển động khi thu phóng.
            touchZoom: false, // Tắt thu phóng bằng cử chỉ chạm (pinch-to-zoom) trên thiết bị cảm ứng.
            zoomSnap: 0.1 // Đặt mức độ "bám" của thu phóng là 0.1 (thay vì giá trị mặc định 1), cho phép thu phóng mịn hơn.
        });
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap'
        }).addTo(this.map);
        this.map.setView([0, 0], 0);
    }
    setZoom(level) {
        this.map.setZoom(level);
    }
}