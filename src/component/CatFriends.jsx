import {useRef} from 'react';

export default function CatFriends() {
    const listRef = useRef(null); // để truy cập phần tử con

    function scrollToIndex(index) {
        const listNode = listRef.current;

        // tìm tất cả các thẻ img trong các thẻ li
        const imgNode = listNode.querySelectorAll('li > img')[index];

        // cuộn đến ảnh được chọn
        imgNode.scrollIntoView({
            behavior: 'smooth', // cuộn mượt
            block: 'nearest', // điều chỉnh theo chiều dọc
            inline: 'center', // căn giữa theo chiều ngang
        });
    }

    return (
        <>
            {/* điều hướng với index tương ứng */}
            <nav>
                <button onClick={() => scrollToIndex(0)}>Neo</button>
                <button onClick={() => scrollToIndex(1)}>Millie</button>
                <button onClick={() => scrollToIndex(2)}>Bella</button>
            </nav>

            <div>
                <ul ref={listRef}>
                    <li>
                        <img src="https://placecats.com/neo/300/200" alt="Neo" />
                    </li>
                    <li>
                        <img src="https://placecats.com/millie/200/200" alt="Millie" />
                    </li>
                    <li>
                        <img src="https://placecats.com/bella/199/200" alt="Bella" />
                    </li>
                </ul>
            </div>
        </>
    );
}