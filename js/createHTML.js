export const selectCardHTML = (el) => `
    <li class="choose__item">
        <button data-type="${el.name}" class="choose__link">
            <img
                loading="lazy"
                src="${el.selectImg}"
                alt="airpods ${el.name} design"
                width="150"
                height="175"
            />
        </button>
    </li>
`;
