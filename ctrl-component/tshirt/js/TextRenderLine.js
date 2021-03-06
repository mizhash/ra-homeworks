const TextRenderLine = ({value, onChange}) => {
	return (
		<div className="type-text">
			Наберите текст
			<div className="type-text">
				<textarea
					name="text"
					id="font-text"
					cols="30"
					rows="2"
					placeholder="Введите текст для футболки"
					value={value}
					onChange={(event) => onChange(event.currentTarget.value)}
				>
				</textarea>
			</div>
		</div>
	);
};
