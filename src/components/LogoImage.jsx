import LogoCloud from '../asset/Splash.svg'

const LogoImage = ({ imgSrc, imgAlt, imgWidth, imgHeight }) => {

    return (
        <>
            <img
                src={imgSrc}
                alt={imgAlt}
                width={imgWidth}
                height={imgHeight}
                className="d-inline-block align-right"
                style={{
                    backgroundImage: `url(${LogoCloud})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain"
                }}
            />
        </>
    )

}

export default LogoImage