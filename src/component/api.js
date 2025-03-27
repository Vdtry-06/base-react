// src/component/api.js
export async function fetchBio(person) {
    // Mô phỏng việc fetch dữ liệu
    const bios = {
        'Trong': 'Trong is a software engineer who loves coding.',
        'Lam': 'Lam is a product manager with a passion for design.',
        'Dat': 'Dat is a data scientist interested in machine learning.'
    };

    // Giả lập độ trễ mạng
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Trả về bio tương ứng với person
    return bios[person] || 'No bio available';
}