import { Target, Heart, Shield } from 'lucide-react';

const Nosotros = () => {
  return (
    <div className='bg-white py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Sección Principal */}
        <div className='text-center'>
          <h1 className='text-4xl font-bold text-[#ff5501]'>Sobre Nosotros</h1>
          <p className='mt-4 text-xl text-gray-600 max-w-3xl mx-auto'>
            Somos una cooperativa comprometida con el bienestar y desarrollo
            económico de los docentes en Colombia.
          </p>
        </div>

        {/* Misión, Visión y Valores */}
        <div className='mt-16 grid grid-cols-1 gap-8 md:grid-cols-3'>
          {/* Misión */}
          <div className='text-center'>
            <div className='flex justify-center'>
              <Target className='h-12 w-12 text-[#228b22]' />
            </div>
            <h3 className='mt-4 text-xl font-semibold text-[#ff5501]'>
              Misión
            </h3>
            <p className='mt-2 text-gray-600'>
              Mejorar la calidad de vida del asociado, su familia y personal
              administrativo mediante servicios solidarios y equitativos.
            </p>
          </div>

          {/* Visión */}
          <div className='text-center'>
            <div className='flex justify-center'>
              <Heart className='h-12 w-12 text-[#228b22]' />
            </div>
            <h3 className='mt-4 text-xl font-semibold text-[#ff5501]'>
              Visión
            </h3>
            <p className='mt-2 text-gray-600'>
              Ser la cooperativa líder en servicios financieros para el sector
              educativo, reconocida por su solidez y compromiso social.
            </p>
          </div>

          {/* Valores */}
          <div className='text-center'>
            <div className='flex justify-center'>
              <Shield className='h-12 w-12 text-[#228b22]' />
            </div>
            <h3 className='mt-4 text-xl font-semibold text-[#ff5501]'>
              Valores
            </h3>
            <p className='mt-2 text-gray-600'>
              Nos fundamentamos en la honestidad, responsabilidad, solidaridad y
              compromiso con nuestros asociados.
            </p>
          </div>
        </div>

        {/* Historia */}
        <div className='mt-16'>
          <h2 className='text-3xl font-bold text-[#ff5501] text-center'>
            Nuestra Historia
          </h2>
          <p className='mt-4 text-gray-600 max-w-3xl mx-auto text-center'>
            Desde nuestra fundación, hemos trabajado incansablemente por el
            bienestar de los docentes colombianos, creciendo y evolucionando
            para ofrecer cada vez mejores servicios y beneficios a nuestros
            asociados.
          </p>
        </div>

        {/* Documentos Normativos */}
        <div className='mt-16'>
          <h2 className='text-3xl font-bold text-[#ff5501] text-center mb-8'>
            Documentos Normativos
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <a
              href='#'
              className='block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow'
            >
              <h3 className='text-xl font-semibold text-[#ff5501] mb-2'>
                Código de Buen Gobierno
              </h3>
              <p className='text-gray-600'>
                Descarga nuestro código de buen gobierno corporativo
              </p>
            </a>
            <a
              href='#'
              className='block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow'
            >
              <h3 className='text-xl font-semibold text-[#ff5501] mb-2'>
                Reglamento de Aportes
              </h3>
              <p className='text-gray-600'>
                Conoce nuestro reglamento de aportes y beneficios
              </p>
            </a>
            <a
              href='#'
              className='block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow'
            >
              <h3 className='text-xl font-semibold text-[#ff5501] mb-2'>
                Política de Datos
              </h3>
              <p className='text-gray-600'>
                Consulta nuestra política de tratamiento de datos personales
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
