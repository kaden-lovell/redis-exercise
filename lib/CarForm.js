export default function CarForm() {
    async function submit(event) {
        event.preventDefault();

        const form = new FormData(event.target);
        const formData = Object.fromEntries(form.entries());

        const response = await fetch('/api/cars',  {
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
        });

        const result = await response.json();
        console.log(result); 
    }

    return (
        <div>
            <form onSubmit={submit}>
                <div className="mt-3 form-group">
                    <label>Make:</label>
                    <input className="form-control" name="make" type="text"></input>
                </div>
                <div className="mt-3 form-group">
                    <label>Model:</label>
                    <input className="form-control" name="model" type="text"></input>
                    </div>

                <div class="mt-3 form-group">
                    <label>Image:</label>
                    <input type="file" className="form-control-file"/>
                </div>

                <div className="mt-3 form-group">
                    <label>Description:</label>
                    <textarea className="form-control" name="description" type="text"></textarea>
                </div>
                <div className="btn-group">
                    <button className="mt-3 btn btn-primary" type="submit">Create Car</button>
                </div>
            </form>
        </div>
    )
}