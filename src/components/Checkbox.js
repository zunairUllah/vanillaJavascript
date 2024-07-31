import { getData } from '../api';

const Checkbox = async () => {
    const { data } = await getData();
    return (
        data ? `
            <div>
                ${data.map(c => (
                    `<li class="list-unstyled">
                        <input
                            type="checkbox"
                            class="form-check-input"
                            onchange="handleToggle('${c._id}')"
                        />
                        <label class="form-check-label">${c.name}</label>
                    </li>`
                )).join('')}
            </div>` : "Categories are not available"
    );
};

export default Checkbox;


