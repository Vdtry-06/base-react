import {useEffect, useRef} from 'react';
import { MapWidget } from './MapWidget';

export default function Map({zoomLevel}) {
    const containerRef = useRef(null); // tham chiếu đến phần tử DOM nơi bản đồ sẽ được hiển thị
    const mapRef = useRef(null); // Lưu trữ Mapwidget để tránh tạo lại mỗi khi render

    useEffect(() => {
        if(mapRef.current === null) { // tạo mới mapwidget sử dụng phần tử DOM của container
            mapRef.current = new MapWidget(containerRef.current);
        }

        const map = mapRef.current;
        map.setZoom(zoomLevel); // đặt mức zoom của bản đồ dựa trên prop zoomlevel
    }, [zoomLevel])

    return (
        <div
            style={{width: 400, height: 400}}
            ref={containerRef}
        />
    );
}