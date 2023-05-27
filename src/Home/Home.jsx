import './Home.css'

export function Home() {
    const handleClick = (e) => {
        const options = document.querySelectorAll('.option');
        options.forEach((option) => option.classList.remove('active'));
        e.target.closest('.option').classList.add('active');
    };

    return (
        <>
            <div className="options">
                <div
                    className="option active"
                    style={{ '--optionBackground': 'url(../../../../src/assets/Image/Imagen5.jpg)' }}
                    onClick={handleClick}
                >
                    <div className="shadow"></div>
                    <div className="label">
                        <div className="icon">
                            <img src="../../src/assets/Image/logo.png" alt="" />
                        </div>
                        <div className="info">
                            <div className="main">Conoce sobre nosotros</div>
                            <div className="sub"></div>
                        </div>
                    </div>
                </div>
                <div
                    className="option"
                    style={{
                        '--optionBackground': 'url(../../../../src/assets/Image/Imagen1.jpg)',
                        backgroundSize: 'cover',
                    }}
                    onClick={handleClick}
                >
                    <div className="shadow"></div>
                    <div className="label">
                        <div className="icon">
                            <style></style>
                            <img src="../../src/assets/Image/logo.png" alt="" />
                        </div>
                        <div className="info">
                            <div className="main">Aprende fácil</div>
                            <div className="sub"></div>
                        </div>
                    </div>
                </div>
                <div
                    className="option"
                    style={{
                        '--optionBackground': 'url(../../../../src/assets/Image/Imagen2.jpg)',
                        backgroundSize: 'cover',
                    }}
                    onClick={handleClick}
                >
                    <div className="shadow"></div>
                    <div className="label">
                        <div className="icon">
                            <img src="../../src/assets/Image/logo.png" alt="" />
                        </div>
                        <div className="info">
                            <div className="main">Disfruta las clases</div>
                            <div className="sub"></div>
                        </div>
                    </div>
                </div>
                <div
                    className="option"
                    style={{
                        '--optionBackground': 'url(../../../../src/assets/Image/Imagen3.jpg)',
                        backgroundSize: 'cover',
                    }}
                    onClick={handleClick}
                >
                    <div className="shadow"></div>
                    <div className="label">
                        <div className="icon">
                            <img src="../../src/assets/Image/logo.png" alt="" />
                        </div>
                        <div className="info">
                            <div className="main">Usa las herramientas</div>
                            <div className="sub"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}