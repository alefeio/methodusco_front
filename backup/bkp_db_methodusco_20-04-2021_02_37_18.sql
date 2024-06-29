--
-- PostgreSQL database cluster dump
--

SET default_transaction_read_only = off;

SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;

--
-- Drop databases (except postgres and template1)
--

DROP DATABASE methodusco;




--
-- Drop roles
--

DROP ROLE postgres;


--
-- Roles
--

CREATE ROLE postgres;
ALTER ROLE postgres WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN REPLICATION BYPASSRLS PASSWORD 'md505f61dd85ab67dee8de0aca5171f210d';






--
-- Databases
--

--
-- Database "template1" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 13.0 (Debian 13.0-1.pgdg100+1)
-- Dumped by pg_dump version 13.0 (Debian 13.0-1.pgdg100+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

UPDATE pg_catalog.pg_database SET datistemplate = false WHERE datname = 'template1';
DROP DATABASE template1;
--
-- Name: template1; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE template1 WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.utf8';


ALTER DATABASE template1 OWNER TO postgres;

\connect template1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: DATABASE template1; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON DATABASE template1 IS 'default template for new databases';


--
-- Name: template1; Type: DATABASE PROPERTIES; Schema: -; Owner: postgres
--

ALTER DATABASE template1 IS_TEMPLATE = true;


\connect template1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: DATABASE template1; Type: ACL; Schema: -; Owner: postgres
--

REVOKE CONNECT,TEMPORARY ON DATABASE template1 FROM PUBLIC;
GRANT CONNECT ON DATABASE template1 TO PUBLIC;


--
-- PostgreSQL database dump complete
--

--
-- Database "methodusco" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 13.0 (Debian 13.0-1.pgdg100+1)
-- Dumped by pg_dump version 13.0 (Debian 13.0-1.pgdg100+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: methodusco; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE methodusco WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.utf8';


ALTER DATABASE methodusco OWNER TO postgres;

\connect methodusco

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);


ALTER TABLE public."SequelizeMeta" OWNER TO postgres;

--
-- Name: aulas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.aulas (
    id integer NOT NULL,
    numero character varying(255) NOT NULL,
    "dataInicio" timestamp with time zone,
    "dataFim" timestamp with time zone,
    prova_id integer NOT NULL,
    usuario_id integer NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);


ALTER TABLE public.aulas OWNER TO postgres;

--
-- Name: aulas_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.aulas_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.aulas_id_seq OWNER TO postgres;

--
-- Name: aulas_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.aulas_id_seq OWNED BY public.aulas.id;


--
-- Name: categoria; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.categoria (
    id integer NOT NULL,
    nome character varying(255) NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);


ALTER TABLE public.categoria OWNER TO postgres;

--
-- Name: categoria_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.categoria_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.categoria_id_seq OWNER TO postgres;

--
-- Name: categoria_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.categoria_id_seq OWNED BY public.categoria.id;


--
-- Name: chamados; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.chamados (
    id integer NOT NULL,
    usuario_id integer NOT NULL,
    assunto character varying(255),
    mensagem text NOT NULL,
    concluido boolean DEFAULT false,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);


ALTER TABLE public.chamados OWNER TO postgres;

--
-- Name: chamados_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.chamados_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.chamados_id_seq OWNER TO postgres;

--
-- Name: chamados_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.chamados_id_seq OWNED BY public.chamados.id;


--
-- Name: exercicios; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.exercicios (
    id integer NOT NULL,
    questao integer NOT NULL,
    subquestao integer NOT NULL,
    resposta integer,
    categoria_id integer NOT NULL,
    modulo_id integer NOT NULL,
    tipo_id integer,
    admin_id integer NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);


ALTER TABLE public.exercicios OWNER TO postgres;

--
-- Name: exercicios_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.exercicios_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.exercicios_id_seq OWNER TO postgres;

--
-- Name: exercicios_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.exercicios_id_seq OWNED BY public.exercicios.id;


--
-- Name: modulos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.modulos (
    id integer NOT NULL,
    nome character varying(255) NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);


ALTER TABLE public.modulos OWNER TO postgres;

--
-- Name: modulos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.modulos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.modulos_id_seq OWNER TO postgres;

--
-- Name: modulos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.modulos_id_seq OWNED BY public.modulos.id;


--
-- Name: niveis; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.niveis (
    id integer NOT NULL,
    nome character varying(255) NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);


ALTER TABLE public.niveis OWNER TO postgres;

--
-- Name: niveis_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.niveis_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.niveis_id_seq OWNER TO postgres;

--
-- Name: niveis_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.niveis_id_seq OWNED BY public.niveis.id;


--
-- Name: provas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.provas (
    id integer NOT NULL,
    avaliacao boolean DEFAULT false,
    aula01 boolean DEFAULT false,
    aula02 boolean DEFAULT false,
    aula03 boolean DEFAULT false,
    aula04 boolean DEFAULT false,
    aula05 boolean DEFAULT false,
    aula06 boolean DEFAULT false,
    aula07 boolean DEFAULT false,
    aula08 boolean DEFAULT false,
    aula09 boolean DEFAULT false,
    aula10 boolean DEFAULT false,
    aula11 boolean DEFAULT false,
    aula12 boolean DEFAULT false,
    aula13 boolean DEFAULT false,
    aula14 boolean DEFAULT false,
    aula15 boolean DEFAULT false,
    aula16 boolean DEFAULT false,
    finalizada boolean DEFAULT false,
    usuario_id integer NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);


ALTER TABLE public.provas OWNER TO postgres;

--
-- Name: provas2; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.provas2 (
    id integer NOT NULL,
    nota double precision DEFAULT '0'::double precision,
    finalizada boolean DEFAULT false,
    usuario_id integer NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);


ALTER TABLE public.provas2 OWNER TO postgres;

--
-- Name: provas2_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.provas2_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.provas2_id_seq OWNER TO postgres;

--
-- Name: provas2_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.provas2_id_seq OWNED BY public.provas2.id;


--
-- Name: provas2s; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.provas2s (
    id integer NOT NULL,
    nota double precision DEFAULT '0'::double precision,
    finalizada boolean DEFAULT false,
    monitor01 double precision DEFAULT '0'::double precision,
    monitor02 double precision DEFAULT '0'::double precision,
    monitor03 double precision DEFAULT '0'::double precision,
    monitor04 double precision DEFAULT '0'::double precision,
    monitor05 double precision DEFAULT '0'::double precision,
    monitor06 double precision DEFAULT '0'::double precision,
    monitor07 double precision DEFAULT '0'::double precision,
    monitor08 double precision DEFAULT '0'::double precision,
    monitor09 double precision DEFAULT '0'::double precision,
    percepcao01 double precision DEFAULT '0'::double precision,
    percepcao02 double precision DEFAULT '0'::double precision,
    percepcao03 double precision DEFAULT '0'::double precision,
    usuario_id integer NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    aula integer DEFAULT 0 NOT NULL
);


ALTER TABLE public.provas2s OWNER TO postgres;

--
-- Name: provas2s_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.provas2s_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.provas2s_id_seq OWNER TO postgres;

--
-- Name: provas2s_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.provas2s_id_seq OWNED BY public.provas2s.id;


--
-- Name: provas3s; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.provas3s (
    id integer NOT NULL,
    nota double precision DEFAULT '0'::double precision,
    finalizada boolean DEFAULT false,
    usuario_id integer NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);


ALTER TABLE public.provas3s OWNER TO postgres;

--
-- Name: provas3s_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.provas3s_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.provas3s_id_seq OWNER TO postgres;

--
-- Name: provas3s_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.provas3s_id_seq OWNED BY public.provas3s.id;


--
-- Name: provas_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.provas_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.provas_id_seq OWNER TO postgres;

--
-- Name: provas_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.provas_id_seq OWNED BY public.provas.id;


--
-- Name: resposta; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.resposta (
    id integer NOT NULL,
    resposta integer NOT NULL,
    prova_id integer NOT NULL,
    exercicio_id integer NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);


ALTER TABLE public.resposta OWNER TO postgres;

--
-- Name: resposta_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.resposta_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.resposta_id_seq OWNER TO postgres;

--
-- Name: resposta_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.resposta_id_seq OWNED BY public.resposta.id;


--
-- Name: respostaschamados; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.respostaschamados (
    id integer NOT NULL,
    usuario_id integer NOT NULL,
    chamado_id integer NOT NULL,
    mensagem text NOT NULL,
    data character varying(255),
    lido boolean DEFAULT false,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);


ALTER TABLE public.respostaschamados OWNER TO postgres;

--
-- Name: respostaschamados_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.respostaschamados_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.respostaschamados_id_seq OWNER TO postgres;

--
-- Name: respostaschamados_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.respostaschamados_id_seq OWNED BY public.respostaschamados.id;


--
-- Name: testes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.testes (
    id integer NOT NULL,
    numero integer NOT NULL,
    plm double precision,
    pcr integer,
    pcm double precision,
    horas double precision,
    finalizado boolean DEFAULT false,
    nivel_id integer NOT NULL,
    prova_id integer NOT NULL,
    usuario_id integer NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);


ALTER TABLE public.testes OWNER TO postgres;

--
-- Name: testes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.testes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.testes_id_seq OWNER TO postgres;

--
-- Name: testes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.testes_id_seq OWNED BY public.testes.id;


--
-- Name: tipos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tipos (
    id integer NOT NULL,
    nome character varying(255) NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);


ALTER TABLE public.tipos OWNER TO postgres;

--
-- Name: tipos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tipos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tipos_id_seq OWNER TO postgres;

--
-- Name: tipos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tipos_id_seq OWNED BY public.tipos.id;


--
-- Name: usuarios; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usuarios (
    id integer NOT NULL,
    nome character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password_hash character varying(255),
    admin boolean DEFAULT false NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);


ALTER TABLE public.usuarios OWNER TO postgres;

--
-- Name: usuarios_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.usuarios_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.usuarios_id_seq OWNER TO postgres;

--
-- Name: usuarios_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.usuarios_id_seq OWNED BY public.usuarios.id;


--
-- Name: aulas id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.aulas ALTER COLUMN id SET DEFAULT nextval('public.aulas_id_seq'::regclass);


--
-- Name: categoria id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categoria ALTER COLUMN id SET DEFAULT nextval('public.categoria_id_seq'::regclass);


--
-- Name: chamados id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chamados ALTER COLUMN id SET DEFAULT nextval('public.chamados_id_seq'::regclass);


--
-- Name: exercicios id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.exercicios ALTER COLUMN id SET DEFAULT nextval('public.exercicios_id_seq'::regclass);


--
-- Name: modulos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.modulos ALTER COLUMN id SET DEFAULT nextval('public.modulos_id_seq'::regclass);


--
-- Name: niveis id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.niveis ALTER COLUMN id SET DEFAULT nextval('public.niveis_id_seq'::regclass);


--
-- Name: provas id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.provas ALTER COLUMN id SET DEFAULT nextval('public.provas_id_seq'::regclass);


--
-- Name: provas2 id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.provas2 ALTER COLUMN id SET DEFAULT nextval('public.provas2_id_seq'::regclass);


--
-- Name: provas2s id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.provas2s ALTER COLUMN id SET DEFAULT nextval('public.provas2s_id_seq'::regclass);


--
-- Name: provas3s id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.provas3s ALTER COLUMN id SET DEFAULT nextval('public.provas3s_id_seq'::regclass);


--
-- Name: resposta id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.resposta ALTER COLUMN id SET DEFAULT nextval('public.resposta_id_seq'::regclass);


--
-- Name: respostaschamados id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.respostaschamados ALTER COLUMN id SET DEFAULT nextval('public.respostaschamados_id_seq'::regclass);


--
-- Name: testes id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.testes ALTER COLUMN id SET DEFAULT nextval('public.testes_id_seq'::regclass);


--
-- Name: tipos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tipos ALTER COLUMN id SET DEFAULT nextval('public.tipos_id_seq'::regclass);


--
-- Name: usuarios id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios ALTER COLUMN id SET DEFAULT nextval('public.usuarios_id_seq'::regclass);


--
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."SequelizeMeta" (name) FROM stdin;
20200329073206-create-usuarios.js
20200331170948-create-niveis.js
20200403005533-create-provas.js
20200403005533-create-testes.js
20200417191620-create-chamados.js
20200908194605-create-aulas.js
20200928072834-create-respostas-chamados.js
20201211202538-create-prova2.js
20201212071705-create-categorias.js
20201212071744-create-modulos.js
20201212071801-create-tipos.js
20201212071528-create-exercicios.js
20201211201748-create-resposta.js
20201222055200-provas3.js
20201229195518-create-provas2s.js
20210105154040-remove-field-prova_id-resposta.js
20210105154040-droptable-resposta.js
20210105165855-resposta2.js
20210122171523-add-field-aula-provas2s.js
\.


--
-- Data for Name: aulas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.aulas (id, numero, "dataInicio", "dataFim", prova_id, usuario_id, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: categoria; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.categoria (id, nome, created_at, updated_at) FROM stdin;
1	Leitura Dinâmica	2020-12-17 15:59:47.212+00	2020-12-17 15:59:47.212+00
2	Memorização	2020-12-21 16:27:47.175+00	2020-12-21 16:27:47.175+00
\.


--
-- Data for Name: chamados; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.chamados (id, usuario_id, assunto, mensagem, concluido, created_at, updated_at) FROM stdin;
1	1	Testando	Estou com problemas no Teste 1.	f	2020-10-27 17:32:20.951+00	2020-10-27 17:32:20.951+00
\.


--
-- Data for Name: exercicios; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.exercicios (id, questao, subquestao, resposta, categoria_id, modulo_id, tipo_id, admin_id, created_at, updated_at) FROM stdin;
1	1	1	0	1	1	1	1	2020-12-18 15:20:46.127+00	2020-12-18 15:20:46.127+00
2	2	1	0	1	1	1	1	2020-12-18 16:13:46.195+00	2020-12-18 16:13:46.195+00
3	3	1	1	1	1	1	1	2020-12-18 16:14:14.667+00	2020-12-18 16:14:14.667+00
4	3	2	1	1	1	1	1	2020-12-18 16:15:11.371+00	2020-12-18 16:15:11.371+00
5	3	3	0	1	1	1	1	2020-12-18 16:15:31.447+00	2020-12-18 16:15:31.447+00
6	3	4	1	1	1	1	1	2020-12-18 16:15:43.384+00	2020-12-18 16:15:43.384+00
7	3	5	0	1	1	1	1	2020-12-18 16:16:15.964+00	2020-12-18 16:16:15.964+00
8	3	6	0	1	1	1	1	2020-12-18 16:16:28.147+00	2020-12-18 16:16:28.147+00
9	3	7	1	1	1	1	1	2020-12-18 16:16:36.609+00	2020-12-18 16:16:36.609+00
10	3	8	0	1	1	1	1	2020-12-18 16:16:46.281+00	2020-12-18 16:16:46.281+00
11	3	9	1	1	1	1	1	2020-12-18 16:16:55.721+00	2020-12-18 16:16:55.721+00
12	3	10	1	1	1	1	1	2020-12-18 16:17:12.224+00	2020-12-18 16:17:12.224+00
13	3	11	1	1	1	1	1	2020-12-18 16:17:20.575+00	2020-12-18 16:17:20.575+00
14	3	12	0	1	1	1	1	2020-12-18 16:17:32.669+00	2020-12-18 16:17:32.669+00
15	3	13	1	1	1	1	1	2020-12-18 16:17:43.49+00	2020-12-18 16:17:43.49+00
16	3	14	0	1	1	1	1	2020-12-18 16:18:53.558+00	2020-12-18 16:18:53.558+00
17	3	15	1	1	1	1	1	2020-12-18 16:19:03.23+00	2020-12-18 16:19:03.23+00
18	3	16	1	1	1	1	1	2020-12-18 16:19:10.627+00	2020-12-18 16:19:10.627+00
19	3	17	4	1	1	1	1	2020-12-18 16:19:29.657+00	2020-12-18 16:19:29.657+00
20	3	18	3	1	1	1	1	2020-12-18 16:19:38.247+00	2020-12-18 16:19:38.247+00
21	3	19	1	1	1	1	1	2020-12-18 16:20:00.575+00	2020-12-18 16:20:00.575+00
22	3	20	4	1	1	1	1	2020-12-18 16:20:11.601+00	2020-12-18 16:20:11.601+00
23	3	21	2	1	1	1	1	2020-12-18 16:20:19.611+00	2020-12-18 16:20:19.611+00
24	3	22	3	1	1	1	1	2020-12-18 16:20:27.261+00	2020-12-18 16:20:27.261+00
25	3	23	4	1	1	1	1	2020-12-18 16:20:35.033+00	2020-12-18 16:20:35.033+00
26	3	24	2	1	1	1	1	2020-12-18 16:20:43.695+00	2020-12-18 16:20:43.695+00
27	3	25	3	1	1	1	1	2020-12-18 16:20:53.661+00	2020-12-18 16:20:53.661+00
28	3	26	4	1	1	1	1	2020-12-18 16:21:08.241+00	2020-12-18 16:21:08.241+00
29	3	27	2	1	1	1	1	2020-12-18 16:21:15.229+00	2020-12-18 16:21:15.229+00
30	3	28	1	1	1	1	1	2020-12-18 16:21:22.211+00	2020-12-18 16:21:22.211+00
31	3	29	1	1	1	1	1	2020-12-18 16:21:27.564+00	2020-12-18 16:21:27.564+00
32	3	30	3	1	1	1	1	2020-12-18 16:21:35.204+00	2020-12-18 16:21:35.204+00
33	3	31	4	1	1	1	1	2020-12-18 16:21:42.569+00	2020-12-18 16:21:42.569+00
34	3	32	3	1	1	1	1	2020-12-18 16:21:48.823+00	2020-12-18 16:21:48.823+00
35	3	33	4	1	1	1	1	2020-12-18 16:22:18.62+00	2020-12-18 16:22:18.62+00
36	3	34	2	1	1	1	1	2020-12-18 16:22:26.497+00	2020-12-18 16:22:26.497+00
37	4	1	2	1	1	1	1	2020-12-18 16:22:39.598+00	2020-12-18 16:22:39.598+00
38	4	2	2	1	1	1	1	2020-12-18 16:22:50.107+00	2020-12-18 16:22:50.107+00
39	4	3	3	1	1	1	1	2020-12-18 16:22:57.889+00	2020-12-18 16:22:57.889+00
40	4	4	1	1	1	1	1	2020-12-18 16:23:03.892+00	2020-12-18 16:23:03.892+00
41	4	5	3	1	1	1	1	2020-12-18 16:23:09.685+00	2020-12-18 16:23:09.685+00
42	4	6	1	1	1	1	1	2020-12-18 16:23:17.566+00	2020-12-18 16:23:17.566+00
43	4	7	2	1	1	1	1	2020-12-18 16:23:32.531+00	2020-12-18 16:23:32.531+00
44	4	8	1	1	1	1	1	2020-12-18 16:33:55.587+00	2020-12-18 16:33:55.587+00
45	4	9	3	1	1	1	1	2020-12-18 16:34:07.43+00	2020-12-18 16:34:07.43+00
46	4	10	2	1	1	1	1	2020-12-18 16:34:18.477+00	2020-12-18 16:34:18.477+00
47	4	11	1	1	1	1	1	2020-12-18 16:34:28.255+00	2020-12-18 16:34:28.255+00
48	4	12	2	1	1	1	1	2020-12-18 16:34:38.595+00	2020-12-18 16:34:38.595+00
49	4	13	2	1	1	1	1	2020-12-18 16:34:44.882+00	2020-12-18 16:34:44.882+00
50	4	14	3	1	1	1	1	2020-12-18 16:34:51.378+00	2020-12-18 16:34:51.378+00
51	4	15	1	1	1	1	1	2020-12-18 16:34:58.477+00	2020-12-18 16:34:58.477+00
52	4	16	4	1	1	1	1	2020-12-18 16:35:09.476+00	2020-12-18 16:35:09.476+00
53	4	17	2	1	1	1	1	2020-12-18 16:35:17.841+00	2020-12-18 16:35:17.841+00
54	4	18	1	1	1	1	1	2020-12-18 16:35:24.078+00	2020-12-18 16:35:24.078+00
55	4	19	3	1	1	1	1	2020-12-18 16:35:36.451+00	2020-12-18 16:35:36.451+00
56	4	20	1	1	1	1	1	2020-12-18 16:35:42.231+00	2020-12-18 16:35:42.231+00
57	4	21	3	1	1	1	1	2020-12-18 16:35:49.053+00	2020-12-18 16:35:49.053+00
58	4	22	2	1	1	1	1	2020-12-18 16:35:56.398+00	2020-12-18 16:35:56.398+00
59	4	23	3	1	1	1	1	2020-12-18 16:36:04.018+00	2020-12-18 16:36:04.018+00
60	5	1	1	1	1	1	1	2020-12-18 16:36:14.8+00	2020-12-18 16:36:14.8+00
61	5	2	1	1	1	1	1	2020-12-18 16:36:21.688+00	2020-12-18 16:36:21.688+00
62	5	3	0	1	1	1	1	2020-12-18 16:36:27.149+00	2020-12-18 16:36:27.149+00
63	5	4	1	1	1	1	1	2020-12-18 16:36:32.921+00	2020-12-18 16:36:32.921+00
64	5	5	0	1	1	1	1	2020-12-18 16:36:38.706+00	2020-12-18 16:36:38.706+00
65	5	6	0	1	1	1	1	2020-12-18 16:36:45.335+00	2020-12-18 16:36:45.335+00
66	5	7	1	1	1	1	1	2020-12-18 16:36:51.277+00	2020-12-18 16:36:51.277+00
67	5	8	1	1	1	1	1	2020-12-18 16:36:57.525+00	2020-12-18 16:36:57.525+00
68	5	9	1	1	1	1	1	2020-12-18 16:37:02.361+00	2020-12-18 16:37:02.361+00
69	5	10	0	1	1	1	1	2020-12-18 16:37:12.027+00	2020-12-18 16:37:12.027+00
70	5	11	1	1	1	1	1	2020-12-18 16:37:19.403+00	2020-12-18 16:37:19.403+00
71	5	12	0	1	1	1	1	2020-12-18 16:37:25.096+00	2020-12-18 16:37:25.096+00
72	5	13	4	1	1	1	1	2020-12-18 16:37:31.84+00	2020-12-18 16:37:31.84+00
73	5	14	1	1	1	1	1	2020-12-18 16:37:38.117+00	2020-12-18 16:37:38.117+00
74	5	15	1	1	1	1	1	2020-12-18 16:37:45.557+00	2020-12-18 16:37:45.557+00
75	5	16	2	1	1	1	1	2020-12-18 16:37:56.108+00	2020-12-18 16:37:56.108+00
76	5	17	3	1	1	1	1	2020-12-18 16:38:03.322+00	2020-12-18 16:38:03.322+00
77	5	18	1	1	1	1	1	2020-12-18 16:38:08.851+00	2020-12-18 16:38:08.851+00
78	5	19	3	1	1	1	1	2020-12-18 16:38:16.459+00	2020-12-18 16:38:16.459+00
79	5	20	4	1	1	1	1	2020-12-18 16:38:26.256+00	2020-12-18 16:38:26.256+00
80	5	21	1	1	1	1	1	2020-12-18 16:38:36.885+00	2020-12-18 16:38:36.885+00
81	5	22	2	1	1	1	1	2020-12-18 16:38:43.312+00	2020-12-18 16:38:43.312+00
82	5	23	2	1	1	1	1	2020-12-18 16:38:51.021+00	2020-12-18 16:38:51.021+00
83	5	24	3	1	1	1	1	2020-12-18 16:38:57.681+00	2020-12-18 16:38:57.681+00
84	5	25	2	1	1	1	1	2020-12-18 16:39:04.099+00	2020-12-18 16:39:04.099+00
85	5	26	1	1	1	1	1	2020-12-18 16:39:12.977+00	2020-12-18 16:39:12.977+00
86	5	27	2	1	1	1	1	2020-12-18 16:39:18.932+00	2020-12-18 16:39:18.932+00
87	5	28	3	1	1	1	1	2020-12-18 16:39:24.697+00	2020-12-18 16:39:24.697+00
88	5	29	2	1	1	1	1	2020-12-18 16:39:30.808+00	2020-12-18 16:39:30.808+00
89	5	30	1	1	1	1	1	2020-12-18 16:39:36.721+00	2020-12-18 16:39:36.721+00
90	5	31	3	1	1	1	1	2020-12-18 16:39:43.755+00	2020-12-18 16:39:43.755+00
91	6	1	1	1	1	1	1	2020-12-18 16:39:57.4+00	2020-12-18 16:39:57.4+00
92	6	2	1	1	1	1	1	2020-12-18 16:40:06.388+00	2020-12-18 16:40:06.388+00
93	6	3	0	1	1	1	1	2020-12-18 16:40:15.511+00	2020-12-18 16:40:15.511+00
94	6	4	1	1	1	1	1	2020-12-18 16:40:22.456+00	2020-12-18 16:40:22.456+00
95	6	5	0	1	1	1	1	2020-12-18 16:40:31.571+00	2020-12-18 16:40:31.571+00
96	6	6	0	1	1	1	1	2020-12-18 16:40:40.794+00	2020-12-18 16:40:40.794+00
97	6	7	1	1	1	1	1	2020-12-18 16:40:48.473+00	2020-12-18 16:40:48.473+00
98	6	8	1	1	1	1	1	2020-12-18 16:40:57.867+00	2020-12-18 16:40:57.867+00
99	6	9	1	1	1	1	1	2020-12-18 16:47:54.201+00	2020-12-18 16:47:54.201+00
100	6	10	1	1	1	1	1	2020-12-18 16:51:11.735+00	2020-12-18 16:51:11.735+00
101	6	11	1	1	1	1	1	2020-12-18 16:51:19.993+00	2020-12-18 16:51:19.993+00
102	6	12	0	1	1	1	1	2020-12-18 16:51:27.359+00	2020-12-18 16:51:27.359+00
103	6	13	1	1	1	1	1	2020-12-18 16:51:33.574+00	2020-12-18 16:51:33.574+00
105	6	15	0	1	1	1	1	2020-12-18 16:51:57.626+00	2020-12-18 16:51:57.626+00
106	6	16	0	1	1	1	1	2020-12-18 16:52:07.446+00	2020-12-18 16:52:07.446+00
107	6	17	0	1	1	1	1	2020-12-18 16:52:14.36+00	2020-12-18 16:52:14.36+00
108	6	18	0	1	1	1	1	2020-12-18 16:52:22.648+00	2020-12-18 16:52:22.648+00
112	6	22	2	1	1	1	1	2020-12-18 16:52:50.614+00	2020-12-18 16:52:50.614+00
104	6	14	0	1	1	1	1	2020-12-18 16:51:46.724+00	2020-12-18 16:57:02.084+00
109	6	19	1	1	1	1	1	2020-12-18 16:52:34.977+00	2020-12-18 16:57:40.063+00
110	6	20	2	1	1	1	1	2020-12-18 16:52:37.599+00	2020-12-18 17:25:56.723+00
111	6	21	1	1	1	1	1	2020-12-18 16:52:39.553+00	2020-12-18 17:26:20.324+00
113	6	23	1	1	1	1	1	2020-12-18 19:43:13.848+00	2020-12-18 19:43:13.848+00
114	6	24	1	1	1	1	1	2020-12-18 19:43:23.724+00	2020-12-18 19:43:23.724+00
115	6	25	4	1	1	1	1	2020-12-18 19:43:35.257+00	2020-12-18 19:43:35.257+00
116	6	26	3	1	1	1	1	2020-12-18 19:43:45.144+00	2020-12-18 19:43:45.144+00
117	6	27	4	1	1	1	1	2020-12-18 19:43:52.619+00	2020-12-18 19:43:52.619+00
118	6	28	1	1	1	1	1	2020-12-18 19:44:18.199+00	2020-12-18 19:44:18.199+00
119	6	29	1	1	1	1	1	2020-12-18 19:44:36.961+00	2020-12-18 19:44:36.961+00
120	7	1	1	1	1	1	1	2020-12-18 19:44:57.686+00	2020-12-18 19:44:57.686+00
121	7	2	1	1	1	1	1	2020-12-18 19:45:06.272+00	2020-12-18 19:45:06.272+00
122	7	3	0	1	1	1	1	2020-12-18 19:45:15.918+00	2020-12-18 19:45:15.918+00
123	7	4	1	1	1	1	1	2020-12-18 19:45:39.651+00	2020-12-18 19:45:39.651+00
124	7	5	1	1	1	1	1	2020-12-18 19:45:57.74+00	2020-12-18 19:45:57.74+00
125	7	6	0	1	1	1	1	2020-12-18 19:46:07.937+00	2020-12-18 19:46:07.937+00
126	7	7	1	1	1	1	1	2020-12-18 19:46:17.064+00	2020-12-18 19:46:17.064+00
127	7	8	1	1	1	1	1	2020-12-18 19:46:22.446+00	2020-12-18 19:46:22.446+00
128	7	9	1	1	1	1	1	2020-12-18 19:46:28.72+00	2020-12-18 19:46:28.72+00
129	7	10	1	1	1	1	1	2020-12-18 19:46:37.257+00	2020-12-18 19:46:37.257+00
130	7	11	0	1	1	1	1	2020-12-18 19:46:45.929+00	2020-12-18 19:46:45.929+00
131	7	12	0	1	1	1	1	2020-12-18 19:46:52.639+00	2020-12-18 19:46:52.639+00
132	7	13	0	1	1	1	1	2020-12-18 19:46:59.807+00	2020-12-18 19:46:59.807+00
133	7	14	0	1	1	1	1	2020-12-18 19:47:04.56+00	2020-12-18 19:47:04.56+00
134	7	15	1	1	1	1	1	2020-12-18 19:47:14.711+00	2020-12-18 19:47:14.711+00
135	7	16	1	1	1	1	1	2020-12-18 19:47:24.102+00	2020-12-18 19:47:24.102+00
136	7	17	2	1	1	1	1	2020-12-18 19:47:30.951+00	2020-12-18 19:47:30.951+00
137	7	18	5	1	1	1	1	2020-12-18 19:47:38.456+00	2020-12-18 19:47:38.456+00
138	7	19	3	1	1	1	1	2020-12-18 19:47:47.163+00	2020-12-18 19:47:47.163+00
139	7	20	5	1	1	1	1	2020-12-18 19:47:54.829+00	2020-12-18 19:47:54.829+00
140	7	21	6	1	1	1	1	2020-12-18 19:48:04.379+00	2020-12-18 19:48:04.379+00
141	7	22	4	1	1	1	1	2020-12-18 19:48:12.596+00	2020-12-18 19:48:12.596+00
142	7	23	5	1	1	1	1	2020-12-18 19:48:20.656+00	2020-12-18 19:48:20.656+00
143	7	24	3	1	1	1	1	2020-12-18 19:48:27.454+00	2020-12-18 19:48:27.454+00
144	7	25	6	1	1	1	1	2020-12-18 19:48:36.966+00	2020-12-18 19:48:36.966+00
145	7	26	5	1	1	1	1	2020-12-18 19:48:46.209+00	2020-12-18 19:48:46.209+00
146	7	27	3	1	1	1	1	2020-12-18 19:48:53.372+00	2020-12-18 19:48:53.372+00
147	7	28	4	1	1	1	1	2020-12-18 19:49:00.374+00	2020-12-18 19:49:00.374+00
148	7	29	1	1	1	1	1	2020-12-18 19:49:07.312+00	2020-12-18 19:49:07.312+00
149	7	30	2	1	1	1	1	2020-12-18 19:49:15.124+00	2020-12-18 19:49:15.124+00
150	7	31	5	1	1	1	1	2020-12-18 19:49:25.717+00	2020-12-18 19:49:25.717+00
151	8	1	1	1	1	1	1	2020-12-18 19:49:38.44+00	2020-12-18 19:49:38.44+00
152	8	2	1	1	1	1	1	2020-12-18 19:49:48.972+00	2020-12-18 19:49:48.972+00
153	8	3	1	1	1	1	1	2020-12-18 19:49:55.176+00	2020-12-18 19:49:55.176+00
154	8	4	0	1	1	1	1	2020-12-18 19:50:01.725+00	2020-12-18 19:50:01.725+00
155	8	5	1	1	1	1	1	2020-12-18 19:50:08.558+00	2020-12-18 19:50:08.558+00
156	8	6	0	1	1	1	1	2020-12-18 19:50:17.233+00	2020-12-18 19:50:17.233+00
157	8	7	0	1	1	1	1	2020-12-18 19:50:22.981+00	2020-12-18 19:50:22.981+00
158	8	8	1	1	1	1	1	2020-12-18 19:50:31.555+00	2020-12-18 19:50:31.555+00
159	8	9	2	1	1	1	1	2020-12-18 19:50:40.09+00	2020-12-18 19:50:40.09+00
160	8	10	3	1	1	1	1	2020-12-18 19:50:52.175+00	2020-12-18 19:50:52.175+00
161	8	11	1	1	1	1	1	2020-12-18 19:50:59.496+00	2020-12-18 19:50:59.496+00
162	8	12	2	1	1	1	1	2020-12-18 19:51:08.192+00	2020-12-18 19:51:08.192+00
163	8	13	3	1	1	1	1	2020-12-18 19:51:15.723+00	2020-12-18 19:51:15.723+00
164	8	14	1	1	1	1	1	2020-12-18 19:51:22.525+00	2020-12-18 19:51:22.525+00
165	8	15	0	1	1	1	1	2020-12-18 19:51:30.853+00	2020-12-18 19:51:30.853+00
166	8	16	1	1	1	1	1	2020-12-18 19:51:40.776+00	2020-12-18 19:51:40.776+00
167	8	17	0	1	1	1	1	2020-12-18 19:51:49.939+00	2020-12-18 19:51:49.939+00
168	8	18	1	1	1	1	1	2020-12-18 19:53:44.998+00	2020-12-18 19:53:44.998+00
169	8	19	1	1	1	1	1	2020-12-18 19:53:53.187+00	2020-12-18 19:53:53.187+00
170	8	20	1	1	1	1	1	2020-12-18 19:54:01.628+00	2020-12-18 19:54:01.628+00
171	8	21	0	1	1	1	1	2020-12-18 19:54:11.663+00	2020-12-18 19:54:11.663+00
172	8	22	1	1	1	1	1	2020-12-18 19:54:20.289+00	2020-12-18 19:54:20.289+00
173	8	23	1	1	1	1	1	2020-12-18 19:54:26.293+00	2020-12-18 19:54:26.293+00
174	8	24	1	1	1	1	1	2020-12-18 19:54:30.878+00	2020-12-18 19:54:30.878+00
175	8	25	1	1	1	1	1	2020-12-18 19:54:35.718+00	2020-12-18 19:54:35.718+00
176	8	26	0	1	1	1	1	2020-12-18 19:54:42.709+00	2020-12-18 19:54:42.709+00
177	8	27	1	1	1	1	1	2020-12-18 19:54:47.582+00	2020-12-18 19:54:47.582+00
182	5	1	0	1	1	2	1	2020-12-21 15:43:34.805+00	2020-12-21 15:48:56.461+00
183	6	1	0	1	1	2	1	2020-12-21 15:49:37.883+00	2020-12-21 15:49:37.883+00
184	7	1	0	1	1	2	1	2020-12-21 15:49:49.024+00	2020-12-21 15:49:49.024+00
185	8	1	0	1	1	2	1	2020-12-21 15:50:00.417+00	2020-12-21 15:50:00.417+00
186	1	1	2	1	2	\N	1	2020-12-21 15:51:33.909+00	2020-12-21 15:51:33.909+00
187	1	2	3	1	2	\N	1	2020-12-21 15:51:53.217+00	2020-12-21 15:51:53.217+00
188	1	3	4	1	2	\N	1	2020-12-21 15:52:02.476+00	2020-12-21 15:52:02.476+00
189	1	4	2	1	2	\N	1	2020-12-21 15:52:10.273+00	2020-12-21 15:52:10.273+00
190	1	5	1	1	2	\N	1	2020-12-21 15:52:21.204+00	2020-12-21 15:52:21.204+00
191	1	6	3	1	2	\N	1	2020-12-21 15:52:31.369+00	2020-12-21 15:52:31.369+00
192	1	7	1	1	2	\N	1	2020-12-21 15:52:37.967+00	2020-12-21 15:52:37.967+00
193	1	8	4	1	2	\N	1	2020-12-21 15:52:44.802+00	2020-12-21 15:52:44.802+00
194	1	9	2	1	2	\N	1	2020-12-21 15:52:51.271+00	2020-12-21 15:52:51.271+00
195	1	10	3	1	2	\N	1	2020-12-21 15:53:06.27+00	2020-12-21 15:53:06.27+00
196	1	11	2	1	2	\N	1	2020-12-21 15:55:38.599+00	2020-12-21 15:55:38.599+00
197	1	12	4	1	2	\N	1	2020-12-21 15:55:49.482+00	2020-12-21 15:55:49.482+00
198	1	13	2	1	2	\N	1	2020-12-21 15:55:55.749+00	2020-12-21 15:55:55.749+00
199	1	14	3	1	2	\N	1	2020-12-21 15:56:04.948+00	2020-12-21 15:56:04.948+00
200	1	15	2	1	2	\N	1	2020-12-21 15:56:11.322+00	2020-12-21 15:56:11.322+00
201	1	16	1	1	2	\N	1	2020-12-21 15:57:08.799+00	2020-12-21 15:57:08.799+00
202	1	17	3	1	2	\N	1	2020-12-21 15:57:17.152+00	2020-12-21 15:57:17.152+00
203	1	18	1	1	2	\N	1	2020-12-21 15:57:24.061+00	2020-12-21 15:57:24.061+00
204	1	19	1	1	2	\N	1	2020-12-21 15:57:31.413+00	2020-12-21 15:57:31.413+00
205	1	20	0	1	2	\N	1	2020-12-21 15:57:44.371+00	2020-12-21 15:57:44.371+00
206	1	21	1	1	2	\N	1	2020-12-21 15:57:55.399+00	2020-12-21 15:57:55.399+00
207	1	22	0	1	2	\N	1	2020-12-21 15:58:00.603+00	2020-12-21 15:58:00.603+00
208	2	1	6	1	2	\N	1	2020-12-21 15:58:39.222+00	2020-12-21 15:58:39.222+00
209	2	2	1	1	2	\N	1	2020-12-21 15:58:49.076+00	2020-12-21 15:58:49.076+00
210	2	3	2	1	2	\N	1	2020-12-21 15:58:56.265+00	2020-12-21 15:58:56.265+00
211	2	4	2	1	2	\N	1	2020-12-21 15:59:06.883+00	2020-12-21 15:59:06.883+00
212	2	5	5	1	2	\N	1	2020-12-21 15:59:13.694+00	2020-12-21 15:59:13.694+00
213	2	6	4	1	2	\N	1	2020-12-21 15:59:21.385+00	2020-12-21 15:59:21.385+00
214	2	7	3	1	2	\N	1	2020-12-21 15:59:34.024+00	2020-12-21 15:59:34.024+00
215	2	8	6	1	2	\N	1	2020-12-21 15:59:40.95+00	2020-12-21 15:59:40.95+00
216	2	9	1	1	2	\N	1	2020-12-21 15:59:47.771+00	2020-12-21 15:59:47.771+00
217	2	10	4	1	2	\N	1	2020-12-21 15:59:57.749+00	2020-12-21 15:59:57.749+00
218	2	11	6	1	2	\N	1	2020-12-21 16:00:05.151+00	2020-12-21 16:00:05.151+00
219	2	12	1	1	2	\N	1	2020-12-21 16:00:13.073+00	2020-12-21 16:00:13.073+00
220	2	13	3	1	2	\N	1	2020-12-21 16:00:19.08+00	2020-12-21 16:00:19.08+00
221	2	14	1	1	2	\N	1	2020-12-21 16:00:31.364+00	2020-12-21 16:00:31.364+00
222	2	15	4	1	2	\N	1	2020-12-21 16:00:53.821+00	2020-12-21 16:00:53.821+00
223	2	16	4	1	2	\N	1	2020-12-21 16:01:03.269+00	2020-12-21 16:01:03.269+00
224	2	17	2	1	2	\N	1	2020-12-21 16:01:18.063+00	2020-12-21 16:01:18.063+00
225	2	18	6	1	2	\N	1	2020-12-21 16:01:27.602+00	2020-12-21 16:01:27.602+00
226	2	19	1	1	2	\N	1	2020-12-21 16:01:36.016+00	2020-12-21 16:01:36.016+00
227	2	20	6	1	2	\N	1	2020-12-21 16:01:43.458+00	2020-12-21 16:01:43.458+00
228	2	21	4	1	2	\N	1	2020-12-21 16:01:49.948+00	2020-12-21 16:01:49.948+00
229	2	22	2	1	2	\N	1	2020-12-21 16:01:56.364+00	2020-12-21 16:01:56.364+00
230	2	23	4	1	2	\N	1	2020-12-21 16:02:01.995+00	2020-12-21 16:02:01.995+00
231	2	24	6	1	2	\N	1	2020-12-21 16:02:12.396+00	2020-12-21 16:02:12.396+00
232	2	25	3	1	2	\N	1	2020-12-21 16:02:19.007+00	2020-12-21 16:02:19.007+00
233	2	26	4	1	2	\N	1	2020-12-21 16:02:34.151+00	2020-12-21 16:02:34.151+00
234	2	27	2	1	2	\N	1	2020-12-21 16:02:44.516+00	2020-12-21 16:02:44.516+00
235	2	28	4	1	2	\N	1	2020-12-21 16:02:50.42+00	2020-12-21 16:02:50.42+00
236	2	29	3	1	2	\N	1	2020-12-21 16:02:58.018+00	2020-12-21 16:02:58.018+00
237	2	30	1	1	2	\N	1	2020-12-21 16:03:08.536+00	2020-12-21 16:03:08.536+00
238	2	31	6	1	2	\N	1	2020-12-21 16:03:34.381+00	2020-12-21 16:03:34.381+00
239	2	32	2	1	2	\N	1	2020-12-21 16:03:45.04+00	2020-12-21 16:03:45.04+00
240	2	33	4	1	2	\N	1	2020-12-21 16:03:51.861+00	2020-12-21 16:03:51.861+00
241	2	34	0	1	2	\N	1	2020-12-21 16:04:00.526+00	2020-12-21 16:04:00.526+00
242	2	35	1	1	2	\N	1	2020-12-21 16:04:06.759+00	2020-12-21 16:04:06.759+00
243	2	36	0	1	2	\N	1	2020-12-21 16:04:17.018+00	2020-12-21 16:04:17.018+00
244	2	37	0	1	2	\N	1	2020-12-21 16:07:24.76+00	2020-12-21 16:07:24.76+00
245	2	38	1	1	2	\N	1	2020-12-21 16:07:34.993+00	2020-12-21 16:07:34.993+00
246	2	39	0	1	2	\N	1	2020-12-21 16:07:41.977+00	2020-12-21 16:07:41.977+00
247	2	40	1	1	2	\N	1	2020-12-21 16:07:48.054+00	2020-12-21 16:07:48.054+00
248	2	41	1	1	2	\N	1	2020-12-21 16:07:55.726+00	2020-12-21 16:07:55.726+00
249	2	42	0	1	2	\N	1	2020-12-21 16:08:04.168+00	2020-12-21 16:08:04.168+00
250	2	43	0	1	2	\N	1	2020-12-21 16:08:10.449+00	2020-12-21 16:08:10.449+00
251	2	44	1	1	2	\N	1	2020-12-21 16:08:18.686+00	2020-12-21 16:08:18.686+00
252	2	45	0	1	2	\N	1	2020-12-21 16:08:30.589+00	2020-12-21 16:08:30.589+00
253	2	46	1	1	2	\N	1	2020-12-21 16:09:34.987+00	2020-12-21 16:09:34.987+00
254	2	47	0	1	2	\N	1	2020-12-21 16:09:47.019+00	2020-12-21 16:09:47.019+00
255	2	48	1	1	2	\N	1	2020-12-21 16:09:53.398+00	2020-12-21 16:09:53.398+00
256	2	49	0	1	2	\N	1	2020-12-21 16:10:01.293+00	2020-12-21 16:10:01.293+00
257	2	50	1	1	2	\N	1	2020-12-21 16:10:08.137+00	2020-12-21 16:10:08.137+00
258	2	51	1	1	2	\N	1	2020-12-21 16:10:14.207+00	2020-12-21 16:10:14.207+00
259	2	52	0	1	2	\N	1	2020-12-21 16:10:20.807+00	2020-12-21 16:10:20.807+00
260	2	53	0	1	2	\N	1	2020-12-21 16:10:27.009+00	2020-12-21 16:10:27.009+00
261	2	54	0	1	2	\N	1	2020-12-21 16:10:31.533+00	2020-12-21 16:10:31.533+00
262	2	55	1	1	2	\N	1	2020-12-21 16:10:38.899+00	2020-12-21 16:10:38.899+00
263	2	56	1	1	2	\N	1	2020-12-21 16:10:44.993+00	2020-12-21 16:10:44.993+00
264	2	57	0	1	2	\N	1	2020-12-21 16:10:51.733+00	2020-12-21 16:10:51.733+00
265	2	58	0	1	2	\N	1	2020-12-21 16:10:56.685+00	2020-12-21 16:10:56.685+00
266	2	59	1	1	2	\N	1	2020-12-21 16:11:01.927+00	2020-12-21 16:11:01.927+00
267	2	60	0	1	2	\N	1	2020-12-21 16:11:09.439+00	2020-12-21 16:11:09.439+00
268	2	61	0	1	2	\N	1	2020-12-21 16:11:14.793+00	2020-12-21 16:11:14.793+00
269	2	62	1	1	2	\N	1	2020-12-21 16:11:20.017+00	2020-12-21 16:11:20.017+00
270	2	63	0	1	2	\N	1	2020-12-21 16:11:25.787+00	2020-12-21 16:11:25.787+00
271	2	64	1	1	2	\N	1	2020-12-21 16:11:31.561+00	2020-12-21 16:11:31.561+00
272	2	65	1	1	2	\N	1	2020-12-21 16:11:41.815+00	2020-12-21 16:11:41.815+00
273	2	66	0	1	2	\N	1	2020-12-21 16:11:49.053+00	2020-12-21 16:11:49.053+00
274	2	67	0	1	2	\N	1	2020-12-21 16:11:54.823+00	2020-12-21 16:11:54.823+00
275	2	68	1	1	2	\N	1	2020-12-21 16:12:49.867+00	2020-12-21 16:12:49.867+00
276	2	69	1	1	2	\N	1	2020-12-21 16:12:58.283+00	2020-12-21 16:12:58.283+00
277	2	70	1	1	2	\N	1	2020-12-21 16:13:14.55+00	2020-12-21 16:13:14.55+00
278	2	71	0	1	2	\N	1	2020-12-21 16:13:23.948+00	2020-12-21 16:13:23.948+00
279	2	72	0	1	2	\N	1	2020-12-21 16:13:27.771+00	2020-12-21 16:13:27.771+00
280	2	73	1	1	2	\N	1	2020-12-21 16:13:39.066+00	2020-12-21 16:13:39.066+00
281	2	74	0	1	2	\N	1	2020-12-21 16:13:47.561+00	2020-12-21 16:13:47.561+00
282	2	75	0	1	2	\N	1	2020-12-21 16:14:18.843+00	2020-12-21 16:14:18.843+00
283	2	76	1	1	2	\N	1	2020-12-21 16:14:30.96+00	2020-12-21 16:14:30.96+00
284	2	77	0	1	2	\N	1	2020-12-21 16:14:39.497+00	2020-12-21 16:14:39.497+00
285	2	78	1	1	2	\N	1	2020-12-21 16:14:47.219+00	2020-12-21 16:14:47.219+00
286	3	1	2	1	2	\N	1	2020-12-21 16:15:01.153+00	2020-12-21 16:15:01.153+00
287	3	2	3	1	2	\N	1	2020-12-21 16:15:17.603+00	2020-12-21 16:15:17.603+00
288	3	3	1	1	2	\N	1	2020-12-21 16:15:23.636+00	2020-12-21 16:15:23.636+00
289	3	4	1	1	2	\N	1	2020-12-21 16:15:30.23+00	2020-12-21 16:15:30.23+00
290	3	5	3	1	2	\N	1	2020-12-21 16:15:35.794+00	2020-12-21 16:15:35.794+00
291	3	6	1	1	2	\N	1	2020-12-21 16:15:43.927+00	2020-12-21 16:15:43.927+00
292	3	7	2	1	2	\N	1	2020-12-21 16:15:50.253+00	2020-12-21 16:15:50.253+00
293	3	8	2	1	2	\N	1	2020-12-21 16:16:00.488+00	2020-12-21 16:16:00.488+00
294	3	9	1	1	2	\N	1	2020-12-21 16:16:09.383+00	2020-12-21 16:16:09.383+00
295	3	10	3	1	2	\N	1	2020-12-21 16:16:19.278+00	2020-12-21 16:16:19.278+00
296	3	11	2	1	2	\N	1	2020-12-21 16:16:27.171+00	2020-12-21 16:16:27.171+00
297	3	12	4	1	2	\N	1	2020-12-21 16:16:34.329+00	2020-12-21 16:16:34.329+00
298	3	13	2	1	2	\N	1	2020-12-21 16:16:43.644+00	2020-12-21 16:16:43.644+00
299	3	14	2	1	2	\N	1	2020-12-21 16:16:53.501+00	2020-12-21 16:16:53.501+00
300	3	15	1	1	2	\N	1	2020-12-21 16:16:59.868+00	2020-12-21 16:16:59.868+00
301	3	16	3	1	2	\N	1	2020-12-21 16:17:43.492+00	2020-12-21 16:17:43.492+00
302	3	17	2	1	2	\N	1	2020-12-21 16:17:54.403+00	2020-12-21 16:17:54.403+00
303	3	18	1	1	2	\N	1	2020-12-21 16:18:02.923+00	2020-12-21 16:18:02.923+00
304	3	19	2	1	2	\N	1	2020-12-21 16:18:08.576+00	2020-12-21 16:18:08.576+00
305	3	20	3	1	2	\N	1	2020-12-21 16:18:14.321+00	2020-12-21 16:18:14.321+00
306	3	21	1	1	2	\N	1	2020-12-21 16:18:20.643+00	2020-12-21 16:18:20.643+00
307	3	22	2	1	2	\N	1	2020-12-21 16:21:14.5+00	2020-12-21 16:21:14.5+00
308	3	23	3	1	2	\N	1	2020-12-21 16:21:31.192+00	2020-12-21 16:21:31.192+00
309	3	24	1	1	2	\N	1	2020-12-21 16:22:29.878+00	2020-12-21 16:22:29.878+00
310	3	25	2	1	2	\N	1	2020-12-21 16:22:36.089+00	2020-12-21 16:22:36.089+00
311	3	26	4	1	2	\N	1	2020-12-21 16:22:42.825+00	2020-12-21 16:22:42.825+00
312	3	27	2	1	2	\N	1	2020-12-21 16:22:52.707+00	2020-12-21 16:22:52.707+00
313	3	28	3	1	2	\N	1	2020-12-21 16:23:02.66+00	2020-12-21 16:23:02.66+00
314	3	29	3	1	2	\N	1	2020-12-21 16:23:17.163+00	2020-12-21 16:23:17.163+00
315	3	30	2	1	2	\N	1	2020-12-21 16:23:33.739+00	2020-12-21 16:23:33.739+00
316	3	31	3	1	2	\N	1	2020-12-21 16:23:44.938+00	2020-12-21 16:23:44.938+00
317	3	32	5	1	2	\N	1	2020-12-21 16:23:52.366+00	2020-12-21 16:23:52.366+00
318	3	33	4	1	2	\N	1	2020-12-21 16:24:03.793+00	2020-12-21 16:24:03.793+00
319	3	34	3	1	2	\N	1	2020-12-21 16:24:19.575+00	2020-12-21 16:24:19.575+00
320	3	35	5	1	2	\N	1	2020-12-21 16:24:33.729+00	2020-12-21 16:24:33.729+00
321	3	36	2	1	2	\N	1	2020-12-21 16:24:41.577+00	2020-12-21 16:24:41.577+00
322	3	37	4	1	2	\N	1	2020-12-21 16:24:47.732+00	2020-12-21 16:24:47.732+00
332	3	35	0	1	1	1	1	2020-12-21 16:30:45.147+00	2020-12-21 16:30:45.147+00
333	4	24	0	1	1	1	1	2020-12-21 16:31:04.57+00	2020-12-21 16:31:04.57+00
334	5	32	0	1	1	1	1	2020-12-21 16:31:20.008+00	2020-12-21 16:31:20.008+00
335	6	30	0	1	1	1	1	2020-12-21 16:31:31.796+00	2020-12-21 16:31:31.796+00
336	7	32	0	1	1	1	1	2020-12-21 16:31:48.462+00	2020-12-21 16:31:48.462+00
337	9	1	6	1	1	1	1	2020-12-21 16:32:05.997+00	2020-12-21 16:32:05.997+00
338	9	2	3	1	1	1	1	2020-12-21 16:32:18.872+00	2020-12-21 16:32:18.872+00
339	9	3	2	1	1	1	1	2020-12-21 16:32:29.818+00	2020-12-21 16:32:29.818+00
340	9	4	4	1	1	1	1	2020-12-21 16:32:39.56+00	2020-12-21 16:32:39.56+00
341	9	5	5	1	1	1	1	2020-12-21 16:32:47.098+00	2020-12-21 16:32:47.098+00
342	9	6	4	1	1	1	1	2020-12-21 16:33:00.741+00	2020-12-21 16:33:00.741+00
343	9	7	6	1	1	1	1	2020-12-21 16:33:08.906+00	2020-12-21 16:33:08.906+00
344	9	8	2	1	1	1	1	2020-12-21 16:33:15.384+00	2020-12-21 16:33:15.384+00
345	9	9	4	1	1	1	1	2020-12-21 16:33:26.575+00	2020-12-21 16:33:26.575+00
346	9	10	5	1	1	1	1	2020-12-21 16:33:33.818+00	2020-12-21 16:33:33.818+00
347	9	11	6	1	1	1	1	2020-12-21 16:33:40.294+00	2020-12-21 16:33:40.294+00
348	9	12	2	1	1	1	1	2020-12-21 16:33:46.709+00	2020-12-21 16:33:46.709+00
349	9	13	3	1	1	1	1	2020-12-21 16:33:52.175+00	2020-12-21 16:33:52.175+00
350	9	14	6	1	1	1	1	2020-12-21 16:33:59.072+00	2020-12-21 16:34:24.263+00
351	9	15	3	1	1	1	1	2020-12-21 16:34:44.103+00	2020-12-21 16:34:44.103+00
352	9	16	5	1	1	1	1	2020-12-21 16:34:55.763+00	2020-12-21 16:34:55.763+00
353	9	17	2	1	1	1	1	2020-12-21 16:35:01.717+00	2020-12-21 16:35:01.717+00
354	9	18	4	1	1	1	1	2020-12-21 16:35:08.588+00	2020-12-21 16:35:08.588+00
355	9	19	1	1	1	1	1	2020-12-21 16:35:15.212+00	2020-12-21 16:35:15.212+00
356	9	20	4	1	1	1	1	2020-12-21 16:35:24.384+00	2020-12-21 16:35:24.384+00
357	9	21	5	1	1	1	1	2020-12-21 16:35:32.119+00	2020-12-21 16:35:32.119+00
358	9	22	8	1	1	1	1	2020-12-21 16:35:38.94+00	2020-12-21 16:35:38.94+00
359	9	23	4	1	1	1	1	2020-12-21 16:35:45.291+00	2020-12-21 16:35:45.291+00
360	9	24	1	1	1	1	1	2020-12-21 16:36:04.781+00	2020-12-21 16:36:04.781+00
361	9	25	4	1	1	1	1	2020-12-21 16:36:09.618+00	2020-12-21 16:36:09.618+00
362	9	26	8	1	1	1	1	2020-12-21 16:36:40.73+00	2020-12-21 16:36:40.73+00
363	9	27	6	1	1	1	1	2020-12-21 16:36:49.993+00	2020-12-21 16:36:49.993+00
364	9	28	7	1	1	1	1	2020-12-21 16:36:59.673+00	2020-12-21 16:36:59.673+00
\.


--
-- Data for Name: modulos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.modulos (id, nome, created_at, updated_at) FROM stdin;
1	Exercícios apostila	2020-12-17 19:31:11.856+00	2020-12-17 19:31:11.856+00
2	Exercícios de percepção visual	2020-12-17 19:31:22.54+00	2020-12-17 19:31:22.54+00
3	Exercícios de auto-aceleração	2020-12-21 15:50:37.981+00	2020-12-21 15:50:37.981+00
4	Código alfa-numérico	2020-12-21 15:50:49.521+00	2020-12-21 15:50:49.521+00
\.


--
-- Data for Name: niveis; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.niveis (id, nome, created_at, updated_at) FROM stdin;
1	Avaliação Inicial	2020-10-20 01:18:58.718+00	2020-10-20 01:18:58.718+00
2	Básico	2020-10-20 01:19:06.621+00	2020-10-20 01:19:06.621+00
3	Intermediário	2020-10-20 01:19:16.35+00	2020-10-20 01:19:16.35+00
4	Avançado	2020-10-20 01:19:25.158+00	2020-10-20 01:19:25.158+00
\.


--
-- Data for Name: provas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.provas (id, avaliacao, aula01, aula02, aula03, aula04, aula05, aula06, aula07, aula08, aula09, aula10, aula11, aula12, aula13, aula14, aula15, aula16, finalizada, usuario_id, created_at, updated_at) FROM stdin;
54	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	t	32	2021-04-19 05:29:40.098+00	2021-04-19 05:29:53.37+00
2	t	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	5	2020-10-27 16:06:02.408+00	2020-10-27 16:14:49.028+00
1	t	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	t	1	2020-10-19 20:48:14.741+00	2021-01-04 16:51:05.372+00
6	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	8	2021-01-17 17:18:04.225+00	2021-01-17 17:18:04.225+00
55	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	t	32	2021-04-19 05:29:53.884+00	2021-04-19 05:38:04.466+00
4	t	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	6	2021-01-07 17:44:46.554+00	2021-02-02 14:02:24.589+00
5	t	f	f	f	f	f	f	f	f	t	f	f	f	f	f	f	f	f	7	2021-01-13 17:00:29.855+00	2021-02-02 18:31:53.283+00
3	t	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	t	1	2021-01-05 17:03:16.911+00	2021-02-16 02:40:16.841+00
7	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	t	1	2021-02-16 02:40:23.309+00	2021-02-16 03:00:47.498+00
36	t	f	f	f	f	f	f	f	f	t	f	t	f	t	f	t	f	t	19	2021-03-25 01:30:35.832+00	2021-03-25 05:15:20.16+00
8	t	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	t	1	2021-02-16 03:00:48.331+00	2021-02-16 04:21:05.075+00
9	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	t	1	2021-02-16 04:21:05.87+00	2021-02-16 05:00:59.684+00
10	t	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	t	1	2021-02-16 05:01:00.501+00	2021-02-16 22:25:29.043+00
37	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	t	19	2021-03-25 05:15:21.048+00	2021-03-25 06:28:14.481+00
12	t	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	t	1	2021-02-16 22:25:30.251+00	2021-02-17 07:36:20.83+00
38	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	t	19	2021-03-25 06:28:14.934+00	2021-03-25 06:31:31.65+00
11	f	f	f	f	f	f	f	f	f	t	f	f	f	f	f	f	f	t	9	2021-02-16 18:22:15.418+00	2021-03-04 16:17:36.889+00
14	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	t	9	2021-03-04 16:17:37.493+00	2021-03-04 16:18:07.68+00
15	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	9	2021-03-04 16:18:08.264+00	2021-03-04 16:18:08.264+00
13	t	f	f	f	f	f	f	f	f	f	f	t	f	f	f	f	f	t	1	2021-02-17 07:36:21.807+00	2021-03-08 12:08:47.267+00
17	t	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	11	2021-03-10 13:38:47.014+00	2021-03-10 14:03:50.626+00
39	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	t	19	2021-03-25 06:31:32.544+00	2021-03-25 06:35:44.392+00
18	t	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	t	12	2021-03-10 14:35:40.692+00	2021-03-10 14:42:15.361+00
19	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	t	12	2021-03-10 14:42:16.033+00	2021-03-10 15:43:23.139+00
40	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	19	2021-03-25 06:35:45.411+00	2021-03-25 06:35:45.411+00
20	f	f	f	f	f	f	f	f	f	t	f	f	f	f	f	f	f	t	12	2021-03-10 15:43:23.704+00	2021-03-10 16:29:00.717+00
21	f	f	f	f	f	f	f	f	f	f	f	t	f	f	f	f	f	t	12	2021-03-10 16:29:01.32+00	2021-03-10 17:09:18.488+00
22	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	12	2021-03-10 17:09:19.093+00	2021-03-10 17:09:19.093+00
41	t	f	f	f	f	f	f	f	f	f	f	f	f	f	f	t	f	f	20	2021-03-25 07:22:45.123+00	2021-03-25 11:59:51.735+00
23	t	f	f	f	f	f	f	f	f	t	f	f	f	f	f	f	f	f	13	2021-03-18 11:47:16.756+00	2021-03-18 13:31:35.629+00
42	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	21	2021-03-26 11:06:05.075+00	2021-03-26 11:06:05.075+00
16	f	f	f	f	f	f	f	f	f	t	f	t	f	f	f	f	f	t	1	2021-03-08 12:08:48.316+00	2021-03-18 22:14:11.864+00
24	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	t	1	2021-03-18 22:14:12.973+00	2021-03-19 01:09:13.502+00
56	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	t	32	2021-04-19 05:38:05.918+00	2021-04-19 12:20:38.698+00
27	t	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	15	2021-03-19 15:17:36.771+00	2021-03-19 15:18:57.157+00
57	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	t	32	2021-04-19 12:20:50.806+00	2021-04-19 12:53:17.357+00
26	t	f	f	f	f	f	f	f	f	t	f	t	f	f	f	f	f	t	14	2021-03-19 14:03:15.967+00	2021-03-19 16:32:25.12+00
28	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	t	14	2021-03-19 16:32:25.69+00	2021-03-19 16:38:53.607+00
30	t	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	t	16	2021-03-19 19:49:12.492+00	2021-03-19 20:21:16.276+00
31	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	16	2021-03-19 20:21:17.376+00	2021-03-19 20:21:17.376+00
43	t	f	f	f	f	f	f	f	f	t	f	t	f	t	f	t	f	f	22	2021-03-26 11:23:01.406+00	2021-03-26 17:08:28.868+00
58	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	t	32	2021-04-19 12:53:18.063+00	2021-04-19 12:53:58.469+00
44	f	f	f	f	f	f	f	f	f	f	f	t	f	f	f	t	f	t	24	2021-03-28 05:15:39.316+00	2021-03-28 10:16:18.03+00
32	t	f	f	f	f	f	f	f	f	t	f	t	f	t	f	t	f	t	17	2021-03-23 02:49:11.965+00	2021-03-23 07:38:06.998+00
33	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	17	2021-03-23 07:38:08.008+00	2021-03-23 07:38:08.008+00
25	f	f	f	f	f	f	f	f	f	t	f	f	f	f	f	t	f	f	1	2021-03-19 01:09:14.282+00	2021-03-23 08:29:29.702+00
29	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	t	14	2021-03-19 16:38:54.223+00	2021-03-23 15:26:02.807+00
34	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	14	2021-03-23 15:26:03.152+00	2021-03-23 15:26:03.152+00
35	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	18	2021-03-23 15:28:49.098+00	2021-03-23 15:28:49.098+00
45	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	24	2021-03-28 10:16:19.349+00	2021-03-28 10:16:19.349+00
59	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	t	32	2021-04-19 12:53:59.382+00	2021-04-19 12:56:46.012+00
46	t	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	30	2021-04-01 22:53:44.115+00	2021-04-01 23:02:50.58+00
60	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	t	32	2021-04-19 12:56:46.938+00	2021-04-19 13:00:05.884+00
61	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	32	2021-04-19 13:00:06.815+00	2021-04-19 13:00:06.815+00
47	t	f	f	f	f	f	f	f	f	t	f	t	f	t	f	t	f	f	31	2021-04-01 23:06:43.204+00	2021-04-03 14:56:58.943+00
49	t	f	f	f	f	f	f	f	f	t	f	t	f	t	f	t	f	t	33	2021-04-09 19:09:00.721+00	2021-04-09 22:50:43.133+00
50	f	f	f	f	f	f	f	f	f	f	f	t	f	f	f	f	f	f	33	2021-04-09 22:50:43.698+00	2021-04-09 23:16:25.056+00
51	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	34	2021-04-12 16:25:08.042+00	2021-04-12 16:25:08.042+00
52	t	f	f	f	f	f	f	f	f	t	f	t	f	t	f	t	f	f	35	2021-04-12 16:32:23.828+00	2021-04-13 16:18:02.616+00
48	t	f	f	f	f	f	f	f	f	t	f	t	f	t	f	t	f	t	32	2021-04-09 04:06:27.806+00	2021-04-19 05:28:15.372+00
53	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	f	t	32	2021-04-19 05:28:16.775+00	2021-04-19 05:29:39.599+00
\.


--
-- Data for Name: provas2; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.provas2 (id, nota, finalizada, usuario_id, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: provas2s; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.provas2s (id, nota, finalizada, monitor01, monitor02, monitor03, monitor04, monitor05, monitor06, monitor07, monitor08, monitor09, percepcao01, percepcao02, percepcao03, usuario_id, created_at, updated_at, aula) FROM stdin;
14	0	t	0	0	0	0	0	0	0	0	0	0	0	0	6	2021-01-20 18:37:09.151+00	2021-01-21 04:37:36.388+00	0
24	0	t	0	0	0	0	0	0	0	0	0	0	0	0	7	2021-01-21 14:30:43.961+00	2021-01-21 14:46:38.553+00	0
22	0	t	0	0	0	0	0	0	0	0	0	0	0	0	1	2021-01-20 21:39:14.378+00	2021-01-21 14:49:48.877+00	0
5	1.392757660167131	f	100	100	2.857142857142857	4.166666666666667	3.125	0	0	0	0	0	0	0	8	2021-01-17 17:18:04.363+00	2021-01-17 17:25:13.339+00	0
23	0	t	0	0	0	0	0	0	0	0	0	0	0	0	6	2021-01-21 14:22:35.581+00	2021-01-21 14:53:26.646+00	0
26	0	t	0	0	0	0	0	0	0	0	0	0	0	0	6	2021-01-21 14:57:34.918+00	2021-01-21 14:57:47.056+00	0
10	0	t	0	0	0	0	0	0	0	0	0	0	0	0	1	2021-01-19 22:58:31.292+00	2021-01-20 20:53:36.609+00	0
18	0	t	0	0	0	0	0	0	0	0	0	0	0	0	1	2021-01-20 20:53:37.538+00	2021-01-20 20:54:03.535+00	0
17	3.4188034188034195	t	0	0	0	0	0	36.666666666666664	3.125	0	0	0	0	0	7	2021-01-20 19:51:22.523+00	2021-01-20 21:16:24.625+00	0
15	12.250712250712256	t	0	0	59.99999999999997	29.16666666666667	46.875	0	0	0	0	0	0	0	7	2021-01-20 19:04:41.054+00	2021-01-20 19:14:44.508+00	0
27	0	f	0	0	0	0	0	0	0	0	0	0	0	0	6	2021-01-21 14:57:47.874+00	2021-01-21 14:57:47.874+00	0
1	33.14763231197767	t	100	100	42.85714285714285	41.666666666666664	40.625	56.66666666666668	3.125	62.96296296296295	3.5714285714285716	63.63636363636365	21.794871794871796	32.43243243243243	1	2021-01-05 17:03:26.404+00	2021-01-19 21:28:03.788+00	0
6	0	t	0	0	0	0	0	0	0	0	0	0	0	0	1	2021-01-19 21:28:35.123+00	2021-01-19 21:30:58.631+00	0
7	0.2785515320334262	t	100	0	0	0	0	0	0	0	0	0	0	0	1	2021-01-19 21:40:59.729+00	2021-01-19 21:56:13.164+00	0
8	0	t	0	0	0	0	0	0	0	0	0	0	0	0	1	2021-01-19 22:23:18.596+00	2021-01-19 22:44:49.145+00	0
9	0	t	0	0	0	0	0	0	0	0	0	0	0	0	1	2021-01-19 22:45:01.531+00	2021-01-19 22:54:32.335+00	0
2	4.456824512534821	t	100	100	11.428571428571429	8.333333333333334	6.25	3.3333333333333335	3.125	0	14.285714285714286	0	0	0	6	2021-01-07 17:44:46.571+00	2021-01-19 23:13:32.19+00	0
3	0	f	0	0	0	0	0	0	0	0	0	0	0	0	5	2021-01-13 16:57:07.709+00	2021-01-13 16:57:07.709+00	0
11	0	t	0	0	0	0	0	0	0	0	0	0	0	0	6	2021-01-19 23:13:59.287+00	2021-01-20 17:53:37.886+00	0
12	0	t	0	0	0	0	0	0	0	0	0	0	0	0	6	2021-01-20 17:54:00.008+00	2021-01-20 17:54:19.116+00	0
13	0	t	0	0	0	0	0	0	0	0	0	0	0	0	6	2021-01-20 17:54:26.517+00	2021-01-20 18:36:57.54+00	0
28	0	t	0	0	0	0	0	0	0	0	0	0	0	0	7	2021-01-21 14:58:06.969+00	2021-01-21 14:58:14.595+00	0
4	31.754874651810535	t	100	100	48.571428571428555	41.666666666666664	65.625	43.333333333333336	3.125	0	7.142857142857143	54.545454545454554	41.025641025641036	10.81081081081081	7	2021-01-13 17:00:29.978+00	2021-01-20 19:04:20.105+00	0
33	0	t	0	0	0	0	0	0	0	0	0	0	0	0	1	2021-01-22 20:00:39.678+00	2021-01-22 20:45:48.983+00	1
16	17.378917378917386	t	100	100	85.71428571428571	41.666666666666664	59.375	0	0	0	0	0	0	0	7	2021-01-20 19:24:31.657+00	2021-01-20 19:50:31.652+00	0
34	0	t	0	0	0	0	0	0	0	0	0	0	0	0	1	2021-01-22 20:45:49.812+00	2021-01-22 20:49:09.45+00	1
20	8.262108262108265	t	0	0	0	0	0	0	0	59.259259259259245	46.42857142857142	0	0	0	7	2021-01-20 21:17:00.498+00	2021-01-20 21:22:55.222+00	0
35	0	t	0	0	0	0	0	0	0	0	0	0	0	0	1	2021-01-22 20:49:10.363+00	2021-01-22 20:50:45.112+00	1
21	0	t	0	0	0	0	0	0	0	0	0	0	0	0	7	2021-01-20 21:23:03.122+00	2021-01-20 21:33:56.195+00	0
19	0	t	0	0	0	0	0	0	0	0	0	0	0	0	1	2021-01-20 20:54:04.498+00	2021-01-20 21:39:13.578+00	0
36	0	t	0	0	0	0	0	0	0	0	0	0	0	0	1	2021-01-22 20:50:45.943+00	2021-01-22 20:50:53.687+00	1
31	9.11680911680912	t	0	0	91.42857142857143	0	0	0	0	0	0	0	0	0	7	2021-01-21 18:09:53.76+00	2021-01-21 18:16:53.499+00	0
32	0	f	0	0	0	0	0	0	0	0	0	0	0	0	7	2021-01-21 18:16:54.098+00	2021-01-21 18:16:54.098+00	0
25	1.1396011396011396	t	0	0	0	0	0	0	0	0	0	18.181818181818183	0	0	1	2021-01-21 14:49:49.886+00	2021-01-21 17:33:49.265+00	0
29	7.97720797720798	t	0	0	79.99999999999999	0	0	0	0	0	0	0	0	0	7	2021-01-21 14:58:15.2+00	2021-01-21 18:09:47.882+00	0
30	0.5698005698005698	f	0	0	0	0	0	0	0	0	0	4.545454545454546	1.2820512820512822	0	1	2021-01-21 17:33:50.115+00	2021-01-22 16:06:27.256+00	0
39	0	f	0	0	0	0	0	0	0	0	0	0	0	0	1	2021-01-22 20:59:42.541+00	2021-01-22 20:59:42.541+00	3
40	0	f	0	0	0	0	0	0	0	0	0	0	0	0	1	2021-01-22 20:59:46.645+00	2021-01-22 20:59:46.645+00	4
41	0	f	0	0	0	0	0	0	0	0	0	0	0	0	1	2021-01-22 20:59:50.866+00	2021-01-22 20:59:50.866+00	5
38	0	t	0	0	0	0	0	0	0	0	0	0	0	0	1	2021-01-22 20:59:24.813+00	2021-01-23 13:51:02.976+00	2
37	17.66381766381767	t	0	0	77.14285714285712	41.666666666666664	78.125	0	0	0	0	0	0	0	1	2021-01-22 20:50:54.56+00	2021-01-24 05:12:48.811+00	1
44	0.5698005698005698	t	0	0	5.714285714285714	0	0	0	0	0	0	0	0	0	1	2021-01-24 05:12:49.58+00	2021-01-24 05:33:49.329+00	1
42	33.333333333333336	t	0	0	0	0	0	0	0	62.96296296296295	7.142857142857143	72.72727272727273	66.66666666666673	81.08108108108111	1	2021-01-22 20:59:57.818+00	2021-01-28 19:10:35.719+00	6
45	20.797720797720807	t	0	0	85.71428571428571	62.499999999999986	87.5	0	0	0	0	0	0	0	1	2021-01-24 05:33:49.832+00	2021-01-29 04:49:00.945+00	1
47	26.210826210826223	t	0	0	97.14285714285715	49.99999999999999	78.125	70.00000000000001	0	0	0	0	0	0	6	2021-01-25 00:28:18.045+00	2021-01-25 02:29:22.088+00	2
55	16.809116809116816	t	0	0	79.99999999999999	49.99999999999999	59.375	0	0	0	0	0	0	0	7	2021-01-26 21:23:25.49+00	2021-01-26 21:41:27.553+00	1
51	8.262108262108265	f	0	0	0	0	0	0	90.625	0	0	0	0	0	6	2021-01-25 18:41:12.287+00	2021-01-25 20:55:38.976+00	2
49	11.965811965811971	f	0	0	0	0	0	0	0	85.1851851851852	67.85714285714285	0	0	0	6	2021-01-25 04:31:54.361+00	2021-01-25 04:58:21.929+00	3
73	0	t	0	0	0	0	0	0	0	0	0	0	0	0	7	2021-01-29 17:18:52.116+00	2021-01-29 17:20:12.08+00	1
74	0	t	0	0	0	0	0	0	0	0	0	0	0	0	7	2021-01-29 17:20:12.681+00	2021-01-29 17:20:18.49+00	1
62	8.54700854700855	f	0	0	85.71428571428571	0	0	0	0	0	0	0	0	0	7	2021-01-26 22:38:54.256+00	2021-01-27 21:03:41.466+00	2
67	44.7293447293446	t	0	0	79.99999999999999	25.000000000000004	81.25	66.66666666666669	71.875	77.77777777777779	28.571428571428577	0	0	67.56756756756756	7	2021-01-27 11:13:38.804+00	2021-01-27 19:01:51.001+00	6
66	13.105413105413112	t	0	0	0	0	0	0	0	0	0	4.545454545454546	23.076923076923077	72.97297297297298	7	2021-01-27 11:03:10.226+00	2021-01-27 11:13:38.223+00	6
60	35.89743589743587	t	0	0	91.42857142857143	37.5	78.125	70.00000000000001	53.125	59.259259259259245	21.42857142857143	0	0	0	7	2021-01-26 22:03:59.291+00	2021-01-26 22:33:39.138+00	3
59	0	t	0	0	0	0	0	0	0	0	0	0	0	0	7	2021-01-26 22:03:20.597+00	2021-01-26 22:38:53.691+00	2
53	7.97720797720798	t	0	0	0	0	0	0	0	0	0	4.545454545454546	1.2820512820512822	70.27027027027027	6	2021-01-25 18:47:00.932+00	2021-01-25 19:03:03.738+00	6
54	0	f	0	0	0	0	0	0	0	0	0	0	0	0	6	2021-01-25 19:03:04.262+00	2021-01-25 19:03:04.262+00	6
58	18.518518518518526	t	0	0	0	37.5	71.875	53.33333333333334	53.125	0	0	0	0	0	7	2021-01-26 21:51:54.013+00	2021-01-26 22:03:20.028+00	2
46	7.40740740740741	f	0	0	74.28571428571426	0	0	0	0	0	0	0	0	0	6	2021-01-24 21:17:51.943+00	2021-01-24 21:41:07.655+00	1
48	34.75783475783474	t	0	0	94.28571428571429	58.33333333333332	84.375	73.33333333333334	81.25	0	0	0	0	0	6	2021-01-25 02:29:22.504+00	2021-01-25 18:41:11.381+00	2
50	22.507122507122517	f	0	0	0	0	0	0	0	0	74.99999999999999	0	74.35897435897444	0	6	2021-01-25 05:04:32.472+00	2021-01-27 18:09:47.869+00	5
75	0	t	0	0	0	0	0	0	0	0	0	0	0	0	7	2021-01-29 17:20:19.096+00	2021-01-29 17:20:25.994+00	1
63	39.88603988603981	t	0	0	71.4285714285714	41.666666666666664	56.25	70.00000000000001	50	74.07407407407408	49.99999999999999	72.72727272727273	0	0	7	2021-01-26 22:39:21.723+00	2021-01-26 23:16:50.93+00	4
65	60.96866096866064	t	0	0	79.99999999999999	37.5	59.375	66.66666666666669	71.875	74.07407407407408	35.714285714285715	68.18181818181819	51.28205128205131	81.08108108108111	7	2021-01-26 23:19:58.775+00	2021-01-27 18:27:51.744+00	5
57	7.122507122507125	t	0	0	71.4285714285714	0	0	0	0	0	0	0	0	0	7	2021-01-26 21:46:16.752+00	2021-01-26 21:51:53.444+00	2
52	5.413105413105415	f	0	0	54.28571428571426	0	0	0	0	0	0	0	0	0	6	2021-01-25 18:44:51.925+00	2021-01-27 22:34:17.444+00	4
61	0	t	0	0	0	0	0	0	0	0	0	0	0	0	7	2021-01-26 22:33:39.742+00	2021-01-29 17:20:47.386+00	3
77	0	t	0	0	0	0	0	0	0	0	0	0	0	0	7	2021-01-29 17:20:47.949+00	2021-01-29 17:20:50.753+00	3
71	14.814814814814822	f	0	0	85.71428571428571	45.83333333333333	0	0	34.375	0	0	0	0	0	1	2021-01-28 20:15:12.857+00	2021-01-29 02:03:31.476+00	6
72	0	f	0	0	0	0	0	0	0	0	0	0	0	0	1	2021-01-29 04:49:01.695+00	2021-01-29 04:49:01.695+00	1
43	19.94301994301995	f	0	0	59.99999999999997	33.333333333333336	43.75	40	46.875	0	0	0	0	0	1	2021-01-23 13:51:03.783+00	2021-01-27 23:03:41.46+00	2
78	0	t	0	0	0	0	0	0	0	0	0	0	0	0	7	2021-01-29 17:20:51.062+00	2021-01-29 17:21:00.513+00	3
56	15.099715099715107	t	0	0	71.4285714285714	41.666666666666664	56.25	0	0	0	0	0	0	0	7	2021-01-26 21:41:28.119+00	2021-01-29 17:18:51.544+00	1
70	13.105413105413112	t	0	0	88.57142857142857	62.499999999999986	0	0	0	0	0	0	0	0	1	2021-01-28 19:10:37.023+00	2021-01-28 20:15:12.407+00	6
64	0	t	0	0	0	0	0	0	0	0	0	0	0	0	7	2021-01-26 23:16:51.501+00	2021-01-29 20:05:21.053+00	4
79	26.210826210826223	t	0	0	85.71428571428571	25.000000000000004	68.75	60.000000000000014	50	0	0	0	0	0	7	2021-01-29 17:21:01.115+00	2021-01-29 19:45:37.009+00	3
82	0	t	0	0	0	0	0	0	0	0	0	0	0	0	7	2021-01-29 20:05:21.621+00	2021-01-29 20:05:29.316+00	4
80	7.40740740740741	t	0	0	0	0	0	0	0	70.37037037037037	25.000000000000004	0	0	0	7	2021-01-29 19:45:37.64+00	2021-01-29 19:52:13.049+00	3
81	15.099715099715107	f	0	0	0	0	0	53.33333333333334	56.25	62.96296296296295	7.142857142857143	0	0	0	7	2021-01-29 19:52:13.695+00	2021-01-29 20:31:24.422+00	3
68	5.6980056980057	t	0	0	0	0	0	0	0	44.444444444444436	0	36.36363636363637	0	0	7	2021-01-27 18:27:52.339+00	2021-01-29 20:35:26.654+00	5
85	0	f	0	0	0	0	0	0	0	0	0	0	0	0	7	2021-01-29 21:45:17.065+00	2021-01-29 21:45:17.065+00	4
83	33.048433048433054	t	0	0	65.71428571428568	33.333333333333336	53.125	53.33333333333334	59.375	62.96296296296295	21.42857142857143	45.45454545454546	0	0	7	2021-01-29 20:05:29.917+00	2021-01-29 21:45:16.401+00	4
86	0	f	0	0	0	0	0	0	0	0	0	0	0	0	7	2021-01-29 22:39:28.661+00	2021-01-29 22:39:28.661+00	5
84	55.27065527065501	t	0	0	79.99999999999999	29.16666666666667	46.875	56.66666666666668	71.875	55.55555555555554	14.285714285714286	45.45454545454546	58.97435897435902	78.3783783783784	7	2021-01-29 20:35:27.273+00	2021-01-29 22:39:28.057+00	5
69	53.27635327635304	t	0	0	57.14285714285712	25.000000000000004	56.25	60.000000000000014	62.5	70.37037037037037	17.857142857142858	40.909090909090914	56.41025641025645	75.67567567567569	7	2021-01-27 19:01:51.302+00	2021-01-29 23:24:44.547+00	6
87	0	t	0	0	0	0	0	0	0	0	0	0	0	0	7	2021-01-29 23:24:44.865+00	2021-01-29 23:24:55.475+00	6
88	0	f	0	0	0	0	0	0	0	0	0	0	0	0	7	2021-01-29 23:24:56.082+00	2021-01-29 23:24:56.082+00	6
116	0	f	0	0	0	0	0	0	0	0	0	0	0	0	19	2021-03-25 01:49:37.783+00	2021-03-25 01:49:37.783+00	3
117	0	f	0	0	0	0	0	0	0	0	0	0	0	0	19	2021-03-25 01:49:54.118+00	2021-03-25 01:49:54.118+00	4
118	0	f	0	0	0	0	0	0	0	0	0	0	0	0	19	2021-03-25 01:49:58.714+00	2021-03-25 01:49:58.714+00	5
99	9.401709401709406	t	0	0	0	0	0	0	0	77.77777777777779	42.857142857142854	0	0	0	9	2021-02-17 14:00:30.624+00	2021-02-17 14:07:15.627+00	3
95	14.529914529914537	t	0	0	74.28571428571426	16.666666666666668	65.625	0	0	0	0	0	0	0	9	2021-02-16 20:02:49.955+00	2021-02-17 12:41:32.151+00	1
97	3.1339031339031345	f	0	0	0	0	0	20	15.625	0	0	0	0	0	9	2021-02-17 12:55:07.307+00	2021-02-17 13:34:11.657+00	2
100	0	f	0	0	0	0	0	0	0	0	0	0	0	0	9	2021-02-17 14:07:16.298+00	2021-02-17 14:07:16.298+00	3
119	0	f	0	0	0	0	0	0	0	0	0	0	0	0	19	2021-03-25 01:51:23.879+00	2021-03-25 01:51:23.879+00	6
90	3.7037037037037046	t	0	0	2.857142857142857	0	37.5	0	0	0	0	0	0	0	7	2021-02-08 19:25:07.255+00	2021-02-08 19:37:25.053+00	1
120	0	f	0	0	0	0	0	0	0	0	0	0	0	0	20	2021-03-25 07:28:52.564+00	2021-03-25 07:28:52.564+00	1
124	0	f	0	0	0	0	0	0	0	0	0	0	0	0	22	2021-03-26 12:07:27.617+00	2021-03-26 12:07:27.617+00	2
125	0	f	0	0	0	0	0	0	0	0	0	0	0	0	22	2021-03-26 12:08:03.913+00	2021-03-26 12:08:03.913+00	3
121	12.820512820512826	t	0	0	82.85714285714285	0	50	0	0	0	0	0	0	0	22	2021-03-26 11:37:00.357+00	2021-03-26 11:54:16.347+00	1
122	0	f	0	0	0	0	0	0	0	0	0	0	0	0	22	2021-03-26 11:54:16.636+00	2021-03-26 11:54:16.636+00	1
91	12.535612535612541	t	0	0	77.14285714285712	12.5	43.75	0	0	0	0	0	0	0	7	2021-02-08 19:37:25.371+00	2021-02-08 19:53:14.209+00	1
92	0	f	0	0	0	0	0	0	0	0	0	0	0	0	7	2021-02-08 19:53:14.812+00	2021-02-08 19:53:14.812+00	1
103	18.80341880341881	t	0	0	0	0	0	0	0	0	0	0	66.66666666666673	37.83783783783783	9	2021-02-17 14:28:40.716+00	2021-02-17 14:35:41.971+00	5
93	9.68660968660969	t	0	0	74.28571428571426	8.333333333333334	18.75	0	0	0	0	0	0	0	9	2021-02-16 18:22:23.373+00	2021-02-16 20:02:49.311+00	1
76	7.692307692307695	t	0	0	68.57142857142854	8.333333333333334	3.125	0	0	0	0	0	0	0	7	2021-01-29 17:20:26.612+00	2021-02-08 19:07:22.445+00	1
104	0	f	0	0	0	0	0	0	0	0	0	0	0	0	9	2021-02-17 14:35:42.26+00	2021-02-17 14:35:42.26+00	5
105	0	t	0	0	0	0	0	0	0	0	0	0	0	0	9	2021-02-17 14:42:58.871+00	2021-02-17 14:44:45.486+00	6
106	0	f	0	0	0	0	0	0	0	0	0	0	0	0	9	2021-02-17 14:44:46.089+00	2021-02-17 14:44:46.089+00	6
107	0	f	0	0	0	0	0	0	0	0	0	0	0	0	16	2021-03-22 22:15:08.495+00	2021-03-22 22:15:08.495+00	6
108	0	f	0	0	0	0	0	0	0	0	0	0	0	0	16	2021-03-22 22:15:12.254+00	2021-03-22 22:15:12.254+00	5
101	4.273504273504274	t	0	0	0	0	0	0	0	0	0	68.18181818181819	0	0	9	2021-02-17 14:16:31.701+00	2021-02-17 14:18:54.92+00	4
89	1.9943019943019942	t	0	0	11.428571428571429	8.333333333333334	3.125	0	0	0	0	0	0	0	7	2021-02-08 19:07:22.751+00	2021-02-08 19:25:06.64+00	1
94	5.413105413105415	t	0	0	0	0	0	53.33333333333334	9.375	0	0	0	0	0	9	2021-02-16 19:24:50.948+00	2021-02-17 12:55:06.802+00	2
102	0	f	0	0	0	0	0	0	0	0	0	0	0	0	9	2021-02-17 14:18:55.564+00	2021-02-17 14:18:55.564+00	4
109	0	f	0	0	0	0	0	0	0	0	0	0	0	0	16	2021-03-22 22:15:17.177+00	2021-03-22 22:15:17.177+00	3
110	0	f	0	0	0	0	0	0	0	0	0	0	0	0	16	2021-03-22 22:17:31.263+00	2021-03-22 22:17:31.263+00	2
111	0	f	0	0	0	0	0	0	0	0	0	0	0	0	16	2021-03-22 22:27:22.152+00	2021-03-22 22:27:22.152+00	4
96	15.099715099715107	t	0	0	79.99999999999999	20.833333333333336	62.5	0	0	0	0	0	0	0	9	2021-02-17 12:41:32.75+00	2021-02-17 13:52:16.393+00	1
98	0	f	0	0	0	0	0	0	0	0	0	0	0	0	9	2021-02-17 13:52:17.015+00	2021-02-17 13:52:17.015+00	1
112	0	f	0	0	0	0	0	0	0	0	0	0	0	0	16	2021-03-22 22:28:11.849+00	2021-03-22 22:28:11.849+00	1
113	0	f	0	0	0	0	0	0	0	0	0	0	0	0	17	2021-03-23 02:52:22.093+00	2021-03-23 02:52:22.093+00	1
114	0	f	0	0	0	0	0	0	0	0	0	0	0	0	19	2021-03-25 01:47:19.192+00	2021-03-25 01:47:19.192+00	1
126	0.2849002849002849	f	0	0	0	0	0	0	0	0	0	4.545454545454546	0	0	22	2021-03-26 12:14:16.107+00	2021-03-26 12:20:31.314+00	4
115	0	f	0	0	0	0	0	0	0	0	0	0	0	0	19	2021-03-25 01:49:33.569+00	2021-03-25 01:49:33.569+00	2
123	9.68660968660969	t	0	0	0	0	0	56.66666666666668	53.125	0	0	0	0	0	22	2021-03-26 11:59:41.484+00	2021-03-26 12:07:27.186+00	2
128	0	f	0	0	0	0	0	0	0	0	0	0	0	0	22	2021-03-26 12:24:45.293+00	2021-03-26 12:24:45.293+00	5
127	0.8547008547008548	t	0	0	0	0	0	0	0	0	0	0	2.5641025641025643	2.7027027027027026	22	2021-03-26 12:20:37.636+00	2021-03-26 12:24:44.862+00	5
129	0	f	0	0	0	0	0	0	0	0	0	0	0	0	22	2021-03-26 12:24:54.747+00	2021-03-26 12:24:54.747+00	6
131	0	f	0	0	0	0	0	0	0	0	0	0	0	0	24	2021-03-28 08:54:00.777+00	2021-03-28 08:54:00.777+00	1
130	20.797720797720807	t	0	0	94.28571428571429	62.499999999999986	78.125	0	0	0	0	0	0	0	24	2021-03-28 08:00:35.446+00	2021-03-28 08:54:00.126+00	1
143	0	f	0	0	0	0	0	0	0	0	0	0	0	0	32	2021-04-09 04:30:29.432+00	2021-04-09 04:30:29.432+00	4
144	0	f	0	0	0	0	0	0	0	0	0	0	0	0	32	2021-04-09 04:30:34.702+00	2021-04-09 04:30:34.702+00	3
134	3.7037037037037046	t	0	0	37.14285714285714	0	0	0	0	0	0	0	0	0	24	2021-03-28 09:11:12.563+00	2021-03-28 09:14:46.794+00	3
135	0	f	0	0	0	0	0	0	0	0	0	0	0	0	24	2021-03-28 09:14:47.743+00	2021-03-28 09:14:47.743+00	3
136	0	f	0	0	0	0	0	0	0	0	0	0	0	0	24	2021-03-28 09:15:18.421+00	2021-03-28 09:15:18.421+00	6
145	0	f	0	0	0	0	0	0	0	0	0	0	0	0	32	2021-04-09 04:30:51.457+00	2021-04-09 04:30:51.457+00	2
146	0	f	0	0	0	0	0	0	0	0	0	0	0	0	32	2021-04-09 04:30:57.973+00	2021-04-09 04:30:57.973+00	1
147	0	f	0	0	0	0	0	0	0	0	0	0	0	0	33	2021-04-09 19:25:52.473+00	2021-04-09 19:25:52.473+00	1
148	0	f	0	0	0	0	0	0	0	0	0	0	0	0	33	2021-04-09 19:28:17.847+00	2021-04-09 19:28:17.847+00	5
149	0	f	0	0	0	0	0	0	0	0	0	0	0	0	33	2021-04-09 19:28:21.673+00	2021-04-09 19:28:21.673+00	2
150	0	f	0	0	0	0	0	0	0	0	0	0	0	0	33	2021-04-09 19:29:01.791+00	2021-04-09 19:29:01.791+00	4
151	0.2849002849002849	f	0	0	0	0	0	0	0	0	0	0	0	2.7027027027027026	33	2021-04-09 19:30:21.115+00	2021-04-09 19:31:04.444+00	6
132	7.40740740740741	t	0	0	74.28571428571426	0	0	0	0	0	0	0	0	0	24	2021-03-28 09:00:12.433+00	2021-03-28 09:04:52.244+00	2
133	0	f	0	0	0	0	0	0	0	0	0	0	0	0	24	2021-03-28 09:04:53.139+00	2021-03-28 09:04:53.139+00	2
137	7.122507122507125	f	0	0	71.4285714285714	0	0	0	0	0	0	0	0	0	31	2021-04-02 00:23:25.947+00	2021-04-02 00:25:58.525+00	1
138	0	t	0	0	0	0	0	0	0	0	0	0	0	0	31	2021-04-02 00:26:13.929+00	2021-04-02 00:26:15.487+00	2
139	0	f	0	0	0	0	0	0	0	0	0	0	0	0	31	2021-04-02 00:26:15.802+00	2021-04-02 00:26:15.802+00	2
140	0	f	0	0	0	0	0	0	0	0	0	0	0	0	31	2021-04-02 00:27:17.973+00	2021-04-02 00:27:17.973+00	6
141	0	f	0	0	0	0	0	0	0	0	0	0	0	0	32	2021-04-09 04:29:04.978+00	2021-04-09 04:29:04.978+00	6
142	0	f	0	0	0	0	0	0	0	0	0	0	0	0	32	2021-04-09 04:30:09.17+00	2021-04-09 04:30:09.17+00	5
\.


--
-- Data for Name: provas3s; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.provas3s (id, nota, finalizada, usuario_id, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: resposta; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.resposta (id, resposta, prova_id, exercicio_id, created_at, updated_at) FROM stdin;
1	0	1	1	2021-01-05 17:36:39.462+00	2021-01-05 17:36:39.462+00
2	0	1	2	2021-01-05 21:27:02.358+00	2021-01-05 21:27:02.358+00
3	0	1	332	2021-01-05 22:00:40.215+00	2021-01-05 22:00:40.215+00
4	0	1	3	2021-01-05 22:09:09.951+00	2021-01-05 22:09:09.951+00
5	1	1	4	2021-01-05 22:09:13.665+00	2021-01-05 22:09:13.665+00
6	0	1	5	2021-01-05 22:09:17.872+00	2021-01-05 22:09:17.872+00
7	0	1	6	2021-01-05 22:09:21.524+00	2021-01-05 22:09:21.524+00
8	0	1	7	2021-01-05 22:09:25.034+00	2021-01-05 22:09:25.034+00
9	0	1	8	2021-01-05 22:09:30.823+00	2021-01-05 22:09:30.823+00
10	0	1	9	2021-01-05 22:09:34.211+00	2021-01-05 22:09:34.211+00
11	0	1	10	2021-01-05 22:09:37.748+00	2021-01-05 22:09:37.748+00
12	1	1	11	2021-01-05 22:09:41.029+00	2021-01-05 22:09:41.029+00
13	1	1	12	2021-01-05 22:09:44.279+00	2021-01-05 22:09:44.279+00
14	0	1	13	2021-01-05 22:38:11.794+00	2021-01-05 22:38:11.794+00
15	0	1	14	2021-01-05 22:38:18.629+00	2021-01-05 22:38:18.629+00
16	1	1	15	2021-01-05 22:38:43.026+00	2021-01-05 22:38:43.026+00
17	0	1	333	2021-01-05 22:43:24.734+00	2021-01-05 22:43:24.734+00
18	2	1	37	2021-01-05 22:43:41.714+00	2021-01-05 22:43:41.714+00
19	2	1	38	2021-01-05 22:43:45.555+00	2021-01-05 22:43:45.555+00
20	3	1	39	2021-01-05 22:43:49.41+00	2021-01-05 22:43:49.41+00
21	1	1	40	2021-01-05 22:43:53.232+00	2021-01-05 22:43:53.232+00
22	2	1	41	2021-01-05 22:43:57.571+00	2021-01-05 22:43:57.571+00
23	1	1	42	2021-01-05 22:44:01.145+00	2021-01-05 22:44:01.145+00
24	3	1	43	2021-01-05 22:44:04.705+00	2021-01-05 22:44:04.705+00
25	2	1	44	2021-01-05 22:44:08.194+00	2021-01-05 22:44:08.194+00
26	1	1	45	2021-01-05 22:44:11.73+00	2021-01-05 22:44:11.73+00
27	3	1	46	2021-01-05 22:44:15.662+00	2021-01-05 22:44:15.662+00
28	2	1	47	2021-01-05 22:44:19.369+00	2021-01-05 22:44:19.369+00
29	2	1	48	2021-01-05 22:44:22.795+00	2021-01-05 22:44:22.795+00
30	2	1	49	2021-01-05 22:44:28.919+00	2021-01-05 22:44:28.919+00
31	2	1	50	2021-01-05 22:44:32.521+00	2021-01-05 22:44:32.521+00
32	2	1	51	2021-01-05 22:44:36.095+00	2021-01-05 22:44:36.095+00
33	2	1	52	2021-01-05 22:44:40.008+00	2021-01-05 22:44:40.008+00
34	2	1	53	2021-01-05 22:44:43.853+00	2021-01-05 22:44:43.853+00
35	2	1	54	2021-01-05 22:44:47.775+00	2021-01-05 22:44:47.775+00
36	2	1	55	2021-01-05 22:44:51.664+00	2021-01-05 22:44:51.664+00
37	2	1	56	2021-01-05 22:44:55.533+00	2021-01-05 22:44:55.533+00
38	2	1	57	2021-01-05 22:44:59.482+00	2021-01-05 22:44:59.482+00
39	2	1	58	2021-01-05 22:45:05.729+00	2021-01-05 22:45:05.729+00
40	2	1	59	2021-01-05 22:45:10.571+00	2021-01-05 22:45:10.571+00
41	0	1	334	2021-01-05 22:45:50.543+00	2021-01-05 22:45:50.543+00
42	1	1	60	2021-01-05 22:46:03.587+00	2021-01-05 22:46:03.587+00
43	1	1	61	2021-01-05 22:46:07.009+00	2021-01-05 22:46:07.009+00
44	1	1	62	2021-01-05 22:46:10.418+00	2021-01-05 22:46:10.418+00
45	1	1	63	2021-01-05 22:46:13.572+00	2021-01-05 22:46:13.572+00
46	1	1	64	2021-01-05 22:46:16.738+00	2021-01-05 22:46:16.738+00
47	1	1	65	2021-01-05 22:46:20.127+00	2021-01-05 22:46:20.127+00
48	1	1	66	2021-01-05 22:46:23.389+00	2021-01-05 22:46:23.389+00
49	1	1	67	2021-01-05 22:46:26.482+00	2021-01-05 22:46:26.482+00
50	1	1	68	2021-01-05 22:46:30.284+00	2021-01-05 22:46:30.284+00
51	1	1	69	2021-01-05 22:46:33.51+00	2021-01-05 22:46:33.51+00
52	1	1	70	2021-01-05 22:46:37.179+00	2021-01-05 22:46:37.179+00
53	1	1	71	2021-01-05 22:46:40.488+00	2021-01-05 22:46:40.488+00
54	2	1	72	2021-01-05 22:46:47.715+00	2021-01-05 22:46:47.715+00
55	1	1	73	2021-01-05 22:46:50.91+00	2021-01-05 22:46:50.91+00
56	4	1	74	2021-01-05 22:46:54.184+00	2021-01-05 22:46:54.184+00
57	4	1	75	2021-01-05 22:46:57.365+00	2021-01-05 22:46:57.365+00
58	1	1	76	2021-01-05 22:47:00.491+00	2021-01-05 22:47:00.491+00
59	1	1	77	2021-01-05 22:47:03.34+00	2021-01-05 22:47:03.34+00
60	1	1	78	2021-01-05 22:47:06.076+00	2021-01-05 22:47:06.076+00
61	1	1	79	2021-01-05 22:47:08.991+00	2021-01-05 22:47:08.991+00
62	1	1	80	2021-01-05 22:47:11.652+00	2021-01-05 22:47:11.652+00
63	1	1	81	2021-01-05 22:47:14.266+00	2021-01-05 22:47:14.266+00
64	1	1	82	2021-01-05 22:47:23.168+00	2021-01-05 22:47:23.168+00
65	2	1	83	2021-01-05 22:47:26.55+00	2021-01-05 22:47:26.55+00
66	2	1	84	2021-01-05 22:47:29.921+00	2021-01-05 22:47:29.921+00
67	2	1	85	2021-01-05 22:47:33.298+00	2021-01-05 22:47:33.298+00
68	1	1	86	2021-01-05 23:13:21.214+00	2021-01-05 23:13:21.214+00
69	2	1	87	2021-01-05 23:13:26.179+00	2021-01-05 23:13:26.179+00
70	2	1	88	2021-01-05 23:13:29.244+00	2021-01-05 23:13:29.244+00
71	2	1	89	2021-01-05 23:13:32.897+00	2021-01-05 23:13:32.897+00
72	2	1	90	2021-01-05 23:13:36.306+00	2021-01-05 23:13:36.306+00
73	1	1	16	2021-01-06 17:37:46.229+00	2021-01-06 17:37:46.229+00
74	1	1	17	2021-01-06 17:37:49.351+00	2021-01-06 17:37:49.351+00
75	1	1	18	2021-01-06 17:37:52.384+00	2021-01-06 17:37:52.384+00
76	1	1	19	2021-01-06 17:37:58.676+00	2021-01-06 17:37:58.676+00
77	1	1	20	2021-01-06 17:38:01.947+00	2021-01-06 17:38:01.947+00
78	1	1	21	2021-01-06 17:38:05.322+00	2021-01-06 17:38:05.322+00
79	1	1	22	2021-01-06 17:38:08.942+00	2021-01-06 17:38:08.942+00
80	1	1	23	2021-01-06 17:38:12.038+00	2021-01-06 17:38:12.038+00
81	1	1	24	2021-01-06 17:38:14.308+00	2021-01-06 17:38:14.308+00
82	1	1	25	2021-01-06 17:38:16.693+00	2021-01-06 17:38:16.693+00
83	1	1	26	2021-01-06 17:38:19.902+00	2021-01-06 17:38:19.902+00
84	1	1	27	2021-01-06 17:38:22.39+00	2021-01-06 17:38:22.39+00
85	1	1	28	2021-01-06 17:38:25.168+00	2021-01-06 17:38:25.168+00
86	1	1	29	2021-01-06 17:38:27.585+00	2021-01-06 17:38:27.585+00
87	1	1	30	2021-01-06 17:38:29.966+00	2021-01-06 17:38:29.966+00
88	1	1	31	2021-01-06 17:38:32.745+00	2021-01-06 17:38:32.745+00
89	1	1	32	2021-01-06 17:38:35.199+00	2021-01-06 17:38:35.199+00
90	1	1	33	2021-01-06 17:38:37.712+00	2021-01-06 17:38:37.712+00
91	1	1	34	2021-01-06 17:38:40.229+00	2021-01-06 17:38:40.229+00
92	1	1	35	2021-01-06 17:38:42.806+00	2021-01-06 17:38:42.806+00
93	1	1	36	2021-01-06 17:38:45.747+00	2021-01-06 17:38:45.747+00
94	0	1	335	2021-01-06 19:30:46.831+00	2021-01-06 19:30:46.831+00
95	1	1	91	2021-01-06 19:36:33.211+00	2021-01-06 19:36:33.211+00
96	1	1	92	2021-01-06 19:36:36.049+00	2021-01-06 19:36:36.049+00
97	1	1	93	2021-01-06 19:36:38.91+00	2021-01-06 19:36:38.91+00
98	1	1	94	2021-01-06 19:36:41.761+00	2021-01-06 19:36:41.761+00
99	1	1	95	2021-01-06 19:36:44.585+00	2021-01-06 19:36:44.585+00
100	1	1	96	2021-01-06 19:36:47.237+00	2021-01-06 19:36:47.237+00
101	1	1	97	2021-01-06 19:36:49.871+00	2021-01-06 19:36:49.871+00
102	1	1	98	2021-01-06 19:36:52.63+00	2021-01-06 19:36:52.63+00
103	1	1	99	2021-01-06 19:36:55.558+00	2021-01-06 19:36:55.558+00
104	1	1	100	2021-01-06 19:37:03.435+00	2021-01-06 19:37:03.435+00
105	1	1	101	2021-01-06 19:37:06.455+00	2021-01-06 19:37:06.455+00
106	1	1	102	2021-01-06 19:37:09.114+00	2021-01-06 19:37:09.114+00
107	1	1	103	2021-01-06 19:37:12.034+00	2021-01-06 19:37:12.034+00
108	1	1	104	2021-01-06 19:37:14.518+00	2021-01-06 19:37:14.518+00
109	1	1	105	2021-01-06 19:37:17.398+00	2021-01-06 19:37:17.398+00
110	1	1	106	2021-01-06 19:37:20.265+00	2021-01-06 19:37:20.265+00
111	1	1	107	2021-01-06 19:37:22.964+00	2021-01-06 19:37:22.964+00
112	1	1	108	2021-01-06 19:37:25.604+00	2021-01-06 19:37:25.604+00
113	1	1	109	2021-01-06 19:37:28.33+00	2021-01-06 19:37:28.33+00
114	1	1	110	2021-01-06 19:37:33.567+00	2021-01-06 19:37:33.567+00
115	1	1	111	2021-01-06 19:37:36.479+00	2021-01-06 19:37:36.479+00
116	4	1	112	2021-01-06 19:37:39.897+00	2021-01-06 19:37:39.897+00
117	4	1	113	2021-01-06 19:37:43.185+00	2021-01-06 19:37:43.185+00
118	1	1	114	2021-01-06 19:37:46.431+00	2021-01-06 19:37:46.431+00
119	3	1	115	2021-01-06 19:37:50.07+00	2021-01-06 19:37:50.07+00
120	3	1	116	2021-01-06 19:37:53.174+00	2021-01-06 19:37:53.174+00
121	4	1	117	2021-01-06 19:37:55.96+00	2021-01-06 19:37:55.96+00
122	1	1	118	2021-01-06 19:37:58.933+00	2021-01-06 19:37:58.933+00
123	1	1	119	2021-01-06 19:38:01.791+00	2021-01-06 19:38:01.791+00
124	0	1	336	2021-01-08 13:02:33.671+00	2021-01-08 13:02:33.671+00
125	1	1	151	2021-01-08 13:11:47.41+00	2021-01-08 13:11:47.41+00
126	0	1	152	2021-01-08 13:11:51.689+00	2021-01-08 13:11:51.689+00
127	1	1	153	2021-01-08 13:11:56.038+00	2021-01-08 13:11:56.038+00
128	0	1	154	2021-01-08 13:12:00.461+00	2021-01-08 13:12:00.461+00
129	1	1	155	2021-01-08 13:12:04.659+00	2021-01-08 13:12:04.659+00
130	0	1	156	2021-01-08 13:12:09.076+00	2021-01-08 13:12:09.076+00
131	1	1	157	2021-01-08 13:12:13.648+00	2021-01-08 13:12:13.648+00
132	1	1	158	2021-01-08 13:12:17.741+00	2021-01-08 13:12:17.741+00
133	2	1	159	2021-01-08 13:12:32.555+00	2021-01-08 13:12:32.555+00
134	3	1	160	2021-01-08 13:12:42.147+00	2021-01-08 13:12:42.147+00
135	3	1	161	2021-01-08 13:12:51.812+00	2021-01-08 13:12:51.812+00
136	1	1	162	2021-01-08 13:13:01.271+00	2021-01-08 13:13:01.271+00
137	1	1	163	2021-01-08 13:13:10.524+00	2021-01-08 13:13:10.524+00
138	1	1	164	2021-01-08 13:13:18.061+00	2021-01-08 13:13:18.061+00
139	1	1	165	2021-01-08 13:13:21.353+00	2021-01-08 13:13:21.353+00
140	0	1	166	2021-01-08 13:13:24.678+00	2021-01-08 13:13:24.678+00
141	1	1	167	2021-01-08 13:13:27.974+00	2021-01-08 13:13:27.974+00
142	0	1	168	2021-01-08 13:13:31.273+00	2021-01-08 13:13:31.273+00
143	1	1	169	2021-01-08 13:13:34.651+00	2021-01-08 13:13:34.651+00
144	1	1	170	2021-01-08 13:13:38.448+00	2021-01-08 13:13:38.448+00
145	0	1	171	2021-01-08 13:13:41.97+00	2021-01-08 13:13:41.97+00
146	1	1	172	2021-01-08 13:13:45.17+00	2021-01-08 13:13:45.17+00
147	1	1	173	2021-01-08 13:13:48.473+00	2021-01-08 13:13:48.473+00
148	1	1	174	2021-01-08 13:14:00.739+00	2021-01-08 13:14:00.739+00
149	1	1	175	2021-01-08 13:14:07.357+00	2021-01-08 13:14:07.357+00
150	0	1	176	2021-01-08 13:14:14.537+00	2021-01-08 13:14:14.537+00
151	0	1	177	2021-01-08 13:14:21.613+00	2021-01-08 13:14:21.613+00
152	3	1	337	2021-01-08 13:23:44.805+00	2021-01-08 13:23:44.805+00
153	4	1	338	2021-01-08 13:23:48.846+00	2021-01-08 13:23:48.846+00
154	5	1	339	2021-01-08 13:23:53.154+00	2021-01-08 13:23:53.154+00
155	6	1	340	2021-01-08 13:24:45.599+00	2021-01-08 13:24:45.599+00
156	4	1	341	2021-01-08 13:24:49.36+00	2021-01-08 13:24:49.36+00
157	1	1	342	2021-01-08 13:24:53.101+00	2021-01-08 13:24:53.101+00
158	1	1	343	2021-01-08 13:24:57.005+00	2021-01-08 13:24:57.005+00
159	4	1	344	2021-01-08 13:25:00.899+00	2021-01-08 13:25:00.899+00
160	1	1	345	2021-01-08 13:25:04.827+00	2021-01-08 13:25:04.827+00
161	1	1	346	2021-01-08 13:25:09.713+00	2021-01-08 13:25:09.713+00
162	5	1	347	2021-01-08 13:25:13.508+00	2021-01-08 13:25:13.508+00
163	6	1	348	2021-01-08 13:25:17.461+00	2021-01-08 13:25:17.461+00
164	2	1	349	2021-01-08 13:25:21.22+00	2021-01-08 13:25:21.22+00
165	5	1	350	2021-01-08 13:25:25.612+00	2021-01-08 13:25:25.612+00
166	6	1	351	2021-01-08 13:25:29.305+00	2021-01-08 13:25:29.305+00
167	3	1	352	2021-01-08 13:25:33.26+00	2021-01-08 13:25:33.26+00
168	1	1	353	2021-01-08 13:25:37.103+00	2021-01-08 13:25:37.103+00
169	1	1	354	2021-01-08 13:25:41.177+00	2021-01-08 13:25:41.177+00
170	6	1	355	2021-01-08 13:25:44.892+00	2021-01-08 13:25:44.892+00
171	1	1	356	2021-01-08 13:25:48.656+00	2021-01-08 13:25:48.656+00
172	7	1	357	2021-01-08 13:25:53.498+00	2021-01-08 13:25:53.498+00
173	5	1	358	2021-01-08 13:25:58.544+00	2021-01-08 13:25:58.544+00
174	8	1	359	2021-01-08 13:26:03.243+00	2021-01-08 13:26:03.243+00
175	1	1	360	2021-01-08 13:26:08.269+00	2021-01-08 13:26:08.269+00
176	1	1	361	2021-01-08 13:26:12.842+00	2021-01-08 13:26:12.842+00
177	6	1	362	2021-01-08 13:26:17.757+00	2021-01-08 13:26:17.757+00
178	1	1	363	2021-01-08 13:26:22.407+00	2021-01-08 13:26:22.407+00
179	1	1	364	2021-01-08 13:26:27.578+00	2021-01-08 13:26:27.578+00
180	0	2	1	2021-01-08 15:58:29.994+00	2021-01-08 15:58:29.994+00
181	0	4	1	2021-01-13 17:05:37.384+00	2021-01-13 17:05:37.384+00
182	0	2	333	2021-01-13 21:15:27.362+00	2021-01-13 21:15:27.362+00
183	1	2	37	2021-01-13 21:19:35.729+00	2021-01-13 21:19:35.729+00
184	1	2	38	2021-01-13 21:19:39.643+00	2021-01-13 21:19:39.643+00
185	3	2	39	2021-01-13 21:19:55.648+00	2021-01-13 21:19:55.648+00
186	3	2	40	2021-01-13 21:20:01.035+00	2021-01-13 21:20:01.035+00
187	2	2	41	2021-01-13 21:20:46.676+00	2021-01-13 21:20:46.676+00
188	4	2	42	2021-01-13 21:20:50.486+00	2021-01-13 21:20:50.486+00
189	0	2	334	2021-01-14 02:49:04.434+00	2021-01-14 02:49:04.434+00
190	0	2	60	2021-01-14 02:54:28.037+00	2021-01-14 02:54:28.037+00
191	1	2	61	2021-01-14 02:54:31.399+00	2021-01-14 02:54:31.399+00
192	1	2	62	2021-01-14 02:54:34.9+00	2021-01-14 02:54:34.9+00
193	0	2	335	2021-01-14 02:57:25.083+00	2021-01-14 02:57:25.083+00
194	0	2	336	2021-01-14 02:59:32.898+00	2021-01-14 02:59:32.898+00
195	2	2	337	2021-01-14 03:07:27.003+00	2021-01-14 03:07:27.003+00
196	1	2	338	2021-01-14 03:07:31.097+00	2021-01-14 03:07:31.097+00
197	2	2	339	2021-01-14 03:08:56.192+00	2021-01-14 03:08:56.192+00
198	1	2	340	2021-01-14 03:09:00.368+00	2021-01-14 03:09:00.368+00
199	5	2	341	2021-01-14 03:09:04.716+00	2021-01-14 03:09:04.716+00
200	4	2	342	2021-01-14 03:09:08.392+00	2021-01-14 03:09:08.392+00
201	6	2	343	2021-01-14 03:09:12.836+00	2021-01-14 03:09:12.836+00
202	0	4	2	2021-01-14 19:08:27.608+00	2021-01-14 19:08:27.608+00
203	0	4	332	2021-01-14 19:10:29.149+00	2021-01-14 19:10:29.149+00
204	1	4	3	2021-01-14 19:10:41.352+00	2021-01-14 19:10:41.352+00
205	0	4	4	2021-01-14 19:10:46.646+00	2021-01-14 19:10:46.646+00
206	1	4	5	2021-01-14 19:10:50.137+00	2021-01-14 19:10:50.137+00
207	1	4	6	2021-01-14 19:10:53.23+00	2021-01-14 19:10:53.23+00
208	1	4	7	2021-01-14 19:10:56.275+00	2021-01-14 19:10:56.275+00
209	0	4	8	2021-01-14 19:10:59.602+00	2021-01-14 19:10:59.602+00
210	0	4	9	2021-01-14 19:11:02.592+00	2021-01-14 19:11:02.592+00
211	0	4	10	2021-01-14 19:11:05.829+00	2021-01-14 19:11:05.829+00
212	1	4	11	2021-01-14 19:11:08.913+00	2021-01-14 19:11:08.913+00
213	1	4	12	2021-01-14 19:11:11.899+00	2021-01-14 19:11:11.899+00
214	1	4	13	2021-01-14 19:11:19.877+00	2021-01-14 19:11:19.877+00
215	1	4	14	2021-01-14 19:11:22.844+00	2021-01-14 19:11:22.844+00
216	0	4	15	2021-01-14 19:11:26.593+00	2021-01-14 19:11:26.593+00
217	0	4	16	2021-01-14 19:11:29.571+00	2021-01-14 19:11:29.571+00
218	0	4	17	2021-01-14 19:11:33.125+00	2021-01-14 19:11:33.125+00
219	0	4	18	2021-01-14 19:11:36.201+00	2021-01-14 19:11:36.201+00
220	4	4	19	2021-01-14 19:11:42.138+00	2021-01-14 19:11:42.138+00
221	3	4	20	2021-01-14 19:11:45.269+00	2021-01-14 19:11:45.269+00
222	2	4	21	2021-01-14 19:11:48.021+00	2021-01-14 19:11:48.021+00
223	3	4	22	2021-01-14 19:11:50.794+00	2021-01-14 19:11:50.794+00
224	4	4	23	2021-01-14 19:11:53.635+00	2021-01-14 19:11:53.635+00
225	3	4	24	2021-01-14 19:11:56.187+00	2021-01-14 19:11:56.187+00
226	3	4	25	2021-01-14 19:11:58.538+00	2021-01-14 19:11:58.538+00
227	3	4	26	2021-01-14 19:12:01.023+00	2021-01-14 19:12:01.023+00
228	3	4	27	2021-01-14 19:12:03.523+00	2021-01-14 19:12:03.523+00
229	3	4	28	2021-01-14 19:12:06.164+00	2021-01-14 19:12:06.164+00
230	3	4	29	2021-01-14 19:12:08.635+00	2021-01-14 19:12:08.635+00
231	1	4	30	2021-01-14 19:12:11.904+00	2021-01-14 19:12:11.904+00
232	4	4	31	2021-01-14 19:12:14.75+00	2021-01-14 19:12:14.75+00
233	3	4	32	2021-01-14 19:12:17.874+00	2021-01-14 19:12:17.874+00
234	4	4	33	2021-01-14 19:12:20.37+00	2021-01-14 19:12:20.37+00
235	3	4	34	2021-01-14 19:12:22.691+00	2021-01-14 19:12:22.691+00
236	3	4	35	2021-01-14 19:12:25.946+00	2021-01-14 19:12:25.946+00
237	3	4	36	2021-01-14 19:12:28.26+00	2021-01-14 19:12:28.26+00
238	0	4	334	2021-01-14 19:18:03.383+00	2021-01-14 19:18:03.383+00
239	1	4	60	2021-01-14 19:18:12.507+00	2021-01-14 19:18:12.507+00
240	0	4	61	2021-01-14 19:18:15.701+00	2021-01-14 19:18:15.701+00
241	1	4	62	2021-01-14 19:18:19.403+00	2021-01-14 19:18:19.403+00
242	1	4	63	2021-01-14 19:18:22.387+00	2021-01-14 19:18:22.387+00
243	0	4	64	2021-01-14 19:18:25.637+00	2021-01-14 19:18:25.637+00
244	1	4	65	2021-01-14 19:18:28.833+00	2021-01-14 19:18:28.833+00
245	1	4	66	2021-01-14 19:18:31.712+00	2021-01-14 19:18:31.712+00
246	1	4	67	2021-01-14 19:18:34.623+00	2021-01-14 19:18:34.623+00
247	1	4	68	2021-01-14 19:18:37.907+00	2021-01-14 19:18:37.907+00
248	0	4	69	2021-01-14 19:18:41.37+00	2021-01-14 19:18:41.37+00
249	0	4	70	2021-01-14 19:18:44.293+00	2021-01-14 19:18:44.293+00
250	0	4	71	2021-01-14 19:18:47.335+00	2021-01-14 19:18:47.335+00
251	4	4	72	2021-01-14 19:18:53.542+00	2021-01-14 19:18:53.542+00
252	1	4	73	2021-01-14 19:18:56.591+00	2021-01-14 19:18:56.591+00
253	3	4	74	2021-01-14 19:19:05.224+00	2021-01-14 19:19:05.224+00
254	2	4	75	2021-01-14 19:19:11.346+00	2021-01-14 19:19:11.346+00
255	3	4	76	2021-01-14 19:19:14.23+00	2021-01-14 19:19:14.23+00
256	1	4	77	2021-01-14 19:19:16.951+00	2021-01-14 19:19:16.951+00
257	3	4	78	2021-01-14 19:19:20.024+00	2021-01-14 19:19:20.024+00
258	2	4	79	2021-01-14 19:19:22.723+00	2021-01-14 19:19:22.723+00
259	1	4	80	2021-01-14 19:19:25.502+00	2021-01-14 19:19:25.502+00
260	2	4	81	2021-01-14 19:19:28.069+00	2021-01-14 19:19:28.069+00
261	2	4	82	2021-01-14 19:19:35.32+00	2021-01-14 19:19:35.32+00
262	3	4	83	2021-01-14 19:19:38.955+00	2021-01-14 19:19:38.955+00
263	1	4	84	2021-01-14 19:19:42.521+00	2021-01-14 19:19:42.521+00
264	4	4	85	2021-01-14 19:19:46.226+00	2021-01-14 19:19:46.226+00
265	2	4	86	2021-01-14 19:19:50.061+00	2021-01-14 19:19:50.061+00
266	4	4	87	2021-01-14 19:19:53.809+00	2021-01-14 19:19:53.809+00
267	2	4	88	2021-01-14 19:19:57.466+00	2021-01-14 19:19:57.466+00
268	2	4	89	2021-01-14 19:20:00.915+00	2021-01-14 19:20:00.915+00
269	4	4	90	2021-01-14 19:20:04.48+00	2021-01-14 19:20:04.48+00
270	3	4	186	2021-01-14 19:21:51.956+00	2021-01-14 19:21:51.956+00
271	3	4	187	2021-01-14 19:21:54.485+00	2021-01-14 19:21:54.485+00
272	2	4	188	2021-01-14 19:21:57.491+00	2021-01-14 19:21:57.491+00
273	2	4	189	2021-01-14 19:22:00.342+00	2021-01-14 19:22:00.342+00
274	1	4	190	2021-01-14 19:22:03.087+00	2021-01-14 19:22:03.087+00
275	3	4	191	2021-01-14 19:22:05.883+00	2021-01-14 19:22:05.883+00
276	4	4	192	2021-01-14 19:22:09.543+00	2021-01-14 19:22:09.543+00
277	4	4	193	2021-01-14 19:22:12.124+00	2021-01-14 19:22:12.124+00
278	1	4	194	2021-01-14 19:22:15.469+00	2021-01-14 19:22:15.469+00
279	2	4	195	2021-01-14 19:22:18.275+00	2021-01-14 19:22:18.275+00
280	2	4	196	2021-01-14 19:22:21.01+00	2021-01-14 19:22:21.01+00
281	4	4	197	2021-01-14 19:22:25.442+00	2021-01-14 19:22:25.442+00
282	4	4	198	2021-01-14 19:22:28.227+00	2021-01-14 19:22:28.227+00
283	3	4	199	2021-01-14 19:22:31.117+00	2021-01-14 19:22:31.117+00
284	4	4	200	2021-01-14 19:22:33.972+00	2021-01-14 19:22:33.972+00
285	1	4	201	2021-01-14 19:22:36.675+00	2021-01-14 19:22:36.675+00
286	3	4	202	2021-01-14 19:22:39.285+00	2021-01-14 19:22:39.285+00
287	0	4	203	2021-01-14 19:22:51.366+00	2021-01-14 19:22:51.366+00
288	1	4	204	2021-01-14 19:22:58.705+00	2021-01-14 19:22:58.705+00
289	1	4	205	2021-01-14 19:23:05.482+00	2021-01-14 19:23:05.482+00
290	0	4	206	2021-01-14 19:23:17.404+00	2021-01-14 19:23:17.404+00
291	5	4	337	2021-01-14 19:26:33.552+00	2021-01-14 19:26:33.552+00
292	6	4	338	2021-01-14 19:26:37.341+00	2021-01-14 19:26:37.341+00
293	3	4	339	2021-01-14 19:26:41.341+00	2021-01-14 19:26:41.341+00
294	1	4	340	2021-01-14 19:26:45.612+00	2021-01-14 19:26:45.612+00
295	1	4	341	2021-01-14 19:26:49.436+00	2021-01-14 19:26:49.436+00
296	5	4	342	2021-01-14 19:26:53.156+00	2021-01-14 19:26:53.156+00
297	5	4	343	2021-01-14 19:26:56.848+00	2021-01-14 19:26:56.848+00
298	5	4	344	2021-01-14 19:27:00.346+00	2021-01-14 19:27:00.346+00
299	1	4	345	2021-01-14 19:27:04.129+00	2021-01-14 19:27:04.129+00
300	6	4	346	2021-01-14 19:27:07.666+00	2021-01-14 19:27:07.666+00
301	1	4	347	2021-01-14 19:27:11.386+00	2021-01-14 19:27:11.386+00
302	6	4	348	2021-01-14 19:27:15.221+00	2021-01-14 19:27:15.221+00
303	2	4	349	2021-01-14 19:27:18.888+00	2021-01-14 19:27:18.888+00
304	4	4	350	2021-01-14 19:27:22.714+00	2021-01-14 19:27:22.714+00
305	5	4	351	2021-01-14 19:27:27.4+00	2021-01-14 19:27:27.4+00
306	5	4	352	2021-01-14 19:27:31.088+00	2021-01-14 19:27:31.088+00
307	6	4	353	2021-01-14 19:27:35.353+00	2021-01-14 19:27:35.353+00
308	6	4	354	2021-01-14 19:27:38.85+00	2021-01-14 19:27:38.85+00
309	1	4	355	2021-01-14 19:27:42.735+00	2021-01-14 19:27:42.735+00
310	5	4	356	2021-01-14 19:27:46.796+00	2021-01-14 19:27:46.796+00
311	6	4	357	2021-01-14 19:27:51.741+00	2021-01-14 19:27:51.741+00
312	7	4	358	2021-01-14 19:27:56.537+00	2021-01-14 19:27:56.537+00
313	6	4	359	2021-01-14 19:28:01.083+00	2021-01-14 19:28:01.083+00
314	6	4	360	2021-01-14 19:28:05.606+00	2021-01-14 19:28:05.606+00
315	6	4	361	2021-01-14 19:28:10.126+00	2021-01-14 19:28:10.126+00
316	1	4	362	2021-01-14 19:28:14.367+00	2021-01-14 19:28:14.367+00
317	1	4	363	2021-01-14 19:28:18.885+00	2021-01-14 19:28:18.885+00
318	1	4	364	2021-01-14 19:28:23.233+00	2021-01-14 19:28:23.233+00
319	0	4	336	2021-01-14 19:30:56.954+00	2021-01-14 19:30:56.954+00
320	0	4	335	2021-01-14 19:35:30.158+00	2021-01-14 19:35:30.158+00
321	1	4	91	2021-01-14 19:35:38.013+00	2021-01-14 19:35:38.013+00
322	1	4	92	2021-01-14 19:35:41.209+00	2021-01-14 19:35:41.209+00
323	1	4	93	2021-01-14 19:35:44.444+00	2021-01-14 19:35:44.444+00
324	0	4	94	2021-01-14 19:35:47.592+00	2021-01-14 19:35:47.592+00
325	1	4	95	2021-01-14 19:35:50.668+00	2021-01-14 19:35:50.668+00
326	0	4	96	2021-01-14 19:35:53.458+00	2021-01-14 19:35:53.458+00
327	1	4	97	2021-01-14 19:35:56.122+00	2021-01-14 19:35:56.122+00
328	0	4	98	2021-01-14 19:35:59.085+00	2021-01-14 19:35:59.085+00
329	0	4	99	2021-01-14 19:36:01.697+00	2021-01-14 19:36:01.697+00
330	1	4	100	2021-01-14 19:36:04.548+00	2021-01-14 19:36:04.548+00
331	0	4	101	2021-01-14 19:36:07.949+00	2021-01-14 19:36:07.949+00
332	0	4	102	2021-01-14 19:36:10.596+00	2021-01-14 19:36:10.596+00
333	0	4	103	2021-01-14 19:36:13.173+00	2021-01-14 19:36:13.173+00
334	1	4	104	2021-01-14 19:36:16.107+00	2021-01-14 19:36:16.107+00
335	1	4	105	2021-01-14 19:36:18.793+00	2021-01-14 19:36:18.793+00
336	1	4	106	2021-01-14 19:36:21.517+00	2021-01-14 19:36:21.517+00
337	1	4	107	2021-01-14 19:36:24.14+00	2021-01-14 19:36:24.14+00
338	1	4	108	2021-01-14 19:36:26.701+00	2021-01-14 19:36:26.701+00
339	1	4	109	2021-01-14 19:36:29.132+00	2021-01-14 19:36:29.132+00
340	4	4	110	2021-01-14 19:36:35.306+00	2021-01-14 19:36:35.306+00
341	4	4	111	2021-01-14 19:36:38.283+00	2021-01-14 19:36:38.283+00
342	3	4	112	2021-01-14 19:36:41.443+00	2021-01-14 19:36:41.443+00
343	1	4	113	2021-01-14 19:36:44.486+00	2021-01-14 19:36:44.486+00
344	1	4	114	2021-01-14 19:36:47.411+00	2021-01-14 19:36:47.411+00
345	3	4	115	2021-01-14 19:36:50.439+00	2021-01-14 19:36:50.439+00
346	3	4	116	2021-01-14 19:36:53.507+00	2021-01-14 19:36:53.507+00
347	3	4	117	2021-01-14 19:36:55.996+00	2021-01-14 19:36:55.996+00
348	1	4	118	2021-01-14 19:36:58.714+00	2021-01-14 19:36:58.714+00
349	1	4	119	2021-01-14 19:37:01.499+00	2021-01-14 19:37:01.499+00
350	0	4	333	2021-01-14 19:43:55.561+00	2021-01-14 19:43:55.561+00
351	3	4	37	2021-01-14 19:44:03.57+00	2021-01-14 19:44:03.57+00
352	2	4	38	2021-01-14 19:44:10.682+00	2021-01-14 19:44:10.682+00
353	3	4	39	2021-01-14 19:44:20.511+00	2021-01-14 19:44:20.511+00
354	2	4	40	2021-01-14 19:44:26.251+00	2021-01-14 19:44:26.251+00
355	2	4	41	2021-01-14 19:44:30.712+00	2021-01-14 19:44:30.712+00
356	2	4	42	2021-01-14 19:44:52.445+00	2021-01-14 19:44:52.445+00
357	4	4	43	2021-01-14 19:44:55.673+00	2021-01-14 19:44:55.673+00
358	2	4	44	2021-01-14 19:44:59.634+00	2021-01-14 19:44:59.634+00
359	2	4	45	2021-01-14 19:45:02.825+00	2021-01-14 19:45:02.825+00
360	2	4	46	2021-01-14 19:45:06.048+00	2021-01-14 19:45:06.048+00
361	2	4	47	2021-01-14 19:45:09.239+00	2021-01-14 19:45:09.239+00
362	1	4	48	2021-01-14 19:45:12.926+00	2021-01-14 19:45:12.926+00
363	2	4	49	2021-01-14 19:45:16.981+00	2021-01-14 19:45:16.981+00
364	3	4	50	2021-01-14 19:45:21.273+00	2021-01-14 19:45:21.273+00
365	1	4	51	2021-01-14 19:45:25.42+00	2021-01-14 19:45:25.42+00
366	4	4	52	2021-01-14 19:45:29.57+00	2021-01-14 19:45:29.57+00
367	1	4	53	2021-01-14 19:45:33.587+00	2021-01-14 19:45:33.587+00
368	4	4	54	2021-01-14 19:45:37.866+00	2021-01-14 19:45:37.866+00
369	2	4	55	2021-01-14 19:45:41.927+00	2021-01-14 19:45:41.927+00
370	1	4	56	2021-01-14 19:45:45.838+00	2021-01-14 19:45:45.838+00
371	4	4	57	2021-01-14 19:45:49.72+00	2021-01-14 19:45:49.72+00
372	1	4	58	2021-01-14 19:45:53.687+00	2021-01-14 19:45:53.687+00
373	3	4	59	2021-01-14 19:45:57.964+00	2021-01-14 19:45:57.964+00
374	5	4	208	2021-01-14 19:54:11.727+00	2021-01-14 19:54:11.727+00
375	2	4	209	2021-01-14 19:54:14.875+00	2021-01-14 19:54:14.875+00
376	5	4	210	2021-01-14 19:54:18.114+00	2021-01-14 19:54:18.114+00
377	3	4	211	2021-01-14 19:54:21.326+00	2021-01-14 19:54:21.326+00
378	4	4	212	2021-01-14 19:54:24.064+00	2021-01-14 19:54:24.064+00
379	3	4	213	2021-01-14 19:54:27.121+00	2021-01-14 19:54:27.121+00
380	1	4	214	2021-01-14 19:54:30.499+00	2021-01-14 19:54:30.499+00
381	6	4	215	2021-01-14 19:54:33.355+00	2021-01-14 19:54:33.355+00
382	4	4	216	2021-01-14 19:54:36.807+00	2021-01-14 19:54:36.807+00
383	3	4	217	2021-01-14 19:54:39.896+00	2021-01-14 19:54:39.896+00
384	1	4	218	2021-01-14 19:54:43.062+00	2021-01-14 19:54:43.062+00
385	3	4	219	2021-01-14 19:54:46.185+00	2021-01-14 19:54:46.185+00
386	4	4	220	2021-01-14 19:54:49.351+00	2021-01-14 19:54:49.351+00
387	6	4	221	2021-01-14 19:54:52.563+00	2021-01-14 19:54:52.563+00
388	1	4	222	2021-01-14 19:54:55.506+00	2021-01-14 19:54:55.506+00
389	1	4	223	2021-01-14 19:54:58.721+00	2021-01-14 19:54:58.721+00
390	4	4	224	2021-01-14 19:55:01.506+00	2021-01-14 19:55:01.506+00
391	6	4	225	2021-01-14 19:55:04.522+00	2021-01-14 19:55:04.522+00
392	1	4	226	2021-01-14 19:55:07.267+00	2021-01-14 19:55:07.267+00
393	4	4	227	2021-01-14 19:55:10.52+00	2021-01-14 19:55:10.52+00
394	4	4	228	2021-01-14 19:55:13.201+00	2021-01-14 19:55:13.201+00
395	5	4	229	2021-01-14 19:55:16.328+00	2021-01-14 19:55:16.328+00
396	4	4	230	2021-01-14 19:55:19.272+00	2021-01-14 19:55:19.272+00
397	3	4	231	2021-01-14 19:55:22.353+00	2021-01-14 19:55:22.353+00
398	6	4	232	2021-01-14 19:55:25.407+00	2021-01-14 19:55:25.407+00
399	4	4	233	2021-01-14 19:55:28.399+00	2021-01-14 19:55:28.399+00
400	2	4	234	2021-01-14 19:55:31.184+00	2021-01-14 19:55:31.184+00
401	1	4	235	2021-01-14 19:55:33.961+00	2021-01-14 19:55:33.961+00
402	6	4	236	2021-01-14 19:55:37.138+00	2021-01-14 19:55:37.138+00
403	4	4	237	2021-01-14 19:55:40.096+00	2021-01-14 19:55:40.096+00
404	6	4	238	2021-01-14 19:55:43.248+00	2021-01-14 19:55:43.248+00
405	1	4	239	2021-01-14 19:55:46.307+00	2021-01-14 19:55:46.307+00
406	4	4	240	2021-01-14 19:55:49.119+00	2021-01-14 19:55:49.119+00
407	1	4	242	2021-01-14 19:55:55.786+00	2021-01-14 19:55:55.786+00
408	1	4	243	2021-01-14 19:55:58.786+00	2021-01-14 19:55:58.786+00
409	1	4	244	2021-01-14 19:56:01.918+00	2021-01-14 19:56:01.918+00
410	0	4	245	2021-01-14 19:56:04.705+00	2021-01-14 19:56:04.705+00
411	1	4	246	2021-01-14 19:56:07.989+00	2021-01-14 19:56:07.989+00
412	1	4	247	2021-01-14 19:56:11.799+00	2021-01-14 19:56:11.799+00
413	0	4	248	2021-01-14 19:56:15.097+00	2021-01-14 19:56:15.097+00
414	0	4	249	2021-01-14 19:56:18.856+00	2021-01-14 19:56:18.856+00
415	1	4	250	2021-01-14 19:56:22.154+00	2021-01-14 19:56:22.154+00
416	0	4	251	2021-01-14 19:56:25.9+00	2021-01-14 19:56:25.9+00
417	0	4	252	2021-01-14 19:56:29.696+00	2021-01-14 19:56:29.696+00
418	0	4	253	2021-01-14 19:56:32.673+00	2021-01-14 19:56:32.673+00
419	0	4	254	2021-01-14 19:56:36.152+00	2021-01-14 19:56:36.152+00
420	1	4	255	2021-01-14 19:56:39.833+00	2021-01-14 19:56:39.833+00
421	0	4	256	2021-01-14 19:56:43.343+00	2021-01-14 19:56:43.343+00
422	0	4	257	2021-01-14 19:56:47.463+00	2021-01-14 19:56:47.463+00
423	0	4	258	2021-01-14 19:56:51.407+00	2021-01-14 19:56:51.407+00
424	0	4	259	2021-01-14 19:56:55.942+00	2021-01-14 19:56:55.942+00
425	0	4	260	2021-01-14 19:56:59.554+00	2021-01-14 19:56:59.554+00
426	0	4	261	2021-01-14 19:57:03.097+00	2021-01-14 19:57:03.097+00
427	0	4	262	2021-01-14 19:57:06.726+00	2021-01-14 19:57:06.726+00
428	1	4	263	2021-01-14 19:57:10.023+00	2021-01-14 19:57:10.023+00
429	0	4	264	2021-01-14 19:57:14.151+00	2021-01-14 19:57:14.151+00
430	1	4	265	2021-01-14 19:57:17.311+00	2021-01-14 19:57:17.311+00
431	1	4	266	2021-01-14 19:57:21.248+00	2021-01-14 19:57:21.248+00
432	1	4	267	2021-01-14 19:57:24.763+00	2021-01-14 19:57:24.763+00
433	0	4	268	2021-01-14 19:57:28.482+00	2021-01-14 19:57:28.482+00
434	0	4	269	2021-01-14 19:57:31.886+00	2021-01-14 19:57:31.886+00
435	1	4	270	2021-01-14 19:57:35.448+00	2021-01-14 19:57:35.448+00
436	0	4	271	2021-01-14 19:57:39.632+00	2021-01-14 19:57:39.632+00
437	1	4	272	2021-01-14 19:57:44.351+00	2021-01-14 19:57:44.351+00
438	0	4	273	2021-01-14 19:57:48.15+00	2021-01-14 19:57:48.15+00
439	0	4	274	2021-01-14 19:57:51.792+00	2021-01-14 19:57:51.792+00
440	0	4	275	2021-01-14 19:57:55.431+00	2021-01-14 19:57:55.431+00
441	0	4	276	2021-01-14 19:57:59.044+00	2021-01-14 19:57:59.044+00
442	0	4	277	2021-01-14 19:58:02.739+00	2021-01-14 19:58:02.739+00
443	0	4	278	2021-01-14 19:58:06.222+00	2021-01-14 19:58:06.222+00
444	0	4	279	2021-01-14 19:58:10.015+00	2021-01-14 19:58:10.015+00
445	0	4	280	2021-01-14 19:58:14.193+00	2021-01-14 19:58:14.193+00
446	1	4	281	2021-01-14 19:58:18.135+00	2021-01-14 19:58:18.135+00
447	0	4	282	2021-01-14 19:58:22.592+00	2021-01-14 19:58:22.592+00
448	0	4	283	2021-01-14 19:58:26.858+00	2021-01-14 19:58:26.858+00
449	0	4	284	2021-01-14 19:58:31.01+00	2021-01-14 19:58:31.01+00
450	1	4	285	2021-01-14 19:58:39.09+00	2021-01-14 19:58:39.09+00
451	2	4	286	2021-01-14 19:59:42.41+00	2021-01-14 19:59:42.41+00
452	3	4	287	2021-01-14 19:59:45.343+00	2021-01-14 19:59:45.343+00
453	2	4	288	2021-01-14 19:59:48.083+00	2021-01-14 19:59:48.083+00
454	2	4	289	2021-01-14 19:59:50.758+00	2021-01-14 19:59:50.758+00
455	3	4	290	2021-01-14 19:59:53.681+00	2021-01-14 19:59:53.681+00
456	1	4	291	2021-01-14 19:59:57.03+00	2021-01-14 19:59:57.03+00
457	3	4	292	2021-01-14 19:59:59.95+00	2021-01-14 19:59:59.95+00
458	1	4	293	2021-01-14 20:00:02.518+00	2021-01-14 20:00:02.518+00
459	3	4	294	2021-01-14 20:00:05.48+00	2021-01-14 20:00:05.48+00
460	1	4	295	2021-01-14 20:00:08.286+00	2021-01-14 20:00:08.286+00
461	0	4	207	2021-01-14 20:00:39.63+00	2021-01-14 20:00:39.63+00
462	0	4	241	2021-01-14 20:00:53.869+00	2021-01-14 20:00:53.869+00
463	0	5	1	2021-01-17 17:19:43.344+00	2021-01-17 17:19:43.344+00
464	0	5	2	2021-01-17 17:20:47.715+00	2021-01-17 17:20:47.715+00
465	0	5	332	2021-01-17 17:22:12.27+00	2021-01-17 17:22:12.27+00
466	0	5	333	2021-01-17 17:23:55.631+00	2021-01-17 17:23:55.631+00
467	0	5	334	2021-01-17 17:25:13.32+00	2021-01-17 17:25:13.32+00
468	0	2	332	2021-01-18 01:01:52.347+00	2021-01-18 01:01:52.347+00
469	1	2	3	2021-01-18 01:17:37.5+00	2021-01-18 01:17:37.5+00
470	1	2	4	2021-01-18 01:24:28.16+00	2021-01-18 01:24:28.16+00
471	1	2	5	2021-01-18 01:24:31.332+00	2021-01-18 01:24:31.332+00
472	1	2	6	2021-01-18 01:24:34.176+00	2021-01-18 01:24:34.176+00
473	0	2	2	2021-01-18 03:31:08.972+00	2021-01-18 03:31:08.972+00
474	4	1	186	2021-01-18 04:51:40.932+00	2021-01-18 04:51:40.932+00
475	4	1	187	2021-01-18 04:51:43.592+00	2021-01-18 04:51:43.592+00
476	4	1	188	2021-01-18 04:51:46.261+00	2021-01-18 04:51:46.261+00
477	2	1	189	2021-01-18 04:51:49.1+00	2021-01-18 04:51:49.1+00
478	1	1	190	2021-01-18 04:51:51.729+00	2021-01-18 04:51:51.729+00
479	3	1	191	2021-01-18 04:51:54.406+00	2021-01-18 04:51:54.406+00
480	1	1	192	2021-01-18 04:51:57.049+00	2021-01-18 04:51:57.049+00
481	4	1	193	2021-01-18 04:51:59.708+00	2021-01-18 04:51:59.708+00
482	4	1	194	2021-01-18 04:52:02.504+00	2021-01-18 04:52:02.504+00
483	3	1	195	2021-01-18 04:52:05.052+00	2021-01-18 04:52:05.052+00
484	2	1	196	2021-01-18 04:52:07.719+00	2021-01-18 04:52:07.719+00
485	4	1	197	2021-01-18 04:52:10.481+00	2021-01-18 04:52:10.481+00
486	4	1	198	2021-01-18 04:52:13.197+00	2021-01-18 04:52:13.197+00
487	3	1	199	2021-01-18 04:52:15.793+00	2021-01-18 04:52:15.793+00
488	4	1	200	2021-01-18 04:52:18.474+00	2021-01-18 04:52:18.474+00
489	1	1	201	2021-01-18 04:52:21.197+00	2021-01-18 04:52:21.197+00
490	3	1	202	2021-01-18 04:52:23.898+00	2021-01-18 04:52:23.898+00
491	0	1	203	2021-01-18 04:52:33.614+00	2021-01-18 04:52:33.614+00
492	0	1	204	2021-01-18 04:52:40.684+00	2021-01-18 04:52:40.684+00
493	0	1	205	2021-01-18 04:52:48.297+00	2021-01-18 04:52:48.297+00
494	0	1	206	2021-01-18 04:52:57.996+00	2021-01-18 04:52:57.996+00
495	4	1	208	2021-01-18 04:53:20.136+00	2021-01-18 04:53:20.136+00
496	4	1	209	2021-01-18 04:53:22.854+00	2021-01-18 04:53:22.854+00
497	4	1	210	2021-01-18 04:53:25.659+00	2021-01-18 04:53:25.659+00
498	2	1	211	2021-01-18 04:53:28.485+00	2021-01-18 04:53:28.485+00
499	5	1	212	2021-01-18 04:53:31.3+00	2021-01-18 04:53:31.3+00
500	4	1	213	2021-01-18 04:53:34.096+00	2021-01-18 04:53:34.096+00
501	5	1	214	2021-01-18 04:53:38.144+00	2021-01-18 04:53:38.144+00
502	6	1	215	2021-01-18 04:53:41.417+00	2021-01-18 04:53:41.417+00
503	3	1	216	2021-01-18 04:53:45.18+00	2021-01-18 04:53:45.18+00
504	4	1	217	2021-01-18 04:53:48.087+00	2021-01-18 04:53:48.087+00
505	5	1	218	2021-01-18 04:53:51.016+00	2021-01-18 04:53:51.016+00
506	6	1	219	2021-01-18 04:53:54.983+00	2021-01-18 04:53:54.983+00
507	1	1	220	2021-01-18 04:53:58.039+00	2021-01-18 04:53:58.039+00
508	1	1	221	2021-01-18 04:54:01.009+00	2021-01-18 04:54:01.009+00
509	5	1	222	2021-01-18 04:54:03.912+00	2021-01-18 04:54:03.912+00
510	4	1	223	2021-01-18 04:54:06.82+00	2021-01-18 04:54:06.82+00
511	2	1	224	2021-01-18 04:54:09.944+00	2021-01-18 04:54:09.944+00
512	4	1	225	2021-01-18 04:54:13.162+00	2021-01-18 04:54:13.162+00
513	5	1	226	2021-01-18 04:54:17.983+00	2021-01-18 04:54:17.983+00
514	6	1	227	2021-01-18 04:54:20.86+00	2021-01-18 04:54:20.86+00
515	4	1	228	2021-01-18 04:54:23.77+00	2021-01-18 04:54:23.77+00
516	2	1	229	2021-01-18 04:54:26.918+00	2021-01-18 04:54:26.918+00
517	4	1	230	2021-01-18 04:54:29.949+00	2021-01-18 04:54:29.949+00
518	5	1	231	2021-01-18 04:54:32.931+00	2021-01-18 04:54:32.931+00
519	4	1	232	2021-01-18 04:54:35.896+00	2021-01-18 04:54:35.896+00
520	4	1	233	2021-01-18 04:54:38.503+00	2021-01-18 04:54:38.503+00
521	5	1	234	2021-01-18 04:54:41.365+00	2021-01-18 04:54:41.365+00
522	4	1	235	2021-01-18 04:54:44.294+00	2021-01-18 04:54:44.294+00
523	6	1	236	2021-01-18 04:54:47.357+00	2021-01-18 04:54:47.357+00
524	1	1	237	2021-01-18 04:54:50.219+00	2021-01-18 04:54:50.219+00
525	6	1	238	2021-01-18 04:54:53.37+00	2021-01-18 04:54:53.37+00
526	5	1	239	2021-01-18 04:54:56.34+00	2021-01-18 04:54:56.34+00
527	1	1	240	2021-01-18 04:54:59.454+00	2021-01-18 04:54:59.454+00
528	2	1	286	2021-01-18 04:55:30.136+00	2021-01-18 04:55:30.136+00
529	3	1	287	2021-01-18 04:55:32.466+00	2021-01-18 04:55:32.466+00
530	3	1	288	2021-01-18 04:55:34.719+00	2021-01-18 04:55:34.719+00
531	3	1	289	2021-01-18 04:55:37.249+00	2021-01-18 04:55:37.249+00
532	3	1	290	2021-01-18 04:55:39.638+00	2021-01-18 04:55:39.638+00
533	3	1	291	2021-01-18 04:57:07.571+00	2021-01-18 04:57:07.571+00
534	3	1	292	2021-01-18 04:57:10.14+00	2021-01-18 04:57:10.14+00
535	3	1	293	2021-01-18 04:57:14.602+00	2021-01-18 04:57:14.602+00
536	3	1	294	2021-01-18 04:57:17.162+00	2021-01-18 04:57:17.162+00
537	3	1	295	2021-01-18 04:57:19.605+00	2021-01-18 04:57:19.605+00
538	4	1	296	2021-01-18 04:57:26.868+00	2021-01-18 04:57:26.868+00
539	4	1	297	2021-01-18 04:57:29.262+00	2021-01-18 04:57:29.262+00
540	2	1	298	2021-01-18 04:57:32.117+00	2021-01-18 04:57:32.117+00
541	2	1	299	2021-01-18 04:57:34.949+00	2021-01-18 04:57:34.949+00
542	1	1	300	2021-01-18 04:57:37.851+00	2021-01-18 04:57:37.851+00
543	1	1	301	2021-01-18 04:57:40.813+00	2021-01-18 04:57:40.813+00
544	4	1	302	2021-01-18 04:57:43.799+00	2021-01-18 04:57:43.799+00
545	1	1	303	2021-01-18 04:57:46.807+00	2021-01-18 04:57:46.807+00
546	3	1	304	2021-01-18 04:57:49.874+00	2021-01-18 04:57:49.874+00
547	4	1	305	2021-01-18 04:57:52.247+00	2021-01-18 04:57:52.247+00
548	3	1	306	2021-01-18 04:57:54.423+00	2021-01-18 04:57:54.423+00
549	4	1	307	2021-01-18 04:57:57.128+00	2021-01-18 04:57:57.128+00
550	4	1	308	2021-01-18 04:57:59.63+00	2021-01-18 04:57:59.63+00
551	4	1	309	2021-01-18 04:58:01.671+00	2021-01-18 04:58:01.671+00
552	4	1	310	2021-01-18 04:58:03.927+00	2021-01-18 04:58:03.927+00
553	4	1	311	2021-01-18 04:58:05.969+00	2021-01-18 04:58:05.969+00
554	4	1	312	2021-01-18 04:58:08.693+00	2021-01-18 04:58:08.693+00
555	4	1	313	2021-01-18 04:58:11.472+00	2021-01-18 04:58:11.472+00
556	4	1	314	2021-01-18 04:58:14.824+00	2021-01-18 04:58:14.824+00
557	4	1	315	2021-01-18 04:58:20.613+00	2021-01-18 04:58:20.613+00
558	4	1	316	2021-01-18 04:58:23.121+00	2021-01-18 04:58:23.121+00
559	5	1	317	2021-01-18 04:58:25.885+00	2021-01-18 04:58:25.885+00
560	5	1	318	2021-01-18 04:58:30.799+00	2021-01-18 04:58:30.799+00
561	5	1	319	2021-01-18 04:58:34.329+00	2021-01-18 04:58:34.329+00
562	5	1	320	2021-01-18 04:58:36.515+00	2021-01-18 04:58:36.515+00
563	5	1	321	2021-01-18 04:58:38.7+00	2021-01-18 04:58:38.7+00
564	5	1	322	2021-01-18 04:58:40.994+00	2021-01-18 04:58:40.994+00
565	0	1	207	2021-01-18 04:59:09.13+00	2021-01-18 04:59:09.13+00
566	0	1	241	2021-01-18 04:59:25.234+00	2021-01-18 04:59:25.234+00
567	1	2	7	2021-01-19 04:25:06.498+00	2021-01-19 04:25:06.498+00
568	1	2	8	2021-01-19 04:25:09.906+00	2021-01-19 04:25:09.906+00
569	0	7	1	2021-01-19 21:42:14.1+00	2021-01-19 21:42:14.1+00
570	0	15	332	2021-01-20 19:05:33.517+00	2021-01-20 19:05:33.517+00
571	0	15	3	2021-01-20 19:05:45.018+00	2021-01-20 19:05:45.018+00
572	1	15	4	2021-01-20 19:05:48.321+00	2021-01-20 19:05:48.321+00
573	1	15	5	2021-01-20 19:05:51.737+00	2021-01-20 19:05:51.737+00
574	1	15	6	2021-01-20 19:05:54.823+00	2021-01-20 19:05:54.823+00
575	0	15	7	2021-01-20 19:05:58.085+00	2021-01-20 19:05:58.085+00
576	1	15	8	2021-01-20 19:06:01.943+00	2021-01-20 19:06:01.943+00
577	0	15	9	2021-01-20 19:06:05.376+00	2021-01-20 19:06:05.376+00
578	1	15	10	2021-01-20 19:06:08.672+00	2021-01-20 19:06:08.672+00
579	1	15	11	2021-01-20 19:06:12.128+00	2021-01-20 19:06:12.128+00
580	1	15	12	2021-01-20 19:06:15.105+00	2021-01-20 19:06:15.105+00
581	0	15	13	2021-01-20 19:06:18.554+00	2021-01-20 19:06:18.554+00
582	0	15	14	2021-01-20 19:06:22.194+00	2021-01-20 19:06:22.194+00
583	0	15	15	2021-01-20 19:06:25.839+00	2021-01-20 19:06:25.839+00
584	0	15	16	2021-01-20 19:06:29.311+00	2021-01-20 19:06:29.311+00
585	0	15	17	2021-01-20 19:06:32.564+00	2021-01-20 19:06:32.564+00
586	0	15	18	2021-01-20 19:06:35.679+00	2021-01-20 19:06:35.679+00
587	4	15	19	2021-01-20 19:06:43.048+00	2021-01-20 19:06:43.048+00
588	3	15	20	2021-01-20 19:06:45.558+00	2021-01-20 19:06:45.558+00
589	3	15	21	2021-01-20 19:06:49.397+00	2021-01-20 19:06:49.397+00
590	2	15	22	2021-01-20 19:06:52.16+00	2021-01-20 19:06:52.16+00
591	3	15	23	2021-01-20 19:06:54.823+00	2021-01-20 19:06:54.823+00
592	3	15	24	2021-01-20 19:06:57.438+00	2021-01-20 19:06:57.438+00
593	4	15	25	2021-01-20 19:07:00.103+00	2021-01-20 19:07:00.103+00
594	2	15	26	2021-01-20 19:07:02.785+00	2021-01-20 19:07:02.785+00
595	3	15	27	2021-01-20 19:07:05.637+00	2021-01-20 19:07:05.637+00
596	4	15	28	2021-01-20 19:07:08.696+00	2021-01-20 19:07:08.696+00
597	2	15	29	2021-01-20 19:07:11.608+00	2021-01-20 19:07:11.608+00
598	1	15	30	2021-01-20 19:07:14.778+00	2021-01-20 19:07:14.778+00
599	3	15	31	2021-01-20 19:07:18.053+00	2021-01-20 19:07:18.053+00
600	3	15	32	2021-01-20 19:07:20.763+00	2021-01-20 19:07:20.763+00
601	4	15	33	2021-01-20 19:07:23.498+00	2021-01-20 19:07:23.498+00
602	3	15	34	2021-01-20 19:07:26.032+00	2021-01-20 19:07:26.032+00
603	1	15	35	2021-01-20 19:07:28.963+00	2021-01-20 19:07:28.963+00
604	2	15	36	2021-01-20 19:07:31.739+00	2021-01-20 19:07:31.739+00
605	0	15	333	2021-01-20 19:08:39.773+00	2021-01-20 19:08:39.773+00
606	3	15	37	2021-01-20 19:08:51.714+00	2021-01-20 19:08:51.714+00
607	2	15	38	2021-01-20 19:08:55.655+00	2021-01-20 19:08:55.655+00
608	2	15	39	2021-01-20 19:08:59.08+00	2021-01-20 19:08:59.08+00
609	1	15	40	2021-01-20 19:09:02.691+00	2021-01-20 19:09:02.691+00
610	3	15	41	2021-01-20 19:09:06.526+00	2021-01-20 19:09:06.526+00
611	2	15	42	2021-01-20 19:09:10.077+00	2021-01-20 19:09:10.077+00
612	4	15	43	2021-01-20 19:09:13.835+00	2021-01-20 19:09:13.835+00
613	2	15	44	2021-01-20 19:09:17.752+00	2021-01-20 19:09:17.752+00
614	4	15	45	2021-01-20 19:09:21.439+00	2021-01-20 19:09:21.439+00
615	3	15	46	2021-01-20 19:09:25.303+00	2021-01-20 19:09:25.303+00
616	1	15	47	2021-01-20 19:09:28.936+00	2021-01-20 19:09:28.936+00
617	3	15	48	2021-01-20 19:09:32.57+00	2021-01-20 19:09:32.57+00
618	3	15	49	2021-01-20 19:09:36.349+00	2021-01-20 19:09:36.349+00
619	4	15	50	2021-01-20 19:09:40.372+00	2021-01-20 19:09:40.372+00
620	1	15	51	2021-01-20 19:09:44.471+00	2021-01-20 19:09:44.471+00
621	2	15	52	2021-01-20 19:09:48.663+00	2021-01-20 19:09:48.663+00
622	2	15	53	2021-01-20 19:09:52.643+00	2021-01-20 19:09:52.643+00
623	4	15	54	2021-01-20 19:09:56.888+00	2021-01-20 19:09:56.888+00
624	1	15	55	2021-01-20 19:10:01.315+00	2021-01-20 19:10:01.315+00
625	4	15	56	2021-01-20 19:10:05.575+00	2021-01-20 19:10:05.575+00
626	2	15	57	2021-01-20 19:10:09.346+00	2021-01-20 19:10:09.346+00
627	3	15	58	2021-01-20 19:10:13.137+00	2021-01-20 19:10:13.137+00
628	4	15	59	2021-01-20 19:10:17.532+00	2021-01-20 19:10:17.532+00
629	0	15	334	2021-01-20 19:11:19.013+00	2021-01-20 19:11:19.013+00
630	1	15	60	2021-01-20 19:11:27.729+00	2021-01-20 19:11:27.729+00
631	0	15	61	2021-01-20 19:11:31.21+00	2021-01-20 19:11:31.21+00
632	1	15	62	2021-01-20 19:11:34.713+00	2021-01-20 19:11:34.713+00
633	1	15	63	2021-01-20 19:11:37.935+00	2021-01-20 19:11:37.935+00
634	0	15	64	2021-01-20 19:11:41.318+00	2021-01-20 19:11:41.318+00
635	1	15	65	2021-01-20 19:11:44.718+00	2021-01-20 19:11:44.718+00
636	0	15	66	2021-01-20 19:11:48.088+00	2021-01-20 19:11:48.088+00
637	1	15	67	2021-01-20 19:11:51.581+00	2021-01-20 19:11:51.581+00
638	0	15	68	2021-01-20 19:11:55.294+00	2021-01-20 19:11:55.294+00
639	1	15	69	2021-01-20 19:11:58.668+00	2021-01-20 19:11:58.668+00
640	0	15	70	2021-01-20 19:12:02.074+00	2021-01-20 19:12:02.074+00
641	1	15	71	2021-01-20 19:12:05.348+00	2021-01-20 19:12:05.348+00
642	4	15	72	2021-01-20 19:12:11.877+00	2021-01-20 19:12:11.877+00
643	2	15	73	2021-01-20 19:12:14.861+00	2021-01-20 19:12:14.861+00
644	3	15	74	2021-01-20 19:12:17.842+00	2021-01-20 19:12:17.842+00
645	2	15	75	2021-01-20 19:12:21.04+00	2021-01-20 19:12:21.04+00
646	3	15	76	2021-01-20 19:12:23.81+00	2021-01-20 19:12:23.81+00
647	1	15	77	2021-01-20 19:12:27.088+00	2021-01-20 19:12:27.088+00
648	3	15	78	2021-01-20 19:12:30.027+00	2021-01-20 19:12:30.027+00
649	3	15	79	2021-01-20 19:12:32.609+00	2021-01-20 19:12:32.609+00
650	1	15	80	2021-01-20 19:12:35.565+00	2021-01-20 19:12:35.565+00
651	2	15	81	2021-01-20 19:12:38.314+00	2021-01-20 19:12:38.314+00
652	2	15	82	2021-01-20 19:12:45.108+00	2021-01-20 19:12:45.108+00
653	2	15	83	2021-01-20 19:12:48.738+00	2021-01-20 19:12:48.738+00
654	3	15	84	2021-01-20 19:12:52.416+00	2021-01-20 19:12:52.416+00
655	2	15	85	2021-01-20 19:12:56.035+00	2021-01-20 19:12:56.035+00
656	1	15	86	2021-01-20 19:12:59.551+00	2021-01-20 19:12:59.551+00
657	3	15	87	2021-01-20 19:13:03.319+00	2021-01-20 19:13:03.319+00
658	2	15	88	2021-01-20 19:13:06.814+00	2021-01-20 19:13:06.814+00
659	2	15	89	2021-01-20 19:13:10.271+00	2021-01-20 19:13:10.271+00
660	2	15	90	2021-01-20 19:13:13.76+00	2021-01-20 19:13:13.76+00
661	0	16	1	2021-01-20 19:26:32.065+00	2021-01-20 19:26:32.065+00
662	0	16	2	2021-01-20 19:29:39.402+00	2021-01-20 19:29:39.402+00
663	0	16	332	2021-01-20 19:31:37.192+00	2021-01-20 19:31:37.192+00
664	1	16	3	2021-01-20 19:31:56.85+00	2021-01-20 19:31:56.85+00
665	1	16	4	2021-01-20 19:32:00.716+00	2021-01-20 19:32:00.716+00
666	0	16	5	2021-01-20 19:32:04.285+00	2021-01-20 19:32:04.285+00
667	1	16	6	2021-01-20 19:32:07.799+00	2021-01-20 19:32:07.799+00
668	0	16	7	2021-01-20 19:32:11.358+00	2021-01-20 19:32:11.358+00
669	0	16	8	2021-01-20 19:32:14.855+00	2021-01-20 19:32:14.855+00
670	1	16	9	2021-01-20 19:32:18.799+00	2021-01-20 19:32:18.799+00
671	0	16	10	2021-01-20 19:32:22.299+00	2021-01-20 19:32:22.299+00
672	1	16	11	2021-01-20 19:32:25.682+00	2021-01-20 19:32:25.682+00
673	1	16	12	2021-01-20 19:32:29.036+00	2021-01-20 19:32:29.036+00
674	1	16	13	2021-01-20 19:32:32.36+00	2021-01-20 19:32:32.36+00
675	1	16	14	2021-01-20 19:32:35.755+00	2021-01-20 19:32:35.755+00
676	0	16	15	2021-01-20 19:32:39.427+00	2021-01-20 19:32:39.427+00
677	1	16	16	2021-01-20 19:32:43.134+00	2021-01-20 19:32:43.134+00
678	0	16	17	2021-01-20 19:32:47.309+00	2021-01-20 19:32:47.309+00
679	1	16	18	2021-01-20 19:32:50.826+00	2021-01-20 19:32:50.826+00
680	4	16	19	2021-01-20 19:32:58.012+00	2021-01-20 19:32:58.012+00
681	3	16	20	2021-01-20 19:33:00.975+00	2021-01-20 19:33:00.975+00
682	1	16	21	2021-01-20 19:33:04.069+00	2021-01-20 19:33:04.069+00
686	4	16	25	2021-01-20 19:33:15.896+00	2021-01-20 19:33:15.896+00
687	2	16	26	2021-01-20 19:33:19.079+00	2021-01-20 19:33:19.079+00
688	3	16	27	2021-01-20 19:33:21.871+00	2021-01-20 19:33:21.871+00
689	4	16	28	2021-01-20 19:33:24.753+00	2021-01-20 19:33:24.753+00
690	2	16	29	2021-01-20 19:33:28.132+00	2021-01-20 19:33:28.132+00
691	2	16	30	2021-01-20 19:33:30.932+00	2021-01-20 19:33:30.932+00
692	1	16	31	2021-01-20 19:33:34.295+00	2021-01-20 19:33:34.295+00
693	3	16	32	2021-01-20 19:33:37.135+00	2021-01-20 19:33:37.135+00
694	4	16	33	2021-01-20 19:33:39.944+00	2021-01-20 19:33:39.944+00
695	3	16	34	2021-01-20 19:33:42.688+00	2021-01-20 19:33:42.688+00
696	4	16	35	2021-01-20 19:33:45.461+00	2021-01-20 19:33:45.461+00
697	2	16	36	2021-01-20 19:33:48.674+00	2021-01-20 19:33:48.674+00
1217	4	49	347	2021-01-25 04:56:50.31+00	2021-01-25 04:56:50.31+00
1218	3	49	348	2021-01-25 04:56:53.775+00	2021-01-25 04:56:53.775+00
1219	3	49	349	2021-01-25 04:56:57.366+00	2021-01-25 04:56:57.366+00
1220	5	49	350	2021-01-25 04:57:01.404+00	2021-01-25 04:57:01.404+00
1221	3	49	351	2021-01-25 04:57:05.157+00	2021-01-25 04:57:05.157+00
1222	5	49	352	2021-01-25 04:57:09.11+00	2021-01-25 04:57:09.11+00
1223	2	49	353	2021-01-25 04:57:12.675+00	2021-01-25 04:57:12.675+00
1224	4	49	354	2021-01-25 04:57:16.587+00	2021-01-25 04:57:16.587+00
1225	2	49	355	2021-01-25 04:57:20.341+00	2021-01-25 04:57:20.341+00
1226	4	49	356	2021-01-25 04:57:23.974+00	2021-01-25 04:57:23.974+00
1227	6	49	357	2021-01-25 04:57:28.807+00	2021-01-25 04:57:28.807+00
1228	8	49	358	2021-01-25 04:57:33.64+00	2021-01-25 04:57:33.64+00
1229	5	49	359	2021-01-25 04:57:38.053+00	2021-01-25 04:57:38.053+00
1235	100	50	336	2021-01-25 05:06:39.631+00	2021-01-25 05:06:39.631+00
1237	100	48	335	2021-01-25 18:04:57.483+00	2021-01-25 18:04:57.483+00
1240	1	48	120	2021-01-25 18:21:18.852+00	2021-01-25 18:21:18.852+00
1241	1	48	121	2021-01-25 18:21:21.351+00	2021-01-25 18:21:21.351+00
1242	0	48	122	2021-01-25 18:21:24.12+00	2021-01-25 18:21:24.12+00
1243	1	48	123	2021-01-25 18:21:26.673+00	2021-01-25 18:21:26.673+00
1244	1	48	124	2021-01-25 18:21:29.545+00	2021-01-25 18:21:29.545+00
1245	0	48	125	2021-01-25 18:21:32.082+00	2021-01-25 18:21:32.082+00
1246	1	48	126	2021-01-25 18:21:34.833+00	2021-01-25 18:21:34.833+00
1247	1	48	127	2021-01-25 18:21:37.376+00	2021-01-25 18:21:37.376+00
1248	1	48	128	2021-01-25 18:21:40.378+00	2021-01-25 18:21:40.378+00
1249	1	48	129	2021-01-25 18:21:43.292+00	2021-01-25 18:21:43.292+00
1250	0	48	130	2021-01-25 18:21:46.121+00	2021-01-25 18:21:46.121+00
1251	0	48	131	2021-01-25 18:21:48.731+00	2021-01-25 18:21:48.731+00
1252	0	48	132	2021-01-25 18:21:51.594+00	2021-01-25 18:21:51.594+00
1253	0	48	133	2021-01-25 18:21:54.046+00	2021-01-25 18:21:54.046+00
1254	1	48	134	2021-01-25 18:21:56.811+00	2021-01-25 18:21:56.811+00
1255	1	48	135	2021-01-25 18:21:59.318+00	2021-01-25 18:21:59.318+00
1256	2	48	136	2021-01-25 18:22:05.628+00	2021-01-25 18:22:05.628+00
1257	5	48	137	2021-01-25 18:22:08.229+00	2021-01-25 18:22:08.229+00
1258	6	48	138	2021-01-25 18:22:11.62+00	2021-01-25 18:22:11.62+00
1259	3	48	139	2021-01-25 18:22:14.735+00	2021-01-25 18:22:14.735+00
1271	1	48	93	2021-01-25 18:30:13.119+00	2021-01-25 18:30:13.119+00
1272	1	48	94	2021-01-25 18:30:15.822+00	2021-01-25 18:30:15.822+00
1273	0	48	95	2021-01-25 18:30:18.867+00	2021-01-25 18:30:18.867+00
1274	0	48	96	2021-01-25 18:30:21.809+00	2021-01-25 18:30:21.809+00
1275	1	48	97	2021-01-25 18:30:24.585+00	2021-01-25 18:30:24.585+00
1276	1	48	98	2021-01-25 18:30:27.864+00	2021-01-25 18:30:27.864+00
1277	0	48	99	2021-01-25 18:30:31.668+00	2021-01-25 18:30:31.668+00
1278	0	48	100	2021-01-25 18:30:35.082+00	2021-01-25 18:30:35.082+00
1279	0	48	101	2021-01-25 18:30:38.016+00	2021-01-25 18:30:38.016+00
1280	0	48	102	2021-01-25 18:30:41.48+00	2021-01-25 18:30:41.48+00
1281	0	48	103	2021-01-25 18:30:44.445+00	2021-01-25 18:30:44.445+00
1282	0	48	104	2021-01-25 18:30:47.41+00	2021-01-25 18:30:47.41+00
1283	0	48	105	2021-01-25 18:30:50.203+00	2021-01-25 18:30:50.203+00
1284	0	48	106	2021-01-25 18:30:53.206+00	2021-01-25 18:30:53.206+00
1285	0	48	107	2021-01-25 18:30:56.186+00	2021-01-25 18:30:56.186+00
1286	0	48	108	2021-01-25 18:30:58.943+00	2021-01-25 18:30:58.943+00
1287	1	48	109	2021-01-25 18:31:02.166+00	2021-01-25 18:31:02.166+00
1288	2	48	110	2021-01-25 18:31:08.415+00	2021-01-25 18:31:08.415+00
1289	1	48	111	2021-01-25 18:31:11.72+00	2021-01-25 18:31:11.72+00
1290	2	48	112	2021-01-25 18:31:14.394+00	2021-01-25 18:31:14.394+00
1291	1	48	113	2021-01-25 18:31:17.392+00	2021-01-25 18:31:17.392+00
1292	1	48	114	2021-01-25 18:31:20.326+00	2021-01-25 18:31:20.326+00
1293	4	48	115	2021-01-25 18:31:23.556+00	2021-01-25 18:31:23.556+00
1294	3	48	116	2021-01-25 18:31:26.556+00	2021-01-25 18:31:26.556+00
1295	3	48	117	2021-01-25 18:31:29.727+00	2021-01-25 18:31:29.727+00
1296	1	48	118	2021-01-25 18:31:32.794+00	2021-01-25 18:31:32.794+00
1297	3	48	119	2021-01-25 18:31:35.887+00	2021-01-25 18:31:35.887+00
1301	0	48	62	2021-01-25 18:32:33.54+00	2021-01-25 18:32:33.54+00
1302	1	48	63	2021-01-25 18:32:36.895+00	2021-01-25 18:32:36.895+00
1303	1	48	64	2021-01-25 18:32:40.195+00	2021-01-25 18:32:40.195+00
1304	0	48	65	2021-01-25 18:32:43.487+00	2021-01-25 18:32:43.487+00
1305	1	48	66	2021-01-25 18:32:46.75+00	2021-01-25 18:32:46.75+00
1306	1	48	67	2021-01-25 18:32:50.03+00	2021-01-25 18:32:50.03+00
1307	1	48	68	2021-01-25 18:32:53.115+00	2021-01-25 18:32:53.115+00
1308	0	48	69	2021-01-25 18:32:56.455+00	2021-01-25 18:32:56.455+00
1309	1	48	70	2021-01-25 18:32:59.577+00	2021-01-25 18:32:59.577+00
1310	0	48	71	2021-01-25 18:33:02.994+00	2021-01-25 18:33:02.994+00
1311	4	48	72	2021-01-25 18:33:09.264+00	2021-01-25 18:33:09.264+00
1312	1	48	73	2021-01-25 18:33:12.134+00	2021-01-25 18:33:12.134+00
1313	1	48	74	2021-01-25 18:33:15.237+00	2021-01-25 18:33:15.237+00
1314	2	48	75	2021-01-25 18:33:17.879+00	2021-01-25 18:33:17.879+00
1315	3	48	76	2021-01-25 18:33:20.898+00	2021-01-25 18:33:20.898+00
1316	1	48	77	2021-01-25 18:33:23.837+00	2021-01-25 18:33:23.837+00
1317	3	48	78	2021-01-25 18:33:26.885+00	2021-01-25 18:33:26.885+00
1318	4	48	79	2021-01-25 18:33:29.894+00	2021-01-25 18:33:29.894+00
1319	1	48	80	2021-01-25 18:33:32.657+00	2021-01-25 18:33:32.657+00
1320	2	48	81	2021-01-25 18:33:35.31+00	2021-01-25 18:33:35.31+00
1321	2	48	82	2021-01-25 18:33:42.035+00	2021-01-25 18:33:42.035+00
1322	2	48	83	2021-01-25 18:33:45.359+00	2021-01-25 18:33:45.359+00
1323	2	48	84	2021-01-25 18:33:48.759+00	2021-01-25 18:33:48.759+00
1324	1	48	85	2021-01-25 18:33:52.252+00	2021-01-25 18:33:52.252+00
1325	2	48	86	2021-01-25 18:33:55.75+00	2021-01-25 18:33:55.75+00
1326	3	48	87	2021-01-25 18:33:59.301+00	2021-01-25 18:33:59.301+00
1327	3	48	88	2021-01-25 18:34:02.851+00	2021-01-25 18:34:02.851+00
1328	1	48	89	2021-01-25 18:34:06.438+00	2021-01-25 18:34:06.438+00
1329	1	48	90	2021-01-25 18:34:09.826+00	2021-01-25 18:34:09.826+00
1330	100	48	333	2021-01-25 18:35:05.629+00	2021-01-25 18:35:05.629+00
1331	2	48	37	2021-01-25 18:35:11.1+00	2021-01-25 18:35:11.1+00
1332	2	48	38	2021-01-25 18:35:14.806+00	2021-01-25 18:35:14.806+00
1333	3	48	39	2021-01-25 18:35:18.479+00	2021-01-25 18:35:18.479+00
1334	1	48	40	2021-01-25 18:35:21.962+00	2021-01-25 18:35:21.962+00
1335	3	48	41	2021-01-25 18:35:25.457+00	2021-01-25 18:35:25.457+00
1336	1	48	42	2021-01-25 18:35:28.892+00	2021-01-25 18:35:28.892+00
1337	3	48	43	2021-01-25 18:35:32.434+00	2021-01-25 18:35:32.434+00
1338	1	48	44	2021-01-25 18:35:36.143+00	2021-01-25 18:35:36.143+00
1339	2	48	45	2021-01-25 18:35:39.67+00	2021-01-25 18:35:39.67+00
1340	1	48	46	2021-01-25 18:35:43.124+00	2021-01-25 18:35:43.124+00
1341	2	48	47	2021-01-25 18:35:46.532+00	2021-01-25 18:35:46.532+00
1342	2	48	48	2021-01-25 18:35:49.872+00	2021-01-25 18:35:49.872+00
1343	3	48	49	2021-01-25 18:35:53.573+00	2021-01-25 18:35:53.573+00
1344	3	48	50	2021-01-25 18:35:57.39+00	2021-01-25 18:35:57.39+00
1345	1	48	51	2021-01-25 18:36:01.735+00	2021-01-25 18:36:01.735+00
1346	4	48	52	2021-01-25 18:36:05.751+00	2021-01-25 18:36:05.751+00
1347	2	48	53	2021-01-25 18:36:09.701+00	2021-01-25 18:36:09.701+00
1348	1	48	54	2021-01-25 18:36:13.746+00	2021-01-25 18:36:13.746+00
1349	2	48	55	2021-01-25 18:36:17.751+00	2021-01-25 18:36:17.751+00
1350	2	48	56	2021-01-25 18:36:21.937+00	2021-01-25 18:36:21.937+00
1351	2	48	57	2021-01-25 18:36:25.92+00	2021-01-25 18:36:25.92+00
1352	2	48	58	2021-01-25 18:36:29.961+00	2021-01-25 18:36:29.961+00
1353	2	48	59	2021-01-25 18:36:33.975+00	2021-01-25 18:36:33.975+00
1354	100	48	332	2021-01-25 18:37:16.058+00	2021-01-25 18:37:16.058+00
1355	1	48	3	2021-01-25 18:37:21.806+00	2021-01-25 18:37:21.806+00
1356	1	48	4	2021-01-25 18:37:25.043+00	2021-01-25 18:37:25.043+00
1357	0	48	5	2021-01-25 18:37:28.372+00	2021-01-25 18:37:28.372+00
1358	0	48	6	2021-01-25 18:37:31.793+00	2021-01-25 18:37:31.793+00
1359	0	48	7	2021-01-25 18:37:35.004+00	2021-01-25 18:37:35.004+00
1360	0	48	8	2021-01-25 18:37:38.767+00	2021-01-25 18:37:38.767+00
683	4	16	22	2021-01-20 19:33:07.121+00	2021-01-20 19:33:07.121+00
684	2	16	23	2021-01-20 19:33:10.201+00	2021-01-20 19:33:10.201+00
685	3	16	24	2021-01-20 19:33:12.931+00	2021-01-20 19:33:12.931+00
698	0	16	333	2021-01-20 19:36:25.653+00	2021-01-20 19:36:25.653+00
699	3	16	37	2021-01-20 19:37:38.211+00	2021-01-20 19:37:38.211+00
700	2	16	38	2021-01-20 19:37:41.785+00	2021-01-20 19:37:41.785+00
701	2	16	39	2021-01-20 19:37:45.18+00	2021-01-20 19:37:45.18+00
702	1	16	40	2021-01-20 19:37:48.755+00	2021-01-20 19:37:48.755+00
703	3	16	41	2021-01-20 19:37:52.301+00	2021-01-20 19:37:52.301+00
704	2	16	42	2021-01-20 19:37:55.804+00	2021-01-20 19:37:55.804+00
705	3	16	43	2021-01-20 19:37:59.293+00	2021-01-20 19:37:59.293+00
706	2	16	44	2021-01-20 19:38:02.851+00	2021-01-20 19:38:02.851+00
707	3	16	45	2021-01-20 19:38:06.526+00	2021-01-20 19:38:06.526+00
708	3	16	46	2021-01-20 19:38:10.508+00	2021-01-20 19:38:10.508+00
709	1	16	47	2021-01-20 19:38:14.361+00	2021-01-20 19:38:14.361+00
710	2	16	48	2021-01-20 19:38:17.773+00	2021-01-20 19:38:17.773+00
711	3	16	49	2021-01-20 19:38:21.552+00	2021-01-20 19:38:21.552+00
712	3	16	50	2021-01-20 19:38:25.599+00	2021-01-20 19:38:25.599+00
713	2	16	51	2021-01-20 19:38:29.923+00	2021-01-20 19:38:29.923+00
714	3	16	52	2021-01-20 19:38:34.089+00	2021-01-20 19:38:34.089+00
715	1	16	53	2021-01-20 19:38:38.319+00	2021-01-20 19:38:38.319+00
716	3	16	54	2021-01-20 19:38:42.523+00	2021-01-20 19:38:42.523+00
717	3	16	55	2021-01-20 19:38:46.335+00	2021-01-20 19:38:46.335+00
718	3	16	56	2021-01-20 19:38:50.26+00	2021-01-20 19:38:50.26+00
719	2	16	57	2021-01-20 19:38:54.494+00	2021-01-20 19:38:54.494+00
720	3	16	58	2021-01-20 19:38:58.615+00	2021-01-20 19:38:58.615+00
721	3	16	59	2021-01-20 19:39:04.718+00	2021-01-20 19:39:04.718+00
722	0	16	334	2021-01-20 19:39:52.572+00	2021-01-20 19:39:52.572+00
723	1	16	60	2021-01-20 19:40:00.788+00	2021-01-20 19:40:00.788+00
724	0	16	61	2021-01-20 19:40:04.125+00	2021-01-20 19:40:04.125+00
725	1	16	62	2021-01-20 19:40:07.467+00	2021-01-20 19:40:07.467+00
726	1	16	63	2021-01-20 19:40:11.053+00	2021-01-20 19:40:11.053+00
727	1	16	64	2021-01-20 19:40:14.315+00	2021-01-20 19:40:14.315+00
728	0	16	65	2021-01-20 19:40:17.597+00	2021-01-20 19:40:17.597+00
729	1	16	66	2021-01-20 19:40:21.114+00	2021-01-20 19:40:21.114+00
730	0	16	67	2021-01-20 19:40:24.797+00	2021-01-20 19:40:24.797+00
731	1	16	68	2021-01-20 19:40:27.822+00	2021-01-20 19:40:27.822+00
732	1	16	69	2021-01-20 19:40:30.98+00	2021-01-20 19:40:30.98+00
733	1	16	70	2021-01-20 19:40:33.951+00	2021-01-20 19:40:33.951+00
734	1	16	71	2021-01-20 19:40:37.036+00	2021-01-20 19:40:37.036+00
735	4	16	72	2021-01-20 19:40:46.746+00	2021-01-20 19:40:46.746+00
736	1	16	73	2021-01-20 19:40:50.033+00	2021-01-20 19:40:50.033+00
737	2	16	74	2021-01-20 19:40:53.167+00	2021-01-20 19:40:53.167+00
738	3	16	75	2021-01-20 19:40:56.443+00	2021-01-20 19:40:56.443+00
739	3	16	76	2021-01-20 19:40:59.731+00	2021-01-20 19:40:59.731+00
740	1	16	77	2021-01-20 19:41:02.891+00	2021-01-20 19:41:02.891+00
741	3	16	78	2021-01-20 19:41:06.101+00	2021-01-20 19:41:06.101+00
742	3	16	79	2021-01-20 19:41:08.981+00	2021-01-20 19:41:08.981+00
743	1	16	80	2021-01-20 19:41:11.766+00	2021-01-20 19:41:11.766+00
744	2	16	81	2021-01-20 19:41:14.453+00	2021-01-20 19:41:14.453+00
745	3	16	82	2021-01-20 19:41:21.269+00	2021-01-20 19:41:21.269+00
746	3	16	83	2021-01-20 19:41:24.942+00	2021-01-20 19:41:24.942+00
747	3	16	84	2021-01-20 19:41:28.356+00	2021-01-20 19:41:28.356+00
748	2	16	85	2021-01-20 19:41:32.097+00	2021-01-20 19:41:32.097+00
749	2	16	86	2021-01-20 19:41:35.675+00	2021-01-20 19:41:35.675+00
750	4	16	87	2021-01-20 19:41:39.366+00	2021-01-20 19:41:39.366+00
751	2	16	88	2021-01-20 19:41:42.977+00	2021-01-20 19:41:42.977+00
752	1	16	89	2021-01-20 19:41:46.522+00	2021-01-20 19:41:46.522+00
753	3	16	90	2021-01-20 19:41:50.551+00	2021-01-20 19:41:50.551+00
754	0	17	335	2021-01-20 19:54:21.048+00	2021-01-20 19:54:21.048+00
755	1	17	91	2021-01-20 19:54:30.483+00	2021-01-20 19:54:30.483+00
756	1	17	92	2021-01-20 19:54:33.402+00	2021-01-20 19:54:33.402+00
757	1	17	93	2021-01-20 19:54:36.318+00	2021-01-20 19:54:36.318+00
758	1	17	94	2021-01-20 19:54:39.388+00	2021-01-20 19:54:39.388+00
759	0	17	95	2021-01-20 19:54:42.167+00	2021-01-20 19:54:42.167+00
760	1	17	96	2021-01-20 19:55:10.316+00	2021-01-20 19:55:10.316+00
761	1	17	97	2021-01-20 19:55:13.107+00	2021-01-20 19:55:13.107+00
762	0	17	98	2021-01-20 19:55:16.01+00	2021-01-20 19:55:16.01+00
763	1	17	99	2021-01-20 19:55:18.763+00	2021-01-20 19:55:18.763+00
764	1	17	100	2021-01-20 19:55:21.947+00	2021-01-20 19:55:21.947+00
765	0	17	101	2021-01-20 19:55:25.063+00	2021-01-20 19:55:25.063+00
766	1	17	102	2021-01-20 19:55:27.912+00	2021-01-20 19:55:27.912+00
767	1	17	103	2021-01-20 19:55:30.719+00	2021-01-20 19:55:30.719+00
768	1	17	104	2021-01-20 19:55:33.493+00	2021-01-20 19:55:33.493+00
769	0	17	105	2021-01-20 19:55:36.547+00	2021-01-20 19:55:36.547+00
770	1	17	106	2021-01-20 19:55:39.798+00	2021-01-20 19:55:39.798+00
771	1	17	107	2021-01-20 19:55:42.722+00	2021-01-20 19:55:42.722+00
772	1	17	108	2021-01-20 19:55:45.615+00	2021-01-20 19:55:45.615+00
773	0	17	109	2021-01-20 19:55:48.7+00	2021-01-20 19:55:48.7+00
774	3	17	110	2021-01-20 19:55:55.026+00	2021-01-20 19:55:55.026+00
775	1	17	111	2021-01-20 19:55:57.85+00	2021-01-20 19:55:57.85+00
776	1	17	112	2021-01-20 19:56:00.78+00	2021-01-20 19:56:00.78+00
777	3	17	113	2021-01-20 19:56:03.589+00	2021-01-20 19:56:03.589+00
778	3	17	114	2021-01-20 19:56:07.139+00	2021-01-20 19:56:07.139+00
779	3	17	115	2021-01-20 19:56:10.014+00	2021-01-20 19:56:10.014+00
780	1	17	116	2021-01-20 19:56:12.712+00	2021-01-20 19:56:12.712+00
781	1	17	117	2021-01-20 19:56:15.561+00	2021-01-20 19:56:15.561+00
782	4	17	118	2021-01-20 19:56:18.568+00	2021-01-20 19:56:18.568+00
783	3	17	119	2021-01-20 19:56:21.597+00	2021-01-20 19:56:21.597+00
784	0	17	336	2021-01-20 19:59:33.284+00	2021-01-20 19:59:33.284+00
785	1	20	151	2021-01-20 21:17:22.47+00	2021-01-20 21:17:22.47+00
786	1	20	152	2021-01-20 21:17:26.628+00	2021-01-20 21:17:26.628+00
787	1	20	153	2021-01-20 21:17:31.175+00	2021-01-20 21:17:31.175+00
788	1	20	154	2021-01-20 21:17:35.661+00	2021-01-20 21:17:35.661+00
789	1	20	155	2021-01-20 21:17:40.152+00	2021-01-20 21:17:40.152+00
790	1	20	156	2021-01-20 21:17:44.334+00	2021-01-20 21:17:44.334+00
791	1	20	157	2021-01-20 21:17:48.977+00	2021-01-20 21:17:48.977+00
792	0	20	158	2021-01-20 21:17:53.266+00	2021-01-20 21:17:53.266+00
793	2	20	159	2021-01-20 21:18:05.338+00	2021-01-20 21:18:05.338+00
794	3	20	160	2021-01-20 21:18:14.833+00	2021-01-20 21:18:14.833+00
795	1	20	161	2021-01-20 21:18:25.403+00	2021-01-20 21:18:25.403+00
796	3	20	162	2021-01-20 21:18:34.361+00	2021-01-20 21:18:34.361+00
797	1	20	163	2021-01-20 21:18:43.809+00	2021-01-20 21:18:43.809+00
798	0	20	164	2021-01-20 21:18:50.336+00	2021-01-20 21:18:50.336+00
799	1	20	165	2021-01-20 21:18:53.712+00	2021-01-20 21:18:53.712+00
800	1	20	166	2021-01-20 21:18:56.95+00	2021-01-20 21:18:56.95+00
801	0	20	167	2021-01-20 21:19:00.457+00	2021-01-20 21:19:00.457+00
802	1	20	168	2021-01-20 21:19:04.093+00	2021-01-20 21:19:04.093+00
803	0	20	169	2021-01-20 21:19:07.17+00	2021-01-20 21:19:07.17+00
804	1	20	170	2021-01-20 21:19:10.433+00	2021-01-20 21:19:10.433+00
805	0	20	171	2021-01-20 21:19:13.877+00	2021-01-20 21:19:13.877+00
806	1	20	172	2021-01-20 21:19:17.341+00	2021-01-20 21:19:17.341+00
807	1	20	173	2021-01-20 21:19:20.609+00	2021-01-20 21:19:20.609+00
808	1	20	174	2021-01-20 21:19:30.592+00	2021-01-20 21:19:30.592+00
809	0	20	175	2021-01-20 21:19:37.361+00	2021-01-20 21:19:37.361+00
810	1	20	176	2021-01-20 21:19:44.14+00	2021-01-20 21:19:44.14+00
811	1	20	177	2021-01-20 21:19:51.043+00	2021-01-20 21:19:51.043+00
812	2	20	337	2021-01-20 21:20:34.089+00	2021-01-20 21:20:34.089+00
813	3	20	338	2021-01-20 21:20:37.584+00	2021-01-20 21:20:37.584+00
814	3	20	339	2021-01-20 21:20:40.928+00	2021-01-20 21:20:40.928+00
815	4	20	340	2021-01-20 21:20:44.976+00	2021-01-20 21:20:44.976+00
816	5	20	341	2021-01-20 21:20:48.816+00	2021-01-20 21:20:48.816+00
817	4	20	342	2021-01-20 21:20:52.528+00	2021-01-20 21:20:52.528+00
818	6	20	343	2021-01-20 21:20:56.695+00	2021-01-20 21:20:56.695+00
819	2	20	344	2021-01-20 21:21:00.335+00	2021-01-20 21:21:00.335+00
820	2	20	345	2021-01-20 21:21:03.916+00	2021-01-20 21:21:03.916+00
821	5	20	346	2021-01-20 21:21:07.633+00	2021-01-20 21:21:07.633+00
822	6	20	347	2021-01-20 21:21:11.683+00	2021-01-20 21:21:11.683+00
823	2	20	348	2021-01-20 21:21:15.159+00	2021-01-20 21:21:15.159+00
824	4	20	349	2021-01-20 21:21:18.62+00	2021-01-20 21:21:18.62+00
825	6	20	350	2021-01-20 21:21:22.435+00	2021-01-20 21:21:22.435+00
826	3	20	351	2021-01-20 21:21:26.01+00	2021-01-20 21:21:26.01+00
827	5	20	352	2021-01-20 21:21:29.697+00	2021-01-20 21:21:29.697+00
828	5	20	353	2021-01-20 21:21:33.387+00	2021-01-20 21:21:33.387+00
829	5	20	354	2021-01-20 21:21:37.123+00	2021-01-20 21:21:37.123+00
830	2	20	355	2021-01-20 21:21:40.845+00	2021-01-20 21:21:40.845+00
831	3	20	356	2021-01-20 21:21:44.683+00	2021-01-20 21:21:44.683+00
832	5	20	357	2021-01-20 21:21:49.587+00	2021-01-20 21:21:49.587+00
833	1	20	358	2021-01-20 21:21:54.535+00	2021-01-20 21:21:54.535+00
834	8	20	359	2021-01-20 21:21:59.002+00	2021-01-20 21:21:59.002+00
835	7	20	360	2021-01-20 21:22:03.559+00	2021-01-20 21:22:03.559+00
836	1	20	361	2021-01-20 21:22:08.04+00	2021-01-20 21:22:08.04+00
837	5	20	362	2021-01-20 21:22:12.333+00	2021-01-20 21:22:12.333+00
838	1	20	363	2021-01-20 21:22:16.664+00	2021-01-20 21:22:16.664+00
839	6	20	364	2021-01-20 21:22:21.182+00	2021-01-20 21:22:21.182+00
840	0	29	332	2021-01-21 15:07:52.76+00	2021-01-21 15:07:52.76+00
841	1	29	3	2021-01-21 15:08:39.158+00	2021-01-21 15:08:39.158+00
842	0	29	4	2021-01-21 15:08:42.607+00	2021-01-21 15:08:42.607+00
843	1	29	5	2021-01-21 15:08:45.842+00	2021-01-21 15:08:45.842+00
844	1	29	6	2021-01-21 15:08:49.164+00	2021-01-21 15:08:49.164+00
845	1	29	7	2021-01-21 15:08:52.534+00	2021-01-21 15:08:52.534+00
846	0	29	8	2021-01-21 15:08:55.615+00	2021-01-21 15:08:55.615+00
847	1	29	9	2021-01-21 15:08:59.066+00	2021-01-21 15:08:59.066+00
848	0	29	10	2021-01-21 15:09:02.279+00	2021-01-21 15:09:02.279+00
849	1	29	11	2021-01-21 15:09:05.357+00	2021-01-21 15:09:05.357+00
850	1	29	12	2021-01-21 15:09:11.965+00	2021-01-21 15:09:11.965+00
851	0	29	13	2021-01-21 15:09:15.668+00	2021-01-21 15:09:15.668+00
852	1	29	14	2021-01-21 15:09:19.251+00	2021-01-21 15:09:19.251+00
853	1	29	15	2021-01-21 15:09:22.724+00	2021-01-21 15:09:22.724+00
854	0	29	16	2021-01-21 15:09:26.135+00	2021-01-21 15:09:26.135+00
855	1	29	17	2021-01-21 15:09:29.523+00	2021-01-21 15:09:29.523+00
856	1	29	18	2021-01-21 15:09:32.768+00	2021-01-21 15:09:32.768+00
857	4	29	19	2021-01-21 15:09:38.132+00	2021-01-21 15:09:38.132+00
858	3	29	20	2021-01-21 15:09:40.735+00	2021-01-21 15:09:40.735+00
859	3	29	21	2021-01-21 15:09:43.837+00	2021-01-21 15:09:43.837+00
860	4	29	22	2021-01-21 15:09:46.686+00	2021-01-21 15:09:46.686+00
861	2	29	23	2021-01-21 15:09:49.749+00	2021-01-21 15:09:49.749+00
862	3	29	24	2021-01-21 15:09:53.767+00	2021-01-21 15:09:53.767+00
863	4	29	25	2021-01-21 15:09:56.252+00	2021-01-21 15:09:56.252+00
864	2	29	26	2021-01-21 15:09:58.937+00	2021-01-21 15:09:58.937+00
865	3	29	27	2021-01-21 15:10:01.922+00	2021-01-21 15:10:01.922+00
866	4	29	28	2021-01-21 15:10:04.5+00	2021-01-21 15:10:04.5+00
867	2	29	29	2021-01-21 15:10:07.126+00	2021-01-21 15:10:07.126+00
868	1	29	30	2021-01-21 15:10:09.935+00	2021-01-21 15:10:09.935+00
869	2	29	31	2021-01-21 15:10:12.579+00	2021-01-21 15:10:12.579+00
870	3	29	32	2021-01-21 15:10:15.101+00	2021-01-21 15:10:15.101+00
871	4	29	33	2021-01-21 15:10:17.81+00	2021-01-21 15:10:17.81+00
872	3	29	34	2021-01-21 15:10:20.478+00	2021-01-21 15:10:20.478+00
873	4	29	35	2021-01-21 15:10:23.152+00	2021-01-21 15:10:23.152+00
874	2	29	36	2021-01-21 15:10:25.921+00	2021-01-21 15:10:25.921+00
875	1	25	186	2021-01-21 17:33:26.964+00	2021-01-21 17:33:26.964+00
876	3	25	187	2021-01-21 17:33:30.065+00	2021-01-21 17:33:30.065+00
877	4	25	188	2021-01-21 17:33:33.33+00	2021-01-21 17:33:33.33+00
878	2	25	189	2021-01-21 17:33:36.678+00	2021-01-21 17:33:36.678+00
879	1	25	190	2021-01-21 17:33:39.563+00	2021-01-21 17:33:39.563+00
880	0	31	332	2021-01-21 18:12:37.724+00	2021-01-21 18:12:37.724+00
881	1	31	3	2021-01-21 18:12:50.895+00	2021-01-21 18:12:50.895+00
882	0	31	4	2021-01-21 18:12:54.311+00	2021-01-21 18:12:54.311+00
883	0	31	5	2021-01-21 18:12:57.483+00	2021-01-21 18:12:57.483+00
884	1	31	6	2021-01-21 18:13:01.223+00	2021-01-21 18:13:01.223+00
885	0	31	7	2021-01-21 18:13:04.386+00	2021-01-21 18:13:04.386+00
886	0	31	8	2021-01-21 18:13:07.933+00	2021-01-21 18:13:07.933+00
887	1	31	9	2021-01-21 18:13:11.665+00	2021-01-21 18:13:11.665+00
888	0	31	10	2021-01-21 18:13:15.046+00	2021-01-21 18:13:15.046+00
889	1	31	11	2021-01-21 18:13:18.299+00	2021-01-21 18:13:18.299+00
890	1	31	12	2021-01-21 18:13:21.678+00	2021-01-21 18:13:21.678+00
891	1	31	13	2021-01-21 18:13:25.064+00	2021-01-21 18:13:25.064+00
892	0	31	14	2021-01-21 18:13:28.51+00	2021-01-21 18:13:28.51+00
893	1	31	15	2021-01-21 18:13:31.779+00	2021-01-21 18:13:31.779+00
894	0	31	16	2021-01-21 18:13:35.592+00	2021-01-21 18:13:35.592+00
895	1	31	17	2021-01-21 18:13:39.315+00	2021-01-21 18:13:39.315+00
896	1	31	18	2021-01-21 18:13:42.492+00	2021-01-21 18:13:42.492+00
897	4	31	19	2021-01-21 18:13:48.017+00	2021-01-21 18:13:48.017+00
898	3	31	20	2021-01-21 18:13:50.576+00	2021-01-21 18:13:50.576+00
899	1	31	21	2021-01-21 18:13:53.553+00	2021-01-21 18:13:53.553+00
900	4	31	22	2021-01-21 18:13:56.779+00	2021-01-21 18:13:56.779+00
901	2	31	23	2021-01-21 18:13:59.625+00	2021-01-21 18:13:59.625+00
902	3	31	24	2021-01-21 18:14:02.319+00	2021-01-21 18:14:02.319+00
903	4	31	25	2021-01-21 18:14:04.954+00	2021-01-21 18:14:04.954+00
904	2	31	26	2021-01-21 18:14:07.704+00	2021-01-21 18:14:07.704+00
905	3	31	27	2021-01-21 18:14:10.367+00	2021-01-21 18:14:10.367+00
906	3	31	28	2021-01-21 18:14:13.231+00	2021-01-21 18:14:13.231+00
907	2	31	29	2021-01-21 18:14:16.235+00	2021-01-21 18:14:16.235+00
908	1	31	30	2021-01-21 18:14:19.08+00	2021-01-21 18:14:19.08+00
909	1	31	31	2021-01-21 18:14:21.643+00	2021-01-21 18:14:21.643+00
910	3	31	32	2021-01-21 18:14:24.433+00	2021-01-21 18:14:24.433+00
911	4	31	33	2021-01-21 18:14:27.122+00	2021-01-21 18:14:27.122+00
912	3	31	34	2021-01-21 18:14:29.707+00	2021-01-21 18:14:29.707+00
913	1	31	35	2021-01-21 18:14:32.533+00	2021-01-21 18:14:32.533+00
914	2	31	36	2021-01-21 18:14:35.56+00	2021-01-21 18:14:35.56+00
915	100	30	332	2021-01-22 15:27:05.367+00	2021-01-22 15:27:05.367+00
916	100	30	333	2021-01-22 15:30:41.153+00	2021-01-22 15:30:41.153+00
917	100	30	334	2021-01-22 15:37:09.312+00	2021-01-22 15:37:09.312+00
918	100	30	335	2021-01-22 15:39:49.537+00	2021-01-22 15:39:49.537+00
919	100	30	336	2021-01-22 15:57:09.689+00	2021-01-22 15:57:09.689+00
920	0	30	207	2021-01-22 16:06:11.487+00	2021-01-22 16:06:11.487+00
921	0	30	241	2021-01-22 16:06:27.225+00	2021-01-22 16:06:27.225+00
922	100	37	332	2021-01-24 03:18:45.823+00	2021-01-24 03:18:45.823+00
923	1	37	3	2021-01-24 03:18:53.607+00	2021-01-24 03:18:53.607+00
924	1	37	4	2021-01-24 03:18:56.95+00	2021-01-24 03:18:56.95+00
925	0	37	5	2021-01-24 03:19:00.389+00	2021-01-24 03:19:00.389+00
926	1	37	6	2021-01-24 03:19:04.264+00	2021-01-24 03:19:04.264+00
927	0	37	7	2021-01-24 03:19:07.916+00	2021-01-24 03:19:07.916+00
928	1	37	8	2021-01-24 03:19:11.134+00	2021-01-24 03:19:11.134+00
929	1	37	9	2021-01-24 03:19:14.348+00	2021-01-24 03:19:14.348+00
930	1	37	10	2021-01-24 03:19:17.911+00	2021-01-24 03:19:17.911+00
931	1	37	11	2021-01-24 03:19:21.057+00	2021-01-24 03:19:21.057+00
932	1	37	12	2021-01-24 03:19:24.332+00	2021-01-24 03:19:24.332+00
933	1	37	13	2021-01-24 03:24:49.848+00	2021-01-24 03:24:49.848+00
934	0	37	14	2021-01-24 03:24:53.185+00	2021-01-24 03:24:53.185+00
935	1	37	15	2021-01-24 03:25:12.521+00	2021-01-24 03:25:12.521+00
936	0	37	16	2021-01-24 03:25:17.523+00	2021-01-24 03:25:17.523+00
937	1	37	17	2021-01-24 03:25:23.231+00	2021-01-24 03:25:23.231+00
938	1	37	18	2021-01-24 03:25:27.339+00	2021-01-24 03:25:27.339+00
939	1	37	19	2021-01-24 03:25:33.258+00	2021-01-24 03:25:33.258+00
940	1	37	20	2021-01-24 03:25:37.161+00	2021-01-24 03:25:37.161+00
941	1	37	21	2021-01-24 03:25:46.844+00	2021-01-24 03:25:46.844+00
942	4	37	22	2021-01-24 03:25:54.604+00	2021-01-24 03:25:54.604+00
943	2	37	23	2021-01-24 03:26:03.037+00	2021-01-24 03:26:03.037+00
944	3	37	24	2021-01-24 03:26:06.406+00	2021-01-24 03:26:06.406+00
945	4	37	25	2021-01-24 03:26:09.088+00	2021-01-24 03:26:09.088+00
946	1	37	26	2021-01-24 03:26:12.229+00	2021-01-24 03:26:12.229+00
947	3	37	27	2021-01-24 03:26:14.771+00	2021-01-24 03:26:14.771+00
948	4	37	28	2021-01-24 03:26:18.897+00	2021-01-24 03:26:18.897+00
949	2	37	29	2021-01-24 03:26:24.602+00	2021-01-24 03:26:24.602+00
950	4	37	30	2021-01-24 03:26:27.606+00	2021-01-24 03:26:27.606+00
951	1	37	31	2021-01-24 03:26:30.736+00	2021-01-24 03:26:30.736+00
952	1	37	32	2021-01-24 03:26:33.744+00	2021-01-24 03:26:33.744+00
953	4	37	33	2021-01-24 03:26:36.639+00	2021-01-24 03:26:36.639+00
954	3	37	34	2021-01-24 03:26:39.26+00	2021-01-24 03:26:39.26+00
955	4	37	35	2021-01-24 03:26:42+00	2021-01-24 03:26:42+00
956	2	37	36	2021-01-24 03:26:45.039+00	2021-01-24 03:26:45.039+00
957	100	37	333	2021-01-24 04:14:42.042+00	2021-01-24 04:14:42.042+00
958	2	37	37	2021-01-24 04:14:48.179+00	2021-01-24 04:14:48.179+00
959	3	37	38	2021-01-24 04:14:51.601+00	2021-01-24 04:14:51.601+00
960	3	37	39	2021-01-24 04:14:55.12+00	2021-01-24 04:14:55.12+00
961	2	37	40	2021-01-24 04:14:58.64+00	2021-01-24 04:14:58.64+00
962	2	37	41	2021-01-24 04:15:02.122+00	2021-01-24 04:15:02.122+00
963	1	37	42	2021-01-24 04:15:05.958+00	2021-01-24 04:15:05.958+00
964	3	37	43	2021-01-24 04:15:09.537+00	2021-01-24 04:15:09.537+00
965	2	37	44	2021-01-24 04:15:13.153+00	2021-01-24 04:15:13.153+00
966	2	37	45	2021-01-24 04:23:12.283+00	2021-01-24 04:23:12.283+00
967	2	37	46	2021-01-24 04:23:15.754+00	2021-01-24 04:23:15.754+00
968	2	37	47	2021-01-24 04:23:19.105+00	2021-01-24 04:23:19.105+00
969	1	37	48	2021-01-24 04:23:22.965+00	2021-01-24 04:23:22.965+00
970	2	37	49	2021-01-24 04:23:26.912+00	2021-01-24 04:23:26.912+00
971	3	37	50	2021-01-24 04:23:31.022+00	2021-01-24 04:23:31.022+00
972	1	37	51	2021-01-24 04:23:35.218+00	2021-01-24 04:23:35.218+00
973	3	37	52	2021-01-24 04:23:39.357+00	2021-01-24 04:23:39.357+00
974	2	37	53	2021-01-24 04:23:43.481+00	2021-01-24 04:23:43.481+00
975	2	37	54	2021-01-24 04:23:47.241+00	2021-01-24 04:23:47.241+00
976	2	37	55	2021-01-24 04:23:54.448+00	2021-01-24 04:23:54.448+00
977	2	37	56	2021-01-24 04:23:58.452+00	2021-01-24 04:23:58.452+00
978	3	37	57	2021-01-24 04:24:02.573+00	2021-01-24 04:24:02.573+00
979	2	37	58	2021-01-24 04:24:06.392+00	2021-01-24 04:24:06.392+00
980	2	37	59	2021-01-24 04:24:10.189+00	2021-01-24 04:24:10.189+00
981	100	37	334	2021-01-24 04:25:04.762+00	2021-01-24 04:25:04.762+00
982	1	37	60	2021-01-24 04:25:13.559+00	2021-01-24 04:25:13.559+00
983	1	37	61	2021-01-24 04:25:16.908+00	2021-01-24 04:25:16.908+00
984	1	37	62	2021-01-24 04:25:20.346+00	2021-01-24 04:25:20.346+00
985	1	37	63	2021-01-24 04:25:24.115+00	2021-01-24 04:25:24.115+00
986	0	37	64	2021-01-24 04:25:27.467+00	2021-01-24 04:25:27.467+00
987	0	37	65	2021-01-24 04:25:30.779+00	2021-01-24 04:25:30.779+00
988	1	37	66	2021-01-24 04:28:20.278+00	2021-01-24 04:28:20.278+00
989	1	37	67	2021-01-24 04:28:23.826+00	2021-01-24 04:28:23.826+00
990	1	37	68	2021-01-24 04:28:27.131+00	2021-01-24 04:28:27.131+00
991	0	37	69	2021-01-24 04:28:30.548+00	2021-01-24 04:28:30.548+00
992	1	37	70	2021-01-24 04:28:33.717+00	2021-01-24 04:28:33.717+00
993	0	37	71	2021-01-24 04:28:37.073+00	2021-01-24 04:28:37.073+00
994	4	37	72	2021-01-24 04:28:42.236+00	2021-01-24 04:28:42.236+00
995	1	37	73	2021-01-24 04:28:44.807+00	2021-01-24 04:28:44.807+00
996	1	37	74	2021-01-24 04:28:47.455+00	2021-01-24 04:28:47.455+00
997	2	37	75	2021-01-24 04:28:50.121+00	2021-01-24 04:28:50.121+00
998	3	37	76	2021-01-24 04:28:52.837+00	2021-01-24 04:28:52.837+00
999	1	37	77	2021-01-24 04:28:55.475+00	2021-01-24 04:28:55.475+00
1000	3	37	78	2021-01-24 04:28:58.259+00	2021-01-24 04:28:58.259+00
1001	2	37	79	2021-01-24 04:29:01.224+00	2021-01-24 04:29:01.224+00
1002	1	37	80	2021-01-24 04:29:03.84+00	2021-01-24 04:29:03.84+00
1003	1	37	81	2021-01-24 04:29:06.682+00	2021-01-24 04:29:06.682+00
1004	2	37	82	2021-01-24 04:29:12.841+00	2021-01-24 04:29:12.841+00
1005	2	37	83	2021-01-24 04:29:16.176+00	2021-01-24 04:29:16.176+00
1006	1	37	84	2021-01-24 04:29:19.875+00	2021-01-24 04:29:19.875+00
1007	1	37	85	2021-01-24 04:29:23.296+00	2021-01-24 04:29:23.296+00
1008	2	37	86	2021-01-24 04:29:26.767+00	2021-01-24 04:29:26.767+00
1009	3	37	87	2021-01-24 04:29:30.272+00	2021-01-24 04:29:30.272+00
1010	2	37	88	2021-01-24 04:29:33.817+00	2021-01-24 04:29:33.817+00
1011	1	37	89	2021-01-24 04:29:37.257+00	2021-01-24 04:29:37.257+00
1012	1	37	90	2021-01-24 04:29:40.82+00	2021-01-24 04:29:40.82+00
1013	100	44	332	2021-01-24 05:28:18.295+00	2021-01-24 05:28:18.295+00
1014	0	44	3	2021-01-24 05:28:23.716+00	2021-01-24 05:28:23.716+00
1015	1	44	4	2021-01-24 05:28:26.964+00	2021-01-24 05:28:26.964+00
1016	1	44	5	2021-01-24 05:28:30.138+00	2021-01-24 05:28:30.138+00
1017	1	44	6	2021-01-24 05:28:33.42+00	2021-01-24 05:28:33.42+00
1018	1	44	7	2021-01-24 05:28:36.641+00	2021-01-24 05:28:36.641+00
1019	1	44	8	2021-01-24 05:28:40.334+00	2021-01-24 05:28:40.334+00
1020	100	46	332	2021-01-24 21:39:01.762+00	2021-01-24 21:39:01.762+00
1021	0	46	3	2021-01-24 21:39:08.381+00	2021-01-24 21:39:08.381+00
1022	1	46	4	2021-01-24 21:39:11.587+00	2021-01-24 21:39:11.587+00
1023	1	46	5	2021-01-24 21:39:14.852+00	2021-01-24 21:39:14.852+00
1024	1	46	6	2021-01-24 21:39:18.317+00	2021-01-24 21:39:18.317+00
1025	1	46	7	2021-01-24 21:39:21.846+00	2021-01-24 21:39:21.846+00
1026	0	46	8	2021-01-24 21:39:25.278+00	2021-01-24 21:39:25.278+00
1027	1	46	9	2021-01-24 21:39:28.989+00	2021-01-24 21:39:28.989+00
1028	0	46	10	2021-01-24 21:39:32.488+00	2021-01-24 21:39:32.488+00
1029	0	46	11	2021-01-24 21:39:35.999+00	2021-01-24 21:39:35.999+00
1030	1	46	12	2021-01-24 21:39:39.29+00	2021-01-24 21:39:39.29+00
1031	1	46	13	2021-01-24 21:39:42.957+00	2021-01-24 21:39:42.957+00
1032	0	46	14	2021-01-24 21:39:46.497+00	2021-01-24 21:39:46.497+00
1033	1	46	15	2021-01-24 21:39:49.688+00	2021-01-24 21:39:49.688+00
1034	1	46	16	2021-01-24 21:39:53.928+00	2021-01-24 21:39:53.928+00
1035	1	46	17	2021-01-24 21:40:14.442+00	2021-01-24 21:40:14.442+00
1036	1	46	18	2021-01-24 21:40:18.02+00	2021-01-24 21:40:18.02+00
1037	4	46	19	2021-01-24 21:40:23.719+00	2021-01-24 21:40:23.719+00
1038	3	46	20	2021-01-24 21:40:26.578+00	2021-01-24 21:40:26.578+00
1039	1	46	21	2021-01-24 21:40:29.364+00	2021-01-24 21:40:29.364+00
1040	4	46	22	2021-01-24 21:40:32.298+00	2021-01-24 21:40:32.298+00
1041	2	46	23	2021-01-24 21:40:35.265+00	2021-01-24 21:40:35.265+00
1042	3	46	24	2021-01-24 21:40:38.21+00	2021-01-24 21:40:38.21+00
1043	3	46	25	2021-01-24 21:40:41.581+00	2021-01-24 21:40:41.581+00
1044	2	46	26	2021-01-24 21:40:44.314+00	2021-01-24 21:40:44.314+00
1045	3	46	27	2021-01-24 21:40:47.221+00	2021-01-24 21:40:47.221+00
1046	4	46	28	2021-01-24 21:40:50.15+00	2021-01-24 21:40:50.15+00
1047	2	46	29	2021-01-24 21:40:53.251+00	2021-01-24 21:40:53.251+00
1048	1	46	30	2021-01-24 21:40:56.231+00	2021-01-24 21:40:56.231+00
1049	1	46	31	2021-01-24 21:40:58.962+00	2021-01-24 21:40:58.962+00
1050	3	46	32	2021-01-24 21:41:01.906+00	2021-01-24 21:41:01.906+00
1051	4	46	33	2021-01-24 21:41:04.902+00	2021-01-24 21:41:04.902+00
1052	3	46	34	2021-01-24 21:41:07.642+00	2021-01-24 21:41:07.642+00
1053	1	46	35	2021-01-24 21:41:11.32+00	2021-01-24 21:41:11.32+00
1054	1	46	36	2021-01-24 21:41:14.736+00	2021-01-24 21:41:14.736+00
1055	100	47	332	2021-01-25 02:00:18.95+00	2021-01-25 02:00:18.95+00
1056	1	47	3	2021-01-25 02:00:28.449+00	2021-01-25 02:00:28.449+00
1057	1	47	4	2021-01-25 02:00:31.778+00	2021-01-25 02:00:31.778+00
1058	0	47	5	2021-01-25 02:00:35.198+00	2021-01-25 02:00:35.198+00
1059	1	47	6	2021-01-25 02:00:38.684+00	2021-01-25 02:00:38.684+00
1060	0	47	7	2021-01-25 02:00:42.223+00	2021-01-25 02:00:42.223+00
1061	0	47	8	2021-01-25 02:00:45.626+00	2021-01-25 02:00:45.626+00
1062	1	47	9	2021-01-25 02:00:48.818+00	2021-01-25 02:00:48.818+00
1063	0	47	10	2021-01-25 02:00:52.263+00	2021-01-25 02:00:52.263+00
1064	1	47	11	2021-01-25 02:00:55.45+00	2021-01-25 02:00:55.45+00
1065	1	47	12	2021-01-25 02:01:00.934+00	2021-01-25 02:01:00.934+00
1066	1	47	13	2021-01-25 02:01:04.262+00	2021-01-25 02:01:04.262+00
1067	0	47	14	2021-01-25 02:01:07.637+00	2021-01-25 02:01:07.637+00
1068	1	47	15	2021-01-25 02:01:10.892+00	2021-01-25 02:01:10.892+00
1069	0	47	16	2021-01-25 02:01:14.185+00	2021-01-25 02:01:14.185+00
1070	1	47	17	2021-01-25 02:01:17.354+00	2021-01-25 02:01:17.354+00
1071	1	47	18	2021-01-25 02:01:20.518+00	2021-01-25 02:01:20.518+00
1072	4	47	19	2021-01-25 02:01:27.046+00	2021-01-25 02:01:27.046+00
1073	3	47	20	2021-01-25 02:01:29.76+00	2021-01-25 02:01:29.76+00
1074	1	47	21	2021-01-25 02:01:32.664+00	2021-01-25 02:01:32.664+00
1075	4	47	22	2021-01-25 02:01:35.417+00	2021-01-25 02:01:35.417+00
1076	2	47	23	2021-01-25 02:01:38.601+00	2021-01-25 02:01:38.601+00
1077	3	47	24	2021-01-25 02:01:42.024+00	2021-01-25 02:01:42.024+00
1078	4	47	25	2021-01-25 02:01:44.989+00	2021-01-25 02:01:44.989+00
1079	2	47	26	2021-01-25 02:01:47.87+00	2021-01-25 02:01:47.87+00
1080	3	47	27	2021-01-25 02:01:50.724+00	2021-01-25 02:01:50.724+00
1081	4	47	28	2021-01-25 02:01:53.599+00	2021-01-25 02:01:53.599+00
1082	2	47	29	2021-01-25 02:01:56.636+00	2021-01-25 02:01:56.636+00
1083	1	47	30	2021-01-25 02:01:59.738+00	2021-01-25 02:01:59.738+00
1084	1	47	31	2021-01-25 02:02:02.972+00	2021-01-25 02:02:02.972+00
1085	3	47	32	2021-01-25 02:02:05.695+00	2021-01-25 02:02:05.695+00
1086	4	47	33	2021-01-25 02:02:26.875+00	2021-01-25 02:02:26.875+00
1087	3	47	34	2021-01-25 02:02:29.641+00	2021-01-25 02:02:29.641+00
1088	4	47	35	2021-01-25 02:02:32.32+00	2021-01-25 02:02:32.32+00
1089	2	47	36	2021-01-25 02:02:35.372+00	2021-01-25 02:02:35.372+00
1090	100	47	333	2021-01-25 02:04:32.801+00	2021-01-25 02:04:32.801+00
1091	2	47	37	2021-01-25 02:04:38.276+00	2021-01-25 02:04:38.276+00
1092	2	47	38	2021-01-25 02:04:41.588+00	2021-01-25 02:04:41.588+00
1093	3	47	39	2021-01-25 02:04:45.065+00	2021-01-25 02:04:45.065+00
1094	2	47	40	2021-01-25 02:05:22.586+00	2021-01-25 02:05:22.586+00
1095	2	47	41	2021-01-25 02:05:26.191+00	2021-01-25 02:05:26.191+00
1096	2	47	42	2021-01-25 02:05:29.838+00	2021-01-25 02:05:29.838+00
1097	2	47	43	2021-01-25 02:05:33.244+00	2021-01-25 02:05:33.244+00
1098	1	47	44	2021-01-25 02:05:37.545+00	2021-01-25 02:05:37.545+00
1099	2	47	45	2021-01-25 02:05:41.393+00	2021-01-25 02:05:41.393+00
1100	2	47	46	2021-01-25 02:07:08.28+00	2021-01-25 02:07:08.28+00
1101	2	47	47	2021-01-25 02:07:30.604+00	2021-01-25 02:07:30.604+00
1102	2	47	47	2021-01-25 02:07:30.61+00	2021-01-25 02:07:30.61+00
1103	2	47	48	2021-01-25 02:07:36.525+00	2021-01-25 02:07:36.525+00
1104	2	47	49	2021-01-25 02:07:40.195+00	2021-01-25 02:07:40.195+00
1105	2	47	50	2021-01-25 02:07:44.124+00	2021-01-25 02:07:44.124+00
1106	1	47	51	2021-01-25 02:07:48.108+00	2021-01-25 02:07:48.108+00
1107	3	47	52	2021-01-25 02:07:52.223+00	2021-01-25 02:07:52.223+00
1108	2	47	53	2021-01-25 02:07:56.137+00	2021-01-25 02:07:56.137+00
1109	2	47	54	2021-01-25 02:08:00.14+00	2021-01-25 02:08:00.14+00
1110	2	47	55	2021-01-25 02:08:32.851+00	2021-01-25 02:08:32.851+00
1111	2	47	56	2021-01-25 02:08:38.242+00	2021-01-25 02:08:38.242+00
1112	2	47	57	2021-01-25 02:08:52.288+00	2021-01-25 02:08:52.288+00
1113	2	47	58	2021-01-25 02:08:56.36+00	2021-01-25 02:08:56.36+00
1114	3	47	59	2021-01-25 02:09:00.338+00	2021-01-25 02:09:00.338+00
1115	100	47	334	2021-01-25 02:20:07.512+00	2021-01-25 02:20:07.512+00
1116	1	47	60	2021-01-25 02:20:13.264+00	2021-01-25 02:20:13.264+00
1117	1	47	61	2021-01-25 02:20:16.576+00	2021-01-25 02:20:16.576+00
1118	0	47	62	2021-01-25 02:20:19.912+00	2021-01-25 02:20:19.912+00
1119	1	47	63	2021-01-25 02:20:23.247+00	2021-01-25 02:20:23.247+00
1120	1	47	64	2021-01-25 02:20:26.682+00	2021-01-25 02:20:26.682+00
1121	0	47	65	2021-01-25 02:20:30.234+00	2021-01-25 02:20:30.234+00
1122	1	47	66	2021-01-25 02:20:33.487+00	2021-01-25 02:20:33.487+00
1123	1	47	67	2021-01-25 02:20:37.171+00	2021-01-25 02:20:37.171+00
1124	1	47	68	2021-01-25 02:20:40.339+00	2021-01-25 02:20:40.339+00
1125	0	47	69	2021-01-25 02:20:43.784+00	2021-01-25 02:20:43.784+00
1126	1	47	70	2021-01-25 02:20:47.02+00	2021-01-25 02:20:47.02+00
1127	0	47	71	2021-01-25 02:20:50.423+00	2021-01-25 02:20:50.423+00
1128	4	47	72	2021-01-25 02:20:56.291+00	2021-01-25 02:20:56.291+00
1129	1	47	73	2021-01-25 02:20:59.254+00	2021-01-25 02:20:59.254+00
1130	1	47	74	2021-01-25 02:21:02.173+00	2021-01-25 02:21:02.173+00
1131	2	47	75	2021-01-25 02:21:05.199+00	2021-01-25 02:21:05.199+00
1132	3	47	76	2021-01-25 02:21:08.41+00	2021-01-25 02:21:08.41+00
1133	1	47	77	2021-01-25 02:21:11.366+00	2021-01-25 02:21:11.366+00
1134	3	47	78	2021-01-25 02:21:14.257+00	2021-01-25 02:21:14.257+00
1135	4	47	79	2021-01-25 02:21:17.288+00	2021-01-25 02:21:17.288+00
1136	1	47	80	2021-01-25 02:21:20.398+00	2021-01-25 02:21:20.398+00
1137	2	47	81	2021-01-25 02:21:23.479+00	2021-01-25 02:21:23.479+00
1138	1	47	82	2021-01-25 02:21:29.715+00	2021-01-25 02:21:29.715+00
1139	2	47	83	2021-01-25 02:21:33.188+00	2021-01-25 02:21:33.188+00
1140	2	47	84	2021-01-25 02:21:36.693+00	2021-01-25 02:21:36.693+00
1141	1	47	85	2021-01-25 02:21:40.184+00	2021-01-25 02:21:40.184+00
1142	1	47	86	2021-01-25 02:21:43.587+00	2021-01-25 02:21:43.587+00
1143	2	47	87	2021-01-25 02:21:46.999+00	2021-01-25 02:21:46.999+00
1144	2	47	88	2021-01-25 02:21:50.615+00	2021-01-25 02:21:50.615+00
1145	1	47	89	2021-01-25 02:21:54.175+00	2021-01-25 02:21:54.175+00
1146	2	47	90	2021-01-25 02:21:58.079+00	2021-01-25 02:21:58.079+00
1147	100	47	335	2021-01-25 02:22:57.654+00	2021-01-25 02:22:57.654+00
1148	1	47	91	2021-01-25 02:23:11.214+00	2021-01-25 02:23:11.214+00
1149	1	47	92	2021-01-25 02:23:13.92+00	2021-01-25 02:23:13.92+00
1150	1	47	93	2021-01-25 02:23:16.488+00	2021-01-25 02:23:16.488+00
1151	1	47	94	2021-01-25 02:23:20.067+00	2021-01-25 02:23:20.067+00
1152	1	47	95	2021-01-25 02:23:22.93+00	2021-01-25 02:23:22.93+00
1153	0	47	96	2021-01-25 02:23:25.759+00	2021-01-25 02:23:25.759+00
1154	1	47	97	2021-01-25 02:23:28.606+00	2021-01-25 02:23:28.606+00
1155	1	47	98	2021-01-25 02:23:31.572+00	2021-01-25 02:23:31.572+00
1156	0	47	99	2021-01-25 02:23:34.639+00	2021-01-25 02:23:34.639+00
1157	1	47	100	2021-01-25 02:23:37.595+00	2021-01-25 02:23:37.595+00
1158	0	47	101	2021-01-25 02:23:40.701+00	2021-01-25 02:23:40.701+00
1159	1	47	102	2021-01-25 02:23:43.738+00	2021-01-25 02:23:43.738+00
1160	1	47	103	2021-01-25 02:23:46.789+00	2021-01-25 02:23:46.789+00
1161	0	47	104	2021-01-25 02:23:49.915+00	2021-01-25 02:23:49.915+00
1162	0	47	105	2021-01-25 02:23:52.963+00	2021-01-25 02:23:52.963+00
1163	1	47	106	2021-01-25 02:23:55.873+00	2021-01-25 02:23:55.873+00
1164	0	47	107	2021-01-25 02:23:58.885+00	2021-01-25 02:23:58.885+00
1165	0	47	108	2021-01-25 02:24:01.795+00	2021-01-25 02:24:01.795+00
1166	1	47	109	2021-01-25 02:24:04.595+00	2021-01-25 02:24:04.595+00
1167	2	47	110	2021-01-25 02:24:09.984+00	2021-01-25 02:24:09.984+00
1168	1	47	111	2021-01-25 02:24:12.87+00	2021-01-25 02:24:12.87+00
1169	4	47	112	2021-01-25 02:24:16.042+00	2021-01-25 02:24:16.042+00
1170	1	47	113	2021-01-25 02:24:19.649+00	2021-01-25 02:24:19.649+00
1171	1	47	114	2021-01-25 02:24:22.651+00	2021-01-25 02:24:22.651+00
1172	4	47	115	2021-01-25 02:24:25.543+00	2021-01-25 02:24:25.543+00
1173	3	47	116	2021-01-25 02:24:28.72+00	2021-01-25 02:24:28.72+00
1174	2	47	117	2021-01-25 02:24:31.859+00	2021-01-25 02:24:31.859+00
1175	1	47	118	2021-01-25 02:24:34.91+00	2021-01-25 02:24:34.91+00
1176	1	47	119	2021-01-25 02:24:37.972+00	2021-01-25 02:24:37.972+00
1177	100	47	336	2021-01-25 02:25:23.027+00	2021-01-25 02:25:23.027+00
1178	100	48	336	2021-01-25 03:36:23.952+00	2021-01-25 03:36:23.952+00
1179	1	49	151	2021-01-25 04:32:24.806+00	2021-01-25 04:32:24.806+00
1180	1	49	152	2021-01-25 04:32:28.911+00	2021-01-25 04:32:28.911+00
1181	1	49	153	2021-01-25 04:32:32.959+00	2021-01-25 04:32:32.959+00
1182	0	49	154	2021-01-25 04:32:37.765+00	2021-01-25 04:32:37.765+00
1183	1	49	155	2021-01-25 04:32:41.878+00	2021-01-25 04:32:41.878+00
1184	0	49	156	2021-01-25 04:32:47.732+00	2021-01-25 04:32:47.732+00
1185	0	49	157	2021-01-25 04:32:52.084+00	2021-01-25 04:32:52.084+00
1186	1	49	158	2021-01-25 04:32:56.28+00	2021-01-25 04:32:56.28+00
1187	3	49	159	2021-01-25 04:33:08.738+00	2021-01-25 04:33:08.738+00
1188	3	49	160	2021-01-25 04:33:18.014+00	2021-01-25 04:33:18.014+00
1189	1	49	161	2021-01-25 04:33:26.998+00	2021-01-25 04:33:26.998+00
1190	3	49	162	2021-01-25 04:33:36.449+00	2021-01-25 04:33:36.449+00
1191	3	49	163	2021-01-25 04:33:45.532+00	2021-01-25 04:33:45.532+00
1192	1	49	164	2021-01-25 04:33:52.206+00	2021-01-25 04:33:52.206+00
1193	0	49	165	2021-01-25 04:33:55.849+00	2021-01-25 04:33:55.849+00
1194	1	49	166	2021-01-25 04:33:59.198+00	2021-01-25 04:33:59.198+00
1195	1	49	167	2021-01-25 04:34:03.261+00	2021-01-25 04:34:03.261+00
1196	1	49	168	2021-01-25 04:34:06.546+00	2021-01-25 04:34:06.546+00
1197	0	49	169	2021-01-25 04:34:10.113+00	2021-01-25 04:34:10.113+00
1198	1	49	170	2021-01-25 04:34:13.919+00	2021-01-25 04:34:13.919+00
1199	0	49	171	2021-01-25 04:34:17.205+00	2021-01-25 04:34:17.205+00
1200	1	49	172	2021-01-25 04:34:20.405+00	2021-01-25 04:34:20.405+00
1201	1	49	173	2021-01-25 04:34:23.852+00	2021-01-25 04:34:23.852+00
1202	1	49	174	2021-01-25 04:34:33.24+00	2021-01-25 04:34:33.24+00
1203	1	49	175	2021-01-25 04:34:40.036+00	2021-01-25 04:34:40.036+00
1204	0	49	176	2021-01-25 04:34:47.459+00	2021-01-25 04:34:47.459+00
1205	1	49	177	2021-01-25 04:34:54.326+00	2021-01-25 04:34:54.326+00
1206	100	49	336	2021-01-25 04:49:25.663+00	2021-01-25 04:49:25.663+00
1207	4	49	337	2021-01-25 04:56:12.759+00	2021-01-25 04:56:12.759+00
1208	3	49	338	2021-01-25 04:56:16.327+00	2021-01-25 04:56:16.327+00
1209	2	49	339	2021-01-25 04:56:19.942+00	2021-01-25 04:56:19.942+00
1210	4	49	340	2021-01-25 04:56:23.706+00	2021-01-25 04:56:23.706+00
1211	5	49	341	2021-01-25 04:56:27.577+00	2021-01-25 04:56:27.577+00
1212	4	49	342	2021-01-25 04:56:31.366+00	2021-01-25 04:56:31.366+00
1213	6	49	343	2021-01-25 04:56:35.489+00	2021-01-25 04:56:35.489+00
1214	2	49	344	2021-01-25 04:56:39.158+00	2021-01-25 04:56:39.158+00
1215	5	49	345	2021-01-25 04:56:43.005+00	2021-01-25 04:56:43.005+00
1216	4	49	346	2021-01-25 04:56:46.732+00	2021-01-25 04:56:46.732+00
1230	1	49	360	2021-01-25 04:57:53.325+00	2021-01-25 04:57:53.325+00
1231	4	49	361	2021-01-25 04:57:57.816+00	2021-01-25 04:57:57.816+00
1232	8	49	362	2021-01-25 04:58:11.971+00	2021-01-25 04:58:11.971+00
1233	6	49	363	2021-01-25 04:58:16.799+00	2021-01-25 04:58:16.799+00
1234	7	49	364	2021-01-25 04:58:21.913+00	2021-01-25 04:58:21.913+00
1236	100	50	335	2021-01-25 14:27:51.204+00	2021-01-25 14:27:51.204+00
1238	1	48	91	2021-01-25 18:08:43.579+00	2021-01-25 18:08:43.579+00
1239	1	48	92	2021-01-25 18:08:46.492+00	2021-01-25 18:08:46.492+00
1260	6	48	140	2021-01-25 18:22:18.147+00	2021-01-25 18:22:18.147+00
1261	4	48	141	2021-01-25 18:22:21.364+00	2021-01-25 18:22:21.364+00
1262	5	48	142	2021-01-25 18:22:24.088+00	2021-01-25 18:22:24.088+00
1263	5	48	143	2021-01-25 18:22:27.33+00	2021-01-25 18:22:27.33+00
1264	6	48	144	2021-01-25 18:22:30.095+00	2021-01-25 18:22:30.095+00
1265	5	48	145	2021-01-25 18:22:32.729+00	2021-01-25 18:22:32.729+00
1266	3	48	146	2021-01-25 18:22:35.925+00	2021-01-25 18:22:35.925+00
1267	4	48	147	2021-01-25 18:22:38.912+00	2021-01-25 18:22:38.912+00
1268	6	48	148	2021-01-25 18:22:42.186+00	2021-01-25 18:22:42.186+00
1269	3	48	149	2021-01-25 18:22:45.234+00	2021-01-25 18:22:45.234+00
1270	5	48	150	2021-01-25 18:22:48.115+00	2021-01-25 18:22:48.115+00
1298	100	48	334	2021-01-25 18:32:21.131+00	2021-01-25 18:32:21.131+00
1299	1	48	60	2021-01-25 18:32:26.977+00	2021-01-25 18:32:26.977+00
1300	1	48	61	2021-01-25 18:32:30.2+00	2021-01-25 18:32:30.2+00
1361	1	48	9	2021-01-25 18:37:41.933+00	2021-01-25 18:37:41.933+00
1362	0	48	10	2021-01-25 18:37:45.51+00	2021-01-25 18:37:45.51+00
1363	1	48	11	2021-01-25 18:37:48.816+00	2021-01-25 18:37:48.816+00
1364	1	48	12	2021-01-25 18:37:51.982+00	2021-01-25 18:37:51.982+00
1365	1	48	13	2021-01-25 18:37:55.209+00	2021-01-25 18:37:55.209+00
1366	0	48	14	2021-01-25 18:37:58.393+00	2021-01-25 18:37:58.393+00
1367	1	48	15	2021-01-25 18:38:01.644+00	2021-01-25 18:38:01.644+00
1368	0	48	16	2021-01-25 18:38:04.912+00	2021-01-25 18:38:04.912+00
1369	1	48	17	2021-01-25 18:38:08.017+00	2021-01-25 18:38:08.017+00
1370	1	48	18	2021-01-25 18:38:11.192+00	2021-01-25 18:38:11.192+00
1371	4	48	19	2021-01-25 18:38:16.411+00	2021-01-25 18:38:16.411+00
1372	3	48	20	2021-01-25 18:38:19.088+00	2021-01-25 18:38:19.088+00
1373	1	48	21	2021-01-25 18:38:21.978+00	2021-01-25 18:38:21.978+00
1374	4	48	22	2021-01-25 18:38:24.935+00	2021-01-25 18:38:24.935+00
1375	2	48	23	2021-01-25 18:38:27.934+00	2021-01-25 18:38:27.934+00
1376	3	48	24	2021-01-25 18:38:31.29+00	2021-01-25 18:38:31.29+00
1377	4	48	25	2021-01-25 18:38:34.275+00	2021-01-25 18:38:34.275+00
1378	2	48	26	2021-01-25 18:38:36.996+00	2021-01-25 18:38:36.996+00
1379	3	48	27	2021-01-25 18:38:39.861+00	2021-01-25 18:38:39.861+00
1380	4	48	28	2021-01-25 18:38:42.759+00	2021-01-25 18:38:42.759+00
1381	2	48	29	2021-01-25 18:38:45.593+00	2021-01-25 18:38:45.593+00
1382	1	48	30	2021-01-25 18:38:48.188+00	2021-01-25 18:38:48.188+00
1383	1	48	31	2021-01-25 18:38:50.911+00	2021-01-25 18:38:50.911+00
1384	3	48	32	2021-01-25 18:38:54.351+00	2021-01-25 18:38:54.351+00
1385	4	48	33	2021-01-25 18:38:57.398+00	2021-01-25 18:38:57.398+00
1386	3	48	34	2021-01-25 18:39:00.656+00	2021-01-25 18:39:00.656+00
1387	4	48	35	2021-01-25 18:39:03.726+00	2021-01-25 18:39:03.726+00
1388	2	48	36	2021-01-25 18:39:06.611+00	2021-01-25 18:39:06.611+00
1389	0	53	207	2021-01-25 18:54:53.011+00	2021-01-25 18:54:53.011+00
1390	0	53	241	2021-01-25 18:55:08.727+00	2021-01-25 18:55:08.727+00
1391	2	53	286	2021-01-25 18:56:15.437+00	2021-01-25 18:56:15.437+00
1392	3	53	287	2021-01-25 18:56:18.728+00	2021-01-25 18:56:18.728+00
1393	1	53	288	2021-01-25 18:56:21.841+00	2021-01-25 18:56:21.841+00
1394	1	53	289	2021-01-25 18:56:24.821+00	2021-01-25 18:56:24.821+00
1395	3	53	290	2021-01-25 18:56:27.677+00	2021-01-25 18:56:27.677+00
1396	1	53	291	2021-01-25 18:56:30.602+00	2021-01-25 18:56:30.602+00
1397	2	53	292	2021-01-25 18:56:33.432+00	2021-01-25 18:56:33.432+00
1398	2	53	293	2021-01-25 18:56:36.23+00	2021-01-25 18:56:36.23+00
1399	1	53	294	2021-01-25 18:56:39.015+00	2021-01-25 18:56:39.015+00
1400	3	53	295	2021-01-25 18:56:41.896+00	2021-01-25 18:56:41.896+00
1401	2	53	296	2021-01-25 18:56:44.814+00	2021-01-25 18:56:44.814+00
1402	3	53	297	2021-01-25 18:56:48.169+00	2021-01-25 18:56:48.169+00
1403	2	53	298	2021-01-25 18:56:51.069+00	2021-01-25 18:56:51.069+00
1404	2	53	299	2021-01-25 18:56:54.585+00	2021-01-25 18:56:54.585+00
1405	1	53	300	2021-01-25 18:56:57.685+00	2021-01-25 18:56:57.685+00
1406	3	53	301	2021-01-25 18:57:00.71+00	2021-01-25 18:57:00.71+00
1407	2	53	302	2021-01-25 18:57:03.626+00	2021-01-25 18:57:03.626+00
1408	1	53	303	2021-01-25 18:57:06.731+00	2021-01-25 18:57:06.731+00
1409	2	53	304	2021-01-25 18:57:09.92+00	2021-01-25 18:57:09.92+00
1410	2	53	305	2021-01-25 18:57:12.926+00	2021-01-25 18:57:12.926+00
1411	1	53	306	2021-01-25 18:57:16.09+00	2021-01-25 18:57:16.09+00
1412	2	53	307	2021-01-25 18:57:19.215+00	2021-01-25 18:57:19.215+00
1413	1	53	308	2021-01-25 18:57:22.449+00	2021-01-25 18:57:22.449+00
1414	5	53	309	2021-01-25 18:57:25.678+00	2021-01-25 18:57:25.678+00
1415	2	53	310	2021-01-25 18:57:28.809+00	2021-01-25 18:57:28.809+00
1416	4	53	311	2021-01-25 18:57:32.135+00	2021-01-25 18:57:32.135+00
1417	3	53	312	2021-01-25 18:57:35.348+00	2021-01-25 18:57:35.348+00
1418	3	53	313	2021-01-25 18:57:38.578+00	2021-01-25 18:57:38.578+00
1419	2	53	314	2021-01-25 18:57:41.576+00	2021-01-25 18:57:41.576+00
1420	2	53	315	2021-01-25 18:57:44.37+00	2021-01-25 18:57:44.37+00
1421	5	53	316	2021-01-25 18:57:47.684+00	2021-01-25 18:57:47.684+00
1422	4	53	317	2021-01-25 18:57:50.668+00	2021-01-25 18:57:50.668+00
1423	1	53	318	2021-01-25 18:57:53.961+00	2021-01-25 18:57:53.961+00
1424	4	53	319	2021-01-25 18:57:58.006+00	2021-01-25 18:57:58.006+00
1425	5	53	320	2021-01-25 18:58:01.042+00	2021-01-25 18:58:01.042+00
1426	1	53	321	2021-01-25 18:58:04.451+00	2021-01-25 18:58:04.451+00
1427	4	53	322	2021-01-25 18:58:07.166+00	2021-01-25 18:58:07.166+00
1428	4	50	337	2021-01-25 19:06:43.344+00	2021-01-25 19:06:43.344+00
1429	3	50	338	2021-01-25 19:06:46.929+00	2021-01-25 19:06:46.929+00
1430	2	50	339	2021-01-25 19:06:50.568+00	2021-01-25 19:06:50.568+00
1431	4	50	340	2021-01-25 19:06:54.148+00	2021-01-25 19:06:54.148+00
1432	5	50	341	2021-01-25 19:06:57.952+00	2021-01-25 19:06:57.952+00
1433	3	50	342	2021-01-25 19:07:02.064+00	2021-01-25 19:07:02.064+00
1434	6	50	343	2021-01-25 19:07:06.353+00	2021-01-25 19:07:06.353+00
1435	2	50	344	2021-01-25 19:07:10.061+00	2021-01-25 19:07:10.061+00
1436	4	50	345	2021-01-25 19:07:13.727+00	2021-01-25 19:07:13.727+00
1437	5	50	346	2021-01-25 19:07:17.665+00	2021-01-25 19:07:17.665+00
1438	6	50	347	2021-01-25 19:07:21.908+00	2021-01-25 19:07:21.908+00
1439	2	50	348	2021-01-25 19:07:25.7+00	2021-01-25 19:07:25.7+00
1440	4	50	349	2021-01-25 19:07:29.469+00	2021-01-25 19:07:29.469+00
1441	6	50	350	2021-01-25 19:07:33.407+00	2021-01-25 19:07:33.407+00
1442	3	50	351	2021-01-25 19:07:36.966+00	2021-01-25 19:07:36.966+00
1443	5	50	352	2021-01-25 19:07:40.843+00	2021-01-25 19:07:40.843+00
1444	5	50	353	2021-01-25 19:08:48.048+00	2021-01-25 19:08:48.048+00
1445	4	50	354	2021-01-25 19:08:51.513+00	2021-01-25 19:08:51.513+00
1446	1	50	355	2021-01-25 19:08:55.339+00	2021-01-25 19:08:55.339+00
1447	4	50	356	2021-01-25 19:08:58.951+00	2021-01-25 19:08:58.951+00
1448	5	50	357	2021-01-25 19:09:03.42+00	2021-01-25 19:09:03.42+00
1449	6	50	358	2021-01-25 19:09:08.098+00	2021-01-25 19:09:08.098+00
1450	5	50	359	2021-01-25 19:09:12.244+00	2021-01-25 19:09:12.244+00
1451	1	50	360	2021-01-25 19:09:16.512+00	2021-01-25 19:09:16.512+00
1452	4	50	361	2021-01-25 19:09:21.031+00	2021-01-25 19:09:21.031+00
1453	8	50	362	2021-01-25 19:09:25.929+00	2021-01-25 19:09:25.929+00
1454	7	50	363	2021-01-25 19:09:30.856+00	2021-01-25 19:09:30.856+00
1455	7	50	364	2021-01-25 19:09:35.315+00	2021-01-25 19:09:35.315+00
1456	100	51	336	2021-01-25 20:54:09.094+00	2021-01-25 20:54:09.094+00
1457	1	51	120	2021-01-25 20:54:13.39+00	2021-01-25 20:54:13.39+00
1458	1	51	121	2021-01-25 20:54:15.957+00	2021-01-25 20:54:15.957+00
1459	0	51	122	2021-01-25 20:54:18.477+00	2021-01-25 20:54:18.477+00
1460	1	51	123	2021-01-25 20:54:21.201+00	2021-01-25 20:54:21.201+00
1461	1	51	124	2021-01-25 20:54:23.537+00	2021-01-25 20:54:23.537+00
1462	0	51	125	2021-01-25 20:54:26.067+00	2021-01-25 20:54:26.067+00
1463	0	51	126	2021-01-25 20:54:28.776+00	2021-01-25 20:54:28.776+00
1464	1	51	127	2021-01-25 20:54:31.129+00	2021-01-25 20:54:31.129+00
1465	1	51	128	2021-01-25 20:54:33.432+00	2021-01-25 20:54:33.432+00
1466	1	51	129	2021-01-25 20:54:35.964+00	2021-01-25 20:54:35.964+00
1467	0	51	130	2021-01-25 20:54:38.546+00	2021-01-25 20:54:38.546+00
1468	0	51	131	2021-01-25 20:54:40.886+00	2021-01-25 20:54:40.886+00
1469	0	51	132	2021-01-25 20:54:43.758+00	2021-01-25 20:54:43.758+00
1470	0	51	133	2021-01-25 20:54:46.107+00	2021-01-25 20:54:46.107+00
1471	1	51	134	2021-01-25 20:54:48.523+00	2021-01-25 20:54:48.523+00
1472	1	51	135	2021-01-25 20:54:51.498+00	2021-01-25 20:54:51.498+00
1473	2	51	136	2021-01-25 20:54:57.807+00	2021-01-25 20:54:57.807+00
1474	5	51	137	2021-01-25 20:55:00.594+00	2021-01-25 20:55:00.594+00
1475	3	51	138	2021-01-25 20:55:03.702+00	2021-01-25 20:55:03.702+00
1476	5	51	139	2021-01-25 20:55:06.572+00	2021-01-25 20:55:06.572+00
1477	6	51	140	2021-01-25 20:55:09.319+00	2021-01-25 20:55:09.319+00
1478	4	51	141	2021-01-25 20:55:12.459+00	2021-01-25 20:55:12.459+00
1479	5	51	142	2021-01-25 20:55:15.451+00	2021-01-25 20:55:15.451+00
1480	3	51	143	2021-01-25 20:55:18.387+00	2021-01-25 20:55:18.387+00
1481	6	51	144	2021-01-25 20:55:21.079+00	2021-01-25 20:55:21.079+00
1482	5	51	145	2021-01-25 20:55:23.762+00	2021-01-25 20:55:23.762+00
1483	1	51	146	2021-01-25 20:55:27.151+00	2021-01-25 20:55:27.151+00
1484	4	51	147	2021-01-25 20:55:30.044+00	2021-01-25 20:55:30.044+00
1485	1	51	148	2021-01-25 20:55:33.135+00	2021-01-25 20:55:33.135+00
1486	2	51	149	2021-01-25 20:55:35.949+00	2021-01-25 20:55:35.949+00
1487	5	51	150	2021-01-25 20:55:38.944+00	2021-01-25 20:55:38.944+00
1488	100	55	332	2021-01-26 21:28:34.052+00	2021-01-26 21:28:34.052+00
1489	1	55	3	2021-01-26 21:28:40.068+00	2021-01-26 21:28:40.068+00
1490	1	55	4	2021-01-26 21:28:43.912+00	2021-01-26 21:28:43.912+00
1491	0	55	5	2021-01-26 21:28:47.092+00	2021-01-26 21:28:47.092+00
1492	1	55	6	2021-01-26 21:28:50.717+00	2021-01-26 21:28:50.717+00
1493	0	55	7	2021-01-26 21:28:54.048+00	2021-01-26 21:28:54.048+00
1494	0	55	8	2021-01-26 21:28:58.082+00	2021-01-26 21:28:58.082+00
1495	1	55	9	2021-01-26 21:29:01.391+00	2021-01-26 21:29:01.391+00
1496	1	55	10	2021-01-26 21:29:04.715+00	2021-01-26 21:29:04.715+00
1497	1	55	11	2021-01-26 21:29:07.687+00	2021-01-26 21:29:07.687+00
1498	1	55	12	2021-01-26 21:29:10.708+00	2021-01-26 21:29:10.708+00
1499	1	55	13	2021-01-26 21:29:15.149+00	2021-01-26 21:29:15.149+00
1500	0	55	14	2021-01-26 21:29:18.374+00	2021-01-26 21:29:18.374+00
1501	1	55	15	2021-01-26 21:29:21.797+00	2021-01-26 21:29:21.797+00
1502	0	55	16	2021-01-26 21:29:25.262+00	2021-01-26 21:29:25.262+00
1503	0	55	17	2021-01-26 21:29:29.325+00	2021-01-26 21:29:29.325+00
1504	0	55	18	2021-01-26 21:29:32.637+00	2021-01-26 21:29:32.637+00
1505	4	55	19	2021-01-26 21:29:38.898+00	2021-01-26 21:29:38.898+00
1506	3	55	20	2021-01-26 21:29:41.714+00	2021-01-26 21:29:41.714+00
1507	1	55	21	2021-01-26 21:29:44.639+00	2021-01-26 21:29:44.639+00
1508	3	55	22	2021-01-26 21:29:47.504+00	2021-01-26 21:29:47.504+00
1509	2	55	23	2021-01-26 21:29:52.448+00	2021-01-26 21:29:52.448+00
1510	3	55	24	2021-01-26 21:29:55.154+00	2021-01-26 21:29:55.154+00
1511	4	55	25	2021-01-26 21:29:57.88+00	2021-01-26 21:29:57.88+00
1512	2	55	26	2021-01-26 21:30:01.236+00	2021-01-26 21:30:01.236+00
1513	3	55	27	2021-01-26 21:30:04.136+00	2021-01-26 21:30:04.136+00
1514	4	55	28	2021-01-26 21:30:07.066+00	2021-01-26 21:30:07.066+00
1515	2	55	29	2021-01-26 21:30:10.201+00	2021-01-26 21:30:10.201+00
1516	2	55	30	2021-01-26 21:30:12.92+00	2021-01-26 21:30:12.92+00
1517	2	55	31	2021-01-26 21:30:15.516+00	2021-01-26 21:30:15.516+00
1518	3	55	32	2021-01-26 21:30:18.264+00	2021-01-26 21:30:18.264+00
1519	4	55	33	2021-01-26 21:30:21.065+00	2021-01-26 21:30:21.065+00
1520	3	55	34	2021-01-26 21:30:23.696+00	2021-01-26 21:30:23.696+00
1521	4	55	35	2021-01-26 21:30:26.57+00	2021-01-26 21:30:26.57+00
1522	2	55	36	2021-01-26 21:30:29.479+00	2021-01-26 21:30:29.479+00
1523	100	55	333	2021-01-26 21:31:48.258+00	2021-01-26 21:31:48.258+00
1524	2	55	37	2021-01-26 21:31:54.936+00	2021-01-26 21:31:54.936+00
1525	1	55	38	2021-01-26 21:32:00.057+00	2021-01-26 21:32:00.057+00
1526	2	55	39	2021-01-26 21:32:03.631+00	2021-01-26 21:32:03.631+00
1527	1	55	40	2021-01-26 21:32:07.117+00	2021-01-26 21:32:07.117+00
1528	3	55	41	2021-01-26 21:32:10.948+00	2021-01-26 21:32:10.948+00
1529	2	55	42	2021-01-26 21:32:14.329+00	2021-01-26 21:32:14.329+00
1530	3	55	43	2021-01-26 21:32:18.706+00	2021-01-26 21:32:18.706+00
1531	1	55	44	2021-01-26 21:32:22.765+00	2021-01-26 21:32:22.765+00
1532	3	55	45	2021-01-26 21:32:26.482+00	2021-01-26 21:32:26.482+00
1533	3	55	46	2021-01-26 21:32:30.442+00	2021-01-26 21:32:30.442+00
1534	1	55	47	2021-01-26 21:32:34.143+00	2021-01-26 21:32:34.143+00
1535	3	55	48	2021-01-26 21:32:37.827+00	2021-01-26 21:32:37.827+00
1536	2	55	49	2021-01-26 21:32:41.816+00	2021-01-26 21:32:41.816+00
1537	3	55	50	2021-01-26 21:32:45.771+00	2021-01-26 21:32:45.771+00
1538	2	55	51	2021-01-26 21:32:50.077+00	2021-01-26 21:32:50.077+00
1539	4	55	52	2021-01-26 21:32:54.04+00	2021-01-26 21:32:54.04+00
1540	2	55	53	2021-01-26 21:32:58.162+00	2021-01-26 21:32:58.162+00
1541	2	55	54	2021-01-26 21:33:02.063+00	2021-01-26 21:33:02.063+00
1542	3	55	55	2021-01-26 21:33:07.74+00	2021-01-26 21:33:07.74+00
1543	2	55	56	2021-01-26 21:33:11.798+00	2021-01-26 21:33:11.798+00
1544	1	55	57	2021-01-26 21:33:15.72+00	2021-01-26 21:33:15.72+00
1545	3	55	58	2021-01-26 21:33:19.955+00	2021-01-26 21:33:19.955+00
1546	3	55	59	2021-01-26 21:33:25.497+00	2021-01-26 21:33:25.497+00
1547	100	55	334	2021-01-26 21:34:29.446+00	2021-01-26 21:34:29.446+00
1548	1	55	60	2021-01-26 21:34:37.146+00	2021-01-26 21:34:37.146+00
1549	1	55	61	2021-01-26 21:34:40.688+00	2021-01-26 21:34:40.688+00
1550	0	55	62	2021-01-26 21:34:44.144+00	2021-01-26 21:34:44.144+00
1551	1	55	63	2021-01-26 21:34:47.348+00	2021-01-26 21:34:47.348+00
1552	1	55	64	2021-01-26 21:34:50.593+00	2021-01-26 21:34:50.593+00
1553	0	55	65	2021-01-26 21:34:53.93+00	2021-01-26 21:34:53.93+00
1554	1	55	66	2021-01-26 21:34:57.098+00	2021-01-26 21:34:57.098+00
1555	1	55	67	2021-01-26 21:35:00.523+00	2021-01-26 21:35:00.523+00
1556	1	55	68	2021-01-26 21:35:03.425+00	2021-01-26 21:35:03.425+00
1557	1	55	69	2021-01-26 21:35:06.704+00	2021-01-26 21:35:06.704+00
1558	1	55	70	2021-01-26 21:35:09.867+00	2021-01-26 21:35:09.867+00
1559	1	55	71	2021-01-26 21:35:13.048+00	2021-01-26 21:35:13.048+00
1560	4	55	72	2021-01-26 21:35:19.159+00	2021-01-26 21:35:19.159+00
1561	1	55	73	2021-01-26 21:35:22.294+00	2021-01-26 21:35:22.294+00
1562	2	55	74	2021-01-26 21:35:25.708+00	2021-01-26 21:35:25.708+00
1563	3	55	75	2021-01-26 21:35:29.427+00	2021-01-26 21:35:29.427+00
1564	3	55	76	2021-01-26 21:35:32.288+00	2021-01-26 21:35:32.288+00
1565	1	55	77	2021-01-26 21:35:34.981+00	2021-01-26 21:35:34.981+00
1566	3	55	78	2021-01-26 21:35:37.962+00	2021-01-26 21:35:37.962+00
1567	2	55	79	2021-01-26 21:35:41.374+00	2021-01-26 21:35:41.374+00
1568	1	55	80	2021-01-26 21:35:44.449+00	2021-01-26 21:35:44.449+00
1569	4	55	81	2021-01-26 21:35:47.726+00	2021-01-26 21:35:47.726+00
1570	2	55	82	2021-01-26 21:35:53.964+00	2021-01-26 21:35:53.964+00
1571	2	55	83	2021-01-26 21:35:57.32+00	2021-01-26 21:35:57.32+00
1572	3	55	84	2021-01-26 21:36:02.556+00	2021-01-26 21:36:02.556+00
1573	2	55	85	2021-01-26 21:36:06.154+00	2021-01-26 21:36:06.154+00
1574	3	55	86	2021-01-26 21:36:10.085+00	2021-01-26 21:36:10.085+00
1575	3	55	87	2021-01-26 21:36:13.621+00	2021-01-26 21:36:13.621+00
1576	2	55	88	2021-01-26 21:36:17.308+00	2021-01-26 21:36:17.308+00
1577	1	55	89	2021-01-26 21:36:21.152+00	2021-01-26 21:36:21.152+00
1578	2	55	90	2021-01-26 21:36:24.744+00	2021-01-26 21:36:24.744+00
1579	100	57	332	2021-01-26 21:48:44.307+00	2021-01-26 21:48:44.307+00
1580	1	57	3	2021-01-26 21:48:50.604+00	2021-01-26 21:48:50.604+00
1581	0	57	4	2021-01-26 21:48:54.106+00	2021-01-26 21:48:54.106+00
1582	0	57	5	2021-01-26 21:48:57.41+00	2021-01-26 21:48:57.41+00
1583	1	57	6	2021-01-26 21:49:01.023+00	2021-01-26 21:49:01.023+00
1584	0	57	7	2021-01-26 21:49:04.326+00	2021-01-26 21:49:04.326+00
1585	1	57	8	2021-01-26 21:49:07.804+00	2021-01-26 21:49:07.804+00
1586	0	57	9	2021-01-26 21:49:11.074+00	2021-01-26 21:49:11.074+00
1587	1	57	10	2021-01-26 21:49:14.19+00	2021-01-26 21:49:14.19+00
1588	1	57	11	2021-01-26 21:49:17.236+00	2021-01-26 21:49:17.236+00
1589	1	57	12	2021-01-26 21:49:20.284+00	2021-01-26 21:49:20.284+00
1590	1	57	13	2021-01-26 21:49:23.392+00	2021-01-26 21:49:23.392+00
1591	0	57	14	2021-01-26 21:49:26.845+00	2021-01-26 21:49:26.845+00
1592	0	57	15	2021-01-26 21:49:30.431+00	2021-01-26 21:49:30.431+00
1593	1	57	16	2021-01-26 21:49:33.517+00	2021-01-26 21:49:33.517+00
1594	0	57	17	2021-01-26 21:49:36.983+00	2021-01-26 21:49:36.983+00
1595	0	57	18	2021-01-26 21:49:40.893+00	2021-01-26 21:49:40.893+00
1596	4	57	19	2021-01-26 21:49:47.772+00	2021-01-26 21:49:47.772+00
1597	3	57	20	2021-01-26 21:49:50.384+00	2021-01-26 21:49:50.384+00
1598	1	57	21	2021-01-26 21:49:53.163+00	2021-01-26 21:49:53.163+00
1599	4	57	22	2021-01-26 21:49:56.086+00	2021-01-26 21:49:56.086+00
1600	2	57	23	2021-01-26 21:49:58.685+00	2021-01-26 21:49:58.685+00
1601	3	57	24	2021-01-26 21:50:01.181+00	2021-01-26 21:50:01.181+00
1602	4	57	25	2021-01-26 21:50:03.608+00	2021-01-26 21:50:03.608+00
1603	2	57	26	2021-01-26 21:50:06.329+00	2021-01-26 21:50:06.329+00
1604	3	57	27	2021-01-26 21:50:08.797+00	2021-01-26 21:50:08.797+00
1605	4	57	28	2021-01-26 21:50:11.917+00	2021-01-26 21:50:11.917+00
1606	2	57	29	2021-01-26 21:50:14.54+00	2021-01-26 21:50:14.54+00
1607	1	57	30	2021-01-26 21:50:17.598+00	2021-01-26 21:50:17.598+00
1608	3	57	31	2021-01-26 21:50:20.934+00	2021-01-26 21:50:20.934+00
1609	3	57	32	2021-01-26 21:50:23.53+00	2021-01-26 21:50:23.53+00
1610	4	57	33	2021-01-26 21:50:26.184+00	2021-01-26 21:50:26.184+00
1611	3	57	34	2021-01-26 21:50:28.88+00	2021-01-26 21:50:28.88+00
1612	4	57	35	2021-01-26 21:50:31.647+00	2021-01-26 21:50:31.647+00
1613	2	57	36	2021-01-26 21:50:34.377+00	2021-01-26 21:50:34.377+00
1614	100	58	333	2021-01-26 21:53:51.699+00	2021-01-26 21:53:51.699+00
1615	3	58	37	2021-01-26 21:53:58.832+00	2021-01-26 21:53:58.832+00
1616	2	58	38	2021-01-26 21:54:02.311+00	2021-01-26 21:54:02.311+00
1617	3	58	39	2021-01-26 21:54:05.818+00	2021-01-26 21:54:05.818+00
1618	1	58	40	2021-01-26 21:54:09.255+00	2021-01-26 21:54:09.255+00
1619	3	58	41	2021-01-26 21:54:12.875+00	2021-01-26 21:54:12.875+00
1620	2	58	42	2021-01-26 21:54:16.306+00	2021-01-26 21:54:16.306+00
1621	3	58	43	2021-01-26 21:54:19.889+00	2021-01-26 21:54:19.889+00
1622	2	58	44	2021-01-26 21:54:23.492+00	2021-01-26 21:54:23.492+00
1623	4	58	45	2021-01-26 21:54:26.956+00	2021-01-26 21:54:26.956+00
1624	3	58	46	2021-01-26 21:54:30.493+00	2021-01-26 21:54:30.493+00
1625	2	58	47	2021-01-26 21:54:33.889+00	2021-01-26 21:54:33.889+00
1626	3	58	48	2021-01-26 21:54:37.402+00	2021-01-26 21:54:37.402+00
1627	3	58	49	2021-01-26 21:54:40.856+00	2021-01-26 21:54:40.856+00
1628	3	58	50	2021-01-26 21:54:44.898+00	2021-01-26 21:54:44.898+00
1629	2	58	51	2021-01-26 21:54:48.88+00	2021-01-26 21:54:48.88+00
1630	4	58	52	2021-01-26 21:54:52.792+00	2021-01-26 21:54:52.792+00
1631	2	58	53	2021-01-26 21:54:56.91+00	2021-01-26 21:54:56.91+00
1632	3	58	54	2021-01-26 21:55:01.107+00	2021-01-26 21:55:01.107+00
1633	3	58	55	2021-01-26 21:55:05.199+00	2021-01-26 21:55:05.199+00
1634	3	58	56	2021-01-26 21:55:09.233+00	2021-01-26 21:55:09.233+00
1635	2	58	57	2021-01-26 21:55:13.244+00	2021-01-26 21:55:13.244+00
1636	3	58	58	2021-01-26 21:55:17.296+00	2021-01-26 21:55:17.296+00
1637	3	58	59	2021-01-26 21:55:21.61+00	2021-01-26 21:55:21.61+00
1638	100	58	334	2021-01-26 21:56:23.038+00	2021-01-26 21:56:23.038+00
1639	1	58	60	2021-01-26 21:56:29.301+00	2021-01-26 21:56:29.301+00
1640	1	58	61	2021-01-26 21:56:32.367+00	2021-01-26 21:56:32.367+00
1641	0	58	62	2021-01-26 21:56:35.876+00	2021-01-26 21:56:35.876+00
1642	1	58	63	2021-01-26 21:56:38.985+00	2021-01-26 21:56:38.985+00
1643	0	58	64	2021-01-26 21:56:42.568+00	2021-01-26 21:56:42.568+00
1644	1	58	65	2021-01-26 21:56:46+00	2021-01-26 21:56:46+00
1645	1	58	66	2021-01-26 21:56:48.955+00	2021-01-26 21:56:48.955+00
1646	1	58	67	2021-01-26 21:56:52.1+00	2021-01-26 21:56:52.1+00
1647	1	58	68	2021-01-26 21:56:55.213+00	2021-01-26 21:56:55.213+00
1648	0	58	69	2021-01-26 21:56:58.673+00	2021-01-26 21:56:58.673+00
1649	1	58	70	2021-01-26 21:57:02.162+00	2021-01-26 21:57:02.162+00
1650	0	58	71	2021-01-26 21:57:05.65+00	2021-01-26 21:57:05.65+00
1651	4	58	72	2021-01-26 21:57:11.358+00	2021-01-26 21:57:11.358+00
1652	3	58	73	2021-01-26 21:57:14.313+00	2021-01-26 21:57:14.313+00
1653	1	58	74	2021-01-26 21:57:17.272+00	2021-01-26 21:57:17.272+00
1654	2	58	75	2021-01-26 21:57:20.185+00	2021-01-26 21:57:20.185+00
1655	3	58	76	2021-01-26 21:57:22.969+00	2021-01-26 21:57:22.969+00
1656	1	58	77	2021-01-26 21:57:25.617+00	2021-01-26 21:57:25.617+00
1657	3	58	78	2021-01-26 21:57:28.54+00	2021-01-26 21:57:28.54+00
1658	2	58	79	2021-01-26 21:57:31.466+00	2021-01-26 21:57:31.466+00
1659	1	58	80	2021-01-26 21:57:34.176+00	2021-01-26 21:57:34.176+00
1660	2	58	81	2021-01-26 21:57:36.773+00	2021-01-26 21:57:36.773+00
1661	3	58	82	2021-01-26 21:57:43.431+00	2021-01-26 21:57:43.431+00
1662	3	58	83	2021-01-26 21:57:46.911+00	2021-01-26 21:57:46.911+00
1663	2	58	84	2021-01-26 21:57:50.744+00	2021-01-26 21:57:50.744+00
1664	2	58	85	2021-01-26 21:57:55.021+00	2021-01-26 21:57:55.021+00
1665	3	58	86	2021-01-26 21:57:58.676+00	2021-01-26 21:57:58.676+00
1666	2	58	87	2021-01-26 21:58:02.087+00	2021-01-26 21:58:02.087+00
1667	2	58	88	2021-01-26 21:58:05.997+00	2021-01-26 21:58:05.997+00
1668	3	58	89	2021-01-26 21:58:09.519+00	2021-01-26 21:58:09.519+00
1669	3	58	90	2021-01-26 21:58:13.62+00	2021-01-26 21:58:13.62+00
1670	100	58	335	2021-01-26 21:59:18.803+00	2021-01-26 21:59:18.803+00
1671	1	58	91	2021-01-26 21:59:23.701+00	2021-01-26 21:59:23.701+00
1672	0	58	92	2021-01-26 21:59:26.769+00	2021-01-26 21:59:26.769+00
1673	1	58	93	2021-01-26 21:59:29.688+00	2021-01-26 21:59:29.688+00
1674	0	58	94	2021-01-26 21:59:32.723+00	2021-01-26 21:59:32.723+00
1675	1	58	95	2021-01-26 21:59:35.414+00	2021-01-26 21:59:35.414+00
1676	0	58	96	2021-01-26 21:59:38.541+00	2021-01-26 21:59:38.541+00
1677	1	58	97	2021-01-26 21:59:41.363+00	2021-01-26 21:59:41.363+00
1678	1	58	98	2021-01-26 21:59:44.665+00	2021-01-26 21:59:44.665+00
1679	1	58	99	2021-01-26 21:59:47.382+00	2021-01-26 21:59:47.382+00
1680	1	58	100	2021-01-26 21:59:50.491+00	2021-01-26 21:59:50.491+00
1681	1	58	101	2021-01-26 21:59:53.138+00	2021-01-26 21:59:53.138+00
1682	1	58	102	2021-01-26 21:59:56.245+00	2021-01-26 21:59:56.245+00
1683	1	58	103	2021-01-26 21:59:58.919+00	2021-01-26 21:59:58.919+00
1684	1	58	104	2021-01-26 22:00:01.941+00	2021-01-26 22:00:01.941+00
1685	0	58	105	2021-01-26 22:00:04.689+00	2021-01-26 22:00:04.689+00
1686	1	58	106	2021-01-26 22:00:07.467+00	2021-01-26 22:00:07.467+00
1687	1	58	107	2021-01-26 22:00:10.063+00	2021-01-26 22:00:10.063+00
1688	0	58	108	2021-01-26 22:00:13.12+00	2021-01-26 22:00:13.12+00
1689	0	58	109	2021-01-26 22:00:15.75+00	2021-01-26 22:00:15.75+00
1690	3	58	110	2021-01-26 22:00:21.754+00	2021-01-26 22:00:21.754+00
1691	1	58	111	2021-01-26 22:00:24.525+00	2021-01-26 22:00:24.525+00
1692	3	58	112	2021-01-26 22:00:27.41+00	2021-01-26 22:00:27.41+00
1693	1	58	113	2021-01-26 22:00:30.131+00	2021-01-26 22:00:30.131+00
1694	2	58	114	2021-01-26 22:00:32.907+00	2021-01-26 22:00:32.907+00
1695	4	58	115	2021-01-26 22:00:36.025+00	2021-01-26 22:00:36.025+00
1696	3	58	116	2021-01-26 22:00:39.396+00	2021-01-26 22:00:39.396+00
1697	2	58	117	2021-01-26 22:00:42.371+00	2021-01-26 22:00:42.371+00
1698	1	58	118	2021-01-26 22:00:45.312+00	2021-01-26 22:00:45.312+00
1699	1	58	119	2021-01-26 22:00:47.763+00	2021-01-26 22:00:47.763+00
1700	100	58	336	2021-01-26 22:01:20.452+00	2021-01-26 22:01:20.452+00
1701	1	58	120	2021-01-26 22:01:25.818+00	2021-01-26 22:01:25.818+00
1702	0	58	121	2021-01-26 22:01:28.443+00	2021-01-26 22:01:28.443+00
1703	1	58	122	2021-01-26 22:01:31.351+00	2021-01-26 22:01:31.351+00
1704	1	58	123	2021-01-26 22:01:33.796+00	2021-01-26 22:01:33.796+00
1705	0	58	124	2021-01-26 22:01:36.321+00	2021-01-26 22:01:36.321+00
1706	0	58	125	2021-01-26 22:01:38.997+00	2021-01-26 22:01:38.997+00
1707	1	58	126	2021-01-26 22:01:44.606+00	2021-01-26 22:01:44.606+00
1708	1	58	126	2021-01-26 22:01:44.613+00	2021-01-26 22:01:44.613+00
1709	1	58	127	2021-01-26 22:01:47.432+00	2021-01-26 22:01:47.432+00
1710	0	58	128	2021-01-26 22:01:50.324+00	2021-01-26 22:01:50.324+00
1711	1	58	129	2021-01-26 22:01:53.659+00	2021-01-26 22:01:53.659+00
1712	0	58	130	2021-01-26 22:01:56.33+00	2021-01-26 22:01:56.33+00
1713	1	58	131	2021-01-26 22:02:02.53+00	2021-01-26 22:02:02.53+00
1714	0	58	132	2021-01-26 22:02:05.173+00	2021-01-26 22:02:05.173+00
1715	1	58	133	2021-01-26 22:02:07.979+00	2021-01-26 22:02:07.979+00
1716	1	58	134	2021-01-26 22:02:10.353+00	2021-01-26 22:02:10.353+00
1717	0	58	135	2021-01-26 22:02:13.164+00	2021-01-26 22:02:13.164+00
1718	2	58	136	2021-01-26 22:02:22.062+00	2021-01-26 22:02:22.062+00
1719	2	58	136	2021-01-26 22:02:22.065+00	2021-01-26 22:02:22.065+00
1720	3	58	137	2021-01-26 22:02:25.581+00	2021-01-26 22:02:25.581+00
1721	3	58	138	2021-01-26 22:02:28.299+00	2021-01-26 22:02:28.299+00
1722	5	58	139	2021-01-26 22:02:31.005+00	2021-01-26 22:02:31.005+00
1723	2	58	140	2021-01-26 22:02:34.368+00	2021-01-26 22:02:34.368+00
1724	4	58	141	2021-01-26 22:02:37.526+00	2021-01-26 22:02:37.526+00
1725	5	58	142	2021-01-26 22:02:40.354+00	2021-01-26 22:02:40.354+00
1726	2	58	143	2021-01-26 22:02:43.801+00	2021-01-26 22:02:43.801+00
1727	2	58	144	2021-01-26 22:02:46.913+00	2021-01-26 22:02:46.913+00
1728	5	58	145	2021-01-26 22:02:49.69+00	2021-01-26 22:02:49.69+00
1729	3	58	146	2021-01-26 22:02:52.916+00	2021-01-26 22:02:52.916+00
1730	5	58	147	2021-01-26 22:02:55.958+00	2021-01-26 22:02:55.958+00
1731	1	58	148	2021-01-26 22:02:59.631+00	2021-01-26 22:02:59.631+00
1732	3	58	149	2021-01-26 22:03:02.728+00	2021-01-26 22:03:02.728+00
1733	6	58	150	2021-01-26 22:03:06.287+00	2021-01-26 22:03:06.287+00
1734	100	60	332	2021-01-26 22:05:33.833+00	2021-01-26 22:05:33.833+00
1735	1	60	3	2021-01-26 22:05:39.768+00	2021-01-26 22:05:39.768+00
1736	1	60	4	2021-01-26 22:05:43.406+00	2021-01-26 22:05:43.406+00
1737	0	60	5	2021-01-26 22:05:46.614+00	2021-01-26 22:05:46.614+00
1738	1	60	6	2021-01-26 22:05:50.036+00	2021-01-26 22:05:50.036+00
1739	0	60	7	2021-01-26 22:05:53.658+00	2021-01-26 22:05:53.658+00
1740	0	60	8	2021-01-26 22:05:57.305+00	2021-01-26 22:05:57.305+00
1741	1	60	9	2021-01-26 22:06:00.575+00	2021-01-26 22:06:00.575+00
1742	0	60	10	2021-01-26 22:06:03.798+00	2021-01-26 22:06:03.798+00
1743	1	60	11	2021-01-26 22:06:06.948+00	2021-01-26 22:06:06.948+00
1744	1	60	12	2021-01-26 22:06:10.64+00	2021-01-26 22:06:10.64+00
1745	1	60	13	2021-01-26 22:06:13.864+00	2021-01-26 22:06:13.864+00
1746	0	60	14	2021-01-26 22:06:17.135+00	2021-01-26 22:06:17.135+00
1747	1	60	15	2021-01-26 22:06:20.252+00	2021-01-26 22:06:20.252+00
1748	0	60	16	2021-01-26 22:06:23.472+00	2021-01-26 22:06:23.472+00
1749	0	60	17	2021-01-26 22:06:26.878+00	2021-01-26 22:06:26.878+00
1750	1	60	18	2021-01-26 22:06:30.071+00	2021-01-26 22:06:30.071+00
1751	4	60	19	2021-01-26 22:06:35.534+00	2021-01-26 22:06:35.534+00
1752	3	60	20	2021-01-26 22:06:38.175+00	2021-01-26 22:06:38.175+00
1753	1	60	21	2021-01-26 22:06:40.979+00	2021-01-26 22:06:40.979+00
1754	4	60	22	2021-01-26 22:06:43.598+00	2021-01-26 22:06:43.598+00
1755	2	60	23	2021-01-26 22:06:46.543+00	2021-01-26 22:06:46.543+00
1756	3	60	24	2021-01-26 22:06:49.143+00	2021-01-26 22:06:49.143+00
1757	4	60	25	2021-01-26 22:06:51.83+00	2021-01-26 22:06:51.83+00
1758	2	60	26	2021-01-26 22:06:54.625+00	2021-01-26 22:06:54.625+00
1759	3	60	27	2021-01-26 22:06:57.307+00	2021-01-26 22:06:57.307+00
1760	4	60	28	2021-01-26 22:07:00.212+00	2021-01-26 22:07:00.212+00
1761	2	60	29	2021-01-26 22:07:02.875+00	2021-01-26 22:07:02.875+00
1762	1	60	30	2021-01-26 22:07:05.972+00	2021-01-26 22:07:05.972+00
1763	1	60	31	2021-01-26 22:07:08.633+00	2021-01-26 22:07:08.633+00
1764	3	60	32	2021-01-26 22:07:11.46+00	2021-01-26 22:07:11.46+00
1765	4	60	33	2021-01-26 22:07:14.256+00	2021-01-26 22:07:14.256+00
1766	3	60	34	2021-01-26 22:07:16.867+00	2021-01-26 22:07:16.867+00
1767	4	60	35	2021-01-26 22:07:19.683+00	2021-01-26 22:07:19.683+00
1768	1	60	36	2021-01-26 22:07:22.651+00	2021-01-26 22:07:22.651+00
1769	100	60	333	2021-01-26 22:08:42.682+00	2021-01-26 22:08:42.682+00
1770	2	60	37	2021-01-26 22:08:48.868+00	2021-01-26 22:08:48.868+00
1771	2	60	38	2021-01-26 22:08:52.278+00	2021-01-26 22:08:52.278+00
1772	3	60	39	2021-01-26 22:08:56.074+00	2021-01-26 22:08:56.074+00
1773	1	60	40	2021-01-26 22:09:00.42+00	2021-01-26 22:09:00.42+00
1774	4	60	41	2021-01-26 22:09:04.014+00	2021-01-26 22:09:04.014+00
1775	2	60	42	2021-01-26 22:09:07.616+00	2021-01-26 22:09:07.616+00
1776	2	60	43	2021-01-26 22:09:11.168+00	2021-01-26 22:09:11.168+00
1777	2	60	44	2021-01-26 22:09:14.513+00	2021-01-26 22:09:14.513+00
1778	3	60	45	2021-01-26 22:09:18.301+00	2021-01-26 22:09:18.301+00
1779	3	60	46	2021-01-26 22:09:21.59+00	2021-01-26 22:09:21.59+00
1780	2	60	47	2021-01-26 22:09:25.198+00	2021-01-26 22:09:25.198+00
1781	3	60	48	2021-01-26 22:09:29.205+00	2021-01-26 22:09:29.205+00
1782	3	60	49	2021-01-26 22:09:32.963+00	2021-01-26 22:09:32.963+00
1783	3	60	50	2021-01-26 22:09:36.788+00	2021-01-26 22:09:36.788+00
1784	2	60	51	2021-01-26 22:09:40.859+00	2021-01-26 22:09:40.859+00
1785	3	60	52	2021-01-26 22:09:45.061+00	2021-01-26 22:09:45.061+00
1786	2	60	53	2021-01-26 22:09:49.065+00	2021-01-26 22:09:49.065+00
1787	3	60	54	2021-01-26 22:09:53.237+00	2021-01-26 22:09:53.237+00
1788	2	60	55	2021-01-26 22:09:57.51+00	2021-01-26 22:09:57.51+00
1789	3	60	56	2021-01-26 22:10:01.581+00	2021-01-26 22:10:01.581+00
1790	1	60	57	2021-01-26 22:10:05.937+00	2021-01-26 22:10:05.937+00
1791	3	60	58	2021-01-26 22:10:10.133+00	2021-01-26 22:10:10.133+00
1792	3	60	59	2021-01-26 22:10:49.143+00	2021-01-26 22:10:49.143+00
1793	100	60	334	2021-01-26 22:13:15.063+00	2021-01-26 22:13:15.063+00
1794	1	60	60	2021-01-26 22:13:20.844+00	2021-01-26 22:13:20.844+00
1795	1	60	61	2021-01-26 22:13:24.009+00	2021-01-26 22:13:24.009+00
1796	0	60	62	2021-01-26 22:13:27.415+00	2021-01-26 22:13:27.415+00
1797	1	60	63	2021-01-26 22:13:30.587+00	2021-01-26 22:13:30.587+00
1798	0	60	64	2021-01-26 22:13:34.249+00	2021-01-26 22:13:34.249+00
1799	0	60	65	2021-01-26 22:13:37.434+00	2021-01-26 22:13:37.434+00
1800	1	60	66	2021-01-26 22:13:40.609+00	2021-01-26 22:13:40.609+00
1801	1	60	67	2021-01-26 22:13:43.849+00	2021-01-26 22:13:43.849+00
1802	1	60	68	2021-01-26 22:13:46.759+00	2021-01-26 22:13:46.759+00
1803	1	60	69	2021-01-26 22:13:49.643+00	2021-01-26 22:13:49.643+00
1804	1	60	70	2021-01-26 22:13:52.55+00	2021-01-26 22:13:52.55+00
1805	1	60	71	2021-01-26 22:13:56.722+00	2021-01-26 22:13:56.722+00
1806	4	60	72	2021-01-26 22:14:03.275+00	2021-01-26 22:14:03.275+00
1807	1	60	73	2021-01-26 22:14:06.34+00	2021-01-26 22:14:06.34+00
1808	1	60	74	2021-01-26 22:14:09.066+00	2021-01-26 22:14:09.066+00
1809	2	60	75	2021-01-26 22:14:11.681+00	2021-01-26 22:14:11.681+00
1810	3	60	76	2021-01-26 22:14:14.527+00	2021-01-26 22:14:14.527+00
1811	1	60	77	2021-01-26 22:14:17.424+00	2021-01-26 22:14:17.424+00
1812	3	60	78	2021-01-26 22:14:20.335+00	2021-01-26 22:14:20.335+00
1813	2	60	79	2021-01-26 22:14:23.705+00	2021-01-26 22:14:23.705+00
1814	1	60	80	2021-01-26 22:14:26.595+00	2021-01-26 22:14:26.595+00
1815	2	60	81	2021-01-26 22:14:29.882+00	2021-01-26 22:14:29.882+00
1816	2	60	82	2021-01-26 22:14:36.295+00	2021-01-26 22:14:36.295+00
1817	3	60	83	2021-01-26 22:14:39.792+00	2021-01-26 22:14:39.792+00
1818	2	60	84	2021-01-26 22:14:43.534+00	2021-01-26 22:14:43.534+00
1819	2	60	85	2021-01-26 22:14:46.939+00	2021-01-26 22:14:46.939+00
1820	2	60	86	2021-01-26 22:14:50.203+00	2021-01-26 22:14:50.203+00
1821	1	60	87	2021-01-26 22:14:53.814+00	2021-01-26 22:14:53.814+00
1822	2	60	88	2021-01-26 22:14:57.658+00	2021-01-26 22:14:57.658+00
1823	3	60	89	2021-01-26 22:15:01.163+00	2021-01-26 22:15:01.163+00
1824	3	60	90	2021-01-26 22:15:07.251+00	2021-01-26 22:15:07.251+00
1825	100	60	335	2021-01-26 22:17:44.39+00	2021-01-26 22:17:44.39+00
1826	1	60	91	2021-01-26 22:17:49.356+00	2021-01-26 22:17:49.356+00
1827	1	60	92	2021-01-26 22:17:54.885+00	2021-01-26 22:17:54.885+00
1828	0	60	93	2021-01-26 22:17:58.11+00	2021-01-26 22:17:58.11+00
1829	0	60	94	2021-01-26 22:18:01.081+00	2021-01-26 22:18:01.081+00
1830	0	60	95	2021-01-26 22:18:04.352+00	2021-01-26 22:18:04.352+00
1831	0	60	96	2021-01-26 22:18:07.221+00	2021-01-26 22:18:07.221+00
1832	1	60	97	2021-01-26 22:18:10.423+00	2021-01-26 22:18:10.423+00
1833	1	60	98	2021-01-26 22:18:13.46+00	2021-01-26 22:18:13.46+00
1834	1	60	99	2021-01-26 22:18:16.174+00	2021-01-26 22:18:16.174+00
1835	1	60	100	2021-01-26 22:18:18.975+00	2021-01-26 22:18:18.975+00
1836	1	60	101	2021-01-26 22:18:21.708+00	2021-01-26 22:18:21.708+00
1837	1	60	102	2021-01-26 22:18:24.571+00	2021-01-26 22:18:24.571+00
1838	1	60	103	2021-01-26 22:18:27.239+00	2021-01-26 22:18:27.239+00
1839	1	60	104	2021-01-26 22:18:32.184+00	2021-01-26 22:18:32.184+00
1840	0	60	105	2021-01-26 22:18:35.412+00	2021-01-26 22:18:35.412+00
1841	0	60	106	2021-01-26 22:18:38.493+00	2021-01-26 22:18:38.493+00
1842	0	60	107	2021-01-26 22:18:41.547+00	2021-01-26 22:18:41.547+00
1843	0	60	108	2021-01-26 22:18:44.8+00	2021-01-26 22:18:44.8+00
1844	0	60	109	2021-01-26 22:18:47.614+00	2021-01-26 22:18:47.614+00
1845	1	60	110	2021-01-26 22:18:53.779+00	2021-01-26 22:18:53.779+00
1846	1	60	111	2021-01-26 22:18:56.615+00	2021-01-26 22:18:56.615+00
1847	3	60	112	2021-01-26 22:18:59.933+00	2021-01-26 22:18:59.933+00
1848	1	60	113	2021-01-26 22:19:02.825+00	2021-01-26 22:19:02.825+00
1849	2	60	114	2021-01-26 22:19:05.904+00	2021-01-26 22:19:05.904+00
1850	4	60	115	2021-01-26 22:19:09.694+00	2021-01-26 22:19:09.694+00
1851	3	60	116	2021-01-26 22:19:12.648+00	2021-01-26 22:19:12.648+00
1852	2	60	117	2021-01-26 22:19:15.829+00	2021-01-26 22:19:15.829+00
1853	1	60	118	2021-01-26 22:19:18.693+00	2021-01-26 22:19:18.693+00
1854	1	60	119	2021-01-26 22:19:21.648+00	2021-01-26 22:19:21.648+00
1855	100	60	336	2021-01-26 22:21:14.959+00	2021-01-26 22:21:14.959+00
1856	0	60	120	2021-01-26 22:21:20.601+00	2021-01-26 22:21:20.601+00
1857	0	60	121	2021-01-26 22:21:23.297+00	2021-01-26 22:21:23.297+00
1858	1	60	122	2021-01-26 22:21:26.053+00	2021-01-26 22:21:26.053+00
1859	1	60	123	2021-01-26 22:21:28.786+00	2021-01-26 22:21:28.786+00
1860	0	60	124	2021-01-26 22:21:31.688+00	2021-01-26 22:21:31.688+00
1861	0	60	125	2021-01-26 22:21:35.115+00	2021-01-26 22:21:35.115+00
1862	1	60	126	2021-01-26 22:21:38.08+00	2021-01-26 22:21:38.08+00
1863	1	60	127	2021-01-26 22:21:40.416+00	2021-01-26 22:21:40.416+00
1864	0	60	128	2021-01-26 22:21:43.337+00	2021-01-26 22:21:43.337+00
1865	1	60	129	2021-01-26 22:21:45.811+00	2021-01-26 22:21:45.811+00
1866	0	60	130	2021-01-26 22:21:49.114+00	2021-01-26 22:21:49.114+00
1867	1	60	131	2021-01-26 22:21:51.672+00	2021-01-26 22:21:51.672+00
1868	0	60	132	2021-01-26 22:21:54.504+00	2021-01-26 22:21:54.504+00
1869	1	60	133	2021-01-26 22:21:57.068+00	2021-01-26 22:21:57.068+00
1870	1	60	134	2021-01-26 22:21:59.49+00	2021-01-26 22:21:59.49+00
1871	0	60	135	2021-01-26 22:22:02.37+00	2021-01-26 22:22:02.37+00
1872	2	60	136	2021-01-26 22:22:08.76+00	2021-01-26 22:22:08.76+00
1873	5	60	137	2021-01-26 22:22:11.895+00	2021-01-26 22:22:11.895+00
1874	3	60	138	2021-01-26 22:22:15.127+00	2021-01-26 22:22:15.127+00
1875	5	60	139	2021-01-26 22:22:18.147+00	2021-01-26 22:22:18.147+00
1876	5	60	140	2021-01-26 22:22:21.339+00	2021-01-26 22:22:21.339+00
1877	1	60	141	2021-01-26 22:22:24.798+00	2021-01-26 22:22:24.798+00
1878	5	60	142	2021-01-26 22:22:27.753+00	2021-01-26 22:22:27.753+00
1879	2	60	143	2021-01-26 22:22:31.001+00	2021-01-26 22:22:31.001+00
1880	4	60	144	2021-01-26 22:22:34.378+00	2021-01-26 22:22:34.378+00
1881	5	60	145	2021-01-26 22:22:37.193+00	2021-01-26 22:22:37.193+00
1882	3	60	146	2021-01-26 22:22:40.304+00	2021-01-26 22:22:40.304+00
1883	2	60	147	2021-01-26 22:22:43.459+00	2021-01-26 22:22:43.459+00
1884	6	60	148	2021-01-26 22:22:46.965+00	2021-01-26 22:22:46.965+00
1885	2	60	149	2021-01-26 22:22:49.923+00	2021-01-26 22:22:49.923+00
1886	5	60	150	2021-01-26 22:22:52.79+00	2021-01-26 22:22:52.79+00
1887	1	60	151	2021-01-26 22:24:51.039+00	2021-01-26 22:24:51.039+00
1888	1	60	152	2021-01-26 22:24:55.169+00	2021-01-26 22:24:55.169+00
1889	1	60	153	2021-01-26 22:24:59.547+00	2021-01-26 22:24:59.547+00
1890	0	60	154	2021-01-26 22:25:04.127+00	2021-01-26 22:25:04.127+00
1891	1	60	155	2021-01-26 22:25:08.317+00	2021-01-26 22:25:08.317+00
1892	0	60	156	2021-01-26 22:25:12.786+00	2021-01-26 22:25:12.786+00
1893	0	60	157	2021-01-26 22:25:17.502+00	2021-01-26 22:25:17.502+00
1894	1	60	158	2021-01-26 22:25:22.071+00	2021-01-26 22:25:22.071+00
1895	2	60	159	2021-01-26 22:25:35.399+00	2021-01-26 22:25:35.399+00
1896	3	60	160	2021-01-26 22:25:44.947+00	2021-01-26 22:25:44.947+00
1897	2	60	161	2021-01-26 22:25:54.141+00	2021-01-26 22:25:54.141+00
1898	1	60	162	2021-01-26 22:26:03.211+00	2021-01-26 22:26:03.211+00
1899	1	60	163	2021-01-26 22:26:12.303+00	2021-01-26 22:26:12.303+00
1900	0	60	164	2021-01-26 22:26:19.538+00	2021-01-26 22:26:19.538+00
1901	1	60	165	2021-01-26 22:26:22.849+00	2021-01-26 22:26:22.849+00
1902	0	60	166	2021-01-26 22:26:26.29+00	2021-01-26 22:26:26.29+00
1903	1	60	167	2021-01-26 22:26:29.616+00	2021-01-26 22:26:29.616+00
1904	0	60	168	2021-01-26 22:26:33.31+00	2021-01-26 22:26:33.31+00
1905	0	60	169	2021-01-26 22:26:37.402+00	2021-01-26 22:26:37.402+00
1906	1	60	170	2021-01-26 22:26:40.641+00	2021-01-26 22:26:40.641+00
1907	0	60	171	2021-01-26 22:26:44.319+00	2021-01-26 22:26:44.319+00
1908	1	60	172	2021-01-26 22:26:47.362+00	2021-01-26 22:26:47.362+00
1909	0	60	173	2021-01-26 22:26:56.026+00	2021-01-26 22:26:56.026+00
1910	1	60	174	2021-01-26 22:27:05.753+00	2021-01-26 22:27:05.753+00
1911	1	60	175	2021-01-26 22:27:12.699+00	2021-01-26 22:27:12.699+00
1912	1	60	176	2021-01-26 22:27:19.278+00	2021-01-26 22:27:19.278+00
1913	1	60	177	2021-01-26 22:27:27.162+00	2021-01-26 22:27:27.162+00
1914	6	60	337	2021-01-26 22:29:27.691+00	2021-01-26 22:29:27.691+00
1915	2	60	338	2021-01-26 22:29:31.765+00	2021-01-26 22:29:31.765+00
1916	4	60	339	2021-01-26 22:29:35.973+00	2021-01-26 22:29:35.973+00
1917	1	60	340	2021-01-26 22:29:40.311+00	2021-01-26 22:29:40.311+00
1918	4	60	341	2021-01-26 22:29:44.571+00	2021-01-26 22:29:44.571+00
1919	3	60	342	2021-01-26 22:29:48.7+00	2021-01-26 22:29:48.7+00
1920	4	60	343	2021-01-26 22:29:52.647+00	2021-01-26 22:29:52.647+00
1921	6	60	344	2021-01-26 22:29:56.907+00	2021-01-26 22:29:56.907+00
1922	3	60	345	2021-01-26 22:30:00.506+00	2021-01-26 22:30:00.506+00
1923	5	60	346	2021-01-26 22:30:04.843+00	2021-01-26 22:30:04.843+00
1924	5	60	347	2021-01-26 22:30:08.941+00	2021-01-26 22:30:08.941+00
1925	3	60	348	2021-01-26 22:30:12.633+00	2021-01-26 22:30:12.633+00
1926	2	60	349	2021-01-26 22:30:16.34+00	2021-01-26 22:30:16.34+00
1927	5	60	350	2021-01-26 22:30:20.451+00	2021-01-26 22:30:20.451+00
1928	3	60	351	2021-01-26 22:30:24.041+00	2021-01-26 22:30:24.041+00
1929	2	60	352	2021-01-26 22:30:27.863+00	2021-01-26 22:30:27.863+00
1930	2	60	353	2021-01-26 22:30:31.477+00	2021-01-26 22:30:31.477+00
1931	4	60	354	2021-01-26 22:30:35.164+00	2021-01-26 22:30:35.164+00
1932	3	60	355	2021-01-26 22:30:39.638+00	2021-01-26 22:30:39.638+00
1933	5	60	356	2021-01-26 22:30:43.639+00	2021-01-26 22:30:43.639+00
1934	3	60	357	2021-01-26 22:30:48.595+00	2021-01-26 22:30:48.595+00
1935	6	60	358	2021-01-26 22:30:53.356+00	2021-01-26 22:30:53.356+00
1936	3	60	359	2021-01-26 22:30:58.223+00	2021-01-26 22:30:58.223+00
1937	6	60	360	2021-01-26 22:31:02.742+00	2021-01-26 22:31:02.742+00
1938	7	60	361	2021-01-26 22:31:07.53+00	2021-01-26 22:31:07.53+00
1939	8	60	362	2021-01-26 22:31:12.311+00	2021-01-26 22:31:12.311+00
1940	7	60	363	2021-01-26 22:31:17.053+00	2021-01-26 22:31:17.053+00
1941	8	60	364	2021-01-26 22:31:21.946+00	2021-01-26 22:31:21.946+00
1942	100	63	332	2021-01-26 22:43:57.175+00	2021-01-26 22:43:57.175+00
1943	1	63	3	2021-01-26 22:44:03.48+00	2021-01-26 22:44:03.48+00
1944	0	63	4	2021-01-26 22:44:06.737+00	2021-01-26 22:44:06.737+00
1945	0	63	5	2021-01-26 22:44:10.065+00	2021-01-26 22:44:10.065+00
1946	1	63	6	2021-01-26 22:44:13.353+00	2021-01-26 22:44:13.353+00
1947	1	63	7	2021-01-26 22:44:16.633+00	2021-01-26 22:44:16.633+00
1948	0	63	8	2021-01-26 22:44:19.845+00	2021-01-26 22:44:19.845+00
1949	0	63	9	2021-01-26 22:44:23.732+00	2021-01-26 22:44:23.732+00
1950	1	63	10	2021-01-26 22:44:26.9+00	2021-01-26 22:44:26.9+00
1951	1	63	11	2021-01-26 22:44:29.763+00	2021-01-26 22:44:29.763+00
1952	1	63	12	2021-01-26 22:44:32.62+00	2021-01-26 22:44:32.62+00
1953	0	63	13	2021-01-26 22:44:36.058+00	2021-01-26 22:44:36.058+00
1954	1	63	14	2021-01-26 22:44:39.285+00	2021-01-26 22:44:39.285+00
1955	0	63	15	2021-01-26 22:44:42.609+00	2021-01-26 22:44:42.609+00
1956	1	63	16	2021-01-26 22:44:45.776+00	2021-01-26 22:44:45.776+00
1957	1	63	17	2021-01-26 22:44:49.063+00	2021-01-26 22:44:49.063+00
1958	0	63	18	2021-01-26 22:44:52.694+00	2021-01-26 22:44:52.694+00
1959	4	63	19	2021-01-26 22:44:58.468+00	2021-01-26 22:44:58.468+00
1960	3	63	20	2021-01-26 22:45:01.187+00	2021-01-26 22:45:01.187+00
1961	1	63	21	2021-01-26 22:45:04.066+00	2021-01-26 22:45:04.066+00
1962	4	63	22	2021-01-26 22:45:07.12+00	2021-01-26 22:45:07.12+00
1963	2	63	23	2021-01-26 22:45:10.283+00	2021-01-26 22:45:10.283+00
1964	3	63	24	2021-01-26 22:45:13.102+00	2021-01-26 22:45:13.102+00
1965	4	63	25	2021-01-26 22:45:15.701+00	2021-01-26 22:45:15.701+00
1966	2	63	26	2021-01-26 22:45:18.895+00	2021-01-26 22:45:18.895+00
1967	3	63	27	2021-01-26 22:45:21.65+00	2021-01-26 22:45:21.65+00
1968	4	63	28	2021-01-26 22:45:24.44+00	2021-01-26 22:45:24.44+00
1969	2	63	29	2021-01-26 22:45:27.194+00	2021-01-26 22:45:27.194+00
1970	1	63	30	2021-01-26 22:45:30.179+00	2021-01-26 22:45:30.179+00
1971	1	63	31	2021-01-26 22:45:33.138+00	2021-01-26 22:45:33.138+00
1972	3	63	32	2021-01-26 22:45:35.776+00	2021-01-26 22:45:35.776+00
1973	4	63	33	2021-01-26 22:45:39.438+00	2021-01-26 22:45:39.438+00
1974	3	63	34	2021-01-26 22:45:42.134+00	2021-01-26 22:45:42.134+00
1975	4	63	35	2021-01-26 22:45:44.981+00	2021-01-26 22:45:44.981+00
1976	2	63	36	2021-01-26 22:45:47.778+00	2021-01-26 22:45:47.778+00
1977	100	63	333	2021-01-26 22:48:00.411+00	2021-01-26 22:48:00.411+00
1978	3	63	37	2021-01-26 22:48:06.864+00	2021-01-26 22:48:06.864+00
1979	2	63	38	2021-01-26 22:48:10.295+00	2021-01-26 22:48:10.295+00
1980	3	63	39	2021-01-26 22:48:13.963+00	2021-01-26 22:48:13.963+00
1981	1	63	40	2021-01-26 22:48:17.41+00	2021-01-26 22:48:17.41+00
1982	3	63	41	2021-01-26 22:48:20.86+00	2021-01-26 22:48:20.86+00
1983	2	63	42	2021-01-26 22:48:24.188+00	2021-01-26 22:48:24.188+00
1984	3	63	43	2021-01-26 22:48:27.685+00	2021-01-26 22:48:27.685+00
1985	2	63	44	2021-01-26 22:48:31.427+00	2021-01-26 22:48:31.427+00
1986	4	63	45	2021-01-26 22:48:35.034+00	2021-01-26 22:48:35.034+00
1987	3	63	46	2021-01-26 22:48:38.432+00	2021-01-26 22:48:38.432+00
1988	2	63	47	2021-01-26 22:48:41.901+00	2021-01-26 22:48:41.901+00
1989	3	63	48	2021-01-26 22:48:45.405+00	2021-01-26 22:48:45.405+00
1990	3	63	49	2021-01-26 22:48:48.933+00	2021-01-26 22:48:48.933+00
1991	3	63	50	2021-01-26 22:48:52.631+00	2021-01-26 22:48:52.631+00
1992	2	63	51	2021-01-26 22:48:56.612+00	2021-01-26 22:48:56.612+00
1993	4	63	52	2021-01-26 22:49:00.592+00	2021-01-26 22:49:00.592+00
1994	2	63	53	2021-01-26 22:49:04.856+00	2021-01-26 22:49:04.856+00
1995	2	63	54	2021-01-26 22:49:08.633+00	2021-01-26 22:49:08.633+00
1996	3	63	55	2021-01-26 22:49:12.715+00	2021-01-26 22:49:12.715+00
1997	2	63	56	2021-01-26 22:49:17.171+00	2021-01-26 22:49:17.171+00
1998	3	63	57	2021-01-26 22:49:21.134+00	2021-01-26 22:49:21.134+00
1999	3	63	58	2021-01-26 22:49:25.648+00	2021-01-26 22:49:25.648+00
2000	3	63	59	2021-01-26 22:49:29.365+00	2021-01-26 22:49:29.365+00
2001	100	63	334	2021-01-26 22:52:42.819+00	2021-01-26 22:52:42.819+00
2002	1	63	60	2021-01-26 22:52:49.192+00	2021-01-26 22:52:49.192+00
2003	1	63	61	2021-01-26 22:52:52.51+00	2021-01-26 22:52:52.51+00
2004	0	63	62	2021-01-26 22:52:56.709+00	2021-01-26 22:52:56.709+00
2005	1	63	63	2021-01-26 22:52:59.899+00	2021-01-26 22:52:59.899+00
2006	1	63	64	2021-01-26 22:53:03.088+00	2021-01-26 22:53:03.088+00
2007	0	63	65	2021-01-26 22:53:06.47+00	2021-01-26 22:53:06.47+00
2008	1	63	66	2021-01-26 22:53:09.67+00	2021-01-26 22:53:09.67+00
2009	1	63	67	2021-01-26 22:53:12.975+00	2021-01-26 22:53:12.975+00
2010	1	63	68	2021-01-26 22:53:16.132+00	2021-01-26 22:53:16.132+00
2011	0	63	69	2021-01-26 22:53:19.597+00	2021-01-26 22:53:19.597+00
2012	1	63	70	2021-01-26 22:53:22.742+00	2021-01-26 22:53:22.742+00
2013	1	63	71	2021-01-26 22:53:25.9+00	2021-01-26 22:53:25.9+00
2014	4	63	72	2021-01-26 22:53:31.374+00	2021-01-26 22:53:31.374+00
2015	2	63	73	2021-01-26 22:53:34.516+00	2021-01-26 22:53:34.516+00
2016	2	63	74	2021-01-26 22:53:37.164+00	2021-01-26 22:53:37.164+00
2017	3	63	75	2021-01-26 22:53:40.351+00	2021-01-26 22:53:40.351+00
2018	3	63	76	2021-01-26 22:53:42.965+00	2021-01-26 22:53:42.965+00
2019	1	63	77	2021-01-26 22:53:45.86+00	2021-01-26 22:53:45.86+00
2020	3	63	78	2021-01-26 22:53:48.708+00	2021-01-26 22:53:48.708+00
2021	2	63	79	2021-01-26 22:53:52.086+00	2021-01-26 22:53:52.086+00
2022	2	63	80	2021-01-26 22:53:55.005+00	2021-01-26 22:53:55.005+00
2023	2	63	81	2021-01-26 22:53:57.917+00	2021-01-26 22:53:57.917+00
2024	3	63	82	2021-01-26 22:54:05.84+00	2021-01-26 22:54:05.84+00
2025	3	63	83	2021-01-26 22:54:09.182+00	2021-01-26 22:54:09.182+00
2026	2	63	84	2021-01-26 22:54:12.811+00	2021-01-26 22:54:12.811+00
2027	2	63	85	2021-01-26 22:54:16.095+00	2021-01-26 22:54:16.095+00
2028	4	63	86	2021-01-26 22:54:19.828+00	2021-01-26 22:54:19.828+00
2029	2	63	87	2021-01-26 22:54:23.599+00	2021-01-26 22:54:23.599+00
2030	3	63	88	2021-01-26 22:54:26.99+00	2021-01-26 22:54:26.99+00
2031	3	63	89	2021-01-26 22:54:30.246+00	2021-01-26 22:54:30.246+00
2032	3	63	90	2021-01-26 22:54:35.57+00	2021-01-26 22:54:35.57+00
2033	100	63	335	2021-01-26 22:57:13.263+00	2021-01-26 22:57:13.263+00
2034	1	63	91	2021-01-26 22:57:19.335+00	2021-01-26 22:57:19.335+00
2035	1	63	92	2021-01-26 22:57:22.364+00	2021-01-26 22:57:22.364+00
2036	1	63	93	2021-01-26 22:57:25.101+00	2021-01-26 22:57:25.101+00
2037	0	63	94	2021-01-26 22:57:27.96+00	2021-01-26 22:57:27.96+00
2038	0	63	95	2021-01-26 22:57:31.835+00	2021-01-26 22:57:31.835+00
2039	0	63	96	2021-01-26 22:57:34.415+00	2021-01-26 22:57:34.415+00
2040	0	63	97	2021-01-26 22:57:37.043+00	2021-01-26 22:57:37.043+00
2041	1	63	98	2021-01-26 22:57:40.165+00	2021-01-26 22:57:40.165+00
2042	1	63	99	2021-01-26 22:57:42.923+00	2021-01-26 22:57:42.923+00
2044	1	63	101	2021-01-26 22:57:48.155+00	2021-01-26 22:57:48.155+00
2050	1	63	107	2021-01-26 22:58:05.496+00	2021-01-26 22:58:05.496+00
2051	0	63	108	2021-01-26 22:58:08.679+00	2021-01-26 22:58:08.679+00
2052	1	63	109	2021-01-26 22:58:11.599+00	2021-01-26 22:58:11.599+00
2053	1	63	110	2021-01-26 22:58:17.568+00	2021-01-26 22:58:17.568+00
2054	1	63	111	2021-01-26 22:58:20.243+00	2021-01-26 22:58:20.243+00
2055	2	63	112	2021-01-26 22:58:23.16+00	2021-01-26 22:58:23.16+00
2056	1	63	113	2021-01-26 22:58:25.951+00	2021-01-26 22:58:25.951+00
2057	1	63	114	2021-01-26 22:58:28.93+00	2021-01-26 22:58:28.93+00
2058	4	63	115	2021-01-26 22:58:31.925+00	2021-01-26 22:58:31.925+00
2059	3	63	116	2021-01-26 22:58:35.088+00	2021-01-26 22:58:35.088+00
2060	2	63	117	2021-01-26 22:58:38.087+00	2021-01-26 22:58:38.087+00
2061	1	63	118	2021-01-26 22:58:40.72+00	2021-01-26 22:58:40.72+00
2062	1	63	119	2021-01-26 22:58:43.518+00	2021-01-26 22:58:43.518+00
2746	2	67	83	2021-01-27 18:39:14.14+00	2021-01-27 18:39:14.14+00
2747	3	67	84	2021-01-27 18:39:18.046+00	2021-01-27 18:39:18.046+00
2748	1	67	85	2021-01-27 18:39:21.803+00	2021-01-27 18:39:21.803+00
2749	2	67	86	2021-01-27 18:39:25.346+00	2021-01-27 18:39:25.346+00
2750	3	67	87	2021-01-27 18:39:29.164+00	2021-01-27 18:39:29.164+00
2751	1	67	88	2021-01-27 18:39:32.653+00	2021-01-27 18:39:32.653+00
2752	1	67	89	2021-01-27 18:39:35.822+00	2021-01-27 18:39:35.822+00
2753	3	67	90	2021-01-27 18:39:40.061+00	2021-01-27 18:39:40.061+00
2776	2	67	112	2021-01-27 18:42:13.291+00	2021-01-27 18:42:13.291+00
2777	1	67	113	2021-01-27 18:42:16.011+00	2021-01-27 18:42:16.011+00
2786	0	67	121	2021-01-27 18:44:42.98+00	2021-01-27 18:44:42.98+00
2787	0	67	122	2021-01-27 18:44:45.316+00	2021-01-27 18:44:45.316+00
2788	1	67	123	2021-01-27 18:44:48.397+00	2021-01-27 18:44:48.397+00
2789	0	67	124	2021-01-27 18:44:50.891+00	2021-01-27 18:44:50.891+00
2790	0	67	125	2021-01-27 18:44:53.274+00	2021-01-27 18:44:53.274+00
2791	1	67	126	2021-01-27 18:44:55.876+00	2021-01-27 18:44:55.876+00
2792	1	67	127	2021-01-27 18:44:58.335+00	2021-01-27 18:44:58.335+00
2793	1	67	128	2021-01-27 18:45:00.572+00	2021-01-27 18:45:00.572+00
2794	1	67	129	2021-01-27 18:45:02.933+00	2021-01-27 18:45:02.933+00
2796	0	67	131	2021-01-27 18:45:08.663+00	2021-01-27 18:45:08.663+00
2797	0	67	132	2021-01-27 18:45:10.911+00	2021-01-27 18:45:10.911+00
2798	0	67	133	2021-01-27 18:45:13.329+00	2021-01-27 18:45:13.329+00
2799	1	67	134	2021-01-27 18:45:16.173+00	2021-01-27 18:45:16.173+00
2800	0	67	135	2021-01-27 18:45:18.982+00	2021-01-27 18:45:18.982+00
2801	2	67	136	2021-01-27 18:45:25.474+00	2021-01-27 18:45:25.474+00
2802	5	67	137	2021-01-27 18:45:28.423+00	2021-01-27 18:45:28.423+00
2803	3	67	138	2021-01-27 18:45:31.196+00	2021-01-27 18:45:31.196+00
2804	5	67	139	2021-01-27 18:45:33.855+00	2021-01-27 18:45:33.855+00
2805	3	67	140	2021-01-27 18:45:37.123+00	2021-01-27 18:45:37.123+00
2806	3	67	141	2021-01-27 18:45:39.971+00	2021-01-27 18:45:39.971+00
2807	5	67	142	2021-01-27 18:45:42.92+00	2021-01-27 18:45:42.92+00
2808	3	67	143	2021-01-27 18:45:45.962+00	2021-01-27 18:45:45.962+00
2809	1	67	144	2021-01-27 18:45:49.109+00	2021-01-27 18:45:49.109+00
2810	5	67	145	2021-01-27 18:45:51.983+00	2021-01-27 18:45:51.983+00
2811	3	67	146	2021-01-27 18:45:55.211+00	2021-01-27 18:45:55.211+00
2812	5	67	147	2021-01-27 18:45:58.248+00	2021-01-27 18:45:58.248+00
2813	5	67	148	2021-01-27 18:46:01.247+00	2021-01-27 18:46:01.247+00
2814	2	67	149	2021-01-27 18:46:03.955+00	2021-01-27 18:46:03.955+00
2815	5	67	150	2021-01-27 18:46:06.745+00	2021-01-27 18:46:06.745+00
2824	2	67	159	2021-01-27 18:49:15.982+00	2021-01-27 18:49:15.982+00
2825	3	67	160	2021-01-27 18:49:24.984+00	2021-01-27 18:49:24.984+00
2826	1	67	161	2021-01-27 18:49:34.11+00	2021-01-27 18:49:34.11+00
2827	1	67	162	2021-01-27 18:49:43.088+00	2021-01-27 18:49:43.088+00
2828	3	67	163	2021-01-27 18:49:51.963+00	2021-01-27 18:49:51.963+00
2829	1	67	164	2021-01-27 18:49:58.661+00	2021-01-27 18:49:58.661+00
2830	1	67	165	2021-01-27 18:50:02.137+00	2021-01-27 18:50:02.137+00
2831	1	67	166	2021-01-27 18:50:05.294+00	2021-01-27 18:50:05.294+00
2832	1	67	167	2021-01-27 18:50:08.467+00	2021-01-27 18:50:08.467+00
2833	0	67	168	2021-01-27 18:50:12.214+00	2021-01-27 18:50:12.214+00
2834	1	67	169	2021-01-27 18:50:15.464+00	2021-01-27 18:50:15.464+00
2835	1	67	170	2021-01-27 18:50:18.715+00	2021-01-27 18:50:18.715+00
2836	1	67	171	2021-01-27 18:50:22.477+00	2021-01-27 18:50:22.477+00
2837	1	67	172	2021-01-27 18:50:25.728+00	2021-01-27 18:50:25.728+00
2838	1	67	173	2021-01-27 18:50:28.912+00	2021-01-27 18:50:28.912+00
2839	1	67	174	2021-01-27 18:50:39.068+00	2021-01-27 18:50:39.068+00
2840	1	67	175	2021-01-27 18:50:45.665+00	2021-01-27 18:50:45.665+00
2841	1	67	176	2021-01-27 18:50:52.292+00	2021-01-27 18:50:52.292+00
2843	5	67	337	2021-01-27 18:51:41.387+00	2021-01-27 18:51:41.387+00
2844	3	67	338	2021-01-27 18:51:45.024+00	2021-01-27 18:51:45.024+00
2845	2	67	339	2021-01-27 18:51:48.817+00	2021-01-27 18:51:48.817+00
2846	4	67	340	2021-01-27 18:51:52.65+00	2021-01-27 18:51:52.65+00
2847	6	67	341	2021-01-27 18:51:56.678+00	2021-01-27 18:51:56.678+00
2848	3	67	342	2021-01-27 18:52:00.471+00	2021-01-27 18:52:00.471+00
2849	4	67	343	2021-01-27 18:52:04.456+00	2021-01-27 18:52:04.456+00
2850	2	67	344	2021-01-27 18:52:07.939+00	2021-01-27 18:52:07.939+00
2851	5	67	345	2021-01-27 18:52:11.57+00	2021-01-27 18:52:11.57+00
2852	6	67	346	2021-01-27 18:52:15.37+00	2021-01-27 18:52:15.37+00
2853	6	67	347	2021-01-27 18:52:19.328+00	2021-01-27 18:52:19.328+00
2871	2	67	286	2021-01-27 18:56:14.908+00	2021-01-27 18:56:14.908+00
2872	2	67	287	2021-01-27 18:56:17.698+00	2021-01-27 18:56:17.698+00
2873	2	67	288	2021-01-27 18:56:20.218+00	2021-01-27 18:56:20.218+00
2874	1	67	289	2021-01-27 18:56:23.635+00	2021-01-27 18:56:23.635+00
2879	1	67	294	2021-01-27 18:56:37.167+00	2021-01-27 18:56:37.167+00
2880	3	67	295	2021-01-27 18:56:40.108+00	2021-01-27 18:56:40.108+00
2905	3	67	320	2021-01-27 19:01:11.535+00	2021-01-27 19:01:11.535+00
2906	2	67	321	2021-01-27 19:01:14.4+00	2021-01-27 19:01:14.4+00
2907	2	67	322	2021-01-27 19:01:24.637+00	2021-01-27 19:01:24.637+00
2916	1	68	159	2021-01-27 19:40:23.89+00	2021-01-27 19:40:23.89+00
2917	1	68	160	2021-01-27 19:40:32.816+00	2021-01-27 19:40:32.816+00
2918	1	68	161	2021-01-27 19:40:41.853+00	2021-01-27 19:40:41.853+00
2919	1	68	162	2021-01-27 19:40:50.713+00	2021-01-27 19:40:50.713+00
2920	1	68	163	2021-01-27 19:40:59.656+00	2021-01-27 19:40:59.656+00
2921	0	68	164	2021-01-27 19:41:06.498+00	2021-01-27 19:41:06.498+00
2922	0	68	165	2021-01-27 19:41:10.632+00	2021-01-27 19:41:10.632+00
2923	0	68	166	2021-01-27 19:41:13.712+00	2021-01-27 19:41:13.712+00
2924	0	68	167	2021-01-27 19:41:16.742+00	2021-01-27 19:41:16.742+00
2925	0	68	168	2021-01-27 19:41:19.832+00	2021-01-27 19:41:19.832+00
2926	0	68	169	2021-01-27 19:41:22.92+00	2021-01-27 19:41:22.92+00
2927	0	68	170	2021-01-27 19:41:25.915+00	2021-01-27 19:41:25.915+00
2928	0	68	171	2021-01-27 19:41:29.299+00	2021-01-27 19:41:29.299+00
2929	0	68	172	2021-01-27 19:41:32.528+00	2021-01-27 19:41:32.528+00
2930	0	68	173	2021-01-27 19:41:35.594+00	2021-01-27 19:41:35.594+00
2931	1	68	174	2021-01-27 19:41:45.902+00	2021-01-27 19:41:45.902+00
2932	1	68	175	2021-01-27 19:41:52.607+00	2021-01-27 19:41:52.607+00
2933	1	68	176	2021-01-27 19:41:59.059+00	2021-01-27 19:41:59.059+00
2934	1	68	177	2021-01-27 19:42:05.992+00	2021-01-27 19:42:05.992+00
2941	3	68	192	2021-01-27 19:43:04.076+00	2021-01-27 19:43:04.076+00
2942	3	68	193	2021-01-27 19:43:06.329+00	2021-01-27 19:43:06.329+00
2943	3	68	194	2021-01-27 19:43:08.934+00	2021-01-27 19:43:08.934+00
2944	3	68	195	2021-01-27 19:43:11.399+00	2021-01-27 19:43:11.399+00
2945	3	68	196	2021-01-27 19:43:13.675+00	2021-01-27 19:43:13.675+00
2946	3	68	197	2021-01-27 19:43:16.123+00	2021-01-27 19:43:16.123+00
2947	3	68	198	2021-01-27 19:43:18.705+00	2021-01-27 19:43:18.705+00
2948	3	68	199	2021-01-27 19:43:21.194+00	2021-01-27 19:43:21.194+00
2949	3	68	200	2021-01-27 19:43:23.695+00	2021-01-27 19:43:23.695+00
2950	3	68	201	2021-01-27 19:43:26.029+00	2021-01-27 19:43:26.029+00
2951	3	68	202	2021-01-27 19:43:28.438+00	2021-01-27 19:43:28.438+00
2956	100	62	332	2021-01-27 21:02:00.608+00	2021-01-27 21:02:00.608+00
2957	1	62	3	2021-01-27 21:02:05.614+00	2021-01-27 21:02:05.614+00
2958	1	62	4	2021-01-27 21:02:08.856+00	2021-01-27 21:02:08.856+00
2959	0	62	5	2021-01-27 21:02:11.888+00	2021-01-27 21:02:11.888+00
2960	1	62	6	2021-01-27 21:02:15.236+00	2021-01-27 21:02:15.236+00
2961	0	62	7	2021-01-27 21:02:18.131+00	2021-01-27 21:02:18.131+00
2962	0	62	8	2021-01-27 21:02:21.583+00	2021-01-27 21:02:21.583+00
2963	0	62	9	2021-01-27 21:02:24.739+00	2021-01-27 21:02:24.739+00
2964	0	62	10	2021-01-27 21:02:27.737+00	2021-01-27 21:02:27.737+00
2965	1	62	11	2021-01-27 21:02:30.538+00	2021-01-27 21:02:30.538+00
2966	1	62	12	2021-01-27 21:02:33.674+00	2021-01-27 21:02:33.674+00
2967	1	62	13	2021-01-27 21:02:36.418+00	2021-01-27 21:02:36.418+00
2968	0	62	14	2021-01-27 21:02:39.515+00	2021-01-27 21:02:39.515+00
2043	1	63	100	2021-01-26 22:57:45.565+00	2021-01-26 22:57:45.565+00
2045	1	63	102	2021-01-26 22:57:51.029+00	2021-01-26 22:57:51.029+00
2046	1	63	103	2021-01-26 22:57:53.492+00	2021-01-26 22:57:53.492+00
2047	1	63	104	2021-01-26 22:57:56.328+00	2021-01-26 22:57:56.328+00
2048	0	63	105	2021-01-26 22:57:59.504+00	2021-01-26 22:57:59.504+00
2049	0	63	106	2021-01-26 22:58:02.27+00	2021-01-26 22:58:02.27+00
2063	100	63	336	2021-01-26 23:01:14.742+00	2021-01-26 23:01:14.742+00
2064	1	63	120	2021-01-26 23:01:20.057+00	2021-01-26 23:01:20.057+00
2065	0	63	121	2021-01-26 23:01:22.616+00	2021-01-26 23:01:22.616+00
2066	1	63	122	2021-01-26 23:01:25.316+00	2021-01-26 23:01:25.316+00
2067	1	63	123	2021-01-26 23:01:27.96+00	2021-01-26 23:01:27.96+00
2068	0	63	124	2021-01-26 23:01:30.606+00	2021-01-26 23:01:30.606+00
2069	0	63	125	2021-01-26 23:01:33.186+00	2021-01-26 23:01:33.186+00
2070	1	63	126	2021-01-26 23:01:36.052+00	2021-01-26 23:01:36.052+00
2071	0	63	127	2021-01-26 23:01:38.997+00	2021-01-26 23:01:38.997+00
2072	1	63	128	2021-01-26 23:01:41.643+00	2021-01-26 23:01:41.643+00
2073	1	63	129	2021-01-26 23:01:44.147+00	2021-01-26 23:01:44.147+00
2074	0	63	130	2021-01-26 23:01:47.046+00	2021-01-26 23:01:47.046+00
2075	0	63	131	2021-01-26 23:01:49.649+00	2021-01-26 23:01:49.649+00
2076	0	63	132	2021-01-26 23:01:52.931+00	2021-01-26 23:01:52.931+00
2077	0	63	133	2021-01-26 23:01:55.392+00	2021-01-26 23:01:55.392+00
2078	0	63	134	2021-01-26 23:01:58.276+00	2021-01-26 23:01:58.276+00
2079	1	63	135	2021-01-26 23:02:00.771+00	2021-01-26 23:02:00.771+00
2080	2	63	136	2021-01-26 23:02:06.947+00	2021-01-26 23:02:06.947+00
2081	5	63	137	2021-01-26 23:02:09.672+00	2021-01-26 23:02:09.672+00
2082	3	63	138	2021-01-26 23:02:12.498+00	2021-01-26 23:02:12.498+00
2083	5	63	139	2021-01-26 23:02:15.183+00	2021-01-26 23:02:15.183+00
2084	3	63	140	2021-01-26 23:02:18.554+00	2021-01-26 23:02:18.554+00
2085	4	63	141	2021-01-26 23:02:21.591+00	2021-01-26 23:02:21.591+00
2086	3	63	142	2021-01-26 23:02:25.03+00	2021-01-26 23:02:25.03+00
2087	4	63	143	2021-01-26 23:02:28.147+00	2021-01-26 23:02:28.147+00
2088	3	63	144	2021-01-26 23:02:31.31+00	2021-01-26 23:02:31.31+00
2089	3	63	145	2021-01-26 23:02:34.384+00	2021-01-26 23:02:34.384+00
2090	2	63	146	2021-01-26 23:02:37.634+00	2021-01-26 23:02:37.634+00
2091	2	63	147	2021-01-26 23:02:40.526+00	2021-01-26 23:02:40.526+00
2092	2	63	148	2021-01-26 23:02:43.36+00	2021-01-26 23:02:43.36+00
2093	3	63	149	2021-01-26 23:02:46.193+00	2021-01-26 23:02:46.193+00
2094	2	63	150	2021-01-26 23:02:49.339+00	2021-01-26 23:02:49.339+00
2095	1	63	151	2021-01-26 23:04:12.334+00	2021-01-26 23:04:12.334+00
2096	0	63	152	2021-01-26 23:04:18.05+00	2021-01-26 23:04:18.05+00
2097	1	63	153	2021-01-26 23:04:22.612+00	2021-01-26 23:04:22.612+00
2098	0	63	154	2021-01-26 23:04:26.92+00	2021-01-26 23:04:26.92+00
2099	1	63	155	2021-01-26 23:04:31.12+00	2021-01-26 23:04:31.12+00
2100	0	63	156	2021-01-26 23:04:35.63+00	2021-01-26 23:04:35.63+00
2101	1	63	157	2021-01-26 23:04:40.027+00	2021-01-26 23:04:40.027+00
2102	1	63	158	2021-01-26 23:04:44.209+00	2021-01-26 23:04:44.209+00
2103	2	63	159	2021-01-26 23:04:57.578+00	2021-01-26 23:04:57.578+00
2104	3	63	160	2021-01-26 23:05:06.426+00	2021-01-26 23:05:06.426+00
2105	1	63	161	2021-01-26 23:05:15.767+00	2021-01-26 23:05:15.767+00
2106	1	63	162	2021-01-26 23:05:25.08+00	2021-01-26 23:05:25.08+00
2107	3	63	163	2021-01-26 23:05:34.247+00	2021-01-26 23:05:34.247+00
2108	1	63	164	2021-01-26 23:05:40.521+00	2021-01-26 23:05:40.521+00
2109	0	63	165	2021-01-26 23:05:43.789+00	2021-01-26 23:05:43.789+00
2110	1	63	166	2021-01-26 23:05:47.151+00	2021-01-26 23:05:47.151+00
2111	0	63	167	2021-01-26 23:05:50.619+00	2021-01-26 23:05:50.619+00
2112	0	63	168	2021-01-26 23:05:54.393+00	2021-01-26 23:05:54.393+00
2113	0	63	169	2021-01-26 23:05:57.833+00	2021-01-26 23:05:57.833+00
2114	1	63	170	2021-01-26 23:06:01.236+00	2021-01-26 23:06:01.236+00
2115	0	63	171	2021-01-26 23:06:04.36+00	2021-01-26 23:06:04.36+00
2116	1	63	172	2021-01-26 23:06:07.654+00	2021-01-26 23:06:07.654+00
2117	1	63	173	2021-01-26 23:06:10.824+00	2021-01-26 23:06:10.824+00
2118	0	63	174	2021-01-26 23:06:20.949+00	2021-01-26 23:06:20.949+00
2119	1	63	175	2021-01-26 23:06:27.813+00	2021-01-26 23:06:27.813+00
2120	0	63	176	2021-01-26 23:06:36.005+00	2021-01-26 23:06:36.005+00
2121	0	63	177	2021-01-26 23:06:42.976+00	2021-01-26 23:06:42.976+00
2122	6	63	337	2021-01-26 23:09:07.174+00	2021-01-26 23:09:07.174+00
2123	3	63	338	2021-01-26 23:09:10.972+00	2021-01-26 23:09:10.972+00
2124	2	63	339	2021-01-26 23:09:14.602+00	2021-01-26 23:09:14.602+00
2125	5	63	340	2021-01-26 23:09:18.443+00	2021-01-26 23:09:18.443+00
2126	5	63	341	2021-01-26 23:09:23.076+00	2021-01-26 23:09:23.076+00
2127	6	63	342	2021-01-26 23:09:26.839+00	2021-01-26 23:09:26.839+00
2128	3	63	343	2021-01-26 23:09:30.688+00	2021-01-26 23:09:30.688+00
2129	4	63	344	2021-01-26 23:09:34.18+00	2021-01-26 23:09:34.18+00
2130	2	63	345	2021-01-26 23:09:38.008+00	2021-01-26 23:09:38.008+00
2131	5	63	346	2021-01-26 23:09:41.991+00	2021-01-26 23:09:41.991+00
2132	5	63	347	2021-01-26 23:09:45.659+00	2021-01-26 23:09:45.659+00
2133	2	63	348	2021-01-26 23:09:49.197+00	2021-01-26 23:09:49.197+00
2134	2	63	349	2021-01-26 23:09:52.838+00	2021-01-26 23:09:52.838+00
2135	5	63	350	2021-01-26 23:09:56.531+00	2021-01-26 23:09:56.531+00
2136	3	63	351	2021-01-26 23:10:00.021+00	2021-01-26 23:10:00.021+00
2137	5	63	352	2021-01-26 23:10:03.717+00	2021-01-26 23:10:03.717+00
2138	2	63	353	2021-01-26 23:10:07.413+00	2021-01-26 23:10:07.413+00
2139	4	63	354	2021-01-26 23:10:11.297+00	2021-01-26 23:10:11.297+00
2140	2	63	355	2021-01-26 23:10:14.749+00	2021-01-26 23:10:14.749+00
2141	4	63	356	2021-01-26 23:10:18.263+00	2021-01-26 23:10:18.263+00
2142	5	63	357	2021-01-26 23:10:22.355+00	2021-01-26 23:10:22.355+00
2143	8	63	358	2021-01-26 23:10:26.827+00	2021-01-26 23:10:26.827+00
2144	4	63	359	2021-01-26 23:10:31.115+00	2021-01-26 23:10:31.115+00
2145	2	63	360	2021-01-26 23:10:35.794+00	2021-01-26 23:10:35.794+00
2146	3	63	361	2021-01-26 23:10:40.015+00	2021-01-26 23:10:40.015+00
2147	6	63	362	2021-01-26 23:10:44.52+00	2021-01-26 23:10:44.52+00
2148	3	63	363	2021-01-26 23:10:49.007+00	2021-01-26 23:10:49.007+00
2149	6	63	364	2021-01-26 23:10:53.419+00	2021-01-26 23:10:53.419+00
2150	4	63	186	2021-01-26 23:12:44.151+00	2021-01-26 23:12:44.151+00
2151	3	63	187	2021-01-26 23:12:47.079+00	2021-01-26 23:12:47.079+00
2152	2	63	188	2021-01-26 23:12:50.074+00	2021-01-26 23:12:50.074+00
2153	2	63	189	2021-01-26 23:12:52.844+00	2021-01-26 23:12:52.844+00
2154	4	63	190	2021-01-26 23:12:55.778+00	2021-01-26 23:12:55.778+00
2155	3	63	191	2021-01-26 23:12:58.835+00	2021-01-26 23:12:58.835+00
2156	1	63	192	2021-01-26 23:13:01.529+00	2021-01-26 23:13:01.529+00
2157	4	63	193	2021-01-26 23:13:04.358+00	2021-01-26 23:13:04.358+00
2158	2	63	194	2021-01-26 23:13:07.145+00	2021-01-26 23:13:07.145+00
2159	3	63	195	2021-01-26 23:13:09.804+00	2021-01-26 23:13:09.804+00
2160	1	63	196	2021-01-26 23:13:12.858+00	2021-01-26 23:13:12.858+00
2161	4	63	197	2021-01-26 23:13:15.757+00	2021-01-26 23:13:15.757+00
2162	2	63	198	2021-01-26 23:13:18.722+00	2021-01-26 23:13:18.722+00
2163	3	63	199	2021-01-26 23:13:21.486+00	2021-01-26 23:13:21.486+00
2164	2	63	200	2021-01-26 23:13:24.297+00	2021-01-26 23:13:24.297+00
2165	1	63	201	2021-01-26 23:13:27.127+00	2021-01-26 23:13:27.127+00
2166	3	63	202	2021-01-26 23:13:29.768+00	2021-01-26 23:13:29.768+00
2167	1	63	203	2021-01-26 23:13:40.25+00	2021-01-26 23:13:40.25+00
2168	0	63	204	2021-01-26 23:13:46.779+00	2021-01-26 23:13:46.779+00
2169	0	63	205	2021-01-26 23:13:53.884+00	2021-01-26 23:13:53.884+00
2170	1	63	206	2021-01-26 23:14:17.056+00	2021-01-26 23:14:17.056+00
2171	100	65	332	2021-01-26 23:20:44.378+00	2021-01-26 23:20:44.378+00
2172	1	65	3	2021-01-26 23:20:50.085+00	2021-01-26 23:20:50.085+00
2173	1	65	4	2021-01-26 23:20:53.552+00	2021-01-26 23:20:53.552+00
2174	1	65	5	2021-01-26 23:20:57.361+00	2021-01-26 23:20:57.361+00
2175	1	65	6	2021-01-26 23:21:00.652+00	2021-01-26 23:21:00.652+00
2176	0	65	7	2021-01-26 23:21:03.992+00	2021-01-26 23:21:03.992+00
2177	0	65	8	2021-01-26 23:21:07.343+00	2021-01-26 23:21:07.343+00
2178	0	65	9	2021-01-26 23:21:10.946+00	2021-01-26 23:21:10.946+00
2179	1	65	10	2021-01-26 23:21:14.134+00	2021-01-26 23:21:14.134+00
2180	1	65	11	2021-01-26 23:21:17.291+00	2021-01-26 23:21:17.291+00
2181	1	65	12	2021-01-26 23:21:20.168+00	2021-01-26 23:21:20.168+00
2182	1	65	13	2021-01-26 23:21:23.421+00	2021-01-26 23:21:23.421+00
2183	0	65	14	2021-01-26 23:21:26.759+00	2021-01-26 23:21:26.759+00
2184	1	65	15	2021-01-26 23:21:30.442+00	2021-01-26 23:21:30.442+00
2185	1	65	16	2021-01-26 23:21:33.495+00	2021-01-26 23:21:33.495+00
2186	0	65	17	2021-01-26 23:21:36.971+00	2021-01-26 23:21:36.971+00
2187	1	65	18	2021-01-26 23:21:40.135+00	2021-01-26 23:21:40.135+00
2188	4	65	19	2021-01-26 23:21:47.824+00	2021-01-26 23:21:47.824+00
2189	3	65	20	2021-01-26 23:21:50.565+00	2021-01-26 23:21:50.565+00
2190	1	65	21	2021-01-26 23:21:53.896+00	2021-01-26 23:21:53.896+00
2191	4	65	22	2021-01-26 23:21:56.965+00	2021-01-26 23:21:56.965+00
2192	2	65	23	2021-01-26 23:22:01.096+00	2021-01-26 23:22:01.096+00
2193	3	65	24	2021-01-26 23:22:03.564+00	2021-01-26 23:22:03.564+00
2194	4	65	25	2021-01-26 23:22:05.961+00	2021-01-26 23:22:05.961+00
2195	1	65	26	2021-01-26 23:22:08.903+00	2021-01-26 23:22:08.903+00
2196	3	65	27	2021-01-26 23:22:11.319+00	2021-01-26 23:22:11.319+00
2197	4	65	28	2021-01-26 23:22:14.141+00	2021-01-26 23:22:14.141+00
2198	2	65	29	2021-01-26 23:22:17.192+00	2021-01-26 23:22:17.192+00
2199	1	65	30	2021-01-26 23:22:20.227+00	2021-01-26 23:22:20.227+00
2200	1	65	31	2021-01-26 23:22:22.756+00	2021-01-26 23:22:22.756+00
2201	3	65	32	2021-01-26 23:22:25.822+00	2021-01-26 23:22:25.822+00
2202	4	65	33	2021-01-26 23:22:28.3+00	2021-01-26 23:22:28.3+00
2203	3	65	34	2021-01-26 23:22:31.341+00	2021-01-26 23:22:31.341+00
2204	4	65	35	2021-01-26 23:22:34.085+00	2021-01-26 23:22:34.085+00
2205	2	65	36	2021-01-26 23:22:36.977+00	2021-01-26 23:22:36.977+00
2206	100	65	333	2021-01-26 23:37:22.252+00	2021-01-26 23:37:22.252+00
2207	3	65	37	2021-01-26 23:37:28.325+00	2021-01-26 23:37:28.325+00
2208	2	65	38	2021-01-26 23:37:31.839+00	2021-01-26 23:37:31.839+00
2209	3	65	39	2021-01-26 23:37:35.339+00	2021-01-26 23:37:35.339+00
2210	2	65	40	2021-01-26 23:37:38.906+00	2021-01-26 23:37:38.906+00
2211	3	65	41	2021-01-26 23:37:42.339+00	2021-01-26 23:37:42.339+00
2212	2	65	42	2021-01-26 23:37:45.844+00	2021-01-26 23:37:45.844+00
2213	3	65	43	2021-01-26 23:37:49.724+00	2021-01-26 23:37:49.724+00
2214	1	65	44	2021-01-26 23:37:53.169+00	2021-01-26 23:37:53.169+00
2215	4	65	45	2021-01-26 23:37:56.657+00	2021-01-26 23:37:56.657+00
2216	3	65	46	2021-01-26 23:38:00.053+00	2021-01-26 23:38:00.053+00
2217	2	65	47	2021-01-26 23:38:03.515+00	2021-01-26 23:38:03.515+00
2218	3	65	48	2021-01-26 23:38:06.941+00	2021-01-26 23:38:06.941+00
2219	3	65	49	2021-01-26 23:38:10.921+00	2021-01-26 23:38:10.921+00
2220	3	65	50	2021-01-26 23:38:14.762+00	2021-01-26 23:38:14.762+00
2221	2	65	51	2021-01-26 23:38:18.6+00	2021-01-26 23:38:18.6+00
2222	4	65	52	2021-01-26 23:38:24.567+00	2021-01-26 23:38:24.567+00
2223	2	65	53	2021-01-26 23:38:28.709+00	2021-01-26 23:38:28.709+00
2224	3	65	54	2021-01-26 23:38:32.716+00	2021-01-26 23:38:32.716+00
2225	3	65	55	2021-01-26 23:38:36.609+00	2021-01-26 23:38:36.609+00
2226	3	65	56	2021-01-26 23:38:40.75+00	2021-01-26 23:38:40.75+00
2227	2	65	57	2021-01-26 23:38:44.797+00	2021-01-26 23:38:44.797+00
2228	4	65	58	2021-01-26 23:38:48.806+00	2021-01-26 23:38:48.806+00
2229	3	65	59	2021-01-26 23:38:53.39+00	2021-01-26 23:38:53.39+00
2230	100	65	334	2021-01-26 23:41:11.683+00	2021-01-26 23:41:11.683+00
2231	1	65	60	2021-01-26 23:41:17.38+00	2021-01-26 23:41:17.38+00
2232	1	65	61	2021-01-26 23:41:20.389+00	2021-01-26 23:41:20.389+00
2233	0	65	62	2021-01-26 23:41:23.687+00	2021-01-26 23:41:23.687+00
2234	1	65	63	2021-01-26 23:41:26.842+00	2021-01-26 23:41:26.842+00
2235	1	65	64	2021-01-26 23:41:30.235+00	2021-01-26 23:41:30.235+00
2236	0	65	65	2021-01-26 23:41:33.585+00	2021-01-26 23:41:33.585+00
2237	1	65	66	2021-01-26 23:41:37.46+00	2021-01-26 23:41:37.46+00
2238	1	65	67	2021-01-26 23:41:40.661+00	2021-01-26 23:41:40.661+00
2239	1	65	68	2021-01-26 23:41:43.551+00	2021-01-26 23:41:43.551+00
2240	1	65	69	2021-01-26 23:41:46.605+00	2021-01-26 23:41:46.605+00
2241	1	65	70	2021-01-26 23:41:49.533+00	2021-01-26 23:41:49.533+00
2242	1	65	71	2021-01-26 23:41:52.611+00	2021-01-26 23:41:52.611+00
2243	4	65	72	2021-01-26 23:41:58.245+00	2021-01-26 23:41:58.245+00
2244	1	65	73	2021-01-26 23:42:01.408+00	2021-01-26 23:42:01.408+00
2245	3	65	74	2021-01-26 23:42:04.518+00	2021-01-26 23:42:04.518+00
2246	2	65	75	2021-01-26 23:42:07.365+00	2021-01-26 23:42:07.365+00
2247	3	65	76	2021-01-26 23:42:10.187+00	2021-01-26 23:42:10.187+00
2248	1	65	77	2021-01-26 23:42:13.324+00	2021-01-26 23:42:13.324+00
2249	3	65	78	2021-01-26 23:42:16.193+00	2021-01-26 23:42:16.193+00
2250	2	65	79	2021-01-26 23:42:19.248+00	2021-01-26 23:42:19.248+00
2251	4	65	80	2021-01-26 23:42:22.321+00	2021-01-26 23:42:22.321+00
2252	2	65	81	2021-01-26 23:42:24.938+00	2021-01-26 23:42:24.938+00
2253	3	65	82	2021-01-26 23:42:32.141+00	2021-01-26 23:42:32.141+00
2254	3	65	83	2021-01-26 23:42:35.906+00	2021-01-26 23:42:35.906+00
2255	2	65	84	2021-01-26 23:42:39.738+00	2021-01-26 23:42:39.738+00
2256	2	65	85	2021-01-26 23:42:43.369+00	2021-01-26 23:42:43.369+00
2257	3	65	86	2021-01-26 23:42:47.218+00	2021-01-26 23:42:47.218+00
2258	2	65	87	2021-01-26 23:42:50.897+00	2021-01-26 23:42:50.897+00
2259	3	65	88	2021-01-26 23:42:55.292+00	2021-01-26 23:42:55.292+00
2260	4	65	89	2021-01-26 23:42:58.82+00	2021-01-26 23:42:58.82+00
2261	3	65	90	2021-01-26 23:43:02.465+00	2021-01-26 23:43:02.465+00
2262	100	65	335	2021-01-26 23:45:12.325+00	2021-01-26 23:45:12.325+00
2263	1	65	91	2021-01-26 23:45:17.577+00	2021-01-26 23:45:17.577+00
2264	1	65	92	2021-01-26 23:45:20.329+00	2021-01-26 23:45:20.329+00
2265	0	65	93	2021-01-26 23:45:23.089+00	2021-01-26 23:45:23.089+00
2266	0	65	94	2021-01-26 23:45:26.302+00	2021-01-26 23:45:26.302+00
2267	1	65	95	2021-01-26 23:45:29.412+00	2021-01-26 23:45:29.412+00
2268	0	65	96	2021-01-26 23:45:32.593+00	2021-01-26 23:45:32.593+00
2269	0	65	97	2021-01-26 23:45:35.846+00	2021-01-26 23:45:35.846+00
2270	1	65	98	2021-01-26 23:45:38.895+00	2021-01-26 23:45:38.895+00
2271	1	65	99	2021-01-26 23:45:41.563+00	2021-01-26 23:45:41.563+00
2272	1	65	100	2021-01-26 23:45:44.263+00	2021-01-26 23:45:44.263+00
2273	1	65	101	2021-01-26 23:45:47.173+00	2021-01-26 23:45:47.173+00
2274	1	65	102	2021-01-26 23:45:49.954+00	2021-01-26 23:45:49.954+00
2275	1	65	103	2021-01-26 23:45:52.648+00	2021-01-26 23:45:52.648+00
2276	1	65	104	2021-01-26 23:45:55.572+00	2021-01-26 23:45:55.572+00
2277	0	65	105	2021-01-26 23:45:58.6+00	2021-01-26 23:45:58.6+00
2278	1	65	106	2021-01-26 23:46:01.535+00	2021-01-26 23:46:01.535+00
2279	0	65	107	2021-01-26 23:46:04.538+00	2021-01-26 23:46:04.538+00
2280	0	65	108	2021-01-26 23:46:07.302+00	2021-01-26 23:46:07.302+00
2281	1	65	109	2021-01-26 23:46:10.321+00	2021-01-26 23:46:10.321+00
2282	1	65	110	2021-01-26 23:46:16.515+00	2021-01-26 23:46:16.515+00
2283	1	65	111	2021-01-26 23:46:18.916+00	2021-01-26 23:46:18.916+00
2284	2	65	112	2021-01-26 23:46:22.004+00	2021-01-26 23:46:22.004+00
2285	1	65	113	2021-01-26 23:46:24.602+00	2021-01-26 23:46:24.602+00
2286	1	65	114	2021-01-26 23:46:27.145+00	2021-01-26 23:46:27.145+00
2287	4	65	115	2021-01-26 23:46:30.551+00	2021-01-26 23:46:30.551+00
2288	3	65	116	2021-01-26 23:46:33.622+00	2021-01-26 23:46:33.622+00
2289	2	65	117	2021-01-26 23:46:36.762+00	2021-01-26 23:46:36.762+00
2290	2	65	118	2021-01-26 23:46:39.779+00	2021-01-26 23:46:39.779+00
2291	1	65	119	2021-01-26 23:46:42.599+00	2021-01-26 23:46:42.599+00
2292	100	65	336	2021-01-26 23:48:05.324+00	2021-01-26 23:48:05.324+00
2293	1	65	120	2021-01-26 23:48:09.964+00	2021-01-26 23:48:09.964+00
2294	0	65	121	2021-01-26 23:48:12.723+00	2021-01-26 23:48:12.723+00
2295	0	65	122	2021-01-26 23:48:15.105+00	2021-01-26 23:48:15.105+00
2296	1	65	123	2021-01-26 23:48:17.679+00	2021-01-26 23:48:17.679+00
2297	0	65	124	2021-01-26 23:48:20.472+00	2021-01-26 23:48:20.472+00
2298	0	65	125	2021-01-26 23:48:22.934+00	2021-01-26 23:48:22.934+00
2299	1	65	126	2021-01-26 23:48:25.985+00	2021-01-26 23:48:25.985+00
2300	1	65	127	2021-01-26 23:48:28.251+00	2021-01-26 23:48:28.251+00
2301	1	65	128	2021-01-26 23:48:30.547+00	2021-01-26 23:48:30.547+00
2302	1	65	129	2021-01-26 23:48:33.206+00	2021-01-26 23:48:33.206+00
2303	0	65	130	2021-01-26 23:48:36.095+00	2021-01-26 23:48:36.095+00
2304	0	65	131	2021-01-26 23:48:38.471+00	2021-01-26 23:48:38.471+00
2305	0	65	132	2021-01-26 23:48:40.656+00	2021-01-26 23:48:40.656+00
2306	0	65	133	2021-01-26 23:48:42.915+00	2021-01-26 23:48:42.915+00
2307	1	65	134	2021-01-26 23:48:45.738+00	2021-01-26 23:48:45.738+00
2308	1	65	135	2021-01-26 23:48:48.04+00	2021-01-26 23:48:48.04+00
2309	2	65	136	2021-01-26 23:48:54.167+00	2021-01-26 23:48:54.167+00
2310	5	65	137	2021-01-26 23:48:56.908+00	2021-01-26 23:48:56.908+00
2311	3	65	138	2021-01-26 23:48:59.713+00	2021-01-26 23:48:59.713+00
2312	5	65	139	2021-01-26 23:49:03.599+00	2021-01-26 23:49:03.599+00
2313	4	65	140	2021-01-26 23:49:06.846+00	2021-01-26 23:49:06.846+00
2314	4	65	141	2021-01-26 23:49:10.537+00	2021-01-26 23:49:10.537+00
2315	5	65	142	2021-01-26 23:49:13.313+00	2021-01-26 23:49:13.313+00
2316	4	65	143	2021-01-26 23:49:16.369+00	2021-01-26 23:49:16.369+00
2317	3	65	144	2021-01-26 23:49:19.461+00	2021-01-26 23:49:19.461+00
2318	5	65	145	2021-01-26 23:49:22.342+00	2021-01-26 23:49:22.342+00
2319	2	65	146	2021-01-26 23:49:25.413+00	2021-01-26 23:49:25.413+00
2320	2	65	147	2021-01-26 23:49:28.608+00	2021-01-26 23:49:28.608+00
2321	2	65	148	2021-01-26 23:49:31.283+00	2021-01-26 23:49:31.283+00
2322	2	65	149	2021-01-26 23:49:33.926+00	2021-01-26 23:49:33.926+00
2323	5	65	150	2021-01-26 23:49:36.785+00	2021-01-26 23:49:36.785+00
2324	1	65	151	2021-01-26 23:51:00.264+00	2021-01-26 23:51:00.264+00
2325	1	65	152	2021-01-26 23:51:04.437+00	2021-01-26 23:51:04.437+00
2326	1	65	153	2021-01-26 23:51:08.534+00	2021-01-26 23:51:08.534+00
2327	0	65	154	2021-01-26 23:51:12.809+00	2021-01-26 23:51:12.809+00
2328	1	65	155	2021-01-26 23:51:17.04+00	2021-01-26 23:51:17.04+00
2329	0	65	156	2021-01-26 23:51:21.193+00	2021-01-26 23:51:21.193+00
2330	0	65	157	2021-01-26 23:51:26.389+00	2021-01-26 23:51:26.389+00
2331	1	65	158	2021-01-26 23:51:30.562+00	2021-01-26 23:51:30.562+00
2332	2	65	159	2021-01-26 23:51:42.779+00	2021-01-26 23:51:42.779+00
2333	3	65	160	2021-01-26 23:51:51.683+00	2021-01-26 23:51:51.683+00
2334	2	65	161	2021-01-26 23:52:00.586+00	2021-01-26 23:52:00.586+00
2335	1	65	162	2021-01-26 23:52:09.841+00	2021-01-26 23:52:09.841+00
2336	1	65	163	2021-01-26 23:52:19.226+00	2021-01-26 23:52:19.226+00
2337	1	65	164	2021-01-26 23:52:26.279+00	2021-01-26 23:52:26.279+00
2338	1	65	165	2021-01-26 23:52:29.419+00	2021-01-26 23:52:29.419+00
2339	1	65	166	2021-01-26 23:52:32.686+00	2021-01-26 23:52:32.686+00
2340	0	65	167	2021-01-26 23:52:36.187+00	2021-01-26 23:52:36.187+00
2341	1	65	168	2021-01-26 23:52:39.417+00	2021-01-26 23:52:39.417+00
2342	0	65	169	2021-01-26 23:52:42.81+00	2021-01-26 23:52:42.81+00
2343	1	65	170	2021-01-26 23:52:46.266+00	2021-01-26 23:52:46.266+00
2344	0	65	171	2021-01-26 23:52:49.332+00	2021-01-26 23:52:49.332+00
2345	1	65	172	2021-01-26 23:52:52.585+00	2021-01-26 23:52:52.585+00
2346	1	65	173	2021-01-26 23:52:56.146+00	2021-01-26 23:52:56.146+00
2347	1	65	174	2021-01-26 23:53:06.304+00	2021-01-26 23:53:06.304+00
2348	0	65	175	2021-01-26 23:53:13.005+00	2021-01-26 23:53:13.005+00
2349	1	65	176	2021-01-26 23:53:20.001+00	2021-01-26 23:53:20.001+00
2350	1	65	177	2021-01-26 23:53:26.769+00	2021-01-26 23:53:26.769+00
2351	6	65	337	2021-01-27 00:00:08.898+00	2021-01-27 00:00:08.898+00
2352	3	65	338	2021-01-27 00:00:12.388+00	2021-01-27 00:00:12.388+00
2353	2	65	339	2021-01-27 00:00:16.009+00	2021-01-27 00:00:16.009+00
2354	3	65	340	2021-01-27 00:00:19.612+00	2021-01-27 00:00:19.612+00
2355	6	65	341	2021-01-27 00:00:23.591+00	2021-01-27 00:00:23.591+00
2356	3	65	342	2021-01-27 00:00:27.269+00	2021-01-27 00:00:27.269+00
2357	4	65	343	2021-01-27 00:00:30.737+00	2021-01-27 00:00:30.737+00
2358	2	65	344	2021-01-27 00:00:34.527+00	2021-01-27 00:00:34.527+00
2359	3	65	345	2021-01-27 00:00:38.276+00	2021-01-27 00:00:38.276+00
2360	3	65	346	2021-01-27 00:00:41.785+00	2021-01-27 00:00:41.785+00
2361	5	65	347	2021-01-27 00:00:45.396+00	2021-01-27 00:00:45.396+00
2362	5	65	348	2021-01-27 00:00:48.9+00	2021-01-27 00:00:48.9+00
2363	3	65	349	2021-01-27 00:00:52.309+00	2021-01-27 00:00:52.309+00
2364	5	65	350	2021-01-27 00:00:56.006+00	2021-01-27 00:00:56.006+00
2365	3	65	351	2021-01-27 00:00:59.525+00	2021-01-27 00:00:59.525+00
2366	5	65	352	2021-01-27 00:01:03.335+00	2021-01-27 00:01:03.335+00
2367	2	65	353	2021-01-27 00:01:07.034+00	2021-01-27 00:01:07.034+00
2368	5	65	354	2021-01-27 00:01:10.738+00	2021-01-27 00:01:10.738+00
2369	5	65	355	2021-01-27 00:01:14.463+00	2021-01-27 00:01:14.463+00
2370	5	65	356	2021-01-27 00:01:18.312+00	2021-01-27 00:01:18.312+00
2371	7	65	357	2021-01-27 00:01:22.907+00	2021-01-27 00:01:22.907+00
2372	5	65	358	2021-01-27 00:01:27.29+00	2021-01-27 00:01:27.29+00
2373	4	65	359	2021-01-27 00:01:31.702+00	2021-01-27 00:01:31.702+00
2374	8	65	360	2021-01-27 00:01:36.59+00	2021-01-27 00:01:36.59+00
2375	4	65	361	2021-01-27 00:01:41.166+00	2021-01-27 00:01:41.166+00
2376	5	65	362	2021-01-27 00:01:45.271+00	2021-01-27 00:01:45.271+00
2377	8	65	363	2021-01-27 00:01:49.996+00	2021-01-27 00:01:49.996+00
2378	5	65	364	2021-01-27 00:01:54.151+00	2021-01-27 00:01:54.151+00
2379	2	65	186	2021-01-27 00:03:30.598+00	2021-01-27 00:03:30.598+00
2380	3	65	187	2021-01-27 00:03:33.553+00	2021-01-27 00:03:33.553+00
2381	4	65	188	2021-01-27 00:03:36.153+00	2021-01-27 00:03:36.153+00
2382	2	65	189	2021-01-27 00:03:38.929+00	2021-01-27 00:03:38.929+00
2383	1	65	190	2021-01-27 00:03:41.358+00	2021-01-27 00:03:41.358+00
2384	3	65	191	2021-01-27 00:03:43.723+00	2021-01-27 00:03:43.723+00
2385	2	65	192	2021-01-27 00:03:46.209+00	2021-01-27 00:03:46.209+00
2386	4	65	193	2021-01-27 00:03:49.008+00	2021-01-27 00:03:49.008+00
2387	1	65	194	2021-01-27 00:03:51.836+00	2021-01-27 00:03:51.836+00
2388	3	65	195	2021-01-27 00:03:54.691+00	2021-01-27 00:03:54.691+00
2389	2	65	196	2021-01-27 00:03:57.565+00	2021-01-27 00:03:57.565+00
2390	4	65	197	2021-01-27 00:04:00.525+00	2021-01-27 00:04:00.525+00
2391	1	65	198	2021-01-27 00:04:03.022+00	2021-01-27 00:04:03.022+00
2392	3	65	199	2021-01-27 00:04:05.766+00	2021-01-27 00:04:05.766+00
2393	2	65	200	2021-01-27 00:04:08.254+00	2021-01-27 00:04:08.254+00
2394	1	65	201	2021-01-27 00:04:11.085+00	2021-01-27 00:04:11.085+00
2395	3	65	202	2021-01-27 00:04:13.726+00	2021-01-27 00:04:13.726+00
2396	0	65	203	2021-01-27 00:04:24.442+00	2021-01-27 00:04:24.442+00
2397	0	65	204	2021-01-27 00:04:31.474+00	2021-01-27 00:04:31.474+00
2398	0	65	205	2021-01-27 00:04:38.352+00	2021-01-27 00:04:38.352+00
2399	0	65	206	2021-01-27 00:04:45.707+00	2021-01-27 00:04:45.707+00
2400	4	65	208	2021-01-27 00:05:55.558+00	2021-01-27 00:05:55.558+00
2401	1	65	209	2021-01-27 00:05:58.739+00	2021-01-27 00:05:58.739+00
2402	2	65	210	2021-01-27 00:06:01.511+00	2021-01-27 00:06:01.511+00
2403	3	65	211	2021-01-27 00:06:04.702+00	2021-01-27 00:06:04.702+00
2404	5	65	212	2021-01-27 00:06:07.88+00	2021-01-27 00:06:07.88+00
2405	5	65	213	2021-01-27 00:06:10.808+00	2021-01-27 00:06:10.808+00
2406	2	65	214	2021-01-27 00:06:13.87+00	2021-01-27 00:06:13.87+00
2407	5	65	215	2021-01-27 00:06:16.913+00	2021-01-27 00:06:16.913+00
2408	4	65	216	2021-01-27 00:06:19.688+00	2021-01-27 00:06:19.688+00
2409	4	65	217	2021-01-27 00:06:22.852+00	2021-01-27 00:06:22.852+00
2410	6	65	218	2021-01-27 00:06:25.691+00	2021-01-27 00:06:25.691+00
2411	1	65	219	2021-01-27 00:06:28.521+00	2021-01-27 00:06:28.521+00
2412	4	65	220	2021-01-27 00:06:31.572+00	2021-01-27 00:06:31.572+00
2413	5	65	221	2021-01-27 00:06:34.317+00	2021-01-27 00:06:34.317+00
2414	3	65	222	2021-01-27 00:06:37.749+00	2021-01-27 00:06:37.749+00
2415	4	65	223	2021-01-27 00:06:41.162+00	2021-01-27 00:06:41.162+00
2416	4	65	224	2021-01-27 00:06:44.208+00	2021-01-27 00:06:44.208+00
2417	1	65	225	2021-01-27 00:06:47.172+00	2021-01-27 00:06:47.172+00
2418	6	65	226	2021-01-27 00:06:50.404+00	2021-01-27 00:06:50.404+00
2419	4	65	227	2021-01-27 00:06:53.706+00	2021-01-27 00:06:53.706+00
2420	3	65	228	2021-01-27 00:06:56.602+00	2021-01-27 00:06:56.602+00
2421	4	65	229	2021-01-27 00:06:59.81+00	2021-01-27 00:06:59.81+00
2422	6	65	230	2021-01-27 00:07:03.078+00	2021-01-27 00:07:03.078+00
2423	1	65	231	2021-01-27 00:07:06.387+00	2021-01-27 00:07:06.387+00
2424	4	65	232	2021-01-27 00:07:09.339+00	2021-01-27 00:07:09.339+00
2425	4	65	233	2021-01-27 00:07:12.413+00	2021-01-27 00:07:12.413+00
2426	5	65	234	2021-01-27 00:07:15.655+00	2021-01-27 00:07:15.655+00
2427	6	65	235	2021-01-27 00:07:18.669+00	2021-01-27 00:07:18.669+00
2428	5	65	236	2021-01-27 00:07:21.616+00	2021-01-27 00:07:21.616+00
2429	1	65	237	2021-01-27 00:07:24.674+00	2021-01-27 00:07:24.674+00
2430	6	65	238	2021-01-27 00:07:27.531+00	2021-01-27 00:07:27.531+00
2431	3	65	239	2021-01-27 00:07:30.683+00	2021-01-27 00:07:30.683+00
2432	4	65	240	2021-01-27 00:07:33.585+00	2021-01-27 00:07:33.585+00
2433	5	66	208	2021-01-27 11:03:28.276+00	2021-01-27 11:03:28.276+00
2434	1	66	209	2021-01-27 11:03:30.992+00	2021-01-27 11:03:30.992+00
2435	3	66	210	2021-01-27 11:03:33.942+00	2021-01-27 11:03:33.942+00
2436	5	66	211	2021-01-27 11:03:36.821+00	2021-01-27 11:03:36.821+00
2437	5	66	212	2021-01-27 11:03:39.803+00	2021-01-27 11:03:39.803+00
2438	4	66	213	2021-01-27 11:03:42.49+00	2021-01-27 11:03:42.49+00
2439	3	66	214	2021-01-27 11:03:45.811+00	2021-01-27 11:03:45.811+00
2440	6	66	215	2021-01-27 11:03:48.579+00	2021-01-27 11:03:48.579+00
2441	4	66	216	2021-01-27 11:03:51.31+00	2021-01-27 11:03:51.31+00
2442	4	66	217	2021-01-27 11:03:54.076+00	2021-01-27 11:03:54.076+00
2443	6	66	218	2021-01-27 11:03:56.896+00	2021-01-27 11:03:56.896+00
2444	3	66	219	2021-01-27 11:04:00.186+00	2021-01-27 11:04:00.186+00
2445	5	66	220	2021-01-27 11:04:03.228+00	2021-01-27 11:04:03.228+00
2446	6	66	221	2021-01-27 11:04:06.49+00	2021-01-27 11:04:06.49+00
2447	4	66	222	2021-01-27 11:04:09.654+00	2021-01-27 11:04:09.654+00
2448	5	66	223	2021-01-27 11:04:12.943+00	2021-01-27 11:04:12.943+00
2449	6	66	224	2021-01-27 11:04:16.031+00	2021-01-27 11:04:16.031+00
2450	5	66	225	2021-01-27 11:04:19.173+00	2021-01-27 11:04:19.173+00
2451	2	66	226	2021-01-27 11:04:22.218+00	2021-01-27 11:04:22.218+00
2452	6	66	227	2021-01-27 11:04:25.352+00	2021-01-27 11:04:25.352+00
2453	4	66	228	2021-01-27 11:04:28.245+00	2021-01-27 11:04:28.245+00
2454	2	66	229	2021-01-27 11:04:31.151+00	2021-01-27 11:04:31.151+00
2455	4	66	230	2021-01-27 11:04:34.798+00	2021-01-27 11:04:34.798+00
2456	6	66	231	2021-01-27 11:04:37.815+00	2021-01-27 11:04:37.815+00
2457	5	66	232	2021-01-27 11:04:40.662+00	2021-01-27 11:04:40.662+00
2458	5	66	233	2021-01-27 11:04:43.617+00	2021-01-27 11:04:43.617+00
2459	2	66	234	2021-01-27 11:04:46.558+00	2021-01-27 11:04:46.558+00
2460	4	66	235	2021-01-27 11:04:49.467+00	2021-01-27 11:04:49.467+00
2461	6	66	236	2021-01-27 11:04:52.448+00	2021-01-27 11:04:52.448+00
2462	5	66	237	2021-01-27 11:04:55.355+00	2021-01-27 11:04:55.355+00
2463	6	66	238	2021-01-27 11:04:58.124+00	2021-01-27 11:04:58.124+00
2464	6	66	239	2021-01-27 11:05:00.764+00	2021-01-27 11:05:00.764+00
2465	4	66	240	2021-01-27 11:05:03.5+00	2021-01-27 11:05:03.5+00
2466	2	66	286	2021-01-27 11:09:45.787+00	2021-01-27 11:09:45.787+00
2467	3	66	287	2021-01-27 11:09:48.466+00	2021-01-27 11:09:48.466+00
2468	2	66	288	2021-01-27 11:09:51.101+00	2021-01-27 11:09:51.101+00
2469	1	66	289	2021-01-27 11:09:53.809+00	2021-01-27 11:09:53.809+00
2470	3	66	290	2021-01-27 11:09:56.312+00	2021-01-27 11:09:56.312+00
2471	1	66	291	2021-01-27 11:09:58.962+00	2021-01-27 11:09:58.962+00
2472	2	66	292	2021-01-27 11:10:01.536+00	2021-01-27 11:10:01.536+00
2473	1	66	293	2021-01-27 11:10:04.809+00	2021-01-27 11:10:04.809+00
2474	1	66	294	2021-01-27 11:10:07.5+00	2021-01-27 11:10:07.5+00
2475	1	66	295	2021-01-27 11:10:10.382+00	2021-01-27 11:10:10.382+00
2476	3	66	296	2021-01-27 11:10:13.219+00	2021-01-27 11:10:13.219+00
2477	4	66	297	2021-01-27 11:10:15.885+00	2021-01-27 11:10:15.885+00
2478	2	66	298	2021-01-27 11:10:18.549+00	2021-01-27 11:10:18.549+00
2479	2	66	299	2021-01-27 11:10:21.182+00	2021-01-27 11:10:21.182+00
2480	1	66	300	2021-01-27 11:10:24.131+00	2021-01-27 11:10:24.131+00
2481	3	66	301	2021-01-27 11:10:26.383+00	2021-01-27 11:10:26.383+00
2482	4	66	302	2021-01-27 11:10:28.842+00	2021-01-27 11:10:28.842+00
2483	1	66	303	2021-01-27 11:10:31.551+00	2021-01-27 11:10:31.551+00
2484	2	66	304	2021-01-27 11:10:34.137+00	2021-01-27 11:10:34.137+00
2485	3	66	305	2021-01-27 11:10:36.512+00	2021-01-27 11:10:36.512+00
2486	1	66	306	2021-01-27 11:10:39.232+00	2021-01-27 11:10:39.232+00
2487	3	66	307	2021-01-27 11:10:41.853+00	2021-01-27 11:10:41.853+00
2488	3	66	308	2021-01-27 11:10:44.149+00	2021-01-27 11:10:44.149+00
2489	1	66	309	2021-01-27 11:10:47.147+00	2021-01-27 11:10:47.147+00
2490	5	66	310	2021-01-27 11:10:49.952+00	2021-01-27 11:10:49.952+00
2491	4	66	311	2021-01-27 11:10:52.541+00	2021-01-27 11:10:52.541+00
2492	2	66	312	2021-01-27 11:10:55.616+00	2021-01-27 11:10:55.616+00
2493	3	66	313	2021-01-27 11:10:58.262+00	2021-01-27 11:10:58.262+00
2494	3	66	314	2021-01-27 11:11:00.754+00	2021-01-27 11:11:00.754+00
2495	2	66	315	2021-01-27 11:11:03.431+00	2021-01-27 11:11:03.431+00
2496	3	66	316	2021-01-27 11:11:06.008+00	2021-01-27 11:11:06.008+00
2497	6	66	317	2021-01-27 11:11:09.255+00	2021-01-27 11:11:09.255+00
2498	3	66	318	2021-01-27 11:11:12.25+00	2021-01-27 11:11:12.25+00
2499	3	66	319	2021-01-27 11:11:14.835+00	2021-01-27 11:11:14.835+00
2500	5	66	320	2021-01-27 11:11:17.548+00	2021-01-27 11:11:17.548+00
2501	2	66	321	2021-01-27 11:11:20.562+00	2021-01-27 11:11:20.562+00
2502	5	66	322	2021-01-27 11:11:27.319+00	2021-01-27 11:11:27.319+00
2503	0	66	207	2021-01-27 11:12:36.624+00	2021-01-27 11:12:36.624+00
2504	0	66	241	2021-01-27 11:12:51.199+00	2021-01-27 11:12:51.199+00
2505	6	50	208	2021-01-27 17:36:21.245+00	2021-01-27 17:36:21.245+00
2506	4	50	209	2021-01-27 17:36:24.686+00	2021-01-27 17:36:24.686+00
2507	2	50	210	2021-01-27 17:36:28.548+00	2021-01-27 17:36:28.548+00
2508	2	50	211	2021-01-27 17:36:31.494+00	2021-01-27 17:36:31.494+00
2509	5	50	212	2021-01-27 17:36:34.642+00	2021-01-27 17:36:34.642+00
2510	6	50	213	2021-01-27 17:36:37.858+00	2021-01-27 17:36:37.858+00
2511	2	50	214	2021-01-27 17:36:41.261+00	2021-01-27 17:36:41.261+00
2512	6	50	215	2021-01-27 17:36:44.779+00	2021-01-27 17:36:44.779+00
2513	1	50	216	2021-01-27 17:36:48.122+00	2021-01-27 17:36:48.122+00
2514	4	50	217	2021-01-27 17:36:51.326+00	2021-01-27 17:36:51.326+00
2515	5	50	218	2021-01-27 17:36:54.696+00	2021-01-27 17:36:54.696+00
2516	1	50	219	2021-01-27 17:36:58.722+00	2021-01-27 17:36:58.722+00
2517	1	50	220	2021-01-27 17:37:07.162+00	2021-01-27 17:37:07.162+00
2518	1	50	221	2021-01-27 17:37:10.368+00	2021-01-27 17:37:10.368+00
2519	4	50	222	2021-01-27 17:37:14.042+00	2021-01-27 17:37:14.042+00
2520	4	50	223	2021-01-27 17:37:17.147+00	2021-01-27 17:37:17.147+00
2521	2	50	224	2021-01-27 17:37:21.226+00	2021-01-27 17:37:21.226+00
2522	6	50	225	2021-01-27 17:37:24.509+00	2021-01-27 17:37:24.509+00
2523	2	50	226	2021-01-27 17:37:27.995+00	2021-01-27 17:37:27.995+00
2524	6	50	227	2021-01-27 17:37:31.695+00	2021-01-27 17:37:31.695+00
2525	4	50	228	2021-01-27 17:37:34.704+00	2021-01-27 17:37:34.704+00
2526	2	50	229	2021-01-27 17:37:37.844+00	2021-01-27 17:37:37.844+00
2527	4	50	230	2021-01-27 17:37:41.108+00	2021-01-27 17:37:41.108+00
2528	3	50	231	2021-01-27 17:37:44.329+00	2021-01-27 17:37:44.329+00
2529	3	50	232	2021-01-27 17:37:48.677+00	2021-01-27 17:37:48.677+00
2530	6	50	233	2021-01-27 17:37:52.522+00	2021-01-27 17:37:52.522+00
2531	2	50	234	2021-01-27 17:37:55.662+00	2021-01-27 17:37:55.662+00
2532	3	50	235	2021-01-27 17:38:04.641+00	2021-01-27 17:38:04.641+00
2533	6	50	236	2021-01-27 17:38:08.222+00	2021-01-27 17:38:08.222+00
2534	1	50	237	2021-01-27 17:38:11.585+00	2021-01-27 17:38:11.585+00
2535	6	50	238	2021-01-27 17:38:14.889+00	2021-01-27 17:38:14.889+00
2536	2	50	239	2021-01-27 17:38:18.022+00	2021-01-27 17:38:18.022+00
2537	4	50	240	2021-01-27 17:38:21.151+00	2021-01-27 17:38:21.151+00
2538	1	50	242	2021-01-27 18:07:12.497+00	2021-01-27 18:07:12.497+00
2539	0	50	243	2021-01-27 18:07:15.476+00	2021-01-27 18:07:15.476+00
2540	0	50	244	2021-01-27 18:07:18.547+00	2021-01-27 18:07:18.547+00
2541	1	50	245	2021-01-27 18:07:21.649+00	2021-01-27 18:07:21.649+00
2542	0	50	246	2021-01-27 18:07:24.77+00	2021-01-27 18:07:24.77+00
2543	1	50	247	2021-01-27 18:07:27.963+00	2021-01-27 18:07:27.963+00
2544	1	50	248	2021-01-27 18:07:31.673+00	2021-01-27 18:07:31.673+00
2545	0	50	249	2021-01-27 18:07:35.601+00	2021-01-27 18:07:35.601+00
2546	1	50	250	2021-01-27 18:07:38.929+00	2021-01-27 18:07:38.929+00
2547	1	50	251	2021-01-27 18:07:42.276+00	2021-01-27 18:07:42.276+00
2548	1	50	252	2021-01-27 18:07:46.105+00	2021-01-27 18:07:46.105+00
2549	1	50	253	2021-01-27 18:07:49.065+00	2021-01-27 18:07:49.065+00
2550	0	50	254	2021-01-27 18:07:52.331+00	2021-01-27 18:07:52.331+00
2551	1	50	255	2021-01-27 18:07:55.469+00	2021-01-27 18:07:55.469+00
2552	1	50	256	2021-01-27 18:07:58.789+00	2021-01-27 18:07:58.789+00
2553	1	50	257	2021-01-27 18:08:02.482+00	2021-01-27 18:08:02.482+00
2554	1	50	258	2021-01-27 18:08:06.382+00	2021-01-27 18:08:06.382+00
2555	1	50	259	2021-01-27 18:08:10.355+00	2021-01-27 18:08:10.355+00
2556	0	50	260	2021-01-27 18:08:14.16+00	2021-01-27 18:08:14.16+00
2557	1	50	261	2021-01-27 18:08:17.312+00	2021-01-27 18:08:17.312+00
2558	1	50	262	2021-01-27 18:08:20.618+00	2021-01-27 18:08:20.618+00
2559	1	50	263	2021-01-27 18:08:24.043+00	2021-01-27 18:08:24.043+00
2560	0	50	264	2021-01-27 18:08:27.742+00	2021-01-27 18:08:27.742+00
2561	0	50	265	2021-01-27 18:08:31.444+00	2021-01-27 18:08:31.444+00
2562	1	50	266	2021-01-27 18:08:34.973+00	2021-01-27 18:08:34.973+00
2563	0	50	267	2021-01-27 18:08:38.64+00	2021-01-27 18:08:38.64+00
2564	0	50	268	2021-01-27 18:08:41.856+00	2021-01-27 18:08:41.856+00
2565	1	50	269	2021-01-27 18:08:45.258+00	2021-01-27 18:08:45.258+00
2566	1	50	270	2021-01-27 18:08:48.477+00	2021-01-27 18:08:48.477+00
2567	1	50	271	2021-01-27 18:08:52.576+00	2021-01-27 18:08:52.576+00
2568	1	50	272	2021-01-27 18:08:56.972+00	2021-01-27 18:08:56.972+00
2569	0	50	273	2021-01-27 18:09:01.264+00	2021-01-27 18:09:01.264+00
2570	0	50	274	2021-01-27 18:09:05.155+00	2021-01-27 18:09:05.155+00
2571	1	50	275	2021-01-27 18:09:08.749+00	2021-01-27 18:09:08.749+00
2572	1	50	276	2021-01-27 18:09:12.235+00	2021-01-27 18:09:12.235+00
2573	1	50	277	2021-01-27 18:09:15.79+00	2021-01-27 18:09:15.79+00
2574	1	50	278	2021-01-27 18:09:19.597+00	2021-01-27 18:09:19.597+00
2575	1	50	279	2021-01-27 18:09:23.319+00	2021-01-27 18:09:23.319+00
2576	1	50	280	2021-01-27 18:09:27.687+00	2021-01-27 18:09:27.687+00
2577	1	50	281	2021-01-27 18:09:31.356+00	2021-01-27 18:09:31.356+00
2578	0	50	282	2021-01-27 18:09:35.512+00	2021-01-27 18:09:35.512+00
2579	1	50	283	2021-01-27 18:09:39.692+00	2021-01-27 18:09:39.692+00
2580	0	50	284	2021-01-27 18:09:43.64+00	2021-01-27 18:09:43.64+00
2581	1	50	285	2021-01-27 18:09:47.85+00	2021-01-27 18:09:47.85+00
2582	1	65	242	2021-01-27 18:15:28.998+00	2021-01-27 18:15:28.998+00
2583	0	65	243	2021-01-27 18:15:32.136+00	2021-01-27 18:15:32.136+00
2584	1	65	244	2021-01-27 18:15:34.968+00	2021-01-27 18:15:34.968+00
2585	0	65	245	2021-01-27 18:15:37.791+00	2021-01-27 18:15:37.791+00
2586	0	65	246	2021-01-27 18:15:41.313+00	2021-01-27 18:15:41.313+00
2587	1	65	247	2021-01-27 18:15:44.879+00	2021-01-27 18:15:44.879+00
2588	0	65	248	2021-01-27 18:15:48.3+00	2021-01-27 18:15:48.3+00
2589	0	65	249	2021-01-27 18:15:51.741+00	2021-01-27 18:15:51.741+00
2590	0	65	250	2021-01-27 18:15:55.15+00	2021-01-27 18:15:55.15+00
2591	1	65	251	2021-01-27 18:15:58.864+00	2021-01-27 18:15:58.864+00
2592	0	65	252	2021-01-27 18:16:02.937+00	2021-01-27 18:16:02.937+00
2593	0	65	253	2021-01-27 18:16:05.991+00	2021-01-27 18:16:05.991+00
2594	0	65	254	2021-01-27 18:16:09.211+00	2021-01-27 18:16:09.211+00
2595	1	65	255	2021-01-27 18:16:12.444+00	2021-01-27 18:16:12.444+00
2596	0	65	256	2021-01-27 18:16:16.486+00	2021-01-27 18:16:16.486+00
2597	1	65	257	2021-01-27 18:16:20.307+00	2021-01-27 18:16:20.307+00
2598	0	65	258	2021-01-27 18:16:24.262+00	2021-01-27 18:16:24.262+00
2599	0	65	259	2021-01-27 18:16:28.025+00	2021-01-27 18:16:28.025+00
2600	1	65	260	2021-01-27 18:16:31.757+00	2021-01-27 18:16:31.757+00
2601	0	65	261	2021-01-27 18:16:35.075+00	2021-01-27 18:16:35.075+00
2602	1	65	262	2021-01-27 18:16:38.702+00	2021-01-27 18:16:38.702+00
2603	0	65	263	2021-01-27 18:16:42.231+00	2021-01-27 18:16:42.231+00
2604	0	65	264	2021-01-27 18:16:45.383+00	2021-01-27 18:16:45.383+00
2605	0	65	265	2021-01-27 18:16:50.01+00	2021-01-27 18:16:50.01+00
2606	0	65	266	2021-01-27 18:16:53.41+00	2021-01-27 18:16:53.41+00
2607	1	65	267	2021-01-27 18:16:57.054+00	2021-01-27 18:16:57.054+00
2608	1	65	268	2021-01-27 18:17:01.195+00	2021-01-27 18:17:01.195+00
2609	1	65	269	2021-01-27 18:17:04.563+00	2021-01-27 18:17:04.563+00
2610	1	65	270	2021-01-27 18:17:07.744+00	2021-01-27 18:17:07.744+00
2611	1	65	271	2021-01-27 18:17:11.854+00	2021-01-27 18:17:11.854+00
2612	1	65	272	2021-01-27 18:17:16.182+00	2021-01-27 18:17:16.182+00
2613	1	65	273	2021-01-27 18:17:20.107+00	2021-01-27 18:17:20.107+00
2614	1	65	274	2021-01-27 18:17:23.789+00	2021-01-27 18:17:23.789+00
2615	1	65	275	2021-01-27 18:17:27.497+00	2021-01-27 18:17:27.497+00
2616	1	65	276	2021-01-27 18:17:31.232+00	2021-01-27 18:17:31.232+00
2617	0	65	277	2021-01-27 18:17:35.201+00	2021-01-27 18:17:35.201+00
2618	0	65	278	2021-01-27 18:17:38.959+00	2021-01-27 18:17:38.959+00
2619	0	65	279	2021-01-27 18:17:44.435+00	2021-01-27 18:17:44.435+00
2620	1	65	280	2021-01-27 18:17:48.826+00	2021-01-27 18:17:48.826+00
2621	0	65	281	2021-01-27 18:17:52.979+00	2021-01-27 18:17:52.979+00
2622	0	65	282	2021-01-27 18:17:57.703+00	2021-01-27 18:17:57.703+00
2623	1	65	283	2021-01-27 18:18:02.302+00	2021-01-27 18:18:02.302+00
2624	1	65	284	2021-01-27 18:18:06.133+00	2021-01-27 18:18:06.133+00
2625	1	65	285	2021-01-27 18:18:28.174+00	2021-01-27 18:18:28.174+00
2626	2	65	286	2021-01-27 18:24:06.148+00	2021-01-27 18:24:06.148+00
2627	3	65	287	2021-01-27 18:24:08.84+00	2021-01-27 18:24:08.84+00
2628	2	65	288	2021-01-27 18:24:11.627+00	2021-01-27 18:24:11.627+00
2629	1	65	289	2021-01-27 18:24:14.406+00	2021-01-27 18:24:14.406+00
2630	3	65	290	2021-01-27 18:24:17.02+00	2021-01-27 18:24:17.02+00
2631	1	65	291	2021-01-27 18:24:19.872+00	2021-01-27 18:24:19.872+00
2632	2	65	292	2021-01-27 18:24:22.461+00	2021-01-27 18:24:22.461+00
2633	1	65	293	2021-01-27 18:24:25.993+00	2021-01-27 18:24:25.993+00
2634	1	65	294	2021-01-27 18:24:29.617+00	2021-01-27 18:24:29.617+00
2635	1	65	295	2021-01-27 18:24:32.458+00	2021-01-27 18:24:32.458+00
2636	2	65	296	2021-01-27 18:24:35.153+00	2021-01-27 18:24:35.153+00
2637	4	65	297	2021-01-27 18:24:37.916+00	2021-01-27 18:24:37.916+00
2638	2	65	298	2021-01-27 18:24:41.017+00	2021-01-27 18:24:41.017+00
2639	2	65	299	2021-01-27 18:24:44.096+00	2021-01-27 18:24:44.096+00
2640	1	65	300	2021-01-27 18:24:47.284+00	2021-01-27 18:24:47.284+00
2641	3	65	301	2021-01-27 18:24:50.312+00	2021-01-27 18:24:50.312+00
2642	2	65	302	2021-01-27 18:24:53.104+00	2021-01-27 18:24:53.104+00
2643	1	65	303	2021-01-27 18:24:56.007+00	2021-01-27 18:24:56.007+00
2644	2	65	304	2021-01-27 18:24:58.836+00	2021-01-27 18:24:58.836+00
2645	3	65	305	2021-01-27 18:25:01.661+00	2021-01-27 18:25:01.661+00
2646	1	65	306	2021-01-27 18:25:04.454+00	2021-01-27 18:25:04.454+00
2647	2	65	307	2021-01-27 18:25:07.768+00	2021-01-27 18:25:07.768+00
2648	3	65	308	2021-01-27 18:25:10.796+00	2021-01-27 18:25:10.796+00
2649	1	65	309	2021-01-27 18:25:13.91+00	2021-01-27 18:25:13.91+00
2650	2	65	310	2021-01-27 18:25:16.795+00	2021-01-27 18:25:16.795+00
2651	4	65	311	2021-01-27 18:25:19.566+00	2021-01-27 18:25:19.566+00
2652	2	65	312	2021-01-27 18:25:22.2+00	2021-01-27 18:25:22.2+00
2653	3	65	313	2021-01-27 18:25:24.814+00	2021-01-27 18:25:24.814+00
2654	2	65	314	2021-01-27 18:25:27.467+00	2021-01-27 18:25:27.467+00
2655	2	65	315	2021-01-27 18:25:30.103+00	2021-01-27 18:25:30.103+00
2656	3	65	316	2021-01-27 18:25:33.189+00	2021-01-27 18:25:33.189+00
2657	5	65	317	2021-01-27 18:25:36.208+00	2021-01-27 18:25:36.208+00
2658	6	65	318	2021-01-27 18:25:39.345+00	2021-01-27 18:25:39.345+00
2659	3	65	319	2021-01-27 18:25:42.107+00	2021-01-27 18:25:42.107+00
2660	4	65	320	2021-01-27 18:25:45.227+00	2021-01-27 18:25:45.227+00
2661	2	65	321	2021-01-27 18:25:48.494+00	2021-01-27 18:25:48.494+00
2662	3	65	322	2021-01-27 18:26:27.018+00	2021-01-27 18:26:27.018+00
2663	100	67	332	2021-01-27 18:30:11.493+00	2021-01-27 18:30:11.493+00
2664	1	67	3	2021-01-27 18:30:17.94+00	2021-01-27 18:30:17.94+00
2665	1	67	4	2021-01-27 18:30:21.787+00	2021-01-27 18:30:21.787+00
2666	0	67	5	2021-01-27 18:30:25.639+00	2021-01-27 18:30:25.639+00
2667	1	67	6	2021-01-27 18:30:30.304+00	2021-01-27 18:30:30.304+00
2668	1	67	7	2021-01-27 18:30:33.359+00	2021-01-27 18:30:33.359+00
2669	0	67	8	2021-01-27 18:30:36.746+00	2021-01-27 18:30:36.746+00
2670	0	67	9	2021-01-27 18:30:40.498+00	2021-01-27 18:30:40.498+00
2671	1	67	10	2021-01-27 18:30:44.287+00	2021-01-27 18:30:44.287+00
2672	1	67	11	2021-01-27 18:30:48.289+00	2021-01-27 18:30:48.289+00
2673	1	67	12	2021-01-27 18:30:51.568+00	2021-01-27 18:30:51.568+00
2674	1	67	13	2021-01-27 18:30:54.43+00	2021-01-27 18:30:54.43+00
2675	0	67	14	2021-01-27 18:30:58.056+00	2021-01-27 18:30:58.056+00
2676	1	67	15	2021-01-27 18:31:01.391+00	2021-01-27 18:31:01.391+00
2677	1	67	16	2021-01-27 18:31:04.264+00	2021-01-27 18:31:04.264+00
2678	0	67	17	2021-01-27 18:31:07.621+00	2021-01-27 18:31:07.621+00
2679	1	67	18	2021-01-27 18:31:11.098+00	2021-01-27 18:31:11.098+00
2680	4	67	19	2021-01-27 18:31:17.575+00	2021-01-27 18:31:17.575+00
2681	3	67	20	2021-01-27 18:31:20.198+00	2021-01-27 18:31:20.198+00
2682	4	67	21	2021-01-27 18:31:23.196+00	2021-01-27 18:31:23.196+00
2683	4	67	22	2021-01-27 18:31:25.968+00	2021-01-27 18:31:25.968+00
2684	2	67	23	2021-01-27 18:31:29.637+00	2021-01-27 18:31:29.637+00
2685	3	67	24	2021-01-27 18:31:32.029+00	2021-01-27 18:31:32.029+00
2686	4	67	25	2021-01-27 18:31:34.435+00	2021-01-27 18:31:34.435+00
2687	2	67	26	2021-01-27 18:31:37.42+00	2021-01-27 18:31:37.42+00
2688	3	67	27	2021-01-27 18:31:40.075+00	2021-01-27 18:31:40.075+00
2689	4	67	28	2021-01-27 18:31:42.897+00	2021-01-27 18:31:42.897+00
2690	2	67	29	2021-01-27 18:31:45.878+00	2021-01-27 18:31:45.878+00
2691	1	67	30	2021-01-27 18:31:48.939+00	2021-01-27 18:31:48.939+00
2692	1	67	31	2021-01-27 18:31:51.413+00	2021-01-27 18:31:51.413+00
2693	3	67	32	2021-01-27 18:31:54.29+00	2021-01-27 18:31:54.29+00
2694	4	67	33	2021-01-27 18:31:56.745+00	2021-01-27 18:31:56.745+00
2695	3	67	34	2021-01-27 18:31:59.145+00	2021-01-27 18:31:59.145+00
2696	4	67	35	2021-01-27 18:32:01.838+00	2021-01-27 18:32:01.838+00
2697	2	67	36	2021-01-27 18:32:04.556+00	2021-01-27 18:32:04.556+00
2698	100	67	333	2021-01-27 18:33:43.182+00	2021-01-27 18:33:43.182+00
2699	3	67	37	2021-01-27 18:33:48.982+00	2021-01-27 18:33:48.982+00
2700	4	67	38	2021-01-27 18:33:52.603+00	2021-01-27 18:33:52.603+00
2701	4	67	39	2021-01-27 18:33:55.979+00	2021-01-27 18:33:55.979+00
2702	2	67	40	2021-01-27 18:33:59.556+00	2021-01-27 18:33:59.556+00
2703	2	67	41	2021-01-27 18:34:02.981+00	2021-01-27 18:34:02.981+00
2704	2	67	42	2021-01-27 18:34:06.582+00	2021-01-27 18:34:06.582+00
2705	3	67	43	2021-01-27 18:34:10.367+00	2021-01-27 18:34:10.367+00
2706	3	67	44	2021-01-27 18:34:13.583+00	2021-01-27 18:34:13.583+00
2707	3	67	45	2021-01-27 18:34:16.988+00	2021-01-27 18:34:16.988+00
2708	3	67	46	2021-01-27 18:34:20.437+00	2021-01-27 18:34:20.437+00
2709	2	67	47	2021-01-27 18:34:23.982+00	2021-01-27 18:34:23.982+00
2710	3	67	48	2021-01-27 18:34:27.318+00	2021-01-27 18:34:27.318+00
2711	2	67	49	2021-01-27 18:34:31.526+00	2021-01-27 18:34:31.526+00
2712	2	67	50	2021-01-27 18:34:35.293+00	2021-01-27 18:34:35.293+00
2713	3	67	51	2021-01-27 18:34:39.312+00	2021-01-27 18:34:39.312+00
2714	4	67	52	2021-01-27 18:34:43.472+00	2021-01-27 18:34:43.472+00
2715	2	67	53	2021-01-27 18:34:47.629+00	2021-01-27 18:34:47.629+00
2716	2	67	54	2021-01-27 18:34:52.554+00	2021-01-27 18:34:52.554+00
2717	3	67	55	2021-01-27 18:34:56.689+00	2021-01-27 18:34:56.689+00
2718	3	67	56	2021-01-27 18:35:00.432+00	2021-01-27 18:35:00.432+00
2719	2	67	57	2021-01-27 18:35:04.389+00	2021-01-27 18:35:04.389+00
2720	3	67	58	2021-01-27 18:35:08.478+00	2021-01-27 18:35:08.478+00
2721	3	67	59	2021-01-27 18:35:13.567+00	2021-01-27 18:35:13.567+00
2722	100	67	334	2021-01-27 18:37:49.616+00	2021-01-27 18:37:49.616+00
2723	1	67	60	2021-01-27 18:37:55.18+00	2021-01-27 18:37:55.18+00
2724	1	67	61	2021-01-27 18:37:58.14+00	2021-01-27 18:37:58.14+00
2725	0	67	62	2021-01-27 18:38:01.582+00	2021-01-27 18:38:01.582+00
2726	1	67	63	2021-01-27 18:38:05.028+00	2021-01-27 18:38:05.028+00
2727	0	67	64	2021-01-27 18:38:08.154+00	2021-01-27 18:38:08.154+00
2728	0	67	65	2021-01-27 18:38:11.743+00	2021-01-27 18:38:11.743+00
2729	1	67	66	2021-01-27 18:38:14.819+00	2021-01-27 18:38:14.819+00
2730	1	67	67	2021-01-27 18:38:17.888+00	2021-01-27 18:38:17.888+00
2731	1	67	68	2021-01-27 18:38:20.938+00	2021-01-27 18:38:20.938+00
2732	0	67	69	2021-01-27 18:38:24.55+00	2021-01-27 18:38:24.55+00
2733	1	67	70	2021-01-27 18:38:27.779+00	2021-01-27 18:38:27.779+00
2734	0	67	71	2021-01-27 18:38:31.343+00	2021-01-27 18:38:31.343+00
2735	4	67	72	2021-01-27 18:38:36.749+00	2021-01-27 18:38:36.749+00
2736	2	67	73	2021-01-27 18:38:40.223+00	2021-01-27 18:38:40.223+00
2737	1	67	74	2021-01-27 18:38:43.177+00	2021-01-27 18:38:43.177+00
2738	2	67	75	2021-01-27 18:38:46.043+00	2021-01-27 18:38:46.043+00
2739	3	67	76	2021-01-27 18:38:48.851+00	2021-01-27 18:38:48.851+00
2740	1	67	77	2021-01-27 18:38:51.934+00	2021-01-27 18:38:51.934+00
2741	3	67	78	2021-01-27 18:38:54.904+00	2021-01-27 18:38:54.904+00
2742	1	67	79	2021-01-27 18:38:57.891+00	2021-01-27 18:38:57.891+00
2743	1	67	80	2021-01-27 18:39:00.843+00	2021-01-27 18:39:00.843+00
2744	2	67	81	2021-01-27 18:39:04.028+00	2021-01-27 18:39:04.028+00
2745	2	67	82	2021-01-27 18:39:10.774+00	2021-01-27 18:39:10.774+00
2754	100	67	335	2021-01-27 18:41:03.366+00	2021-01-27 18:41:03.366+00
2755	1	67	91	2021-01-27 18:41:09.529+00	2021-01-27 18:41:09.529+00
2756	0	67	92	2021-01-27 18:41:12.686+00	2021-01-27 18:41:12.686+00
2757	1	67	93	2021-01-27 18:41:15.673+00	2021-01-27 18:41:15.673+00
2758	0	67	94	2021-01-27 18:41:18.51+00	2021-01-27 18:41:18.51+00
2759	1	67	95	2021-01-27 18:41:21.633+00	2021-01-27 18:41:21.633+00
2760	0	67	96	2021-01-27 18:41:24.46+00	2021-01-27 18:41:24.46+00
2761	1	67	97	2021-01-27 18:41:27.528+00	2021-01-27 18:41:27.528+00
2762	1	67	98	2021-01-27 18:41:30.334+00	2021-01-27 18:41:30.334+00
2763	1	67	99	2021-01-27 18:41:32.934+00	2021-01-27 18:41:32.934+00
2764	1	67	100	2021-01-27 18:41:35.564+00	2021-01-27 18:41:35.564+00
2765	1	67	101	2021-01-27 18:41:38.209+00	2021-01-27 18:41:38.209+00
2766	1	67	102	2021-01-27 18:41:41.134+00	2021-01-27 18:41:41.134+00
2767	1	67	103	2021-01-27 18:41:43.687+00	2021-01-27 18:41:43.687+00
2768	0	67	104	2021-01-27 18:41:46.773+00	2021-01-27 18:41:46.773+00
2769	0	67	105	2021-01-27 18:41:49.434+00	2021-01-27 18:41:49.434+00
2770	0	67	106	2021-01-27 18:41:52.077+00	2021-01-27 18:41:52.077+00
2771	1	67	107	2021-01-27 18:41:55.099+00	2021-01-27 18:41:55.099+00
2772	0	67	108	2021-01-27 18:41:58.302+00	2021-01-27 18:41:58.302+00
2773	1	67	109	2021-01-27 18:42:01.622+00	2021-01-27 18:42:01.622+00
2774	3	67	110	2021-01-27 18:42:07.505+00	2021-01-27 18:42:07.505+00
2775	1	67	111	2021-01-27 18:42:09.993+00	2021-01-27 18:42:09.993+00
2778	1	67	114	2021-01-27 18:42:18.496+00	2021-01-27 18:42:18.496+00
2779	1	67	115	2021-01-27 18:42:21.852+00	2021-01-27 18:42:21.852+00
2780	3	67	116	2021-01-27 18:42:24.664+00	2021-01-27 18:42:24.664+00
2781	1	67	117	2021-01-27 18:42:27.201+00	2021-01-27 18:42:27.201+00
2782	1	67	118	2021-01-27 18:42:30.119+00	2021-01-27 18:42:30.119+00
2783	1	67	119	2021-01-27 18:42:32.744+00	2021-01-27 18:42:32.744+00
2784	100	67	336	2021-01-27 18:44:35.159+00	2021-01-27 18:44:35.159+00
2785	1	67	120	2021-01-27 18:44:39.979+00	2021-01-27 18:44:39.979+00
2795	0	67	130	2021-01-27 18:45:05.659+00	2021-01-27 18:45:05.659+00
2816	1	67	151	2021-01-27 18:48:33.662+00	2021-01-27 18:48:33.662+00
2817	1	67	152	2021-01-27 18:48:37.691+00	2021-01-27 18:48:37.691+00
2818	1	67	153	2021-01-27 18:48:41.809+00	2021-01-27 18:48:41.809+00
2819	0	67	154	2021-01-27 18:48:46.279+00	2021-01-27 18:48:46.279+00
2820	1	67	155	2021-01-27 18:48:50.644+00	2021-01-27 18:48:50.644+00
2821	0	67	156	2021-01-27 18:48:55.257+00	2021-01-27 18:48:55.257+00
2822	0	67	157	2021-01-27 18:48:59.404+00	2021-01-27 18:48:59.404+00
2823	1	67	158	2021-01-27 18:49:03.575+00	2021-01-27 18:49:03.575+00
2842	1	67	177	2021-01-27 18:50:59.223+00	2021-01-27 18:50:59.223+00
2854	3	67	348	2021-01-27 18:52:23.212+00	2021-01-27 18:52:23.212+00
2855	2	67	349	2021-01-27 18:52:26.911+00	2021-01-27 18:52:26.911+00
2856	5	67	350	2021-01-27 18:52:30.671+00	2021-01-27 18:52:30.671+00
2857	3	67	351	2021-01-27 18:52:34.326+00	2021-01-27 18:52:34.326+00
2858	4	67	352	2021-01-27 18:52:38.729+00	2021-01-27 18:52:38.729+00
2859	3	67	353	2021-01-27 18:52:42.547+00	2021-01-27 18:52:42.547+00
2860	3	67	354	2021-01-27 18:52:46.093+00	2021-01-27 18:52:46.093+00
2861	5	67	355	2021-01-27 18:52:49.829+00	2021-01-27 18:52:49.829+00
2862	3	67	356	2021-01-27 18:52:53.663+00	2021-01-27 18:52:53.663+00
2863	7	67	357	2021-01-27 18:52:57.929+00	2021-01-27 18:52:57.929+00
2864	5	67	358	2021-01-27 18:53:02.347+00	2021-01-27 18:53:02.347+00
2865	4	67	359	2021-01-27 18:53:06.551+00	2021-01-27 18:53:06.551+00
2866	5	67	360	2021-01-27 18:53:10.604+00	2021-01-27 18:53:10.604+00
2867	7	67	361	2021-01-27 18:53:15.064+00	2021-01-27 18:53:15.064+00
2868	8	67	362	2021-01-27 18:53:20.483+00	2021-01-27 18:53:20.483+00
2869	5	67	363	2021-01-27 18:53:24.756+00	2021-01-27 18:53:24.756+00
2870	8	67	364	2021-01-27 18:53:29.415+00	2021-01-27 18:53:29.415+00
2875	3	67	290	2021-01-27 18:56:26.418+00	2021-01-27 18:56:26.418+00
2876	1	67	291	2021-01-27 18:56:29.046+00	2021-01-27 18:56:29.046+00
2877	2	67	292	2021-01-27 18:56:31.744+00	2021-01-27 18:56:31.744+00
2878	1	67	293	2021-01-27 18:56:34.571+00	2021-01-27 18:56:34.571+00
2881	2	67	296	2021-01-27 18:56:42.845+00	2021-01-27 18:56:42.845+00
2882	2	67	297	2021-01-27 18:56:45.505+00	2021-01-27 18:56:45.505+00
2883	2	67	298	2021-01-27 18:56:48.1+00	2021-01-27 18:56:48.1+00
2884	2	67	299	2021-01-27 18:56:50.714+00	2021-01-27 18:56:50.714+00
2885	1	67	300	2021-01-27 18:56:53.606+00	2021-01-27 18:56:53.606+00
2886	3	67	301	2021-01-27 18:56:57.108+00	2021-01-27 18:56:57.108+00
2887	2	67	302	2021-01-27 18:56:59.786+00	2021-01-27 18:56:59.786+00
2888	1	67	303	2021-01-27 18:57:02.944+00	2021-01-27 18:57:02.944+00
2889	4	67	304	2021-01-27 18:57:05.799+00	2021-01-27 18:57:05.799+00
2890	3	67	305	2021-01-27 18:57:08.7+00	2021-01-27 18:57:08.7+00
2891	1	67	306	2021-01-27 18:57:11.711+00	2021-01-27 18:57:11.711+00
2892	4	67	307	2021-01-27 18:57:15.617+00	2021-01-27 18:57:15.617+00
2893	3	67	308	2021-01-27 18:57:18.161+00	2021-01-27 18:57:18.161+00
2894	1	67	309	2021-01-27 18:57:20.953+00	2021-01-27 18:57:20.953+00
2895	2	67	310	2021-01-27 18:57:23.645+00	2021-01-27 18:57:23.645+00
2896	4	67	311	2021-01-27 18:57:26.142+00	2021-01-27 18:57:26.142+00
2897	2	67	312	2021-01-27 18:57:28.855+00	2021-01-27 18:57:28.855+00
2898	3	67	313	2021-01-27 18:57:31.423+00	2021-01-27 18:57:31.423+00
2899	3	67	314	2021-01-27 18:57:33.762+00	2021-01-27 18:57:33.762+00
2900	3	67	315	2021-01-27 18:57:36.243+00	2021-01-27 18:57:36.243+00
2901	3	67	316	2021-01-27 18:57:38.847+00	2021-01-27 18:57:38.847+00
2902	2	67	317	2021-01-27 18:57:41.684+00	2021-01-27 18:57:41.684+00
2903	5	67	318	2021-01-27 18:57:44.406+00	2021-01-27 18:57:44.406+00
2904	2	67	319	2021-01-27 18:57:54.963+00	2021-01-27 18:57:54.963+00
2908	1	68	151	2021-01-27 19:39:41.892+00	2021-01-27 19:39:41.892+00
2909	1	68	152	2021-01-27 19:39:46.048+00	2021-01-27 19:39:46.048+00
2910	1	68	153	2021-01-27 19:39:50.259+00	2021-01-27 19:39:50.259+00
2911	1	68	154	2021-01-27 19:39:54.707+00	2021-01-27 19:39:54.707+00
2912	1	68	155	2021-01-27 19:39:58.898+00	2021-01-27 19:39:58.898+00
2913	1	68	156	2021-01-27 19:40:03.324+00	2021-01-27 19:40:03.324+00
2914	1	68	157	2021-01-27 19:40:07.656+00	2021-01-27 19:40:07.656+00
2915	1	68	158	2021-01-27 19:40:11.854+00	2021-01-27 19:40:11.854+00
2935	3	68	186	2021-01-27 19:42:46.729+00	2021-01-27 19:42:46.729+00
2936	3	68	187	2021-01-27 19:42:48.757+00	2021-01-27 19:42:48.757+00
2937	3	68	188	2021-01-27 19:42:50.59+00	2021-01-27 19:42:50.59+00
2938	3	68	189	2021-01-27 19:42:55.176+00	2021-01-27 19:42:55.176+00
2939	3	68	190	2021-01-27 19:42:58.88+00	2021-01-27 19:42:58.88+00
2940	3	68	191	2021-01-27 19:43:01.485+00	2021-01-27 19:43:01.485+00
2952	1	68	203	2021-01-27 19:43:40.433+00	2021-01-27 19:43:40.433+00
2953	1	68	204	2021-01-27 19:43:46.916+00	2021-01-27 19:43:46.916+00
2954	1	68	205	2021-01-27 19:43:53.812+00	2021-01-27 19:43:53.812+00
2955	1	68	206	2021-01-27 19:44:00.942+00	2021-01-27 19:44:00.942+00
2969	1	62	15	2021-01-27 21:02:42.584+00	2021-01-27 21:02:42.584+00
2970	1	62	16	2021-01-27 21:02:45.708+00	2021-01-27 21:02:45.708+00
2971	0	62	17	2021-01-27 21:02:48.756+00	2021-01-27 21:02:48.756+00
2972	1	62	18	2021-01-27 21:02:52.008+00	2021-01-27 21:02:52.008+00
2973	4	62	19	2021-01-27 21:02:56.951+00	2021-01-27 21:02:56.951+00
2974	3	62	20	2021-01-27 21:02:59.675+00	2021-01-27 21:02:59.675+00
2975	1	62	21	2021-01-27 21:03:01.968+00	2021-01-27 21:03:01.968+00
2976	4	62	22	2021-01-27 21:03:04.756+00	2021-01-27 21:03:04.756+00
2977	2	62	23	2021-01-27 21:03:07.33+00	2021-01-27 21:03:07.33+00
2978	3	62	24	2021-01-27 21:03:09.637+00	2021-01-27 21:03:09.637+00
2979	4	62	25	2021-01-27 21:03:11.872+00	2021-01-27 21:03:11.872+00
2980	2	62	26	2021-01-27 21:03:14.478+00	2021-01-27 21:03:14.478+00
2981	3	62	27	2021-01-27 21:03:16.919+00	2021-01-27 21:03:16.919+00
2982	1	62	28	2021-01-27 21:03:19.646+00	2021-01-27 21:03:19.646+00
2983	2	62	29	2021-01-27 21:03:22.84+00	2021-01-27 21:03:22.84+00
2984	1	62	30	2021-01-27 21:03:25.677+00	2021-01-27 21:03:25.677+00
2985	1	62	31	2021-01-27 21:03:28.408+00	2021-01-27 21:03:28.408+00
2986	3	62	32	2021-01-27 21:03:30.923+00	2021-01-27 21:03:30.923+00
2987	4	62	33	2021-01-27 21:03:33.714+00	2021-01-27 21:03:33.714+00
2988	3	62	34	2021-01-27 21:03:36.073+00	2021-01-27 21:03:36.073+00
2989	4	62	35	2021-01-27 21:03:38.706+00	2021-01-27 21:03:38.706+00
2990	2	62	36	2021-01-27 21:03:41.445+00	2021-01-27 21:03:41.445+00
2991	100	61	336	2021-01-27 21:06:50.389+00	2021-01-27 21:06:50.389+00
2992	100	52	332	2021-01-27 22:28:37.464+00	2021-01-27 22:28:37.464+00
2993	1	52	3	2021-01-27 22:28:42.194+00	2021-01-27 22:28:42.194+00
2994	1	52	4	2021-01-27 22:28:45.134+00	2021-01-27 22:28:45.134+00
2995	1	52	5	2021-01-27 22:28:48.236+00	2021-01-27 22:28:48.236+00
2996	1	52	6	2021-01-27 22:28:52.045+00	2021-01-27 22:28:52.045+00
2997	1	52	7	2021-01-27 22:30:12.631+00	2021-01-27 22:30:12.631+00
2998	1	52	8	2021-01-27 22:30:47.925+00	2021-01-27 22:30:47.925+00
2999	1	52	9	2021-01-27 22:30:51.004+00	2021-01-27 22:30:51.004+00
3000	1	52	10	2021-01-27 22:31:21.427+00	2021-01-27 22:31:21.427+00
3001	1	52	11	2021-01-27 22:31:27.368+00	2021-01-27 22:31:27.368+00
3002	1	52	12	2021-01-27 22:31:31.083+00	2021-01-27 22:31:31.083+00
3003	1	52	13	2021-01-27 22:31:34.128+00	2021-01-27 22:31:34.128+00
3004	1	52	14	2021-01-27 22:31:49.544+00	2021-01-27 22:31:49.544+00
3005	1	52	15	2021-01-27 22:31:55.499+00	2021-01-27 22:31:55.499+00
3006	1	52	16	2021-01-27 22:32:01.012+00	2021-01-27 22:32:01.012+00
3007	1	52	17	2021-01-27 22:32:04.64+00	2021-01-27 22:32:04.64+00
3008	1	52	18	2021-01-27 22:32:10.2+00	2021-01-27 22:32:10.2+00
3009	2	52	19	2021-01-27 22:32:20.762+00	2021-01-27 22:32:20.762+00
3010	2	52	20	2021-01-27 22:32:23.085+00	2021-01-27 22:32:23.085+00
3011	2	52	21	2021-01-27 22:32:26.87+00	2021-01-27 22:32:26.87+00
3012	2	52	22	2021-01-27 22:32:29.34+00	2021-01-27 22:32:29.34+00
3013	2	52	23	2021-01-27 22:32:31.864+00	2021-01-27 22:32:31.864+00
3014	2	52	24	2021-01-27 22:33:31.881+00	2021-01-27 22:33:31.881+00
3015	2	52	25	2021-01-27 22:33:36.131+00	2021-01-27 22:33:36.131+00
3016	2	52	26	2021-01-27 22:33:38.767+00	2021-01-27 22:33:38.767+00
3017	2	52	27	2021-01-27 22:33:50.767+00	2021-01-27 22:33:50.767+00
3018	2	52	28	2021-01-27 22:33:54.732+00	2021-01-27 22:33:54.732+00
3019	2	52	29	2021-01-27 22:33:56.998+00	2021-01-27 22:33:56.998+00
3020	2	52	30	2021-01-27 22:33:59.272+00	2021-01-27 22:33:59.272+00
3021	1	52	31	2021-01-27 22:34:02.306+00	2021-01-27 22:34:02.306+00
3022	3	52	32	2021-01-27 22:34:05.191+00	2021-01-27 22:34:05.191+00
3023	4	52	33	2021-01-27 22:34:08.037+00	2021-01-27 22:34:08.037+00
3024	3	52	34	2021-01-27 22:34:10.776+00	2021-01-27 22:34:10.776+00
3025	4	52	35	2021-01-27 22:34:13.645+00	2021-01-27 22:34:13.645+00
3026	2	52	36	2021-01-27 22:34:17.43+00	2021-01-27 22:34:17.43+00
3027	100	43	332	2021-01-27 22:43:02.752+00	2021-01-27 22:43:02.752+00
3028	1	43	3	2021-01-27 22:43:18.414+00	2021-01-27 22:43:18.414+00
3029	1	43	4	2021-01-27 22:43:22.114+00	2021-01-27 22:43:22.114+00
3030	1	43	5	2021-01-27 22:43:25.124+00	2021-01-27 22:43:25.124+00
3031	0	43	6	2021-01-27 22:43:28.507+00	2021-01-27 22:43:28.507+00
3032	0	43	7	2021-01-27 22:43:32.132+00	2021-01-27 22:43:32.132+00
3033	0	43	8	2021-01-27 22:43:35.489+00	2021-01-27 22:43:35.489+00
3034	1	43	9	2021-01-27 22:43:38.589+00	2021-01-27 22:43:38.589+00
3035	0	43	10	2021-01-27 22:43:41.954+00	2021-01-27 22:43:41.954+00
3036	1	43	11	2021-01-27 22:43:45.222+00	2021-01-27 22:43:45.222+00
3037	1	43	12	2021-01-27 22:43:48.358+00	2021-01-27 22:43:48.358+00
3038	1	43	13	2021-01-27 22:43:51.524+00	2021-01-27 22:43:51.524+00
3039	1	43	14	2021-01-27 22:43:54.706+00	2021-01-27 22:43:54.706+00
3040	1	43	15	2021-01-27 22:43:57.741+00	2021-01-27 22:43:57.741+00
3041	0	43	16	2021-01-27 22:44:00.896+00	2021-01-27 22:44:00.896+00
3042	1	43	17	2021-01-27 22:44:04.056+00	2021-01-27 22:44:04.056+00
3043	1	43	18	2021-01-27 22:44:07.317+00	2021-01-27 22:44:07.317+00
3044	4	43	19	2021-01-27 22:44:12.932+00	2021-01-27 22:44:12.932+00
3045	3	43	20	2021-01-27 22:44:15.796+00	2021-01-27 22:44:15.796+00
3046	1	43	21	2021-01-27 22:44:18.645+00	2021-01-27 22:44:18.645+00
3047	4	43	22	2021-01-27 22:44:21.466+00	2021-01-27 22:44:21.466+00
3048	2	43	23	2021-01-27 22:44:24.607+00	2021-01-27 22:44:24.607+00
3049	2	43	24	2021-01-27 22:44:26.879+00	2021-01-27 22:44:26.879+00
3050	2	43	25	2021-01-27 22:44:28.98+00	2021-01-27 22:44:28.98+00
3051	2	43	26	2021-01-27 22:44:31.439+00	2021-01-27 22:44:31.439+00
3052	2	43	27	2021-01-27 22:44:33.943+00	2021-01-27 22:44:33.943+00
3053	2	43	28	2021-01-27 22:44:36.38+00	2021-01-27 22:44:36.38+00
3054	2	43	29	2021-01-27 22:44:38.751+00	2021-01-27 22:44:38.751+00
3055	2	43	30	2021-01-27 22:44:41.042+00	2021-01-27 22:44:41.042+00
3056	2	43	31	2021-01-27 22:44:43.278+00	2021-01-27 22:44:43.278+00
3057	2	43	32	2021-01-27 22:44:45.768+00	2021-01-27 22:44:45.768+00
3058	2	43	33	2021-01-27 22:44:48.11+00	2021-01-27 22:44:48.11+00
3059	2	43	34	2021-01-27 22:44:50.594+00	2021-01-27 22:44:50.594+00
3060	2	43	35	2021-01-27 22:44:53.004+00	2021-01-27 22:44:53.004+00
3061	2	43	36	2021-01-27 22:44:55.464+00	2021-01-27 22:44:55.464+00
3062	100	43	333	2021-01-27 22:46:03.722+00	2021-01-27 22:46:03.722+00
3063	2	43	37	2021-01-27 22:46:08.55+00	2021-01-27 22:46:08.55+00
3064	2	43	38	2021-01-27 22:46:12.267+00	2021-01-27 22:46:12.267+00
3065	2	43	39	2021-01-27 22:46:16.255+00	2021-01-27 22:46:16.255+00
3066	2	43	40	2021-01-27 22:46:21.06+00	2021-01-27 22:46:21.06+00
3067	2	43	41	2021-01-27 22:46:24.712+00	2021-01-27 22:46:24.712+00
3068	2	43	42	2021-01-27 22:46:28.602+00	2021-01-27 22:46:28.602+00
3069	2	43	43	2021-01-27 22:46:32.148+00	2021-01-27 22:46:32.148+00
3070	2	43	44	2021-01-27 22:46:35.715+00	2021-01-27 22:46:35.715+00
3071	2	43	45	2021-01-27 22:46:39.144+00	2021-01-27 22:46:39.144+00
3072	2	43	46	2021-01-27 22:46:42.723+00	2021-01-27 22:46:42.723+00
3073	2	43	47	2021-01-27 22:47:05.616+00	2021-01-27 22:47:05.616+00
3074	2	43	48	2021-01-27 22:47:09.521+00	2021-01-27 22:47:09.521+00
3075	2	43	49	2021-01-27 22:47:13.605+00	2021-01-27 22:47:13.605+00
3076	2	43	50	2021-01-27 22:47:18.317+00	2021-01-27 22:47:18.317+00
3077	2	43	51	2021-01-27 22:47:21.953+00	2021-01-27 22:47:21.953+00
3078	2	43	52	2021-01-27 22:47:25.874+00	2021-01-27 22:47:25.874+00
3079	2	43	53	2021-01-27 22:47:30.543+00	2021-01-27 22:47:30.543+00
3080	2	43	54	2021-01-27 22:47:34.531+00	2021-01-27 22:47:34.531+00
3081	2	43	55	2021-01-27 22:47:38.568+00	2021-01-27 22:47:38.568+00
3082	2	43	56	2021-01-27 22:47:41.984+00	2021-01-27 22:47:41.984+00
3083	2	43	57	2021-01-27 22:47:48.152+00	2021-01-27 22:47:48.152+00
3084	2	43	58	2021-01-27 22:47:53.493+00	2021-01-27 22:47:53.493+00
3085	2	43	59	2021-01-27 22:47:57.487+00	2021-01-27 22:47:57.487+00
3086	100	43	334	2021-01-27 22:48:54.836+00	2021-01-27 22:48:54.836+00
3087	1	43	60	2021-01-27 22:48:59.732+00	2021-01-27 22:48:59.732+00
3088	1	43	61	2021-01-27 22:49:05.708+00	2021-01-27 22:49:05.708+00
3089	1	43	62	2021-01-27 22:49:11.048+00	2021-01-27 22:49:11.048+00
3090	1	43	62	2021-01-27 22:49:11.051+00	2021-01-27 22:49:11.051+00
3091	1	43	63	2021-01-27 22:49:14.481+00	2021-01-27 22:49:14.481+00
3092	1	43	64	2021-01-27 22:49:17.702+00	2021-01-27 22:49:17.702+00
3093	1	43	65	2021-01-27 22:49:20.7+00	2021-01-27 22:49:20.7+00
3094	1	43	66	2021-01-27 22:49:23.718+00	2021-01-27 22:49:23.718+00
3095	1	43	67	2021-01-27 22:49:26.853+00	2021-01-27 22:49:26.853+00
3096	1	43	68	2021-01-27 22:49:30.499+00	2021-01-27 22:49:30.499+00
3097	1	43	69	2021-01-27 22:49:34.712+00	2021-01-27 22:49:34.712+00
3098	1	43	70	2021-01-27 22:49:48.565+00	2021-01-27 22:49:48.565+00
3099	1	43	71	2021-01-27 22:50:48.297+00	2021-01-27 22:50:48.297+00
3100	2	43	72	2021-01-27 22:50:55.056+00	2021-01-27 22:50:55.056+00
3101	2	43	73	2021-01-27 22:50:58.27+00	2021-01-27 22:50:58.27+00
3102	1	43	74	2021-01-27 22:51:01.537+00	2021-01-27 22:51:01.537+00
3103	2	43	75	2021-01-27 22:51:07.532+00	2021-01-27 22:51:07.532+00
3104	2	43	76	2021-01-27 22:51:10.684+00	2021-01-27 22:51:10.684+00
3105	2	43	77	2021-01-27 22:51:15.564+00	2021-01-27 22:51:15.564+00
3106	2	43	78	2021-01-27 22:51:24.613+00	2021-01-27 22:51:24.613+00
3107	2	43	79	2021-01-27 22:51:27.911+00	2021-01-27 22:51:27.911+00
3108	2	43	80	2021-01-27 22:51:30.499+00	2021-01-27 22:51:30.499+00
3109	2	43	81	2021-01-27 22:51:32.878+00	2021-01-27 22:51:32.878+00
3110	2	43	82	2021-01-27 22:51:40.358+00	2021-01-27 22:51:40.358+00
3111	2	43	83	2021-01-27 22:51:44.146+00	2021-01-27 22:51:44.146+00
3112	2	43	84	2021-01-27 22:51:47.456+00	2021-01-27 22:51:47.456+00
3113	2	43	85	2021-01-27 22:51:50.921+00	2021-01-27 22:51:50.921+00
3114	2	43	86	2021-01-27 22:51:54.327+00	2021-01-27 22:51:54.327+00
3115	2	43	87	2021-01-27 22:51:57.363+00	2021-01-27 22:51:57.363+00
3116	2	43	88	2021-01-27 22:52:00.932+00	2021-01-27 22:52:00.932+00
3117	2	43	89	2021-01-27 22:52:04.58+00	2021-01-27 22:52:04.58+00
3118	2	43	90	2021-01-27 22:52:08.71+00	2021-01-27 22:52:08.71+00
3119	100	43	335	2021-01-27 22:54:30.616+00	2021-01-27 22:54:30.616+00
3120	1	43	91	2021-01-27 22:54:39.65+00	2021-01-27 22:54:39.65+00
3121	1	43	92	2021-01-27 22:54:56.289+00	2021-01-27 22:54:56.289+00
3122	1	43	93	2021-01-27 22:54:58.555+00	2021-01-27 22:54:58.555+00
3123	1	43	94	2021-01-27 22:55:02.37+00	2021-01-27 22:55:02.37+00
3124	1	43	95	2021-01-27 22:55:05.281+00	2021-01-27 22:55:05.281+00
3125	1	43	96	2021-01-27 22:55:09.187+00	2021-01-27 22:55:09.187+00
3126	1	43	97	2021-01-27 22:55:12.081+00	2021-01-27 22:55:12.081+00
3127	1	43	98	2021-01-27 22:55:16.771+00	2021-01-27 22:55:16.771+00
3128	1	43	99	2021-01-27 22:55:20.09+00	2021-01-27 22:55:20.09+00
3129	1	43	100	2021-01-27 22:55:22.818+00	2021-01-27 22:55:22.818+00
3130	1	43	101	2021-01-27 22:55:25.164+00	2021-01-27 22:55:25.164+00
3131	1	43	102	2021-01-27 22:55:29.678+00	2021-01-27 22:55:29.678+00
3132	1	43	103	2021-01-27 22:55:34.985+00	2021-01-27 22:55:34.985+00
3133	1	43	104	2021-01-27 22:55:39+00	2021-01-27 22:55:39+00
3134	1	43	105	2021-01-27 22:55:42.778+00	2021-01-27 22:55:42.778+00
3135	1	43	106	2021-01-27 22:55:53.612+00	2021-01-27 22:55:53.612+00
3136	1	43	107	2021-01-27 22:55:57.27+00	2021-01-27 22:55:57.27+00
3137	1	43	108	2021-01-27 22:59:56.763+00	2021-01-27 22:59:56.763+00
3138	1	43	109	2021-01-27 23:00:00.146+00	2021-01-27 23:00:00.146+00
3139	2	43	110	2021-01-27 23:00:08.673+00	2021-01-27 23:00:08.673+00
3140	2	43	111	2021-01-27 23:00:11.75+00	2021-01-27 23:00:11.75+00
3141	2	43	112	2021-01-27 23:00:14.349+00	2021-01-27 23:00:14.349+00
3142	2	43	113	2021-01-27 23:00:17.642+00	2021-01-27 23:00:17.642+00
3143	2	43	114	2021-01-27 23:00:20.316+00	2021-01-27 23:00:20.316+00
3144	2	43	115	2021-01-27 23:00:23.181+00	2021-01-27 23:00:23.181+00
3145	2	43	116	2021-01-27 23:00:25.548+00	2021-01-27 23:00:25.548+00
3146	2	43	117	2021-01-27 23:00:29.037+00	2021-01-27 23:00:29.037+00
3147	2	43	118	2021-01-27 23:00:31.993+00	2021-01-27 23:00:31.993+00
3148	2	43	119	2021-01-27 23:00:34.389+00	2021-01-27 23:00:34.389+00
3149	100	43	336	2021-01-27 23:00:56.626+00	2021-01-27 23:00:56.626+00
3150	1	43	120	2021-01-27 23:01:01.781+00	2021-01-27 23:01:01.781+00
3151	1	43	121	2021-01-27 23:01:04.937+00	2021-01-27 23:01:04.937+00
3152	1	43	122	2021-01-27 23:01:10.842+00	2021-01-27 23:01:10.842+00
3153	1	43	123	2021-01-27 23:01:13.186+00	2021-01-27 23:01:13.186+00
3154	1	43	124	2021-01-27 23:01:25.712+00	2021-01-27 23:01:25.712+00
3155	1	43	125	2021-01-27 23:01:28.619+00	2021-01-27 23:01:28.619+00
3156	1	43	126	2021-01-27 23:01:33.75+00	2021-01-27 23:01:33.75+00
3157	1	43	127	2021-01-27 23:01:39.016+00	2021-01-27 23:01:39.016+00
3158	1	43	128	2021-01-27 23:01:42.096+00	2021-01-27 23:01:42.096+00
3159	1	43	129	2021-01-27 23:01:51.632+00	2021-01-27 23:01:51.632+00
3160	1	43	130	2021-01-27 23:01:55.588+00	2021-01-27 23:01:55.588+00
3161	1	43	131	2021-01-27 23:02:30.981+00	2021-01-27 23:02:30.981+00
3162	1	43	132	2021-01-27 23:02:33.989+00	2021-01-27 23:02:33.989+00
3163	1	43	133	2021-01-27 23:02:37.774+00	2021-01-27 23:02:37.774+00
3164	1	43	134	2021-01-27 23:02:40.224+00	2021-01-27 23:02:40.224+00
3165	1	43	135	2021-01-27 23:02:42.256+00	2021-01-27 23:02:42.256+00
3166	5	43	136	2021-01-27 23:02:47.615+00	2021-01-27 23:02:47.615+00
3167	5	43	137	2021-01-27 23:02:51.458+00	2021-01-27 23:02:51.458+00
3168	5	43	138	2021-01-27 23:02:54.679+00	2021-01-27 23:02:54.679+00
3169	5	43	139	2021-01-27 23:02:58.048+00	2021-01-27 23:02:58.048+00
3170	5	43	140	2021-01-27 23:03:00.804+00	2021-01-27 23:03:00.804+00
3171	5	43	141	2021-01-27 23:03:06.668+00	2021-01-27 23:03:06.668+00
3172	5	43	142	2021-01-27 23:03:09.263+00	2021-01-27 23:03:09.263+00
3173	5	43	143	2021-01-27 23:03:13.618+00	2021-01-27 23:03:13.618+00
3174	5	43	144	2021-01-27 23:03:16.391+00	2021-01-27 23:03:16.391+00
3175	5	43	145	2021-01-27 23:03:20.097+00	2021-01-27 23:03:20.097+00
3176	5	43	146	2021-01-27 23:03:23.794+00	2021-01-27 23:03:23.794+00
3177	5	43	147	2021-01-27 23:03:31.718+00	2021-01-27 23:03:31.718+00
3178	5	43	148	2021-01-27 23:03:35.705+00	2021-01-27 23:03:35.705+00
3179	5	43	149	2021-01-27 23:03:38.5+00	2021-01-27 23:03:38.5+00
3180	5	43	150	2021-01-27 23:03:41.445+00	2021-01-27 23:03:41.445+00
3181	1	42	151	2021-01-27 23:04:09.656+00	2021-01-27 23:04:09.656+00
3182	1	42	152	2021-01-27 23:04:15.54+00	2021-01-27 23:04:15.54+00
3183	1	42	153	2021-01-27 23:04:19.942+00	2021-01-27 23:04:19.942+00
3184	1	42	154	2021-01-27 23:04:25.153+00	2021-01-27 23:04:25.153+00
3185	1	42	155	2021-01-27 23:04:29.093+00	2021-01-27 23:04:29.093+00
3186	1	42	156	2021-01-27 23:04:33.474+00	2021-01-27 23:04:33.474+00
3187	1	42	157	2021-01-27 23:04:37.412+00	2021-01-27 23:04:37.412+00
3188	1	42	158	2021-01-27 23:04:42.324+00	2021-01-27 23:04:42.324+00
3189	2	42	159	2021-01-27 23:04:53.957+00	2021-01-27 23:04:53.957+00
3190	2	42	160	2021-01-27 23:05:02.877+00	2021-01-27 23:05:02.877+00
3191	2	42	161	2021-01-27 23:05:11.66+00	2021-01-27 23:05:11.66+00
3192	2	42	162	2021-01-27 23:05:21.275+00	2021-01-27 23:05:21.275+00
3193	2	42	163	2021-01-27 23:05:31.47+00	2021-01-27 23:05:31.47+00
3194	1	42	164	2021-01-27 23:05:37.675+00	2021-01-27 23:05:37.675+00
3195	1	42	165	2021-01-27 23:05:40.716+00	2021-01-27 23:05:40.716+00
3196	1	42	166	2021-01-27 23:05:43.901+00	2021-01-27 23:05:43.901+00
3197	1	42	167	2021-01-27 23:05:47.057+00	2021-01-27 23:05:47.057+00
3198	1	42	168	2021-01-27 23:05:50.366+00	2021-01-27 23:05:50.366+00
3199	1	42	169	2021-01-27 23:05:53.876+00	2021-01-27 23:05:53.876+00
3200	1	42	170	2021-01-27 23:05:57.234+00	2021-01-27 23:05:57.234+00
3201	1	42	171	2021-01-27 23:06:00.711+00	2021-01-27 23:06:00.711+00
3202	1	42	172	2021-01-27 23:06:03.79+00	2021-01-27 23:06:03.79+00
3203	1	42	173	2021-01-27 23:06:07.072+00	2021-01-27 23:06:07.072+00
3204	1	42	174	2021-01-27 23:06:17.433+00	2021-01-27 23:06:17.433+00
3205	1	42	175	2021-01-27 23:06:25.807+00	2021-01-27 23:06:25.807+00
3206	1	42	176	2021-01-27 23:06:32.847+00	2021-01-27 23:06:32.847+00
3207	1	42	177	2021-01-27 23:06:39.635+00	2021-01-27 23:06:39.635+00
3208	4	42	337	2021-01-27 23:07:01.177+00	2021-01-27 23:07:01.177+00
3209	4	42	338	2021-01-27 23:07:05.448+00	2021-01-27 23:07:05.448+00
3210	4	42	339	2021-01-27 23:07:08.804+00	2021-01-27 23:07:08.804+00
3211	3	42	340	2021-01-27 23:16:04.746+00	2021-01-27 23:16:04.746+00
3212	3	42	341	2021-01-27 23:16:08.997+00	2021-01-27 23:16:08.997+00
3213	3	42	342	2021-01-27 23:16:12.813+00	2021-01-27 23:16:12.813+00
3214	3	42	343	2021-01-27 23:16:26.612+00	2021-01-27 23:16:26.612+00
3215	3	42	344	2021-01-27 23:16:31.714+00	2021-01-27 23:16:31.714+00
3216	3	42	345	2021-01-27 23:16:35.115+00	2021-01-27 23:16:35.115+00
3217	3	42	346	2021-01-27 23:16:38.88+00	2021-01-27 23:16:38.88+00
3218	3	42	347	2021-01-27 23:17:04.659+00	2021-01-27 23:17:04.659+00
3219	3	42	348	2021-01-27 23:17:09.996+00	2021-01-27 23:17:09.996+00
3220	3	42	349	2021-01-27 23:17:29.602+00	2021-01-27 23:17:29.602+00
3221	3	42	350	2021-01-27 23:17:38.777+00	2021-01-27 23:17:38.777+00
3222	3	42	351	2021-01-27 23:17:46.492+00	2021-01-27 23:17:46.492+00
3223	3	42	352	2021-01-27 23:17:49.862+00	2021-01-27 23:17:49.862+00
3224	3	42	353	2021-01-27 23:17:59.537+00	2021-01-27 23:17:59.537+00
3225	3	42	354	2021-01-27 23:18:03.021+00	2021-01-27 23:18:03.021+00
3226	3	42	355	2021-01-27 23:18:06.914+00	2021-01-27 23:18:06.914+00
3227	3	42	356	2021-01-27 23:22:01.816+00	2021-01-27 23:22:01.816+00
3228	4	42	357	2021-01-27 23:22:06.039+00	2021-01-27 23:22:06.039+00
3229	5	42	358	2021-01-27 23:28:08.945+00	2021-01-27 23:28:08.945+00
3230	5	42	359	2021-01-27 23:28:13.314+00	2021-01-27 23:28:13.314+00
3231	5	42	360	2021-01-27 23:28:17.507+00	2021-01-27 23:28:17.507+00
3232	5	42	361	2021-01-27 23:30:16.914+00	2021-01-27 23:30:16.914+00
3233	5	42	362	2021-01-27 23:30:21.051+00	2021-01-27 23:30:21.051+00
3234	5	42	363	2021-01-27 23:30:25.155+00	2021-01-27 23:30:25.155+00
3235	5	42	364	2021-01-27 23:30:29.368+00	2021-01-27 23:30:29.368+00
3236	3	42	186	2021-01-28 02:30:44.197+00	2021-01-28 02:30:44.197+00
3237	3	42	187	2021-01-28 02:30:46.675+00	2021-01-28 02:30:46.675+00
3238	4	42	188	2021-01-28 02:30:49.745+00	2021-01-28 02:30:49.745+00
3239	2	42	189	2021-01-28 02:30:53.204+00	2021-01-28 02:30:53.204+00
3240	1	42	190	2021-01-28 02:30:56.154+00	2021-01-28 02:30:56.154+00
3241	3	42	191	2021-01-28 02:30:59.101+00	2021-01-28 02:30:59.101+00
3242	1	42	192	2021-01-28 02:31:01.907+00	2021-01-28 02:31:01.907+00
3243	3	42	193	2021-01-28 02:31:05.341+00	2021-01-28 02:31:05.341+00
3244	3	42	194	2021-01-28 02:31:08.423+00	2021-01-28 02:31:08.423+00
3245	3	42	195	2021-01-28 02:31:10.941+00	2021-01-28 02:31:10.941+00
3246	2	42	196	2021-01-28 02:31:14.071+00	2021-01-28 02:31:14.071+00
3247	2	42	197	2021-01-28 02:31:17.157+00	2021-01-28 02:31:17.157+00
3248	2	42	198	2021-01-28 02:31:20.272+00	2021-01-28 02:31:20.272+00
3249	3	42	199	2021-01-28 02:31:23.327+00	2021-01-28 02:31:23.327+00
3250	3	42	200	2021-01-28 02:31:29.259+00	2021-01-28 02:31:29.259+00
3251	3	42	201	2021-01-28 02:31:31.761+00	2021-01-28 02:31:31.761+00
3252	3	42	202	2021-01-28 02:31:34.241+00	2021-01-28 02:31:34.241+00
3253	1	42	203	2021-01-28 02:31:43.792+00	2021-01-28 02:31:43.792+00
3254	1	42	204	2021-01-28 02:31:51.013+00	2021-01-28 02:31:51.013+00
3255	0	42	205	2021-01-28 02:31:58.135+00	2021-01-28 02:31:58.135+00
3256	1	42	206	2021-01-28 02:32:05.205+00	2021-01-28 02:32:05.205+00
3257	5	42	208	2021-01-28 02:32:28.003+00	2021-01-28 02:32:28.003+00
3258	2	42	209	2021-01-28 02:32:31.428+00	2021-01-28 02:32:31.428+00
3259	2	42	210	2021-01-28 02:32:34.455+00	2021-01-28 02:32:34.455+00
3260	2	42	211	2021-01-28 02:32:37.4+00	2021-01-28 02:32:37.4+00
3261	5	42	212	2021-01-28 02:32:40.749+00	2021-01-28 02:32:40.749+00
3262	4	42	213	2021-01-28 02:32:44.069+00	2021-01-28 02:32:44.069+00
3263	3	42	214	2021-01-28 02:32:47.018+00	2021-01-28 02:32:47.018+00
3264	6	42	215	2021-01-28 02:32:50+00	2021-01-28 02:32:50+00
3265	5	42	216	2021-01-28 02:32:53.372+00	2021-01-28 02:32:53.372+00
3266	4	42	217	2021-01-28 02:32:56.141+00	2021-01-28 02:32:56.141+00
3267	6	42	218	2021-01-28 02:32:59.23+00	2021-01-28 02:32:59.23+00
3268	4	42	219	2021-01-28 02:33:02.208+00	2021-01-28 02:33:02.208+00
3269	2	42	220	2021-01-28 02:33:05.168+00	2021-01-28 02:33:05.168+00
3270	4	42	221	2021-01-28 02:33:08.231+00	2021-01-28 02:33:08.231+00
3271	4	42	222	2021-01-28 02:33:11.152+00	2021-01-28 02:33:11.152+00
3272	4	42	223	2021-01-28 02:33:14.35+00	2021-01-28 02:33:14.35+00
3273	5	42	224	2021-01-28 02:33:17.657+00	2021-01-28 02:33:17.657+00
3274	6	42	225	2021-01-28 02:33:21.302+00	2021-01-28 02:33:21.302+00
3275	2	42	226	2021-01-28 02:33:24.416+00	2021-01-28 02:33:24.416+00
3276	6	42	227	2021-01-28 02:33:27.842+00	2021-01-28 02:33:27.842+00
3277	4	42	228	2021-01-28 02:33:30.674+00	2021-01-28 02:33:30.674+00
3278	2	42	229	2021-01-28 02:33:34.104+00	2021-01-28 02:33:34.104+00
3279	4	42	230	2021-01-28 02:33:36.928+00	2021-01-28 02:33:36.928+00
3280	4	42	231	2021-01-28 02:33:39.979+00	2021-01-28 02:33:39.979+00
3281	5	42	232	2021-01-28 02:33:43.244+00	2021-01-28 02:33:43.244+00
3282	4	42	233	2021-01-28 02:33:46.515+00	2021-01-28 02:33:46.515+00
3283	1	42	234	2021-01-28 02:34:24.762+00	2021-01-28 02:34:24.762+00
3284	4	42	235	2021-01-28 02:34:27.818+00	2021-01-28 02:34:27.818+00
3285	4	42	236	2021-01-28 02:34:31.493+00	2021-01-28 02:34:31.493+00
3286	2	42	237	2021-01-28 02:34:34.732+00	2021-01-28 02:34:34.732+00
3287	6	42	238	2021-01-28 02:34:37.7+00	2021-01-28 02:34:37.7+00
3288	2	42	239	2021-01-28 02:34:40.738+00	2021-01-28 02:34:40.738+00
3289	4	42	240	2021-01-28 02:34:43.764+00	2021-01-28 02:34:43.764+00
3290	1	42	242	2021-01-28 02:34:49.944+00	2021-01-28 02:34:49.944+00
3291	0	42	243	2021-01-28 02:34:53.164+00	2021-01-28 02:34:53.164+00
3292	1	42	244	2021-01-28 02:35:51.472+00	2021-01-28 02:35:51.472+00
3293	1	42	245	2021-01-28 02:35:54.3+00	2021-01-28 02:35:54.3+00
3294	0	42	246	2021-01-28 02:35:57.515+00	2021-01-28 02:35:57.515+00
3295	1	42	247	2021-01-28 02:36:00.622+00	2021-01-28 02:36:00.622+00
3296	1	42	248	2021-01-28 02:36:04.093+00	2021-01-28 02:36:04.093+00
3297	0	42	249	2021-01-28 02:36:07.525+00	2021-01-28 02:36:07.525+00
3298	1	42	250	2021-01-28 02:36:10.608+00	2021-01-28 02:36:10.608+00
3299	0	42	251	2021-01-28 02:36:13.75+00	2021-01-28 02:36:13.75+00
3300	1	42	252	2021-01-28 02:36:17.344+00	2021-01-28 02:36:17.344+00
3301	1	42	253	2021-01-28 02:36:20.605+00	2021-01-28 02:36:20.605+00
3302	1	42	254	2021-01-28 02:36:23.518+00	2021-01-28 02:36:23.518+00
3303	1	42	255	2021-01-28 02:36:26.593+00	2021-01-28 02:36:26.593+00
3304	1	42	256	2021-01-28 02:36:30.116+00	2021-01-28 02:36:30.116+00
3305	1	42	257	2021-01-28 02:36:33.823+00	2021-01-28 02:36:33.823+00
3306	1	42	258	2021-01-28 02:37:03.468+00	2021-01-28 02:37:03.468+00
3307	0	42	259	2021-01-28 02:37:09.482+00	2021-01-28 02:37:09.482+00
3308	1	42	260	2021-01-28 02:37:13.164+00	2021-01-28 02:37:13.164+00
3309	1	42	261	2021-01-28 02:37:15.99+00	2021-01-28 02:37:15.99+00
3310	1	42	262	2021-01-28 02:37:25.096+00	2021-01-28 02:37:25.096+00
3311	1	42	263	2021-01-28 02:37:57.976+00	2021-01-28 02:37:57.976+00
3312	0	42	264	2021-01-28 02:38:01.469+00	2021-01-28 02:38:01.469+00
3313	0	42	265	2021-01-28 02:38:04.759+00	2021-01-28 02:38:04.759+00
3314	1	42	266	2021-01-28 02:38:08.277+00	2021-01-28 02:38:08.277+00
3315	0	42	267	2021-01-28 02:38:11.7+00	2021-01-28 02:38:11.7+00
3316	1	42	268	2021-01-28 02:38:15.081+00	2021-01-28 02:38:15.081+00
3317	1	42	269	2021-01-28 02:38:18.379+00	2021-01-28 02:38:18.379+00
3318	1	42	270	2021-01-28 02:38:21.271+00	2021-01-28 02:38:21.271+00
3319	1	42	271	2021-01-28 02:38:25.672+00	2021-01-28 02:38:25.672+00
3320	1	42	272	2021-01-28 02:38:37.627+00	2021-01-28 02:38:37.627+00
3321	0	42	273	2021-01-28 02:38:41.555+00	2021-01-28 02:38:41.555+00
3322	0	42	274	2021-01-28 02:38:45.528+00	2021-01-28 02:38:45.528+00
3323	1	42	275	2021-01-28 02:38:49.188+00	2021-01-28 02:38:49.188+00
3324	1	42	276	2021-01-28 02:38:53.155+00	2021-01-28 02:38:53.155+00
3325	1	42	277	2021-01-28 02:39:02.129+00	2021-01-28 02:39:02.129+00
3326	1	42	278	2021-01-28 02:39:05.517+00	2021-01-28 02:39:05.517+00
3327	1	42	279	2021-01-28 02:39:09.09+00	2021-01-28 02:39:09.09+00
3328	1	42	280	2021-01-28 02:39:13.273+00	2021-01-28 02:39:13.273+00
3329	1	42	281	2021-01-28 02:39:17.153+00	2021-01-28 02:39:17.153+00
3330	0	42	282	2021-01-28 02:39:21.296+00	2021-01-28 02:39:21.296+00
3331	1	42	283	2021-01-28 02:39:25.416+00	2021-01-28 02:39:25.416+00
3332	0	42	284	2021-01-28 02:39:29.069+00	2021-01-28 02:39:29.069+00
3333	1	42	285	2021-01-28 02:39:35.335+00	2021-01-28 02:39:35.335+00
3334	2	42	286	2021-01-28 02:40:53.928+00	2021-01-28 02:40:53.928+00
3335	3	42	287	2021-01-28 02:40:56.883+00	2021-01-28 02:40:56.883+00
3336	1	42	288	2021-01-28 02:40:59.864+00	2021-01-28 02:40:59.864+00
3337	1	42	289	2021-01-28 02:41:02.514+00	2021-01-28 02:41:02.514+00
3338	3	42	290	2021-01-28 02:41:05.329+00	2021-01-28 02:41:05.329+00
3339	1	42	291	2021-01-28 02:41:08.325+00	2021-01-28 02:41:08.325+00
3340	2	42	292	2021-01-28 02:41:11.567+00	2021-01-28 02:41:11.567+00
3341	2	42	293	2021-01-28 02:41:14.229+00	2021-01-28 02:41:14.229+00
3342	1	42	294	2021-01-28 02:41:16.949+00	2021-01-28 02:41:16.949+00
3343	3	42	295	2021-01-28 02:41:19.69+00	2021-01-28 02:41:19.69+00
3344	2	42	296	2021-01-28 02:41:34.499+00	2021-01-28 02:41:34.499+00
3345	4	42	297	2021-01-28 02:41:37.487+00	2021-01-28 02:41:37.487+00
3346	2	42	298	2021-01-28 02:41:40.174+00	2021-01-28 02:41:40.174+00
3347	2	42	299	2021-01-28 02:41:42.7+00	2021-01-28 02:41:42.7+00
3348	3	42	300	2021-01-28 02:41:45.444+00	2021-01-28 02:41:45.444+00
3349	4	42	301	2021-01-28 02:41:48.282+00	2021-01-28 02:41:48.282+00
3350	2	42	302	2021-01-28 02:41:50.909+00	2021-01-28 02:41:50.909+00
3351	1	42	303	2021-01-28 02:41:53.715+00	2021-01-28 02:41:53.715+00
3352	2	42	304	2021-01-28 02:41:56.602+00	2021-01-28 02:41:56.602+00
3353	3	42	305	2021-01-28 02:41:59.381+00	2021-01-28 02:41:59.381+00
3354	1	42	306	2021-01-28 02:42:02.642+00	2021-01-28 02:42:02.642+00
3355	2	42	307	2021-01-28 02:42:05.357+00	2021-01-28 02:42:05.357+00
3356	5	42	308	2021-01-28 02:42:08.372+00	2021-01-28 02:42:08.372+00
3357	1	42	309	2021-01-28 02:42:11.379+00	2021-01-28 02:42:11.379+00
3358	2	42	310	2021-01-28 02:42:14.44+00	2021-01-28 02:42:14.44+00
3359	4	42	311	2021-01-28 02:42:17.372+00	2021-01-28 02:42:17.372+00
3360	2	42	312	2021-01-28 02:42:20.291+00	2021-01-28 02:42:20.291+00
3361	3	42	313	2021-01-28 02:42:23.195+00	2021-01-28 02:42:23.195+00
3362	5	42	314	2021-01-28 02:42:26.121+00	2021-01-28 02:42:26.121+00
3363	4	42	315	2021-01-28 02:42:29.082+00	2021-01-28 02:42:29.082+00
3364	5	42	316	2021-01-28 02:42:32.044+00	2021-01-28 02:42:32.044+00
3365	5	42	317	2021-01-28 02:42:34.844+00	2021-01-28 02:42:34.844+00
3366	1	42	318	2021-01-28 02:42:37.892+00	2021-01-28 02:42:37.892+00
3367	3	42	319	2021-01-28 02:42:40.656+00	2021-01-28 02:42:40.656+00
3368	5	42	320	2021-01-28 02:42:43.815+00	2021-01-28 02:42:43.815+00
3369	2	42	321	2021-01-28 02:42:46.476+00	2021-01-28 02:42:46.476+00
3370	4	42	322	2021-01-28 02:42:49.298+00	2021-01-28 02:42:49.298+00
3371	0	42	207	2021-01-28 02:43:25.491+00	2021-01-28 02:43:25.491+00
3372	0	42	241	2021-01-28 15:17:06.629+00	2021-01-28 15:17:06.629+00
3373	100	70	332	2021-01-28 19:51:09.82+00	2021-01-28 19:51:09.82+00
3374	1	70	3	2021-01-28 19:51:15.306+00	2021-01-28 19:51:15.306+00
3375	1	70	4	2021-01-28 19:51:18.602+00	2021-01-28 19:51:18.602+00
3376	0	70	5	2021-01-28 19:51:31.462+00	2021-01-28 19:51:31.462+00
3377	1	70	6	2021-01-28 19:56:17.203+00	2021-01-28 19:56:17.203+00
3378	1	70	7	2021-01-28 19:56:20.264+00	2021-01-28 19:56:20.264+00
3379	1	70	8	2021-01-28 19:56:23.306+00	2021-01-28 19:56:23.306+00
3380	1	70	9	2021-01-28 19:56:26.305+00	2021-01-28 19:56:26.305+00
3381	0	70	10	2021-01-28 19:56:29.53+00	2021-01-28 19:56:29.53+00
3382	1	70	11	2021-01-28 19:56:32.672+00	2021-01-28 19:56:32.672+00
3383	1	70	12	2021-01-28 19:56:35.939+00	2021-01-28 19:56:35.939+00
3384	1	70	13	2021-01-28 19:56:39.12+00	2021-01-28 19:56:39.12+00
3385	0	70	14	2021-01-28 19:56:42.466+00	2021-01-28 19:56:42.466+00
3386	1	70	15	2021-01-28 19:56:46.079+00	2021-01-28 19:56:46.079+00
3387	0	70	16	2021-01-28 19:56:49.483+00	2021-01-28 19:56:49.483+00
3388	1	70	17	2021-01-28 19:56:52.697+00	2021-01-28 19:56:52.697+00
3389	1	70	18	2021-01-28 19:56:55.897+00	2021-01-28 19:56:55.897+00
3390	4	70	19	2021-01-28 19:57:01.599+00	2021-01-28 19:57:01.599+00
3391	3	70	20	2021-01-28 19:57:04.36+00	2021-01-28 19:57:04.36+00
3392	1	70	21	2021-01-28 19:57:06.865+00	2021-01-28 19:57:06.865+00
3393	4	70	22	2021-01-28 19:57:09.73+00	2021-01-28 19:57:09.73+00
3394	2	70	23	2021-01-28 19:57:12.67+00	2021-01-28 19:57:12.67+00
3395	3	70	24	2021-01-28 19:57:15.403+00	2021-01-28 19:57:15.403+00
3396	4	70	25	2021-01-28 19:57:18.479+00	2021-01-28 19:57:18.479+00
3397	1	70	26	2021-01-28 19:57:21.727+00	2021-01-28 19:57:21.727+00
3398	3	70	27	2021-01-28 19:57:24.632+00	2021-01-28 19:57:24.632+00
3399	4	70	28	2021-01-28 19:57:27.629+00	2021-01-28 19:57:27.629+00
3400	2	70	29	2021-01-28 19:57:30.4+00	2021-01-28 19:57:30.4+00
3401	1	70	30	2021-01-28 19:57:33.613+00	2021-01-28 19:57:33.613+00
3402	1	70	31	2021-01-28 19:57:36.279+00	2021-01-28 19:57:36.279+00
3403	3	70	32	2021-01-28 19:57:39.155+00	2021-01-28 19:57:39.155+00
3404	4	70	33	2021-01-28 19:57:41.889+00	2021-01-28 19:57:41.889+00
3405	3	70	34	2021-01-28 19:57:44.746+00	2021-01-28 19:57:44.746+00
3406	4	70	35	2021-01-28 19:57:47.424+00	2021-01-28 19:57:47.424+00
3407	2	70	36	2021-01-28 19:57:50.508+00	2021-01-28 19:57:50.508+00
3408	100	70	333	2021-01-28 20:05:36.034+00	2021-01-28 20:05:36.034+00
3409	2	70	37	2021-01-28 20:05:52.941+00	2021-01-28 20:05:52.941+00
3410	2	70	38	2021-01-28 20:05:56.404+00	2021-01-28 20:05:56.404+00
3411	2	70	39	2021-01-28 20:05:59.494+00	2021-01-28 20:05:59.494+00
3412	2	70	40	2021-01-28 20:06:03.082+00	2021-01-28 20:06:03.082+00
3413	3	70	41	2021-01-28 20:06:06.723+00	2021-01-28 20:06:06.723+00
3414	1	70	42	2021-01-28 20:06:10.26+00	2021-01-28 20:06:10.26+00
3415	2	70	43	2021-01-28 20:06:13.665+00	2021-01-28 20:06:13.665+00
3416	1	70	44	2021-01-28 20:06:17.261+00	2021-01-28 20:06:17.261+00
3417	2	70	45	2021-01-28 20:06:20.791+00	2021-01-28 20:06:20.791+00
3418	1	70	46	2021-01-28 20:06:24.188+00	2021-01-28 20:06:24.188+00
3419	2	70	47	2021-01-28 20:06:27.764+00	2021-01-28 20:06:27.764+00
3420	2	70	48	2021-01-28 20:06:31.44+00	2021-01-28 20:06:31.44+00
3421	2	70	49	2021-01-28 20:06:35.494+00	2021-01-28 20:06:35.494+00
3422	3	70	50	2021-01-28 20:06:39.462+00	2021-01-28 20:06:39.462+00
3423	1	70	51	2021-01-28 20:06:43.291+00	2021-01-28 20:06:43.291+00
3424	4	70	52	2021-01-28 20:06:47.527+00	2021-01-28 20:06:47.527+00
3425	1	70	53	2021-01-28 20:06:52.848+00	2021-01-28 20:06:52.848+00
3426	1	70	54	2021-01-28 20:06:56.692+00	2021-01-28 20:06:56.692+00
3427	2	70	55	2021-01-28 20:07:00.514+00	2021-01-28 20:07:00.514+00
3428	2	70	56	2021-01-28 20:07:04.386+00	2021-01-28 20:07:04.386+00
3429	3	70	57	2021-01-28 20:07:08.102+00	2021-01-28 20:07:08.102+00
3430	2	70	58	2021-01-28 20:07:11.98+00	2021-01-28 20:07:11.98+00
3431	3	70	59	2021-01-28 20:07:15.84+00	2021-01-28 20:07:15.84+00
3432	100	71	333	2021-01-28 20:16:24.078+00	2021-01-28 20:16:24.078+00
3433	2	71	37	2021-01-28 20:16:29.467+00	2021-01-28 20:16:29.467+00
3434	2	71	38	2021-01-28 20:16:33.015+00	2021-01-28 20:16:33.015+00
3435	3	71	39	2021-01-28 20:16:36.42+00	2021-01-28 20:16:36.42+00
3436	1	71	40	2021-01-28 20:16:39.877+00	2021-01-28 20:16:39.877+00
3437	2	71	41	2021-01-28 20:16:43.263+00	2021-01-28 20:16:43.263+00
3438	2	71	42	2021-01-28 20:16:46.742+00	2021-01-28 20:16:46.742+00
3439	3	71	43	2021-01-28 20:16:50.164+00	2021-01-28 20:16:50.164+00
3440	1	71	44	2021-01-28 20:16:53.797+00	2021-01-28 20:16:53.797+00
3441	2	71	45	2021-01-28 20:16:57.266+00	2021-01-28 20:16:57.266+00
3442	1	71	46	2021-01-28 20:17:00.719+00	2021-01-28 20:17:00.719+00
3443	1	71	47	2021-01-28 20:17:04.164+00	2021-01-28 20:17:04.164+00
3444	1	71	48	2021-01-28 20:17:08.997+00	2021-01-28 20:17:08.997+00
3445	2	71	49	2021-01-28 20:17:12.65+00	2021-01-28 20:17:12.65+00
3446	3	71	50	2021-01-28 20:17:16.402+00	2021-01-28 20:17:16.402+00
3447	2	71	51	2021-01-28 20:17:20.976+00	2021-01-28 20:17:20.976+00
3448	3	71	52	2021-01-28 20:17:24.841+00	2021-01-28 20:17:24.841+00
3449	2	71	53	2021-01-28 20:17:31.064+00	2021-01-28 20:17:31.064+00
3450	2	71	54	2021-01-28 20:17:35.571+00	2021-01-28 20:17:35.571+00
3451	2	71	55	2021-01-28 20:17:39.527+00	2021-01-28 20:17:39.527+00
3452	2	71	56	2021-01-28 20:17:43.323+00	2021-01-28 20:17:43.323+00
3453	3	71	57	2021-01-28 20:17:49.866+00	2021-01-28 20:17:49.866+00
3454	2	71	58	2021-01-28 20:17:54.83+00	2021-01-28 20:17:54.83+00
3455	2	71	59	2021-01-28 20:17:58.826+00	2021-01-28 20:17:58.826+00
3456	100	71	332	2021-01-28 20:20:34.321+00	2021-01-28 20:20:34.321+00
3457	1	71	3	2021-01-28 20:20:39.516+00	2021-01-28 20:20:39.516+00
3458	1	71	4	2021-01-28 20:20:42.715+00	2021-01-28 20:20:42.715+00
3459	0	71	5	2021-01-28 20:20:45.948+00	2021-01-28 20:20:45.948+00
3460	0	71	6	2021-01-28 20:20:49.758+00	2021-01-28 20:20:49.758+00
3461	1	71	7	2021-01-28 20:20:52.902+00	2021-01-28 20:20:52.902+00
3462	0	71	8	2021-01-28 20:20:56.775+00	2021-01-28 20:20:56.775+00
3463	1	71	9	2021-01-28 20:21:03.149+00	2021-01-28 20:21:03.149+00
3464	0	71	10	2021-01-28 20:21:06.434+00	2021-01-28 20:21:06.434+00
3465	0	71	11	2021-01-28 20:21:09.727+00	2021-01-28 20:21:09.727+00
3466	1	71	12	2021-01-28 20:21:12.895+00	2021-01-28 20:21:12.895+00
3467	1	71	13	2021-01-28 20:21:16.338+00	2021-01-28 20:21:16.338+00
3468	0	71	14	2021-01-28 20:21:19.92+00	2021-01-28 20:21:19.92+00
3469	1	71	15	2021-01-28 20:21:23.372+00	2021-01-28 20:21:23.372+00
3470	0	71	16	2021-01-28 20:21:26.751+00	2021-01-28 20:21:26.751+00
3471	1	71	17	2021-01-28 20:21:29.823+00	2021-01-28 20:21:29.823+00
3472	1	71	18	2021-01-28 20:21:33.028+00	2021-01-28 20:21:33.028+00
3473	2	71	19	2021-01-28 20:21:39.894+00	2021-01-28 20:21:39.894+00
3474	3	71	20	2021-01-28 20:21:42.562+00	2021-01-28 20:21:42.562+00
3475	1	71	21	2021-01-28 20:21:45.067+00	2021-01-28 20:21:45.067+00
3476	4	71	22	2021-01-28 20:21:47.808+00	2021-01-28 20:21:47.808+00
3477	2	71	23	2021-01-28 20:21:50.837+00	2021-01-28 20:21:50.837+00
3478	3	71	24	2021-01-28 20:21:53.715+00	2021-01-28 20:21:53.715+00
3479	4	71	25	2021-01-28 20:21:56.487+00	2021-01-28 20:21:56.487+00
3480	2	71	26	2021-01-28 20:21:59.308+00	2021-01-28 20:21:59.308+00
3481	3	71	27	2021-01-28 20:22:01.878+00	2021-01-28 20:22:01.878+00
3482	4	71	28	2021-01-28 20:22:04.655+00	2021-01-28 20:22:04.655+00
3483	2	71	29	2021-01-28 20:22:07.41+00	2021-01-28 20:22:07.41+00
3484	1	71	30	2021-01-28 20:22:10.153+00	2021-01-28 20:22:10.153+00
3485	1	71	31	2021-01-28 20:22:12.938+00	2021-01-28 20:22:12.938+00
3486	3	71	32	2021-01-28 20:22:15.65+00	2021-01-28 20:22:15.65+00
3487	4	71	33	2021-01-28 20:22:18.417+00	2021-01-28 20:22:18.417+00
3488	3	71	34	2021-01-28 20:22:21.386+00	2021-01-28 20:22:21.386+00
3489	4	71	35	2021-01-28 20:22:24.213+00	2021-01-28 20:22:24.213+00
3490	2	71	36	2021-01-28 20:22:26.925+00	2021-01-28 20:22:26.925+00
3491	100	71	336	2021-01-29 02:02:48.42+00	2021-01-29 02:02:48.42+00
3492	1	71	120	2021-01-29 02:02:53.89+00	2021-01-29 02:02:53.89+00
3493	1	71	121	2021-01-29 02:02:56.16+00	2021-01-29 02:02:56.16+00
3494	1	71	122	2021-01-29 02:02:58.483+00	2021-01-29 02:02:58.483+00
3495	1	71	123	2021-01-29 02:03:01.132+00	2021-01-29 02:03:01.132+00
3496	0	71	124	2021-01-29 02:03:03.488+00	2021-01-29 02:03:03.488+00
3497	0	71	125	2021-01-29 02:03:06.7+00	2021-01-29 02:03:06.7+00
3498	0	71	126	2021-01-29 02:03:09.207+00	2021-01-29 02:03:09.207+00
3499	1	71	127	2021-01-29 02:03:11.994+00	2021-01-29 02:03:11.994+00
3500	1	71	128	2021-01-29 02:03:14.618+00	2021-01-29 02:03:14.618+00
3501	1	71	129	2021-01-29 02:03:17.4+00	2021-01-29 02:03:17.4+00
3502	1	71	130	2021-01-29 02:03:19.915+00	2021-01-29 02:03:19.915+00
3503	0	71	131	2021-01-29 02:03:22.712+00	2021-01-29 02:03:22.712+00
3504	0	71	132	2021-01-29 02:03:25.648+00	2021-01-29 02:03:25.648+00
3505	0	71	133	2021-01-29 02:03:28.922+00	2021-01-29 02:03:28.922+00
3506	1	71	134	2021-01-29 02:03:31.452+00	2021-01-29 02:03:31.452+00
3507	0	71	135	2021-01-29 02:03:34.144+00	2021-01-29 02:03:34.144+00
3508	100	45	332	2021-01-29 04:25:11.775+00	2021-01-29 04:25:11.775+00
3509	1	45	3	2021-01-29 04:25:57.612+00	2021-01-29 04:25:57.612+00
3510	1	45	4	2021-01-29 04:26:01.842+00	2021-01-29 04:26:01.842+00
3511	0	45	5	2021-01-29 04:26:05.078+00	2021-01-29 04:26:05.078+00
3512	0	45	6	2021-01-29 04:26:08.296+00	2021-01-29 04:26:08.296+00
3513	0	45	7	2021-01-29 04:26:13.062+00	2021-01-29 04:26:13.062+00
3514	0	45	8	2021-01-29 04:26:16.225+00	2021-01-29 04:26:16.225+00
3515	1	45	9	2021-01-29 04:26:19.924+00	2021-01-29 04:26:19.924+00
3516	1	45	10	2021-01-29 04:39:44.088+00	2021-01-29 04:39:44.088+00
3517	1	45	11	2021-01-29 04:39:47.185+00	2021-01-29 04:39:47.185+00
3518	1	45	12	2021-01-29 04:39:50.534+00	2021-01-29 04:39:50.534+00
3519	0	45	13	2021-01-29 04:39:53.655+00	2021-01-29 04:39:53.655+00
3520	0	45	14	2021-01-29 04:39:56.866+00	2021-01-29 04:39:56.866+00
3521	1	45	15	2021-01-29 04:39:59.96+00	2021-01-29 04:39:59.96+00
3522	0	45	16	2021-01-29 04:40:03.062+00	2021-01-29 04:40:03.062+00
3523	1	45	17	2021-01-29 04:40:06.392+00	2021-01-29 04:40:06.392+00
3524	1	45	18	2021-01-29 04:40:09.687+00	2021-01-29 04:40:09.687+00
3525	4	45	19	2021-01-29 04:40:15.443+00	2021-01-29 04:40:15.443+00
3526	3	45	20	2021-01-29 04:40:18.032+00	2021-01-29 04:40:18.032+00
3527	1	45	21	2021-01-29 04:40:20.593+00	2021-01-29 04:40:20.593+00
3528	4	45	22	2021-01-29 04:40:23.199+00	2021-01-29 04:40:23.199+00
3529	3	45	23	2021-01-29 04:40:27.274+00	2021-01-29 04:40:27.274+00
3530	3	45	24	2021-01-29 04:40:29.959+00	2021-01-29 04:40:29.959+00
3531	4	45	25	2021-01-29 04:40:32.907+00	2021-01-29 04:40:32.907+00
3532	2	45	26	2021-01-29 04:40:35.868+00	2021-01-29 04:40:35.868+00
3533	3	45	27	2021-01-29 04:40:38.625+00	2021-01-29 04:40:38.625+00
3534	4	45	28	2021-01-29 04:40:41.488+00	2021-01-29 04:40:41.488+00
3535	2	45	29	2021-01-29 04:40:44.385+00	2021-01-29 04:40:44.385+00
3536	1	45	30	2021-01-29 04:40:47.073+00	2021-01-29 04:40:47.073+00
3537	1	45	31	2021-01-29 04:40:49.783+00	2021-01-29 04:40:49.783+00
3538	3	45	32	2021-01-29 04:40:52.727+00	2021-01-29 04:40:52.727+00
3539	4	45	33	2021-01-29 04:40:55.623+00	2021-01-29 04:40:55.623+00
3540	3	45	34	2021-01-29 04:40:58.385+00	2021-01-29 04:40:58.385+00
3541	4	45	35	2021-01-29 04:41:01.014+00	2021-01-29 04:41:01.014+00
3542	2	45	36	2021-01-29 04:41:03.727+00	2021-01-29 04:41:03.727+00
3543	100	45	333	2021-01-29 04:42:16.771+00	2021-01-29 04:42:16.771+00
3544	2	45	37	2021-01-29 04:42:22.307+00	2021-01-29 04:42:22.307+00
3545	2	45	38	2021-01-29 04:42:25.645+00	2021-01-29 04:42:25.645+00
3546	3	45	39	2021-01-29 04:42:29.051+00	2021-01-29 04:42:29.051+00
3547	1	45	40	2021-01-29 04:42:32.777+00	2021-01-29 04:42:32.777+00
3548	3	45	41	2021-01-29 04:42:36.701+00	2021-01-29 04:42:36.701+00
3549	1	45	42	2021-01-29 04:42:40.221+00	2021-01-29 04:42:40.221+00
3550	2	45	43	2021-01-29 04:42:44.087+00	2021-01-29 04:42:44.087+00
3551	1	45	44	2021-01-29 04:42:47.589+00	2021-01-29 04:42:47.589+00
3552	3	45	45	2021-01-29 04:42:51.196+00	2021-01-29 04:42:51.196+00
3553	2	45	46	2021-01-29 04:42:54.677+00	2021-01-29 04:42:54.677+00
3554	1	45	47	2021-01-29 04:42:58.103+00	2021-01-29 04:42:58.103+00
3555	1	45	48	2021-01-29 04:43:01.862+00	2021-01-29 04:43:01.862+00
3556	3	45	49	2021-01-29 04:43:05.609+00	2021-01-29 04:43:05.609+00
3557	2	45	50	2021-01-29 04:43:09.557+00	2021-01-29 04:43:09.557+00
3558	1	45	51	2021-01-29 04:43:13.676+00	2021-01-29 04:43:13.676+00
3559	3	45	52	2021-01-29 04:43:17.54+00	2021-01-29 04:43:17.54+00
3560	2	45	53	2021-01-29 04:43:21.528+00	2021-01-29 04:43:21.528+00
3561	2	45	54	2021-01-29 04:43:25.352+00	2021-01-29 04:43:25.352+00
3562	2	45	55	2021-01-29 04:43:29.346+00	2021-01-29 04:43:29.346+00
3563	3	45	56	2021-01-29 04:43:33.224+00	2021-01-29 04:43:33.224+00
3564	2	45	57	2021-01-29 04:43:37.5+00	2021-01-29 04:43:37.5+00
3565	2	45	58	2021-01-29 04:43:41.352+00	2021-01-29 04:43:41.352+00
3566	3	45	59	2021-01-29 04:43:45.298+00	2021-01-29 04:43:45.298+00
3567	100	45	334	2021-01-29 04:45:00.193+00	2021-01-29 04:45:00.193+00
3568	1	45	60	2021-01-29 04:45:05.653+00	2021-01-29 04:45:05.653+00
3569	1	45	61	2021-01-29 04:45:09.134+00	2021-01-29 04:45:09.134+00
3570	0	45	62	2021-01-29 04:45:12.393+00	2021-01-29 04:45:12.393+00
3571	1	45	63	2021-01-29 04:45:15.56+00	2021-01-29 04:45:15.56+00
3572	0	45	64	2021-01-29 04:45:18.849+00	2021-01-29 04:45:18.849+00
3573	0	45	65	2021-01-29 04:45:22.726+00	2021-01-29 04:45:22.726+00
3574	1	45	66	2021-01-29 04:45:25.843+00	2021-01-29 04:45:25.843+00
3575	1	45	67	2021-01-29 04:45:29.028+00	2021-01-29 04:45:29.028+00
3576	1	45	68	2021-01-29 04:45:32.095+00	2021-01-29 04:45:32.095+00
3577	0	45	69	2021-01-29 04:45:35.911+00	2021-01-29 04:45:35.911+00
3578	1	45	70	2021-01-29 04:45:38.98+00	2021-01-29 04:45:38.98+00
3579	0	45	71	2021-01-29 04:45:42.446+00	2021-01-29 04:45:42.446+00
3580	4	45	72	2021-01-29 04:45:47.384+00	2021-01-29 04:45:47.384+00
3581	1	45	73	2021-01-29 04:45:50.353+00	2021-01-29 04:45:50.353+00
3582	1	45	74	2021-01-29 04:45:53.088+00	2021-01-29 04:45:53.088+00
3583	2	45	75	2021-01-29 04:45:55.882+00	2021-01-29 04:45:55.882+00
3584	3	45	76	2021-01-29 04:45:59.163+00	2021-01-29 04:45:59.163+00
3585	1	45	77	2021-01-29 04:46:02.025+00	2021-01-29 04:46:02.025+00
3586	3	45	78	2021-01-29 04:46:05.25+00	2021-01-29 04:46:05.25+00
3587	4	45	79	2021-01-29 04:46:08.245+00	2021-01-29 04:46:08.245+00
3588	1	45	80	2021-01-29 04:46:11.222+00	2021-01-29 04:46:11.222+00
3589	2	45	81	2021-01-29 04:46:13.975+00	2021-01-29 04:46:13.975+00
3590	2	45	82	2021-01-29 04:46:20.176+00	2021-01-29 04:46:20.176+00
3591	2	45	83	2021-01-29 04:46:23.61+00	2021-01-29 04:46:23.61+00
3592	3	45	84	2021-01-29 04:46:28.177+00	2021-01-29 04:46:28.177+00
3593	1	45	85	2021-01-29 04:46:31.575+00	2021-01-29 04:46:31.575+00
3594	2	45	86	2021-01-29 04:46:35.239+00	2021-01-29 04:46:35.239+00
3595	3	45	87	2021-01-29 04:46:38.917+00	2021-01-29 04:46:38.917+00
3596	2	45	88	2021-01-29 04:46:42.481+00	2021-01-29 04:46:42.481+00
3597	1	45	89	2021-01-29 04:46:46.168+00	2021-01-29 04:46:46.168+00
3598	2	45	90	2021-01-29 04:46:49.546+00	2021-01-29 04:46:49.546+00
3599	100	56	332	2021-01-29 17:09:03.502+00	2021-01-29 17:09:03.502+00
3600	1	56	3	2021-01-29 17:09:10.401+00	2021-01-29 17:09:10.401+00
3601	1	56	4	2021-01-29 17:09:13.848+00	2021-01-29 17:09:13.848+00
3602	0	56	5	2021-01-29 17:09:17.49+00	2021-01-29 17:09:17.49+00
3603	1	56	6	2021-01-29 17:09:21.25+00	2021-01-29 17:09:21.25+00
3604	0	56	7	2021-01-29 17:09:25.011+00	2021-01-29 17:09:25.011+00
3605	1	56	8	2021-01-29 17:09:28.612+00	2021-01-29 17:09:28.612+00
3606	0	56	9	2021-01-29 17:09:32.076+00	2021-01-29 17:09:32.076+00
3607	0	56	10	2021-01-29 17:09:35.956+00	2021-01-29 17:09:35.956+00
3608	1	56	11	2021-01-29 17:09:39.086+00	2021-01-29 17:09:39.086+00
3609	1	56	12	2021-01-29 17:09:42.325+00	2021-01-29 17:09:42.325+00
3610	1	56	13	2021-01-29 17:09:45.581+00	2021-01-29 17:09:45.581+00
3611	0	56	14	2021-01-29 17:09:49.107+00	2021-01-29 17:09:49.107+00
3612	0	56	15	2021-01-29 17:09:52.711+00	2021-01-29 17:09:52.711+00
3613	0	56	16	2021-01-29 17:09:56.841+00	2021-01-29 17:09:56.841+00
3614	0	56	17	2021-01-29 17:10:00.228+00	2021-01-29 17:10:00.228+00
3615	1	56	18	2021-01-29 17:10:03.558+00	2021-01-29 17:10:03.558+00
3616	4	56	19	2021-01-29 17:10:09.107+00	2021-01-29 17:10:09.107+00
3617	3	56	20	2021-01-29 17:10:11.933+00	2021-01-29 17:10:11.933+00
3618	1	56	21	2021-01-29 17:10:15.134+00	2021-01-29 17:10:15.134+00
3619	4	56	22	2021-01-29 17:10:18.207+00	2021-01-29 17:10:18.207+00
3620	2	56	23	2021-01-29 17:10:21.461+00	2021-01-29 17:10:21.461+00
3621	3	56	24	2021-01-29 17:10:24.317+00	2021-01-29 17:10:24.317+00
3622	4	56	25	2021-01-29 17:10:26.967+00	2021-01-29 17:10:26.967+00
3623	2	56	26	2021-01-29 17:10:30.307+00	2021-01-29 17:10:30.307+00
3624	3	56	27	2021-01-29 17:10:33.204+00	2021-01-29 17:10:33.204+00
3625	4	56	28	2021-01-29 17:10:36.282+00	2021-01-29 17:10:36.282+00
3626	1	56	29	2021-01-29 17:10:39.913+00	2021-01-29 17:10:39.913+00
3627	3	56	30	2021-01-29 17:10:42.952+00	2021-01-29 17:10:42.952+00
3628	3	56	31	2021-01-29 17:10:45.775+00	2021-01-29 17:10:45.775+00
3629	3	56	32	2021-01-29 17:10:48.182+00	2021-01-29 17:10:48.182+00
3630	4	56	33	2021-01-29 17:10:51.188+00	2021-01-29 17:10:51.188+00
3631	3	56	34	2021-01-29 17:10:53.65+00	2021-01-29 17:10:53.65+00
3632	3	56	35	2021-01-29 17:10:56.477+00	2021-01-29 17:10:56.477+00
3633	1	56	36	2021-01-29 17:10:59.792+00	2021-01-29 17:10:59.792+00
3634	100	56	333	2021-01-29 17:12:52.448+00	2021-01-29 17:12:52.448+00
3635	3	56	37	2021-01-29 17:12:58.294+00	2021-01-29 17:12:58.294+00
3636	2	56	38	2021-01-29 17:13:01.728+00	2021-01-29 17:13:01.728+00
3637	3	56	39	2021-01-29 17:13:05.415+00	2021-01-29 17:13:05.415+00
3638	1	56	40	2021-01-29 17:13:09.04+00	2021-01-29 17:13:09.04+00
3639	3	56	41	2021-01-29 17:13:12.561+00	2021-01-29 17:13:12.561+00
3640	2	56	42	2021-01-29 17:13:16.243+00	2021-01-29 17:13:16.243+00
3641	3	56	43	2021-01-29 17:13:19.66+00	2021-01-29 17:13:19.66+00
3642	2	56	44	2021-01-29 17:13:23.248+00	2021-01-29 17:13:23.248+00
3643	3	56	45	2021-01-29 17:13:26.883+00	2021-01-29 17:13:26.883+00
3644	3	56	46	2021-01-29 17:13:30.685+00	2021-01-29 17:13:30.685+00
3645	1	56	47	2021-01-29 17:13:34.161+00	2021-01-29 17:13:34.161+00
3646	3	56	48	2021-01-29 17:13:37.81+00	2021-01-29 17:13:37.81+00
3647	3	56	49	2021-01-29 17:13:41.845+00	2021-01-29 17:13:41.845+00
3648	3	56	50	2021-01-29 17:13:45.79+00	2021-01-29 17:13:45.79+00
3649	1	56	51	2021-01-29 17:13:50.059+00	2021-01-29 17:13:50.059+00
3650	3	56	52	2021-01-29 17:13:53.835+00	2021-01-29 17:13:53.835+00
3651	2	56	53	2021-01-29 17:13:57.798+00	2021-01-29 17:13:57.798+00
3652	3	56	54	2021-01-29 17:14:02.212+00	2021-01-29 17:14:02.212+00
3653	2	56	55	2021-01-29 17:14:06.127+00	2021-01-29 17:14:06.127+00
3654	3	56	56	2021-01-29 17:14:10.431+00	2021-01-29 17:14:10.431+00
3655	1	56	57	2021-01-29 17:14:14.762+00	2021-01-29 17:14:14.762+00
3656	3	56	58	2021-01-29 17:14:18.713+00	2021-01-29 17:14:18.713+00
3657	3	56	59	2021-01-29 17:14:22.428+00	2021-01-29 17:14:22.428+00
3658	100	56	334	2021-01-29 17:15:54.362+00	2021-01-29 17:15:54.362+00
3659	1	56	60	2021-01-29 17:16:00.266+00	2021-01-29 17:16:00.266+00
3660	0	56	61	2021-01-29 17:16:03.915+00	2021-01-29 17:16:03.915+00
3661	0	56	62	2021-01-29 17:16:07.387+00	2021-01-29 17:16:07.387+00
3662	1	56	63	2021-01-29 17:16:11.816+00	2021-01-29 17:16:11.816+00
3663	1	56	64	2021-01-29 17:16:15.041+00	2021-01-29 17:16:15.041+00
3664	0	56	65	2021-01-29 17:16:18.924+00	2021-01-29 17:16:18.924+00
3665	1	56	66	2021-01-29 17:16:22.367+00	2021-01-29 17:16:22.367+00
3666	1	56	67	2021-01-29 17:16:25.586+00	2021-01-29 17:16:25.586+00
3667	1	56	68	2021-01-29 17:16:28.692+00	2021-01-29 17:16:28.692+00
3668	0	56	69	2021-01-29 17:16:32.183+00	2021-01-29 17:16:32.183+00
3669	0	56	70	2021-01-29 17:16:35.323+00	2021-01-29 17:16:35.323+00
3670	1	56	71	2021-01-29 17:16:38.84+00	2021-01-29 17:16:38.84+00
3671	4	56	72	2021-01-29 17:16:44.721+00	2021-01-29 17:16:44.721+00
3672	2	56	73	2021-01-29 17:16:47.808+00	2021-01-29 17:16:47.808+00
3673	1	56	74	2021-01-29 17:16:51.085+00	2021-01-29 17:16:51.085+00
3674	3	56	75	2021-01-29 17:16:54.192+00	2021-01-29 17:16:54.192+00
3675	3	56	76	2021-01-29 17:16:56.762+00	2021-01-29 17:16:56.762+00
3676	1	56	77	2021-01-29 17:16:59.818+00	2021-01-29 17:16:59.818+00
3677	3	56	78	2021-01-29 17:17:03.148+00	2021-01-29 17:17:03.148+00
3678	2	56	79	2021-01-29 17:17:06.595+00	2021-01-29 17:17:06.595+00
3679	1	56	80	2021-01-29 17:17:09.452+00	2021-01-29 17:17:09.452+00
3680	2	56	81	2021-01-29 17:17:12.601+00	2021-01-29 17:17:12.601+00
3681	3	56	82	2021-01-29 17:17:19.588+00	2021-01-29 17:17:19.588+00
3682	2	56	83	2021-01-29 17:17:23.309+00	2021-01-29 17:17:23.309+00
3683	3	56	84	2021-01-29 17:17:26.788+00	2021-01-29 17:17:26.788+00
3684	2	56	85	2021-01-29 17:17:30.573+00	2021-01-29 17:17:30.573+00
3685	2	56	86	2021-01-29 17:17:33.942+00	2021-01-29 17:17:33.942+00
3686	3	56	87	2021-01-29 17:17:37.397+00	2021-01-29 17:17:37.397+00
3687	2	56	88	2021-01-29 17:17:41.812+00	2021-01-29 17:17:41.812+00
3688	4	56	89	2021-01-29 17:17:45.564+00	2021-01-29 17:17:45.564+00
3689	2	56	90	2021-01-29 17:17:49.099+00	2021-01-29 17:17:49.099+00
3690	100	79	332	2021-01-29 17:21:47.455+00	2021-01-29 17:21:47.455+00
3691	1	79	3	2021-01-29 17:21:52.8+00	2021-01-29 17:21:52.8+00
3692	0	79	4	2021-01-29 17:21:56.25+00	2021-01-29 17:21:56.25+00
3693	0	79	5	2021-01-29 17:22:00.214+00	2021-01-29 17:22:00.214+00
3694	1	79	6	2021-01-29 17:22:03.755+00	2021-01-29 17:22:03.755+00
3695	0	79	7	2021-01-29 17:22:07.558+00	2021-01-29 17:22:07.558+00
3696	0	79	8	2021-01-29 17:22:11.318+00	2021-01-29 17:22:11.318+00
3697	0	79	9	2021-01-29 17:22:15.384+00	2021-01-29 17:22:15.384+00
3698	1	79	10	2021-01-29 17:22:19.058+00	2021-01-29 17:22:19.058+00
3699	1	79	11	2021-01-29 17:22:22.406+00	2021-01-29 17:22:22.406+00
3700	1	79	12	2021-01-29 17:22:26.101+00	2021-01-29 17:22:26.101+00
3701	1	79	13	2021-01-29 17:22:29.573+00	2021-01-29 17:22:29.573+00
3702	0	79	14	2021-01-29 17:22:33.127+00	2021-01-29 17:22:33.127+00
3703	1	79	15	2021-01-29 17:22:36.397+00	2021-01-29 17:22:36.397+00
3704	0	79	16	2021-01-29 17:22:39.858+00	2021-01-29 17:22:39.858+00
3705	1	79	17	2021-01-29 17:22:43.512+00	2021-01-29 17:22:43.512+00
3706	1	79	18	2021-01-29 17:22:46.755+00	2021-01-29 17:22:46.755+00
3707	4	79	19	2021-01-29 17:22:52.436+00	2021-01-29 17:22:52.436+00
3708	3	79	20	2021-01-29 17:22:55.068+00	2021-01-29 17:22:55.068+00
3709	1	79	21	2021-01-29 17:22:57.92+00	2021-01-29 17:22:57.92+00
3710	4	79	22	2021-01-29 17:23:00.998+00	2021-01-29 17:23:00.998+00
3711	2	79	23	2021-01-29 17:23:03.745+00	2021-01-29 17:23:03.745+00
3712	3	79	24	2021-01-29 17:23:06.392+00	2021-01-29 17:23:06.392+00
3713	4	79	25	2021-01-29 17:23:09.479+00	2021-01-29 17:23:09.479+00
3714	2	79	26	2021-01-29 17:23:12.478+00	2021-01-29 17:23:12.478+00
3715	3	79	27	2021-01-29 17:23:15.111+00	2021-01-29 17:23:15.111+00
3716	4	79	28	2021-01-29 17:23:18.287+00	2021-01-29 17:23:18.287+00
3717	3	79	29	2021-01-29 17:23:21.231+00	2021-01-29 17:23:21.231+00
3718	1	79	30	2021-01-29 17:23:24.001+00	2021-01-29 17:23:24.001+00
3719	1	79	31	2021-01-29 17:23:26.831+00	2021-01-29 17:23:26.831+00
3720	3	79	32	2021-01-29 17:23:29.464+00	2021-01-29 17:23:29.464+00
3721	4	79	33	2021-01-29 17:23:32.334+00	2021-01-29 17:23:32.334+00
3722	3	79	34	2021-01-29 17:23:35.009+00	2021-01-29 17:23:35.009+00
3723	4	79	35	2021-01-29 17:23:38.944+00	2021-01-29 17:23:38.944+00
3724	2	79	36	2021-01-29 17:23:41.928+00	2021-01-29 17:23:41.928+00
3725	100	79	333	2021-01-29 17:25:03.107+00	2021-01-29 17:25:03.107+00
3726	3	79	37	2021-01-29 17:25:10+00	2021-01-29 17:25:10+00
3727	4	79	38	2021-01-29 17:25:13.834+00	2021-01-29 17:25:13.834+00
3728	3	79	39	2021-01-29 17:25:17.421+00	2021-01-29 17:25:17.421+00
3729	2	79	40	2021-01-29 17:25:21.371+00	2021-01-29 17:25:21.371+00
3730	3	79	41	2021-01-29 17:25:24.849+00	2021-01-29 17:25:24.849+00
3731	2	79	42	2021-01-29 17:25:28.659+00	2021-01-29 17:25:28.659+00
3732	2	79	43	2021-01-29 17:25:32.266+00	2021-01-29 17:25:32.266+00
3733	2	79	44	2021-01-29 17:25:35.717+00	2021-01-29 17:25:35.717+00
3734	3	79	45	2021-01-29 17:25:39.144+00	2021-01-29 17:25:39.144+00
3735	4	79	46	2021-01-29 17:25:42.889+00	2021-01-29 17:25:42.889+00
3736	2	79	47	2021-01-29 17:25:46.512+00	2021-01-29 17:25:46.512+00
3737	3	79	48	2021-01-29 17:25:50.212+00	2021-01-29 17:25:50.212+00
3738	3	79	49	2021-01-29 17:25:54.061+00	2021-01-29 17:25:54.061+00
3739	2	79	50	2021-01-29 17:25:58.011+00	2021-01-29 17:25:58.011+00
3740	1	79	51	2021-01-29 17:26:02.448+00	2021-01-29 17:26:02.448+00
3741	3	79	52	2021-01-29 17:26:06.603+00	2021-01-29 17:26:06.603+00
3742	1	79	53	2021-01-29 17:26:10.53+00	2021-01-29 17:26:10.53+00
3743	2	79	54	2021-01-29 17:26:14.483+00	2021-01-29 17:26:14.483+00
3744	3	79	55	2021-01-29 17:26:18.705+00	2021-01-29 17:26:18.705+00
3745	3	79	56	2021-01-29 17:26:23.727+00	2021-01-29 17:26:23.727+00
3746	2	79	57	2021-01-29 17:26:27.815+00	2021-01-29 17:26:27.815+00
3747	3	79	58	2021-01-29 17:26:32.016+00	2021-01-29 17:26:32.016+00
3748	2	79	59	2021-01-29 17:26:36.06+00	2021-01-29 17:26:36.06+00
3749	100	79	334	2021-01-29 17:32:25.823+00	2021-01-29 17:32:25.823+00
3750	1	79	60	2021-01-29 17:32:31.404+00	2021-01-29 17:32:31.404+00
3751	1	79	61	2021-01-29 19:36:50.687+00	2021-01-29 19:36:50.687+00
3752	0	79	62	2021-01-29 19:36:53.978+00	2021-01-29 19:36:53.978+00
3753	1	79	63	2021-01-29 19:36:57.227+00	2021-01-29 19:36:57.227+00
3754	0	79	64	2021-01-29 19:37:00.812+00	2021-01-29 19:37:00.812+00
3755	0	79	65	2021-01-29 19:37:04.311+00	2021-01-29 19:37:04.311+00
3756	1	79	66	2021-01-29 19:37:07.624+00	2021-01-29 19:37:07.624+00
3757	1	79	67	2021-01-29 19:37:12.575+00	2021-01-29 19:37:12.575+00
3758	0	79	68	2021-01-29 19:37:16.223+00	2021-01-29 19:37:16.223+00
3759	0	79	69	2021-01-29 19:37:20.332+00	2021-01-29 19:37:20.332+00
3760	0	79	70	2021-01-29 19:37:23.467+00	2021-01-29 19:37:23.467+00
3761	0	79	71	2021-01-29 19:37:26.517+00	2021-01-29 19:37:26.517+00
3762	4	79	72	2021-01-29 19:37:32.456+00	2021-01-29 19:37:32.456+00
3763	2	79	73	2021-01-29 19:37:36.425+00	2021-01-29 19:37:36.425+00
3764	1	79	74	2021-01-29 19:37:39.369+00	2021-01-29 19:37:39.369+00
3765	2	79	75	2021-01-29 19:37:42.256+00	2021-01-29 19:37:42.256+00
3766	3	79	76	2021-01-29 19:37:45.17+00	2021-01-29 19:37:45.17+00
3767	1	79	77	2021-01-29 19:37:48.188+00	2021-01-29 19:37:48.188+00
3768	3	79	78	2021-01-29 19:37:51.024+00	2021-01-29 19:37:51.024+00
3769	1	79	79	2021-01-29 19:37:54.292+00	2021-01-29 19:37:54.292+00
3770	4	79	80	2021-01-29 19:37:57.652+00	2021-01-29 19:37:57.652+00
3771	2	79	81	2021-01-29 19:38:00.325+00	2021-01-29 19:38:00.325+00
3772	2	79	82	2021-01-29 19:38:07.356+00	2021-01-29 19:38:07.356+00
3773	3	79	83	2021-01-29 19:38:10.928+00	2021-01-29 19:38:10.928+00
3774	2	79	84	2021-01-29 19:38:14.468+00	2021-01-29 19:38:14.468+00
3775	3	79	85	2021-01-29 19:38:17.749+00	2021-01-29 19:38:17.749+00
3776	2	79	86	2021-01-29 19:38:21.605+00	2021-01-29 19:38:21.605+00
3777	4	79	87	2021-01-29 19:38:25.201+00	2021-01-29 19:38:25.201+00
3778	2	79	88	2021-01-29 19:38:28.556+00	2021-01-29 19:38:28.556+00
3779	2	79	89	2021-01-29 19:38:32.05+00	2021-01-29 19:38:32.05+00
3780	2	79	90	2021-01-29 19:38:36.056+00	2021-01-29 19:38:36.056+00
3781	100	79	335	2021-01-29 19:39:50.651+00	2021-01-29 19:39:50.651+00
3782	1	79	91	2021-01-29 19:39:55.737+00	2021-01-29 19:39:55.737+00
3783	0	79	92	2021-01-29 19:39:58.777+00	2021-01-29 19:39:58.777+00
3784	0	79	93	2021-01-29 19:40:01.591+00	2021-01-29 19:40:01.591+00
3785	1	79	94	2021-01-29 19:40:04.968+00	2021-01-29 19:40:04.968+00
3786	0	79	95	2021-01-29 19:40:07.819+00	2021-01-29 19:40:07.819+00
3787	0	79	96	2021-01-29 19:40:11.225+00	2021-01-29 19:40:11.225+00
3788	0	79	97	2021-01-29 19:40:13.866+00	2021-01-29 19:40:13.866+00
3789	1	79	98	2021-01-29 19:40:17.708+00	2021-01-29 19:40:17.708+00
3790	1	79	99	2021-01-29 19:40:20.485+00	2021-01-29 19:40:20.485+00
3791	1	79	100	2021-01-29 19:40:23.545+00	2021-01-29 19:40:23.545+00
3792	1	79	101	2021-01-29 19:40:26.314+00	2021-01-29 19:40:26.314+00
3793	0	79	102	2021-01-29 19:40:29.299+00	2021-01-29 19:40:29.299+00
3794	1	79	103	2021-01-29 19:40:32.494+00	2021-01-29 19:40:32.494+00
3795	1	79	104	2021-01-29 19:40:35.704+00	2021-01-29 19:40:35.704+00
3796	0	79	105	2021-01-29 19:40:38.535+00	2021-01-29 19:40:38.535+00
3797	1	79	106	2021-01-29 19:40:41.628+00	2021-01-29 19:40:41.628+00
3798	0	79	107	2021-01-29 19:40:44.638+00	2021-01-29 19:40:44.638+00
3799	1	79	108	2021-01-29 19:40:47.798+00	2021-01-29 19:40:47.798+00
3800	0	79	109	2021-01-29 19:40:50.586+00	2021-01-29 19:40:50.586+00
3801	3	79	110	2021-01-29 19:40:56.208+00	2021-01-29 19:40:56.208+00
3802	1	79	111	2021-01-29 19:40:58.89+00	2021-01-29 19:40:58.89+00
3803	2	79	112	2021-01-29 19:41:01.832+00	2021-01-29 19:41:01.832+00
3804	1	79	113	2021-01-29 19:41:04.886+00	2021-01-29 19:41:04.886+00
3805	3	79	114	2021-01-29 19:41:07.779+00	2021-01-29 19:41:07.779+00
3806	3	79	115	2021-01-29 19:41:10.823+00	2021-01-29 19:41:10.823+00
3807	3	79	116	2021-01-29 19:41:13.531+00	2021-01-29 19:41:13.531+00
3808	2	79	117	2021-01-29 19:41:16.572+00	2021-01-29 19:41:16.572+00
3809	1	79	118	2021-01-29 19:41:19.315+00	2021-01-29 19:41:19.315+00
3810	4	79	119	2021-01-29 19:41:22.413+00	2021-01-29 19:41:22.413+00
3811	100	79	336	2021-01-29 19:42:59.294+00	2021-01-29 19:42:59.294+00
3812	1	79	120	2021-01-29 19:43:04.254+00	2021-01-29 19:43:04.254+00
3813	0	79	121	2021-01-29 19:43:07.026+00	2021-01-29 19:43:07.026+00
3814	0	79	122	2021-01-29 19:43:09.771+00	2021-01-29 19:43:09.771+00
3815	1	79	123	2021-01-29 19:43:12.398+00	2021-01-29 19:43:12.398+00
3816	0	79	124	2021-01-29 19:43:15.287+00	2021-01-29 19:43:15.287+00
3817	1	79	125	2021-01-29 19:43:18.034+00	2021-01-29 19:43:18.034+00
3818	0	79	126	2021-01-29 19:43:20.491+00	2021-01-29 19:43:20.491+00
3819	1	79	127	2021-01-29 19:43:23.328+00	2021-01-29 19:43:23.328+00
3820	0	79	128	2021-01-29 19:43:26.159+00	2021-01-29 19:43:26.159+00
3821	1	79	129	2021-01-29 19:43:29.053+00	2021-01-29 19:43:29.053+00
3822	0	79	130	2021-01-29 19:43:31.916+00	2021-01-29 19:43:31.916+00
3823	0	79	131	2021-01-29 19:43:34.715+00	2021-01-29 19:43:34.715+00
3824	0	79	132	2021-01-29 19:43:37.072+00	2021-01-29 19:43:37.072+00
3825	1	79	133	2021-01-29 19:43:39.719+00	2021-01-29 19:43:39.719+00
3826	1	79	134	2021-01-29 19:43:42.174+00	2021-01-29 19:43:42.174+00
3827	0	79	135	2021-01-29 19:43:44.872+00	2021-01-29 19:43:44.872+00
3828	2	79	136	2021-01-29 19:43:51.635+00	2021-01-29 19:43:51.635+00
3829	4	79	137	2021-01-29 19:43:55.935+00	2021-01-29 19:43:55.935+00
3830	3	79	138	2021-01-29 19:43:58.757+00	2021-01-29 19:43:58.757+00
3831	5	79	139	2021-01-29 19:44:01.324+00	2021-01-29 19:44:01.324+00
3832	1	79	140	2021-01-29 19:44:04.665+00	2021-01-29 19:44:04.665+00
3833	3	79	141	2021-01-29 19:44:07.682+00	2021-01-29 19:44:07.682+00
3834	5	79	142	2021-01-29 19:44:10.301+00	2021-01-29 19:44:10.301+00
3835	2	79	143	2021-01-29 19:44:13.506+00	2021-01-29 19:44:13.506+00
3836	2	79	144	2021-01-29 19:44:16.9+00	2021-01-29 19:44:16.9+00
3837	4	79	145	2021-01-29 19:44:19.929+00	2021-01-29 19:44:19.929+00
3838	2	79	146	2021-01-29 19:44:23.281+00	2021-01-29 19:44:23.281+00
3839	4	79	147	2021-01-29 19:44:26.343+00	2021-01-29 19:44:26.343+00
3840	3	79	148	2021-01-29 19:44:29.474+00	2021-01-29 19:44:29.474+00
3841	2	79	149	2021-01-29 19:44:32.316+00	2021-01-29 19:44:32.316+00
3842	5	79	150	2021-01-29 19:44:35.328+00	2021-01-29 19:44:35.328+00
3843	1	80	151	2021-01-29 19:45:55.721+00	2021-01-29 19:45:55.721+00
3844	1	80	152	2021-01-29 19:45:59.835+00	2021-01-29 19:45:59.835+00
3845	1	80	153	2021-01-29 19:46:04.176+00	2021-01-29 19:46:04.176+00
3846	0	80	154	2021-01-29 19:46:08.412+00	2021-01-29 19:46:08.412+00
3847	1	80	155	2021-01-29 19:46:12.582+00	2021-01-29 19:46:12.582+00
3848	0	80	156	2021-01-29 19:46:17.168+00	2021-01-29 19:46:17.168+00
3849	1	80	157	2021-01-29 19:46:21.748+00	2021-01-29 19:46:21.748+00
3850	0	80	158	2021-01-29 19:46:25.997+00	2021-01-29 19:46:25.997+00
3851	2	80	159	2021-01-29 19:46:38.215+00	2021-01-29 19:46:38.215+00
3852	3	80	160	2021-01-29 19:46:47.275+00	2021-01-29 19:46:47.275+00
3853	1	80	161	2021-01-29 19:46:56.425+00	2021-01-29 19:46:56.425+00
3854	1	80	162	2021-01-29 19:47:06.087+00	2021-01-29 19:47:06.087+00
3855	1	80	163	2021-01-29 19:47:15.582+00	2021-01-29 19:47:15.582+00
3856	1	80	164	2021-01-29 19:47:21.692+00	2021-01-29 19:47:21.692+00
3857	0	80	165	2021-01-29 19:47:24.953+00	2021-01-29 19:47:24.953+00
3858	1	80	166	2021-01-29 19:47:28.086+00	2021-01-29 19:47:28.086+00
3859	1	80	167	2021-01-29 19:47:31.334+00	2021-01-29 19:47:31.334+00
3860	1	80	168	2021-01-29 19:47:34.364+00	2021-01-29 19:47:34.364+00
3861	1	80	169	2021-01-29 19:47:37.399+00	2021-01-29 19:47:37.399+00
3862	1	80	170	2021-01-29 19:47:40.415+00	2021-01-29 19:47:40.415+00
3863	1	80	171	2021-01-29 19:47:44.103+00	2021-01-29 19:47:44.103+00
3864	1	80	172	2021-01-29 19:47:47.174+00	2021-01-29 19:47:47.174+00
3865	1	80	173	2021-01-29 19:47:50.572+00	2021-01-29 19:47:50.572+00
3866	1	80	174	2021-01-29 19:48:00.464+00	2021-01-29 19:48:00.464+00
3867	0	80	175	2021-01-29 19:48:07.398+00	2021-01-29 19:48:07.398+00
3868	0	80	176	2021-01-29 19:48:14.106+00	2021-01-29 19:48:14.106+00
3869	0	80	177	2021-01-29 19:48:20.891+00	2021-01-29 19:48:20.891+00
3870	4	80	337	2021-01-29 19:49:28.833+00	2021-01-29 19:49:28.833+00
3871	3	80	338	2021-01-29 19:49:32.3+00	2021-01-29 19:49:32.3+00
3872	2	80	339	2021-01-29 19:49:36.512+00	2021-01-29 19:49:36.512+00
3873	4	80	340	2021-01-29 19:49:40.231+00	2021-01-29 19:49:40.231+00
3874	3	80	341	2021-01-29 19:49:43.915+00	2021-01-29 19:49:43.915+00
3875	2	80	342	2021-01-29 19:49:47.578+00	2021-01-29 19:49:47.578+00
3876	5	80	343	2021-01-29 19:49:51.859+00	2021-01-29 19:49:51.859+00
3877	2	80	344	2021-01-29 19:49:55.632+00	2021-01-29 19:49:55.632+00
3878	3	80	345	2021-01-29 19:49:59.233+00	2021-01-29 19:49:59.233+00
3879	1	80	346	2021-01-29 19:50:03.175+00	2021-01-29 19:50:03.175+00
3880	5	80	347	2021-01-29 19:50:06.963+00	2021-01-29 19:50:06.963+00
3881	4	80	348	2021-01-29 19:50:10.818+00	2021-01-29 19:50:10.818+00
3882	3	80	349	2021-01-29 19:50:14.945+00	2021-01-29 19:50:14.945+00
3883	5	80	350	2021-01-29 19:50:18.313+00	2021-01-29 19:50:18.313+00
3884	3	80	351	2021-01-29 19:50:22.222+00	2021-01-29 19:50:22.222+00
3885	5	80	352	2021-01-29 19:50:26.24+00	2021-01-29 19:50:26.24+00
3886	3	80	353	2021-01-29 19:50:29.978+00	2021-01-29 19:50:29.978+00
3887	3	80	354	2021-01-29 19:50:33.571+00	2021-01-29 19:50:33.571+00
3888	5	80	355	2021-01-29 19:50:37.649+00	2021-01-29 19:50:37.649+00
3889	3	80	356	2021-01-29 19:50:41.056+00	2021-01-29 19:50:41.056+00
3890	4	80	357	2021-01-29 19:50:45.895+00	2021-01-29 19:50:45.895+00
3891	4	80	358	2021-01-29 19:50:50.194+00	2021-01-29 19:50:50.194+00
3892	3	80	359	2021-01-29 19:50:54.395+00	2021-01-29 19:50:54.395+00
3893	3	80	360	2021-01-29 19:50:58.912+00	2021-01-29 19:50:58.912+00
3894	7	80	361	2021-01-29 19:51:03.256+00	2021-01-29 19:51:03.256+00
3895	7	80	362	2021-01-29 19:51:07.647+00	2021-01-29 19:51:07.647+00
3896	7	80	363	2021-01-29 19:51:11.884+00	2021-01-29 19:51:11.884+00
3897	6	80	364	2021-01-29 19:51:16.443+00	2021-01-29 19:51:16.443+00
3898	100	83	332	2021-01-29 20:06:56.672+00	2021-01-29 20:06:56.672+00
3899	1	83	3	2021-01-29 20:07:01.887+00	2021-01-29 20:07:01.887+00
3900	0	83	4	2021-01-29 20:07:05.314+00	2021-01-29 20:07:05.314+00
3901	0	83	5	2021-01-29 20:07:08.974+00	2021-01-29 20:07:08.974+00
3902	1	83	6	2021-01-29 20:07:12.308+00	2021-01-29 20:07:12.308+00
3903	0	83	7	2021-01-29 20:07:15.812+00	2021-01-29 20:07:15.812+00
3904	0	83	8	2021-01-29 20:07:19.066+00	2021-01-29 20:07:19.066+00
3905	0	83	9	2021-01-29 20:07:22.368+00	2021-01-29 20:07:22.368+00
3906	0	83	10	2021-01-29 20:07:25.776+00	2021-01-29 20:07:25.776+00
3907	0	83	11	2021-01-29 20:07:29.16+00	2021-01-29 20:07:29.16+00
3908	1	83	12	2021-01-29 20:07:32.312+00	2021-01-29 20:07:32.312+00
3909	0	83	13	2021-01-29 20:07:35.589+00	2021-01-29 20:07:35.589+00
3910	1	83	14	2021-01-29 20:07:39.036+00	2021-01-29 20:07:39.036+00
3911	1	83	15	2021-01-29 20:07:42.359+00	2021-01-29 20:07:42.359+00
3912	0	83	16	2021-01-29 20:07:45.59+00	2021-01-29 20:07:45.59+00
3913	1	83	17	2021-01-29 20:07:49.162+00	2021-01-29 20:07:49.162+00
3914	0	83	18	2021-01-29 20:07:52.62+00	2021-01-29 20:07:52.62+00
3915	4	83	19	2021-01-29 20:07:58.357+00	2021-01-29 20:07:58.357+00
3916	1	83	20	2021-01-29 20:08:01.474+00	2021-01-29 20:08:01.474+00
3917	3	83	21	2021-01-29 20:08:04.848+00	2021-01-29 20:08:04.848+00
3918	4	83	22	2021-01-29 20:08:07.703+00	2021-01-29 20:08:07.703+00
3919	2	83	23	2021-01-29 20:08:10.435+00	2021-01-29 20:08:10.435+00
3920	3	83	24	2021-01-29 20:08:13.124+00	2021-01-29 20:08:13.124+00
3921	3	83	25	2021-01-29 20:08:16.254+00	2021-01-29 20:08:16.254+00
3922	2	83	26	2021-01-29 20:08:19.143+00	2021-01-29 20:08:19.143+00
3923	3	83	27	2021-01-29 20:08:23.052+00	2021-01-29 20:08:23.052+00
3924	4	83	28	2021-01-29 20:08:26.204+00	2021-01-29 20:08:26.204+00
3925	2	83	29	2021-01-29 20:08:28.99+00	2021-01-29 20:08:28.99+00
3926	1	83	30	2021-01-29 20:08:31.958+00	2021-01-29 20:08:31.958+00
3927	3	83	31	2021-01-29 20:08:35.271+00	2021-01-29 20:08:35.271+00
3928	4	83	32	2021-01-29 20:12:19.626+00	2021-01-29 20:12:19.626+00
3929	4	83	33	2021-01-29 20:12:22.344+00	2021-01-29 20:12:22.344+00
3930	3	83	34	2021-01-29 20:12:24.617+00	2021-01-29 20:12:24.617+00
3931	4	83	35	2021-01-29 20:12:27.7+00	2021-01-29 20:12:27.7+00
3932	2	83	36	2021-01-29 20:12:30.337+00	2021-01-29 20:12:30.337+00
3933	100	83	333	2021-01-29 20:13:39.413+00	2021-01-29 20:13:39.413+00
3934	2	83	37	2021-01-29 20:13:45.856+00	2021-01-29 20:13:45.856+00
3935	2	83	38	2021-01-29 20:13:49.572+00	2021-01-29 20:13:49.572+00
3936	3	83	39	2021-01-29 20:13:53.175+00	2021-01-29 20:13:53.175+00
3937	1	83	40	2021-01-29 20:13:56.796+00	2021-01-29 20:13:56.796+00
3938	3	83	41	2021-01-29 20:14:00.3+00	2021-01-29 20:14:00.3+00
3939	3	83	42	2021-01-29 20:14:03.61+00	2021-01-29 20:14:03.61+00
3940	2	83	43	2021-01-29 20:14:07.042+00	2021-01-29 20:14:07.042+00
3941	2	83	44	2021-01-29 20:14:10.564+00	2021-01-29 20:14:10.564+00
3942	3	83	45	2021-01-29 20:14:14.029+00	2021-01-29 20:14:14.029+00
3943	3	83	46	2021-01-29 20:14:17.912+00	2021-01-29 20:14:17.912+00
3944	2	83	47	2021-01-29 20:14:21.413+00	2021-01-29 20:14:21.413+00
3945	3	83	48	2021-01-29 20:14:24.794+00	2021-01-29 20:14:24.794+00
3946	3	83	49	2021-01-29 20:14:28.788+00	2021-01-29 20:14:28.788+00
3947	3	83	50	2021-01-29 20:14:32.666+00	2021-01-29 20:14:32.666+00
3948	2	83	51	2021-01-29 20:14:36.603+00	2021-01-29 20:14:36.603+00
3949	3	83	52	2021-01-29 20:14:40.671+00	2021-01-29 20:14:40.671+00
3950	1	83	53	2021-01-29 20:14:44.465+00	2021-01-29 20:14:44.465+00
3951	3	83	54	2021-01-29 20:14:48.361+00	2021-01-29 20:14:48.361+00
3952	4	83	55	2021-01-29 20:14:53.244+00	2021-01-29 20:14:53.244+00
3953	3	83	56	2021-01-29 20:14:57.051+00	2021-01-29 20:14:57.051+00
3954	2	83	57	2021-01-29 20:15:00.853+00	2021-01-29 20:15:00.853+00
3955	3	83	58	2021-01-29 20:15:04.657+00	2021-01-29 20:15:04.657+00
3956	1	83	59	2021-01-29 20:15:08.748+00	2021-01-29 20:15:08.748+00
3957	100	83	334	2021-01-29 20:16:19.705+00	2021-01-29 20:16:19.705+00
3958	1	83	60	2021-01-29 20:16:25.791+00	2021-01-29 20:16:25.791+00
3959	1	83	61	2021-01-29 20:16:29.453+00	2021-01-29 20:16:29.453+00
3960	1	83	62	2021-01-29 20:16:32.697+00	2021-01-29 20:16:32.697+00
3961	1	83	63	2021-01-29 20:16:35.744+00	2021-01-29 20:16:35.744+00
3962	1	83	64	2021-01-29 20:16:39.289+00	2021-01-29 20:16:39.289+00
3963	1	83	65	2021-01-29 20:16:42.393+00	2021-01-29 20:16:42.393+00
3964	1	83	66	2021-01-29 20:16:45.572+00	2021-01-29 20:16:45.572+00
3965	1	83	67	2021-01-29 20:16:48.81+00	2021-01-29 20:16:48.81+00
3966	1	83	68	2021-01-29 20:16:51.693+00	2021-01-29 20:16:51.693+00
3967	1	83	69	2021-01-29 20:16:54.671+00	2021-01-29 20:16:54.671+00
3968	1	83	70	2021-01-29 20:16:57.763+00	2021-01-29 20:16:57.763+00
3969	1	83	71	2021-01-29 20:17:00.758+00	2021-01-29 20:17:00.758+00
3970	4	83	72	2021-01-29 20:17:05.98+00	2021-01-29 20:17:05.98+00
3971	1	83	73	2021-01-29 20:17:08.933+00	2021-01-29 20:17:08.933+00
3972	2	83	74	2021-01-29 20:17:11.913+00	2021-01-29 20:17:11.913+00
3973	2	83	75	2021-01-29 20:17:14.655+00	2021-01-29 20:17:14.655+00
3974	3	83	76	2021-01-29 20:17:17.928+00	2021-01-29 20:17:17.928+00
3975	1	83	77	2021-01-29 20:17:20.881+00	2021-01-29 20:17:20.881+00
3976	3	83	78	2021-01-29 20:17:23.671+00	2021-01-29 20:17:23.671+00
3977	2	83	79	2021-01-29 20:17:26.833+00	2021-01-29 20:17:26.833+00
3978	1	83	80	2021-01-29 20:17:29.463+00	2021-01-29 20:17:29.463+00
3979	2	83	81	2021-01-29 20:17:32.107+00	2021-01-29 20:17:32.107+00
3980	4	83	82	2021-01-29 20:17:39.3+00	2021-01-29 20:17:39.3+00
3981	2	83	83	2021-01-29 20:17:42.809+00	2021-01-29 20:17:42.809+00
3982	3	83	84	2021-01-29 20:17:46.246+00	2021-01-29 20:17:46.246+00
3983	3	83	85	2021-01-29 20:17:50.044+00	2021-01-29 20:17:50.044+00
3984	3	83	86	2021-01-29 20:17:53.244+00	2021-01-29 20:17:53.244+00
3985	3	83	87	2021-01-29 20:17:56.512+00	2021-01-29 20:17:56.512+00
3986	2	83	88	2021-01-29 20:18:00.026+00	2021-01-29 20:18:00.026+00
3987	2	83	89	2021-01-29 20:18:03.434+00	2021-01-29 20:18:03.434+00
3988	2	83	90	2021-01-29 20:18:06.727+00	2021-01-29 20:18:06.727+00
3989	100	81	335	2021-01-29 20:20:08.579+00	2021-01-29 20:20:08.579+00
3990	1	81	91	2021-01-29 20:20:13.545+00	2021-01-29 20:20:13.545+00
3991	0	81	92	2021-01-29 20:20:16.582+00	2021-01-29 20:20:16.582+00
3992	0	81	93	2021-01-29 20:20:19.545+00	2021-01-29 20:20:19.545+00
3993	0	81	94	2021-01-29 20:20:22.905+00	2021-01-29 20:20:22.905+00
3994	1	81	95	2021-01-29 20:20:25.93+00	2021-01-29 20:20:25.93+00
3995	0	81	96	2021-01-29 20:20:29.08+00	2021-01-29 20:20:29.08+00
3996	1	81	97	2021-01-29 20:20:32.038+00	2021-01-29 20:20:32.038+00
3997	1	81	98	2021-01-29 20:20:35.352+00	2021-01-29 20:20:35.352+00
3998	1	81	99	2021-01-29 20:20:38.1+00	2021-01-29 20:20:38.1+00
3999	1	81	100	2021-01-29 20:20:41.197+00	2021-01-29 20:20:41.197+00
4000	1	81	101	2021-01-29 20:20:44.694+00	2021-01-29 20:20:44.694+00
4001	1	81	102	2021-01-29 20:20:48.404+00	2021-01-29 20:20:48.404+00
4002	1	81	103	2021-01-29 20:20:51.068+00	2021-01-29 20:20:51.068+00
4003	0	81	104	2021-01-29 20:20:54.528+00	2021-01-29 20:20:54.528+00
4004	0	81	105	2021-01-29 20:20:57.421+00	2021-01-29 20:20:57.421+00
4005	1	81	106	2021-01-29 20:21:00.622+00	2021-01-29 20:21:00.622+00
4006	0	81	107	2021-01-29 20:21:03.476+00	2021-01-29 20:21:03.476+00
4007	0	81	108	2021-01-29 20:21:06.768+00	2021-01-29 20:21:06.768+00
4008	0	81	109	2021-01-29 20:21:10.411+00	2021-01-29 20:21:10.411+00
4009	3	81	110	2021-01-29 20:21:17.191+00	2021-01-29 20:21:17.191+00
4010	1	81	111	2021-01-29 20:21:19.944+00	2021-01-29 20:21:19.944+00
4011	3	81	112	2021-01-29 20:21:22.792+00	2021-01-29 20:21:22.792+00
4012	1	81	113	2021-01-29 20:21:25.564+00	2021-01-29 20:21:25.564+00
4013	2	81	114	2021-01-29 20:21:28.882+00	2021-01-29 20:21:28.882+00
4014	2	81	115	2021-01-29 20:21:31.914+00	2021-01-29 20:21:31.914+00
4015	4	81	116	2021-01-29 20:21:35.002+00	2021-01-29 20:21:35.002+00
4016	4	81	117	2021-01-29 20:21:38.1+00	2021-01-29 20:21:38.1+00
4017	4	81	118	2021-01-29 20:21:40.868+00	2021-01-29 20:21:40.868+00
4018	2	81	119	2021-01-29 20:21:43.729+00	2021-01-29 20:21:43.729+00
4019	100	81	336	2021-01-29 20:23:11.348+00	2021-01-29 20:23:11.348+00
4020	0	81	120	2021-01-29 20:23:16.59+00	2021-01-29 20:23:16.59+00
4021	0	81	121	2021-01-29 20:23:19.505+00	2021-01-29 20:23:19.505+00
4022	1	81	122	2021-01-29 20:23:22.236+00	2021-01-29 20:23:22.236+00
4023	1	81	123	2021-01-29 20:23:24.834+00	2021-01-29 20:23:24.834+00
4024	1	81	124	2021-01-29 20:23:27.493+00	2021-01-29 20:23:27.493+00
4025	0	81	125	2021-01-29 20:23:30.223+00	2021-01-29 20:23:30.223+00
4026	1	81	126	2021-01-29 20:23:32.909+00	2021-01-29 20:23:32.909+00
4027	1	81	127	2021-01-29 20:23:35.542+00	2021-01-29 20:23:35.542+00
4028	0	81	128	2021-01-29 20:23:38.435+00	2021-01-29 20:23:38.435+00
4029	1	81	129	2021-01-29 20:23:40.869+00	2021-01-29 20:23:40.869+00
4030	0	81	130	2021-01-29 20:23:43.603+00	2021-01-29 20:23:43.603+00
4031	1	81	131	2021-01-29 20:23:46.229+00	2021-01-29 20:23:46.229+00
4032	0	81	132	2021-01-29 20:23:48.956+00	2021-01-29 20:23:48.956+00
4033	0	81	133	2021-01-29 20:23:51.512+00	2021-01-29 20:23:51.512+00
4034	1	81	134	2021-01-29 20:23:54.827+00	2021-01-29 20:23:54.827+00
4035	1	81	135	2021-01-29 20:23:57.073+00	2021-01-29 20:23:57.073+00
4036	5	81	136	2021-01-29 20:24:03.561+00	2021-01-29 20:24:03.561+00
4037	5	81	137	2021-01-29 20:24:06.42+00	2021-01-29 20:24:06.42+00
4038	3	81	138	2021-01-29 20:24:09.75+00	2021-01-29 20:24:09.75+00
4039	5	81	139	2021-01-29 20:24:12.802+00	2021-01-29 20:24:12.802+00
4040	5	81	140	2021-01-29 20:24:15.71+00	2021-01-29 20:24:15.71+00
4041	3	81	141	2021-01-29 20:24:18.824+00	2021-01-29 20:24:18.824+00
4042	2	81	142	2021-01-29 20:24:21.932+00	2021-01-29 20:24:21.932+00
4043	3	81	143	2021-01-29 20:24:25.346+00	2021-01-29 20:24:25.346+00
4044	4	81	144	2021-01-29 20:24:28.539+00	2021-01-29 20:24:28.539+00
4045	4	81	145	2021-01-29 20:24:31.58+00	2021-01-29 20:24:31.58+00
4046	2	81	146	2021-01-29 20:24:34.601+00	2021-01-29 20:24:34.601+00
4047	4	81	147	2021-01-29 20:24:37.54+00	2021-01-29 20:24:37.54+00
4048	2	81	148	2021-01-29 20:24:40.402+00	2021-01-29 20:24:40.402+00
4049	2	81	149	2021-01-29 20:24:42.95+00	2021-01-29 20:24:42.95+00
4050	5	81	150	2021-01-29 20:24:45.666+00	2021-01-29 20:24:45.666+00
4051	1	81	151	2021-01-29 20:25:11.738+00	2021-01-29 20:25:11.738+00
4052	1	81	152	2021-01-29 20:25:15.987+00	2021-01-29 20:25:15.987+00
4053	1	81	153	2021-01-29 20:25:20.166+00	2021-01-29 20:25:20.166+00
4054	1	81	154	2021-01-29 20:25:24.582+00	2021-01-29 20:25:24.582+00
4055	1	81	155	2021-01-29 20:25:28.859+00	2021-01-29 20:25:28.859+00
4056	0	81	156	2021-01-29 20:25:32.87+00	2021-01-29 20:25:32.87+00
4057	0	81	157	2021-01-29 20:25:37.594+00	2021-01-29 20:25:37.594+00
4058	1	81	158	2021-01-29 20:25:42.024+00	2021-01-29 20:25:42.024+00
4059	2	81	159	2021-01-29 20:25:54.837+00	2021-01-29 20:25:54.837+00
4060	3	81	160	2021-01-29 20:26:03.771+00	2021-01-29 20:26:03.771+00
4061	3	81	161	2021-01-29 20:26:13.398+00	2021-01-29 20:26:13.398+00
4062	1	81	162	2021-01-29 20:26:22.564+00	2021-01-29 20:26:22.564+00
4063	1	81	163	2021-01-29 20:26:32.091+00	2021-01-29 20:26:32.091+00
4064	0	81	164	2021-01-29 20:26:38.472+00	2021-01-29 20:26:38.472+00
4065	1	81	165	2021-01-29 20:26:41.737+00	2021-01-29 20:26:41.737+00
4066	1	81	166	2021-01-29 20:26:45.057+00	2021-01-29 20:26:45.057+00
4067	0	81	167	2021-01-29 20:26:48.631+00	2021-01-29 20:26:48.631+00
4068	1	81	168	2021-01-29 20:26:52.081+00	2021-01-29 20:26:52.081+00
4069	1	81	169	2021-01-29 20:26:55.275+00	2021-01-29 20:26:55.275+00
4070	1	81	170	2021-01-29 20:26:58.667+00	2021-01-29 20:26:58.667+00
4071	1	81	171	2021-01-29 20:27:02.174+00	2021-01-29 20:27:02.174+00
4072	1	81	172	2021-01-29 20:27:05.49+00	2021-01-29 20:27:05.49+00
4073	1	81	173	2021-01-29 20:27:09.09+00	2021-01-29 20:27:09.09+00
4074	1	81	174	2021-01-29 20:27:19.026+00	2021-01-29 20:27:19.026+00
4075	0	81	175	2021-01-29 20:27:25.638+00	2021-01-29 20:27:25.638+00
4076	1	81	176	2021-01-29 20:27:32.796+00	2021-01-29 20:27:32.796+00
4077	0	81	177	2021-01-29 20:27:39.528+00	2021-01-29 20:27:39.528+00
4078	5	81	337	2021-01-29 20:31:13.941+00	2021-01-29 20:31:13.941+00
4079	3	81	338	2021-01-29 20:31:20.423+00	2021-01-29 20:31:20.423+00
4080	2	81	339	2021-01-29 20:31:24.407+00	2021-01-29 20:31:24.407+00
4081	1	81	340	2021-01-29 20:31:28.392+00	2021-01-29 20:31:28.392+00
4082	1	81	341	2021-01-29 20:31:32.242+00	2021-01-29 20:31:32.242+00
4083	2	81	342	2021-01-29 20:31:35.953+00	2021-01-29 20:31:35.953+00
4084	3	81	343	2021-01-29 20:31:39.957+00	2021-01-29 20:31:39.957+00
4085	5	81	344	2021-01-29 20:31:46.827+00	2021-01-29 20:31:46.827+00
4086	5	81	345	2021-01-29 20:31:50.725+00	2021-01-29 20:31:50.725+00
4087	3	81	346	2021-01-29 20:31:54.171+00	2021-01-29 20:31:54.171+00
4088	4	81	347	2021-01-29 20:31:57.56+00	2021-01-29 20:31:57.56+00
4089	5	81	348	2021-01-29 20:32:01.18+00	2021-01-29 20:32:01.18+00
4090	5	81	349	2021-01-29 20:32:04.746+00	2021-01-29 20:32:04.746+00
4091	3	81	350	2021-01-29 20:32:08.994+00	2021-01-29 20:32:08.994+00
4092	4	81	351	2021-01-29 20:32:12.558+00	2021-01-29 20:32:12.558+00
4093	6	81	352	2021-01-29 20:32:16.727+00	2021-01-29 20:32:16.727+00
4094	3	81	353	2021-01-29 20:32:20.417+00	2021-01-29 20:32:20.417+00
4095	2	81	354	2021-01-29 20:32:24.15+00	2021-01-29 20:32:24.15+00
4096	5	81	355	2021-01-29 20:32:27.846+00	2021-01-29 20:32:27.846+00
4097	5	81	356	2021-01-29 20:32:31.373+00	2021-01-29 20:32:31.373+00
4098	3	81	357	2021-01-29 20:32:36.115+00	2021-01-29 20:32:36.115+00
4099	9	81	358	2021-01-29 20:32:40.785+00	2021-01-29 20:32:40.785+00
4100	8	81	359	2021-01-29 20:32:45.035+00	2021-01-29 20:32:45.035+00
4101	3	81	360	2021-01-29 20:32:49.779+00	2021-01-29 20:32:49.779+00
4102	5	81	361	2021-01-29 20:32:53.836+00	2021-01-29 20:32:53.836+00
4103	9	81	362	2021-01-29 20:32:58.403+00	2021-01-29 20:32:58.403+00
4104	3	81	363	2021-01-29 20:33:03.078+00	2021-01-29 20:33:03.078+00
4105	4	81	364	2021-01-29 20:33:07.886+00	2021-01-29 20:33:07.886+00
4106	100	84	332	2021-01-29 20:36:51.517+00	2021-01-29 20:36:51.517+00
4107	1	84	3	2021-01-29 20:36:57.077+00	2021-01-29 20:36:57.077+00
4108	1	84	4	2021-01-29 20:37:00.806+00	2021-01-29 20:37:00.806+00
4109	0	84	5	2021-01-29 20:37:04.115+00	2021-01-29 20:37:04.115+00
4110	1	84	6	2021-01-29 20:37:07.294+00	2021-01-29 20:37:07.294+00
4111	1	84	7	2021-01-29 20:37:10.699+00	2021-01-29 20:37:10.699+00
4112	1	84	8	2021-01-29 20:37:14.069+00	2021-01-29 20:37:14.069+00
4113	0	84	9	2021-01-29 20:37:17.374+00	2021-01-29 20:37:17.374+00
4114	0	84	10	2021-01-29 20:37:21.042+00	2021-01-29 20:37:21.042+00
4115	1	84	11	2021-01-29 20:37:24.369+00	2021-01-29 20:37:24.369+00
4116	1	84	12	2021-01-29 20:37:27.587+00	2021-01-29 20:37:27.587+00
4117	1	84	13	2021-01-29 20:37:30.767+00	2021-01-29 20:37:30.767+00
4118	0	84	14	2021-01-29 20:37:33.998+00	2021-01-29 20:37:33.998+00
4119	1	84	15	2021-01-29 20:37:37.888+00	2021-01-29 20:37:37.888+00
4120	1	84	16	2021-01-29 20:37:41.327+00	2021-01-29 20:37:41.327+00
4121	1	84	17	2021-01-29 20:37:44.821+00	2021-01-29 20:37:44.821+00
4122	1	84	18	2021-01-29 20:37:47.78+00	2021-01-29 20:37:47.78+00
4123	4	84	19	2021-01-29 20:37:53.655+00	2021-01-29 20:37:53.655+00
4124	3	84	20	2021-01-29 20:37:56.305+00	2021-01-29 20:37:56.305+00
4125	1	84	21	2021-01-29 20:37:59.142+00	2021-01-29 20:37:59.142+00
4126	4	84	22	2021-01-29 20:38:02.051+00	2021-01-29 20:38:02.051+00
4127	2	84	23	2021-01-29 20:38:05.222+00	2021-01-29 20:38:05.222+00
4128	3	84	24	2021-01-29 20:38:07.842+00	2021-01-29 20:38:07.842+00
4129	4	84	25	2021-01-29 20:38:10.565+00	2021-01-29 20:38:10.565+00
4130	2	84	26	2021-01-29 20:38:13.431+00	2021-01-29 20:38:13.431+00
4131	3	84	27	2021-01-29 20:38:16.238+00	2021-01-29 20:38:16.238+00
4132	4	84	28	2021-01-29 20:38:22.425+00	2021-01-29 20:38:22.425+00
4133	1	84	29	2021-01-29 20:38:25.364+00	2021-01-29 20:38:25.364+00
4134	1	84	30	2021-01-29 20:38:28.122+00	2021-01-29 20:38:28.122+00
4135	2	84	31	2021-01-29 20:38:30.832+00	2021-01-29 20:38:30.832+00
4136	3	84	32	2021-01-29 20:38:33.535+00	2021-01-29 20:38:33.535+00
4137	4	84	33	2021-01-29 20:38:36.352+00	2021-01-29 20:38:36.352+00
4138	3	84	34	2021-01-29 20:38:38.842+00	2021-01-29 20:38:38.842+00
4139	4	84	35	2021-01-29 20:38:41.653+00	2021-01-29 20:38:41.653+00
4140	2	84	36	2021-01-29 20:38:44.17+00	2021-01-29 20:38:44.17+00
4141	100	83	335	2021-01-29 21:33:05.511+00	2021-01-29 21:33:05.511+00
4142	1	83	91	2021-01-29 21:33:10.574+00	2021-01-29 21:33:10.574+00
4143	1	83	92	2021-01-29 21:33:13.467+00	2021-01-29 21:33:13.467+00
4144	0	83	93	2021-01-29 21:33:16.662+00	2021-01-29 21:33:16.662+00
4145	0	83	94	2021-01-29 21:33:19.609+00	2021-01-29 21:33:19.609+00
4146	0	83	95	2021-01-29 21:33:22.283+00	2021-01-29 21:33:22.283+00
4147	1	83	96	2021-01-29 21:33:25.389+00	2021-01-29 21:33:25.389+00
4148	0	83	97	2021-01-29 21:33:28.3+00	2021-01-29 21:33:28.3+00
4149	1	83	98	2021-01-29 21:33:31.627+00	2021-01-29 21:33:31.627+00
4150	1	83	99	2021-01-29 21:33:33.971+00	2021-01-29 21:33:33.971+00
4151	1	83	100	2021-01-29 21:33:36.411+00	2021-01-29 21:33:36.411+00
4152	1	83	101	2021-01-29 21:33:39.055+00	2021-01-29 21:33:39.055+00
4153	1	83	102	2021-01-29 21:33:41.527+00	2021-01-29 21:33:41.527+00
4154	1	83	103	2021-01-29 21:33:43.961+00	2021-01-29 21:33:43.961+00
4155	1	83	104	2021-01-29 21:33:46.538+00	2021-01-29 21:33:46.538+00
4156	1	83	105	2021-01-29 21:33:49.415+00	2021-01-29 21:33:49.415+00
4157	1	83	106	2021-01-29 21:33:52.043+00	2021-01-29 21:33:52.043+00
4158	1	83	107	2021-01-29 21:33:54.628+00	2021-01-29 21:33:54.628+00
4159	1	83	108	2021-01-29 21:33:57.281+00	2021-01-29 21:33:57.281+00
4160	1	83	109	2021-01-29 21:34:00.1+00	2021-01-29 21:34:00.1+00
4161	3	83	110	2021-01-29 21:34:06.736+00	2021-01-29 21:34:06.736+00
4162	1	83	111	2021-01-29 21:34:09.607+00	2021-01-29 21:34:09.607+00
4163	4	83	112	2021-01-29 21:34:12.869+00	2021-01-29 21:34:12.869+00
4164	1	83	113	2021-01-29 21:34:15.946+00	2021-01-29 21:34:15.946+00
4165	1	83	114	2021-01-29 21:34:18.635+00	2021-01-29 21:34:18.635+00
4166	3	83	115	2021-01-29 21:34:21.83+00	2021-01-29 21:34:21.83+00
4167	3	83	116	2021-01-29 21:34:24.979+00	2021-01-29 21:34:24.979+00
4168	2	83	117	2021-01-29 21:34:27.954+00	2021-01-29 21:34:27.954+00
4169	1	83	118	2021-01-29 21:34:31.001+00	2021-01-29 21:34:31.001+00
4170	1	83	119	2021-01-29 21:34:33.888+00	2021-01-29 21:34:33.888+00
4171	100	83	336	2021-01-29 21:35:34.999+00	2021-01-29 21:35:34.999+00
4172	1	83	120	2021-01-29 21:35:39.88+00	2021-01-29 21:35:39.88+00
4173	1	83	121	2021-01-29 21:35:43.115+00	2021-01-29 21:35:43.115+00
4174	0	83	122	2021-01-29 21:35:45.644+00	2021-01-29 21:35:45.644+00
4175	1	83	123	2021-01-29 21:35:48.417+00	2021-01-29 21:35:48.417+00
4176	0	83	124	2021-01-29 21:35:51.026+00	2021-01-29 21:35:51.026+00
4177	1	83	125	2021-01-29 21:35:53.754+00	2021-01-29 21:35:53.754+00
4178	1	83	126	2021-01-29 21:35:56.14+00	2021-01-29 21:35:56.14+00
4179	1	83	127	2021-01-29 21:35:59.388+00	2021-01-29 21:35:59.388+00
4180	1	83	128	2021-01-29 21:36:01.78+00	2021-01-29 21:36:01.78+00
4181	1	83	129	2021-01-29 21:36:04.275+00	2021-01-29 21:36:04.275+00
4182	1	83	130	2021-01-29 21:36:06.888+00	2021-01-29 21:36:06.888+00
4183	1	83	131	2021-01-29 21:36:09.41+00	2021-01-29 21:36:09.41+00
4184	1	83	132	2021-01-29 21:36:11.763+00	2021-01-29 21:36:11.763+00
4185	0	83	133	2021-01-29 21:36:14.356+00	2021-01-29 21:36:14.356+00
4186	1	83	134	2021-01-29 21:36:16.859+00	2021-01-29 21:36:16.859+00
4187	1	83	135	2021-01-29 21:36:19.267+00	2021-01-29 21:36:19.267+00
4188	2	83	136	2021-01-29 21:36:27.082+00	2021-01-29 21:36:27.082+00
4189	5	83	137	2021-01-29 21:36:29.803+00	2021-01-29 21:36:29.803+00
4190	3	83	138	2021-01-29 21:36:32.48+00	2021-01-29 21:36:32.48+00
4191	5	83	139	2021-01-29 21:36:35.84+00	2021-01-29 21:36:35.84+00
4192	5	83	140	2021-01-29 21:36:38.774+00	2021-01-29 21:36:38.774+00
4193	3	83	141	2021-01-29 21:36:41.863+00	2021-01-29 21:36:41.863+00
4194	5	83	142	2021-01-29 21:36:44.699+00	2021-01-29 21:36:44.699+00
4195	6	83	143	2021-01-29 21:36:48.079+00	2021-01-29 21:36:48.079+00
4196	2	83	144	2021-01-29 21:36:51.646+00	2021-01-29 21:36:51.646+00
4197	5	83	145	2021-01-29 21:36:54.258+00	2021-01-29 21:36:54.258+00
4198	2	83	146	2021-01-29 21:36:57.141+00	2021-01-29 21:36:57.141+00
4199	4	83	147	2021-01-29 21:37:00.51+00	2021-01-29 21:37:00.51+00
4200	2	83	148	2021-01-29 21:37:03.558+00	2021-01-29 21:37:03.558+00
4201	2	83	149	2021-01-29 21:37:06.187+00	2021-01-29 21:37:06.187+00
4202	3	83	150	2021-01-29 21:37:09.773+00	2021-01-29 21:37:09.773+00
4203	1	83	151	2021-01-29 21:37:58.242+00	2021-01-29 21:37:58.242+00
4204	1	83	152	2021-01-29 21:38:02.469+00	2021-01-29 21:38:02.469+00
4205	1	83	153	2021-01-29 21:38:06.796+00	2021-01-29 21:38:06.796+00
4206	1	83	154	2021-01-29 21:38:11.39+00	2021-01-29 21:38:11.39+00
4207	0	83	155	2021-01-29 21:38:15.615+00	2021-01-29 21:38:15.615+00
4208	1	83	156	2021-01-29 21:38:20.481+00	2021-01-29 21:38:20.481+00
4209	0	83	157	2021-01-29 21:38:24.79+00	2021-01-29 21:38:24.79+00
4210	1	83	158	2021-01-29 21:38:29.002+00	2021-01-29 21:38:29.002+00
4211	2	83	159	2021-01-29 21:38:41.288+00	2021-01-29 21:38:41.288+00
4212	2	83	160	2021-01-29 21:38:50.663+00	2021-01-29 21:38:50.663+00
4213	1	83	161	2021-01-29 21:39:00.108+00	2021-01-29 21:39:00.108+00
4214	3	83	162	2021-01-29 21:39:09.51+00	2021-01-29 21:39:09.51+00
4215	2	83	163	2021-01-29 21:39:18.685+00	2021-01-29 21:39:18.685+00
4216	0	83	164	2021-01-29 21:39:25.008+00	2021-01-29 21:39:25.008+00
4217	1	83	165	2021-01-29 21:39:28.407+00	2021-01-29 21:39:28.407+00
4218	1	83	166	2021-01-29 21:39:31.64+00	2021-01-29 21:39:31.64+00
4219	0	83	167	2021-01-29 21:39:35.282+00	2021-01-29 21:39:35.282+00
4220	1	83	168	2021-01-29 21:39:38.639+00	2021-01-29 21:39:38.639+00
4221	1	83	169	2021-01-29 21:39:41.943+00	2021-01-29 21:39:41.943+00
4222	1	83	170	2021-01-29 21:39:45.055+00	2021-01-29 21:39:45.055+00
4223	1	83	171	2021-01-29 21:39:48.099+00	2021-01-29 21:39:48.099+00
4224	1	83	172	2021-01-29 21:39:51.296+00	2021-01-29 21:39:51.296+00
4225	1	83	173	2021-01-29 21:39:54.299+00	2021-01-29 21:39:54.299+00
4226	1	83	174	2021-01-29 21:40:04.316+00	2021-01-29 21:40:04.316+00
4227	1	83	175	2021-01-29 21:40:11.184+00	2021-01-29 21:40:11.184+00
4228	1	83	176	2021-01-29 21:40:18.286+00	2021-01-29 21:40:18.286+00
4229	1	83	177	2021-01-29 21:40:25.529+00	2021-01-29 21:40:25.529+00
4230	5	83	337	2021-01-29 21:41:02.286+00	2021-01-29 21:41:02.286+00
4231	3	83	338	2021-01-29 21:41:05.765+00	2021-01-29 21:41:05.765+00
4232	5	83	339	2021-01-29 21:41:09.391+00	2021-01-29 21:41:09.391+00
4233	5	83	340	2021-01-29 21:41:13.953+00	2021-01-29 21:41:13.953+00
4234	6	83	341	2021-01-29 21:41:17.654+00	2021-01-29 21:41:17.654+00
4235	3	83	342	2021-01-29 21:41:21.934+00	2021-01-29 21:41:21.934+00
4236	3	83	343	2021-01-29 21:41:25.752+00	2021-01-29 21:41:25.752+00
4237	2	83	344	2021-01-29 21:41:29.837+00	2021-01-29 21:41:29.837+00
4238	4	83	345	2021-01-29 21:41:33.415+00	2021-01-29 21:41:33.415+00
4239	5	83	346	2021-01-29 21:41:37.031+00	2021-01-29 21:41:37.031+00
4240	3	83	347	2021-01-29 21:41:40.776+00	2021-01-29 21:41:40.776+00
4241	3	83	348	2021-01-29 21:41:44.735+00	2021-01-29 21:41:44.735+00
4242	2	83	349	2021-01-29 21:41:48.184+00	2021-01-29 21:41:48.184+00
4243	2	83	350	2021-01-29 21:41:51.519+00	2021-01-29 21:41:51.519+00
4244	2	83	351	2021-01-29 21:41:55.665+00	2021-01-29 21:41:55.665+00
4245	4	83	352	2021-01-29 21:41:59.019+00	2021-01-29 21:41:59.019+00
4246	3	83	353	2021-01-29 21:42:02.794+00	2021-01-29 21:42:02.794+00
4247	5	83	354	2021-01-29 21:42:06.546+00	2021-01-29 21:42:06.546+00
4248	6	83	355	2021-01-29 21:42:10.453+00	2021-01-29 21:42:10.453+00
4249	2	83	356	2021-01-29 21:42:14.047+00	2021-01-29 21:42:14.047+00
4250	5	83	357	2021-01-29 21:42:18.339+00	2021-01-29 21:42:18.339+00
4251	2	83	358	2021-01-29 21:42:22.878+00	2021-01-29 21:42:22.878+00
4252	7	83	359	2021-01-29 21:42:27.511+00	2021-01-29 21:42:27.511+00
4253	8	83	360	2021-01-29 21:42:31.886+00	2021-01-29 21:42:31.886+00
4254	3	83	361	2021-01-29 21:42:36.415+00	2021-01-29 21:42:36.415+00
4255	8	83	362	2021-01-29 21:42:41.24+00	2021-01-29 21:42:41.24+00
4256	8	83	363	2021-01-29 21:42:45.843+00	2021-01-29 21:42:45.843+00
4257	8	83	364	2021-01-29 21:42:50.221+00	2021-01-29 21:42:50.221+00
4258	2	83	186	2021-01-29 21:43:24.84+00	2021-01-29 21:43:24.84+00
4259	2	83	187	2021-01-29 21:43:27.456+00	2021-01-29 21:43:27.456+00
4260	3	83	188	2021-01-29 21:43:30.568+00	2021-01-29 21:43:30.568+00
4261	2	83	189	2021-01-29 21:43:33.366+00	2021-01-29 21:43:33.366+00
4262	1	83	190	2021-01-29 21:43:36.108+00	2021-01-29 21:43:36.108+00
4263	3	83	191	2021-01-29 21:43:38.902+00	2021-01-29 21:43:38.902+00
4264	3	83	192	2021-01-29 21:43:41.72+00	2021-01-29 21:43:41.72+00
4265	3	83	193	2021-01-29 21:43:44.156+00	2021-01-29 21:43:44.156+00
4266	3	83	194	2021-01-29 21:43:46.395+00	2021-01-29 21:43:46.395+00
4267	1	83	195	2021-01-29 21:43:49.335+00	2021-01-29 21:43:49.335+00
4268	4	83	196	2021-01-29 21:43:52.128+00	2021-01-29 21:43:52.128+00
4269	1	83	197	2021-01-29 21:43:55.007+00	2021-01-29 21:43:55.007+00
4270	3	83	198	2021-01-29 21:43:57.668+00	2021-01-29 21:43:57.668+00
4271	3	83	199	2021-01-29 21:44:00.317+00	2021-01-29 21:44:00.317+00
4272	4	83	200	2021-01-29 21:44:03.242+00	2021-01-29 21:44:03.242+00
4273	1	83	201	2021-01-29 21:44:05.971+00	2021-01-29 21:44:05.971+00
4274	3	83	202	2021-01-29 21:44:09.051+00	2021-01-29 21:44:09.051+00
4275	1	83	203	2021-01-29 21:44:19.851+00	2021-01-29 21:44:19.851+00
4276	1	83	204	2021-01-29 21:44:26.703+00	2021-01-29 21:44:26.703+00
4277	0	83	205	2021-01-29 21:44:33.915+00	2021-01-29 21:44:33.915+00
4278	0	83	206	2021-01-29 21:44:40.613+00	2021-01-29 21:44:40.613+00
4279	100	84	333	2021-01-29 22:08:08.885+00	2021-01-29 22:08:08.885+00
4280	3	84	37	2021-01-29 22:08:14.979+00	2021-01-29 22:08:14.979+00
4281	2	84	38	2021-01-29 22:08:18.414+00	2021-01-29 22:08:18.414+00
4282	3	84	39	2021-01-29 22:08:21.774+00	2021-01-29 22:08:21.774+00
4283	2	84	40	2021-01-29 22:08:25.385+00	2021-01-29 22:08:25.385+00
4284	3	84	41	2021-01-29 22:08:28.765+00	2021-01-29 22:08:28.765+00
4285	2	84	42	2021-01-29 22:08:32.296+00	2021-01-29 22:08:32.296+00
4286	2	84	43	2021-01-29 22:08:35.79+00	2021-01-29 22:08:35.79+00
4287	3	84	44	2021-01-29 22:08:39.212+00	2021-01-29 22:08:39.212+00
4288	2	84	45	2021-01-29 22:08:42.893+00	2021-01-29 22:08:42.893+00
4289	3	84	46	2021-01-29 22:08:46.381+00	2021-01-29 22:08:46.381+00
4290	2	84	47	2021-01-29 22:08:49.919+00	2021-01-29 22:08:49.919+00
4291	2	84	48	2021-01-29 22:08:53.408+00	2021-01-29 22:08:53.408+00
4292	3	84	49	2021-01-29 22:08:57.182+00	2021-01-29 22:08:57.182+00
4293	3	84	50	2021-01-29 22:09:00.986+00	2021-01-29 22:09:00.986+00
4294	3	84	51	2021-01-29 22:09:04.972+00	2021-01-29 22:09:04.972+00
4295	3	84	52	2021-01-29 22:09:08.865+00	2021-01-29 22:09:08.865+00
4296	3	84	53	2021-01-29 22:09:12.7+00	2021-01-29 22:09:12.7+00
4297	2	84	54	2021-01-29 22:09:16.806+00	2021-01-29 22:09:16.806+00
4298	4	84	55	2021-01-29 22:09:20.767+00	2021-01-29 22:09:20.767+00
4299	3	84	56	2021-01-29 22:09:24.754+00	2021-01-29 22:09:24.754+00
4300	2	84	57	2021-01-29 22:09:28.661+00	2021-01-29 22:09:28.661+00
4301	3	84	58	2021-01-29 22:09:32.585+00	2021-01-29 22:09:32.585+00
4302	3	84	59	2021-01-29 22:09:36.704+00	2021-01-29 22:09:36.704+00
4303	100	84	334	2021-01-29 22:10:34.205+00	2021-01-29 22:10:34.205+00
4304	1	84	60	2021-01-29 22:10:42.38+00	2021-01-29 22:10:42.38+00
4305	0	84	61	2021-01-29 22:10:45.774+00	2021-01-29 22:10:45.774+00
4306	1	84	62	2021-01-29 22:10:48.995+00	2021-01-29 22:10:48.995+00
4307	1	84	63	2021-01-29 22:10:52.187+00	2021-01-29 22:10:52.187+00
4308	0	84	64	2021-01-29 22:10:55.416+00	2021-01-29 22:10:55.416+00
4309	1	84	65	2021-01-29 22:10:58.568+00	2021-01-29 22:10:58.568+00
4310	1	84	66	2021-01-29 22:11:01.656+00	2021-01-29 22:11:01.656+00
4311	0	84	67	2021-01-29 22:11:04.697+00	2021-01-29 22:11:04.697+00
4312	1	84	68	2021-01-29 22:11:07.747+00	2021-01-29 22:11:07.747+00
4313	1	84	69	2021-01-29 22:11:10.853+00	2021-01-29 22:11:10.853+00
4314	1	84	70	2021-01-29 22:11:13.858+00	2021-01-29 22:11:13.858+00
4315	1	84	71	2021-01-29 22:11:16.786+00	2021-01-29 22:11:16.786+00
4316	4	84	72	2021-01-29 22:11:23.904+00	2021-01-29 22:11:23.904+00
4317	1	84	73	2021-01-29 22:11:26.447+00	2021-01-29 22:11:26.447+00
4318	3	84	74	2021-01-29 22:11:29.564+00	2021-01-29 22:11:29.564+00
4319	1	84	75	2021-01-29 22:11:32.678+00	2021-01-29 22:11:32.678+00
4320	3	84	76	2021-01-29 22:11:35.557+00	2021-01-29 22:11:35.557+00
4321	2	84	77	2021-01-29 22:11:38.43+00	2021-01-29 22:11:38.43+00
4322	3	84	78	2021-01-29 22:11:41.266+00	2021-01-29 22:11:41.266+00
4323	1	84	79	2021-01-29 22:11:44.019+00	2021-01-29 22:11:44.019+00
4324	1	84	80	2021-01-29 22:11:46.264+00	2021-01-29 22:11:46.264+00
4325	2	84	81	2021-01-29 22:11:48.861+00	2021-01-29 22:11:48.861+00
4326	3	84	82	2021-01-29 22:11:54.841+00	2021-01-29 22:11:54.841+00
4327	3	84	83	2021-01-29 22:12:00.902+00	2021-01-29 22:12:00.902+00
4328	3	84	84	2021-01-29 22:12:04.112+00	2021-01-29 22:12:04.112+00
4329	2	84	85	2021-01-29 22:12:07.862+00	2021-01-29 22:12:07.862+00
4330	2	84	86	2021-01-29 22:12:11.274+00	2021-01-29 22:12:11.274+00
4331	3	84	87	2021-01-29 22:12:15.105+00	2021-01-29 22:12:15.105+00
4332	3	84	88	2021-01-29 22:12:18.386+00	2021-01-29 22:12:18.386+00
4333	3	84	89	2021-01-29 22:12:21.545+00	2021-01-29 22:12:21.545+00
4334	2	84	90	2021-01-29 22:12:24.815+00	2021-01-29 22:12:24.815+00
4335	100	84	335	2021-01-29 22:19:03.868+00	2021-01-29 22:19:03.868+00
4336	1	84	91	2021-01-29 22:19:09.186+00	2021-01-29 22:19:09.186+00
4337	1	84	92	2021-01-29 22:19:11.928+00	2021-01-29 22:19:11.928+00
4338	1	84	93	2021-01-29 22:19:15.156+00	2021-01-29 22:19:15.156+00
4339	0	84	94	2021-01-29 22:19:18.036+00	2021-01-29 22:19:18.036+00
4340	0	84	95	2021-01-29 22:19:20.903+00	2021-01-29 22:19:20.903+00
4341	0	84	96	2021-01-29 22:19:23.642+00	2021-01-29 22:19:23.642+00
4342	0	84	97	2021-01-29 22:19:26.388+00	2021-01-29 22:19:26.388+00
4343	1	84	98	2021-01-29 22:19:29.681+00	2021-01-29 22:19:29.681+00
4344	1	84	99	2021-01-29 22:19:32.294+00	2021-01-29 22:19:32.294+00
4345	1	84	100	2021-01-29 22:19:34.972+00	2021-01-29 22:19:34.972+00
4346	1	84	101	2021-01-29 22:19:37.635+00	2021-01-29 22:19:37.635+00
4347	1	84	102	2021-01-29 22:19:40.342+00	2021-01-29 22:19:40.342+00
4348	1	84	103	2021-01-29 22:19:43.075+00	2021-01-29 22:19:43.075+00
4349	1	84	104	2021-01-29 22:19:45.713+00	2021-01-29 22:19:45.713+00
4350	1	84	105	2021-01-29 22:19:48.296+00	2021-01-29 22:19:48.296+00
4351	1	84	106	2021-01-29 22:19:50.891+00	2021-01-29 22:19:50.891+00
4352	0	84	107	2021-01-29 22:19:54.322+00	2021-01-29 22:19:54.322+00
4353	0	84	108	2021-01-29 22:19:57.36+00	2021-01-29 22:19:57.36+00
4354	0	84	109	2021-01-29 22:20:00.12+00	2021-01-29 22:20:00.12+00
4355	3	84	110	2021-01-29 22:20:06.212+00	2021-01-29 22:20:06.212+00
4356	1	84	111	2021-01-29 22:20:08.985+00	2021-01-29 22:20:08.985+00
4357	4	84	112	2021-01-29 22:20:12.136+00	2021-01-29 22:20:12.136+00
4358	1	84	113	2021-01-29 22:20:14.938+00	2021-01-29 22:20:14.938+00
4359	1	84	114	2021-01-29 22:20:17.573+00	2021-01-29 22:20:17.573+00
4360	3	84	115	2021-01-29 22:20:20.556+00	2021-01-29 22:20:20.556+00
4361	3	84	116	2021-01-29 22:20:23.648+00	2021-01-29 22:20:23.648+00
4362	1	84	117	2021-01-29 22:20:26.648+00	2021-01-29 22:20:26.648+00
4363	1	84	118	2021-01-29 22:20:29.251+00	2021-01-29 22:20:29.251+00
4364	1	84	119	2021-01-29 22:20:31.85+00	2021-01-29 22:20:31.85+00
4365	100	84	336	2021-01-29 22:21:26.805+00	2021-01-29 22:21:26.805+00
4366	1	84	120	2021-01-29 22:21:32.075+00	2021-01-29 22:21:32.075+00
4367	0	84	121	2021-01-29 22:21:34.652+00	2021-01-29 22:21:34.652+00
4368	0	84	122	2021-01-29 22:21:37.418+00	2021-01-29 22:21:37.418+00
4369	1	84	123	2021-01-29 22:21:40.105+00	2021-01-29 22:21:40.105+00
4370	1	84	124	2021-01-29 22:21:42.948+00	2021-01-29 22:21:42.948+00
4371	0	84	125	2021-01-29 22:21:45.465+00	2021-01-29 22:21:45.465+00
4372	1	84	126	2021-01-29 22:21:48.19+00	2021-01-29 22:21:48.19+00
4373	1	84	127	2021-01-29 22:21:50.652+00	2021-01-29 22:21:50.652+00
4374	1	84	128	2021-01-29 22:21:53.057+00	2021-01-29 22:21:53.057+00
4375	1	84	129	2021-01-29 22:21:55.619+00	2021-01-29 22:21:55.619+00
4376	0	84	130	2021-01-29 22:21:58.284+00	2021-01-29 22:21:58.284+00
4377	0	84	131	2021-01-29 22:22:01.08+00	2021-01-29 22:22:01.08+00
4378	1	84	132	2021-01-29 22:22:03.672+00	2021-01-29 22:22:03.672+00
4379	0	84	133	2021-01-29 22:22:06.387+00	2021-01-29 22:22:06.387+00
4380	1	84	134	2021-01-29 22:22:08.752+00	2021-01-29 22:22:08.752+00
4381	0	84	135	2021-01-29 22:22:11.36+00	2021-01-29 22:22:11.36+00
4382	2	84	136	2021-01-29 22:22:17.262+00	2021-01-29 22:22:17.262+00
4383	5	84	137	2021-01-29 22:22:19.64+00	2021-01-29 22:22:19.64+00
4384	3	84	138	2021-01-29 22:22:22.442+00	2021-01-29 22:22:22.442+00
4385	5	84	139	2021-01-29 22:22:24.975+00	2021-01-29 22:22:24.975+00
4386	2	84	140	2021-01-29 22:22:28.264+00	2021-01-29 22:22:28.264+00
4387	1	84	141	2021-01-29 22:22:31.333+00	2021-01-29 22:22:31.333+00
4388	5	84	142	2021-01-29 22:22:34.172+00	2021-01-29 22:22:34.172+00
4389	3	84	143	2021-01-29 22:22:37.368+00	2021-01-29 22:22:37.368+00
4390	2	84	144	2021-01-29 22:22:40.296+00	2021-01-29 22:22:40.296+00
4391	5	84	145	2021-01-29 22:22:42.809+00	2021-01-29 22:22:42.809+00
4392	2	84	146	2021-01-29 22:22:45.834+00	2021-01-29 22:22:45.834+00
4393	4	84	147	2021-01-29 22:22:48.781+00	2021-01-29 22:22:48.781+00
4394	2	84	148	2021-01-29 22:22:51.953+00	2021-01-29 22:22:51.953+00
4395	2	84	149	2021-01-29 22:22:54.753+00	2021-01-29 22:22:54.753+00
4396	5	84	150	2021-01-29 22:22:57.621+00	2021-01-29 22:22:57.621+00
4397	1	84	151	2021-01-29 22:23:32.212+00	2021-01-29 22:23:32.212+00
4398	1	84	152	2021-01-29 22:23:36.507+00	2021-01-29 22:23:36.507+00
4399	1	84	153	2021-01-29 22:23:40.899+00	2021-01-29 22:23:40.899+00
4400	1	84	154	2021-01-29 22:23:45.16+00	2021-01-29 22:23:45.16+00
4401	0	84	155	2021-01-29 22:23:49.585+00	2021-01-29 22:23:49.585+00
4402	1	84	156	2021-01-29 22:23:53.983+00	2021-01-29 22:23:53.983+00
4403	1	84	157	2021-01-29 22:23:58.183+00	2021-01-29 22:23:58.183+00
4404	1	84	158	2021-01-29 22:24:02.237+00	2021-01-29 22:24:02.237+00
4405	2	84	159	2021-01-29 22:24:13.76+00	2021-01-29 22:24:13.76+00
4406	2	84	160	2021-01-29 22:24:23.113+00	2021-01-29 22:24:23.113+00
4407	2	84	161	2021-01-29 22:24:32.279+00	2021-01-29 22:24:32.279+00
4408	1	84	162	2021-01-29 22:24:41.414+00	2021-01-29 22:24:41.414+00
4409	1	84	163	2021-01-29 22:24:50.687+00	2021-01-29 22:24:50.687+00
4410	1	84	164	2021-01-29 22:24:56.717+00	2021-01-29 22:24:56.717+00
4411	1	84	165	2021-01-29 22:24:59.798+00	2021-01-29 22:24:59.798+00
4412	1	84	166	2021-01-29 22:25:03.007+00	2021-01-29 22:25:03.007+00
4413	1	84	167	2021-01-29 22:25:06.317+00	2021-01-29 22:25:06.317+00
4414	1	84	168	2021-01-29 22:25:09.751+00	2021-01-29 22:25:09.751+00
4415	1	84	169	2021-01-29 22:25:12.936+00	2021-01-29 22:25:12.936+00
4416	1	84	170	2021-01-29 22:25:16.216+00	2021-01-29 22:25:16.216+00
4417	1	84	171	2021-01-29 22:25:19.448+00	2021-01-29 22:25:19.448+00
4418	1	84	172	2021-01-29 22:25:22.91+00	2021-01-29 22:25:22.91+00
4419	1	84	173	2021-01-29 22:25:26.621+00	2021-01-29 22:25:26.621+00
4420	1	84	174	2021-01-29 22:25:37.475+00	2021-01-29 22:25:37.475+00
4421	1	84	175	2021-01-29 22:25:44.084+00	2021-01-29 22:25:44.084+00
4422	1	84	176	2021-01-29 22:25:50.544+00	2021-01-29 22:25:50.544+00
4423	1	84	177	2021-01-29 22:25:57.048+00	2021-01-29 22:25:57.048+00
4424	6	84	337	2021-01-29 22:26:47.807+00	2021-01-29 22:26:47.807+00
4425	6	84	338	2021-01-29 22:28:08.677+00	2021-01-29 22:28:08.677+00
4426	4	84	339	2021-01-29 22:28:12.48+00	2021-01-29 22:28:12.48+00
4427	4	84	340	2021-01-29 22:28:16.184+00	2021-01-29 22:28:16.184+00
4428	3	84	341	2021-01-29 22:28:19.784+00	2021-01-29 22:28:19.784+00
4429	1	84	342	2021-01-29 22:28:23.777+00	2021-01-29 22:28:23.777+00
4430	3	84	343	2021-01-29 22:28:27.497+00	2021-01-29 22:28:27.497+00
4431	6	84	344	2021-01-29 22:28:31.22+00	2021-01-29 22:28:31.22+00
4432	1	84	345	2021-01-29 22:28:35.203+00	2021-01-29 22:28:35.203+00
4433	3	84	346	2021-01-29 22:28:38.824+00	2021-01-29 22:28:38.824+00
4434	4	84	347	2021-01-29 22:28:42.801+00	2021-01-29 22:28:42.801+00
4435	4	84	348	2021-01-29 22:28:46.3+00	2021-01-29 22:28:46.3+00
4436	1	84	349	2021-01-29 22:28:50.264+00	2021-01-29 22:28:50.264+00
4437	4	84	350	2021-01-29 22:28:53.958+00	2021-01-29 22:28:53.958+00
4438	3	84	351	2021-01-29 22:28:57.488+00	2021-01-29 22:28:57.488+00
4439	6	84	352	2021-01-29 22:29:01.336+00	2021-01-29 22:29:01.336+00
4440	1	84	353	2021-01-29 22:29:08.328+00	2021-01-29 22:29:08.328+00
4441	2	84	354	2021-01-29 22:29:11.897+00	2021-01-29 22:29:11.897+00
4442	5	84	355	2021-01-29 22:29:15.494+00	2021-01-29 22:29:15.494+00
4443	6	84	356	2021-01-29 22:29:19.029+00	2021-01-29 22:29:19.029+00
4444	4	84	357	2021-01-29 22:29:23.341+00	2021-01-29 22:29:23.341+00
4445	7	84	358	2021-01-29 22:29:27.793+00	2021-01-29 22:29:27.793+00
4446	5	84	359	2021-01-29 22:29:31.901+00	2021-01-29 22:29:31.901+00
4447	3	84	360	2021-01-29 22:29:36.273+00	2021-01-29 22:29:36.273+00
4448	2	84	361	2021-01-29 22:29:40.912+00	2021-01-29 22:29:40.912+00
4449	8	84	362	2021-01-29 22:29:45.519+00	2021-01-29 22:29:45.519+00
4450	4	84	363	2021-01-29 22:29:49.83+00	2021-01-29 22:29:49.83+00
4451	4	84	364	2021-01-29 22:29:54.021+00	2021-01-29 22:29:54.021+00
4452	1	84	186	2021-01-29 22:30:21.464+00	2021-01-29 22:30:21.464+00
4453	4	84	187	2021-01-29 22:30:24.279+00	2021-01-29 22:30:24.279+00
4454	3	84	188	2021-01-29 22:30:27.211+00	2021-01-29 22:30:27.211+00
4455	2	84	189	2021-01-29 22:30:29.907+00	2021-01-29 22:30:29.907+00
4456	1	84	190	2021-01-29 22:30:32.503+00	2021-01-29 22:30:32.503+00
4457	3	84	191	2021-01-29 22:30:34.947+00	2021-01-29 22:30:34.947+00
4458	4	84	192	2021-01-29 22:30:38.493+00	2021-01-29 22:30:38.493+00
4459	3	84	193	2021-01-29 22:30:41.428+00	2021-01-29 22:30:41.428+00
4460	2	84	194	2021-01-29 22:30:44.158+00	2021-01-29 22:30:44.158+00
4461	3	84	195	2021-01-29 22:30:46.932+00	2021-01-29 22:30:46.932+00
4462	1	84	196	2021-01-29 22:30:49.763+00	2021-01-29 22:30:49.763+00
4463	3	84	197	2021-01-29 22:30:52.581+00	2021-01-29 22:30:52.581+00
4464	1	84	198	2021-01-29 22:30:55.415+00	2021-01-29 22:30:55.415+00
4465	3	84	199	2021-01-29 22:30:58.779+00	2021-01-29 22:30:58.779+00
4466	2	84	200	2021-01-29 22:31:01.525+00	2021-01-29 22:31:01.525+00
4467	1	84	201	2021-01-29 22:31:05.373+00	2021-01-29 22:31:05.373+00
4468	1	84	202	2021-01-29 22:31:08.131+00	2021-01-29 22:31:08.131+00
4469	1	84	203	2021-01-29 22:31:18.216+00	2021-01-29 22:31:18.216+00
4470	0	84	204	2021-01-29 22:31:24.833+00	2021-01-29 22:31:24.833+00
4471	1	84	205	2021-01-29 22:31:31.598+00	2021-01-29 22:31:31.598+00
4472	1	84	206	2021-01-29 22:31:38.597+00	2021-01-29 22:31:38.597+00
4473	4	84	208	2021-01-29 22:32:16.487+00	2021-01-29 22:32:16.487+00
4474	1	84	209	2021-01-29 22:32:19.529+00	2021-01-29 22:32:19.529+00
4475	4	84	210	2021-01-29 22:32:22.733+00	2021-01-29 22:32:22.733+00
4476	2	84	211	2021-01-29 22:32:27.046+00	2021-01-29 22:32:27.046+00
4477	5	84	212	2021-01-29 22:32:30.235+00	2021-01-29 22:32:30.235+00
4478	4	84	213	2021-01-29 22:32:33.457+00	2021-01-29 22:32:33.457+00
4479	3	84	214	2021-01-29 22:32:36.553+00	2021-01-29 22:32:36.553+00
4480	1	84	215	2021-01-29 22:32:39.639+00	2021-01-29 22:32:39.639+00
4481	6	84	216	2021-01-29 22:32:42.921+00	2021-01-29 22:32:42.921+00
4482	4	84	217	2021-01-29 22:32:45.979+00	2021-01-29 22:32:45.979+00
4483	5	84	218	2021-01-29 22:32:49.261+00	2021-01-29 22:32:49.261+00
4484	1	84	219	2021-01-29 22:32:52.266+00	2021-01-29 22:32:52.266+00
4485	4	84	220	2021-01-29 22:32:55.588+00	2021-01-29 22:32:55.588+00
4486	1	84	221	2021-01-29 22:32:58.69+00	2021-01-29 22:32:58.69+00
4487	3	84	222	2021-01-29 22:33:04.521+00	2021-01-29 22:33:04.521+00
4488	1	84	223	2021-01-29 22:33:07.326+00	2021-01-29 22:33:07.326+00
4489	1	84	224	2021-01-29 22:33:10.648+00	2021-01-29 22:33:10.648+00
4490	6	84	225	2021-01-29 22:33:13.428+00	2021-01-29 22:33:13.428+00
4491	1	84	226	2021-01-29 22:33:16.269+00	2021-01-29 22:33:16.269+00
4492	5	84	227	2021-01-29 22:33:19.25+00	2021-01-29 22:33:19.25+00
4493	4	84	228	2021-01-29 22:33:22.286+00	2021-01-29 22:33:22.286+00
4494	1	84	229	2021-01-29 22:33:25.266+00	2021-01-29 22:33:25.266+00
4495	4	84	230	2021-01-29 22:33:28.352+00	2021-01-29 22:33:28.352+00
4496	6	84	231	2021-01-29 22:33:31.153+00	2021-01-29 22:33:31.153+00
4497	2	84	232	2021-01-29 22:33:34.066+00	2021-01-29 22:33:34.066+00
4498	4	84	233	2021-01-29 22:33:37.051+00	2021-01-29 22:33:37.051+00
4499	5	84	234	2021-01-29 22:33:40.506+00	2021-01-29 22:33:40.506+00
4500	4	84	235	2021-01-29 22:33:43.487+00	2021-01-29 22:33:43.487+00
4501	6	84	236	2021-01-29 22:33:46.474+00	2021-01-29 22:33:46.474+00
4502	1	84	237	2021-01-29 22:33:49.316+00	2021-01-29 22:33:49.316+00
4503	6	84	238	2021-01-29 22:33:52.348+00	2021-01-29 22:33:52.348+00
4504	3	84	239	2021-01-29 22:33:55.184+00	2021-01-29 22:33:55.184+00
4505	4	84	240	2021-01-29 22:33:57.938+00	2021-01-29 22:33:57.938+00
4506	1	84	242	2021-01-29 22:34:04.219+00	2021-01-29 22:34:04.219+00
4507	1	84	243	2021-01-29 22:34:07.032+00	2021-01-29 22:34:07.032+00
4508	1	84	244	2021-01-29 22:34:09.871+00	2021-01-29 22:34:09.871+00
4509	1	84	245	2021-01-29 22:34:12.679+00	2021-01-29 22:34:12.679+00
4510	1	84	246	2021-01-29 22:34:15.748+00	2021-01-29 22:34:15.748+00
4511	1	84	247	2021-01-29 22:34:18.744+00	2021-01-29 22:34:18.744+00
4512	0	84	248	2021-01-29 22:34:22.439+00	2021-01-29 22:34:22.439+00
4513	0	84	249	2021-01-29 22:34:26.512+00	2021-01-29 22:34:26.512+00
4514	0	84	250	2021-01-29 22:34:30.083+00	2021-01-29 22:34:30.083+00
4515	1	84	251	2021-01-29 22:34:33.98+00	2021-01-29 22:34:33.98+00
4516	0	84	252	2021-01-29 22:34:37.998+00	2021-01-29 22:34:37.998+00
4517	0	84	253	2021-01-29 22:34:41.22+00	2021-01-29 22:34:41.22+00
4518	0	84	254	2021-01-29 22:34:44.378+00	2021-01-29 22:34:44.378+00
4519	1	84	255	2021-01-29 22:34:47.62+00	2021-01-29 22:34:47.62+00
4520	0	84	256	2021-01-29 22:34:51.317+00	2021-01-29 22:34:51.317+00
4521	1	84	257	2021-01-29 22:34:54.874+00	2021-01-29 22:34:54.874+00
4522	1	84	258	2021-01-29 22:34:58.643+00	2021-01-29 22:34:58.643+00
4523	1	84	259	2021-01-29 22:35:02.481+00	2021-01-29 22:35:02.481+00
4524	1	84	260	2021-01-29 22:35:05.842+00	2021-01-29 22:35:05.842+00
4525	1	84	261	2021-01-29 22:35:08.979+00	2021-01-29 22:35:08.979+00
4526	0	84	262	2021-01-29 22:35:12.415+00	2021-01-29 22:35:12.415+00
4527	0	84	263	2021-01-29 22:35:15.955+00	2021-01-29 22:35:15.955+00
4528	0	84	264	2021-01-29 22:35:19.272+00	2021-01-29 22:35:19.272+00
4529	1	84	265	2021-01-29 22:35:22.804+00	2021-01-29 22:35:22.804+00
4530	1	84	266	2021-01-29 22:35:26.248+00	2021-01-29 22:35:26.248+00
4531	0	84	267	2021-01-29 22:35:29.688+00	2021-01-29 22:35:29.688+00
4532	0	84	268	2021-01-29 22:35:32.953+00	2021-01-29 22:35:32.953+00
4533	1	84	269	2021-01-29 22:35:36.723+00	2021-01-29 22:35:36.723+00
4534	0	84	270	2021-01-29 22:35:39.944+00	2021-01-29 22:35:39.944+00
4535	1	84	271	2021-01-29 22:35:44.873+00	2021-01-29 22:35:44.873+00
4536	1	84	272	2021-01-29 22:35:49.377+00	2021-01-29 22:35:49.377+00
4537	0	84	273	2021-01-29 22:35:53.26+00	2021-01-29 22:35:53.26+00
4538	0	84	274	2021-01-29 22:35:57.037+00	2021-01-29 22:35:57.037+00
4539	0	84	275	2021-01-29 22:36:00.498+00	2021-01-29 22:36:00.498+00
4540	0	84	276	2021-01-29 22:36:04.213+00	2021-01-29 22:36:04.213+00
4541	0	84	277	2021-01-29 22:36:07.625+00	2021-01-29 22:36:07.625+00
4542	0	84	278	2021-01-29 22:36:11.133+00	2021-01-29 22:36:11.133+00
4543	0	84	279	2021-01-29 22:36:14.565+00	2021-01-29 22:36:14.565+00
4544	1	84	280	2021-01-29 22:36:19.828+00	2021-01-29 22:36:19.828+00
4545	1	84	281	2021-01-29 22:36:23.97+00	2021-01-29 22:36:23.97+00
4546	0	84	282	2021-01-29 22:36:28.412+00	2021-01-29 22:36:28.412+00
4547	1	84	283	2021-01-29 22:36:32.745+00	2021-01-29 22:36:32.745+00
4548	1	84	284	2021-01-29 22:36:36.596+00	2021-01-29 22:36:36.596+00
4549	1	84	285	2021-01-29 22:36:40.323+00	2021-01-29 22:36:40.323+00
4550	2	84	286	2021-01-29 22:37:11.158+00	2021-01-29 22:37:11.158+00
4551	3	84	287	2021-01-29 22:37:13.962+00	2021-01-29 22:37:13.962+00
4552	2	84	288	2021-01-29 22:37:16.598+00	2021-01-29 22:37:16.598+00
4553	1	84	289	2021-01-29 22:37:19.058+00	2021-01-29 22:37:19.058+00
4554	3	84	290	2021-01-29 22:37:21.505+00	2021-01-29 22:37:21.505+00
4555	1	84	291	2021-01-29 22:37:24.475+00	2021-01-29 22:37:24.475+00
4556	2	84	292	2021-01-29 22:37:27.04+00	2021-01-29 22:37:27.04+00
4557	2	84	293	2021-01-29 22:37:29.393+00	2021-01-29 22:37:29.393+00
4558	2	84	294	2021-01-29 22:37:31.972+00	2021-01-29 22:37:31.972+00
4559	3	84	295	2021-01-29 22:37:34.898+00	2021-01-29 22:37:34.898+00
4560	2	84	296	2021-01-29 22:37:37.435+00	2021-01-29 22:37:37.435+00
4561	2	84	297	2021-01-29 22:37:40.264+00	2021-01-29 22:37:40.264+00
4562	2	84	298	2021-01-29 22:37:42.757+00	2021-01-29 22:37:42.757+00
4563	2	84	299	2021-01-29 22:37:45.312+00	2021-01-29 22:37:45.312+00
4564	4	84	300	2021-01-29 22:37:48.334+00	2021-01-29 22:37:48.334+00
4565	3	84	301	2021-01-29 22:37:51.014+00	2021-01-29 22:37:51.014+00
4566	2	84	302	2021-01-29 22:37:53.594+00	2021-01-29 22:37:53.594+00
4567	1	84	303	2021-01-29 22:37:56.648+00	2021-01-29 22:37:56.648+00
4568	2	84	304	2021-01-29 22:37:59.342+00	2021-01-29 22:37:59.342+00
4569	3	84	305	2021-01-29 22:38:01.911+00	2021-01-29 22:38:01.911+00
4570	1	84	306	2021-01-29 22:38:04.835+00	2021-01-29 22:38:04.835+00
4571	2	84	307	2021-01-29 22:38:07.671+00	2021-01-29 22:38:07.671+00
4572	3	84	308	2021-01-29 22:38:10.31+00	2021-01-29 22:38:10.31+00
4573	1	84	309	2021-01-29 22:38:13.352+00	2021-01-29 22:38:13.352+00
4574	2	84	310	2021-01-29 22:38:16.024+00	2021-01-29 22:38:16.024+00
4575	4	84	311	2021-01-29 22:38:18.784+00	2021-01-29 22:38:18.784+00
4576	2	84	312	2021-01-29 22:38:21.884+00	2021-01-29 22:38:21.884+00
4577	3	84	313	2021-01-29 22:38:24.406+00	2021-01-29 22:38:24.406+00
4578	3	84	314	2021-01-29 22:38:26.873+00	2021-01-29 22:38:26.873+00
4579	2	84	315	2021-01-29 22:38:29.853+00	2021-01-29 22:38:29.853+00
4580	2	84	316	2021-01-29 22:38:32.75+00	2021-01-29 22:38:32.75+00
4581	5	84	317	2021-01-29 22:38:35.976+00	2021-01-29 22:38:35.976+00
4582	5	84	318	2021-01-29 22:38:38.767+00	2021-01-29 22:38:38.767+00
4583	3	84	319	2021-01-29 22:38:41.763+00	2021-01-29 22:38:41.763+00
4584	6	84	320	2021-01-29 22:38:44.737+00	2021-01-29 22:38:44.737+00
4585	2	84	321	2021-01-29 22:38:47.885+00	2021-01-29 22:38:47.885+00
4586	5	84	322	2021-01-29 22:38:50.776+00	2021-01-29 22:38:50.776+00
4587	100	69	332	2021-01-29 22:57:08.287+00	2021-01-29 22:57:08.287+00
4588	1	69	3	2021-01-29 22:57:13.986+00	2021-01-29 22:57:13.986+00
4589	1	69	4	2021-01-29 22:57:17.144+00	2021-01-29 22:57:17.144+00
4590	0	69	5	2021-01-29 22:57:20.561+00	2021-01-29 22:57:20.561+00
4591	1	69	6	2021-01-29 22:57:23.824+00	2021-01-29 22:57:23.824+00
4592	1	69	7	2021-01-29 22:57:27.013+00	2021-01-29 22:57:27.013+00
4593	0	69	8	2021-01-29 22:57:30.776+00	2021-01-29 22:57:30.776+00
4594	1	69	9	2021-01-29 22:57:33.984+00	2021-01-29 22:57:33.984+00
4595	1	69	10	2021-01-29 22:57:37.143+00	2021-01-29 22:57:37.143+00
4596	1	69	11	2021-01-29 22:57:40.32+00	2021-01-29 22:57:40.32+00
4597	0	69	12	2021-01-29 22:57:43.551+00	2021-01-29 22:57:43.551+00
4598	0	69	13	2021-01-29 22:57:46.787+00	2021-01-29 22:57:46.787+00
4599	1	69	14	2021-01-29 22:57:49.963+00	2021-01-29 22:57:49.963+00
4600	0	69	15	2021-01-29 22:57:53.389+00	2021-01-29 22:57:53.389+00
4601	1	69	16	2021-01-29 22:57:56.792+00	2021-01-29 22:57:56.792+00
4602	0	69	17	2021-01-29 22:58:00.024+00	2021-01-29 22:58:00.024+00
4603	1	69	18	2021-01-29 22:58:03.289+00	2021-01-29 22:58:03.289+00
4604	4	69	19	2021-01-29 22:58:09.204+00	2021-01-29 22:58:09.204+00
4605	4	69	20	2021-01-29 22:58:11.847+00	2021-01-29 22:58:11.847+00
4606	4	69	21	2021-01-29 22:58:14.369+00	2021-01-29 22:58:14.369+00
4607	4	69	22	2021-01-29 22:58:17.048+00	2021-01-29 22:58:17.048+00
4608	2	69	23	2021-01-29 22:58:19.938+00	2021-01-29 22:58:19.938+00
4609	3	69	24	2021-01-29 22:58:22.834+00	2021-01-29 22:58:22.834+00
4610	4	69	25	2021-01-29 22:58:25.455+00	2021-01-29 22:58:25.455+00
4611	2	69	26	2021-01-29 22:58:28.251+00	2021-01-29 22:58:28.251+00
4612	3	69	27	2021-01-29 22:58:30.999+00	2021-01-29 22:58:30.999+00
4613	2	69	28	2021-01-29 22:58:33.558+00	2021-01-29 22:58:33.558+00
4614	2	69	29	2021-01-29 22:58:36.396+00	2021-01-29 22:58:36.396+00
4615	2	69	30	2021-01-29 22:58:38.997+00	2021-01-29 22:58:38.997+00
4616	2	69	31	2021-01-29 22:58:41.781+00	2021-01-29 22:58:41.781+00
4617	3	69	32	2021-01-29 22:58:44.726+00	2021-01-29 22:58:44.726+00
4618	4	69	33	2021-01-29 22:58:47.86+00	2021-01-29 22:58:47.86+00
4619	3	69	34	2021-01-29 22:58:50.833+00	2021-01-29 22:58:50.833+00
4620	2	69	35	2021-01-29 22:58:53.343+00	2021-01-29 22:58:53.343+00
4621	2	69	36	2021-01-29 22:58:55.851+00	2021-01-29 22:58:55.851+00
4622	100	69	333	2021-01-29 23:00:00.059+00	2021-01-29 23:00:00.059+00
4623	3	69	37	2021-01-29 23:00:06.194+00	2021-01-29 23:00:06.194+00
4624	2	69	38	2021-01-29 23:00:09.773+00	2021-01-29 23:00:09.773+00
4625	4	69	39	2021-01-29 23:00:13.083+00	2021-01-29 23:00:13.083+00
4626	1	69	40	2021-01-29 23:00:16.703+00	2021-01-29 23:00:16.703+00
4627	4	69	41	2021-01-29 23:00:20.123+00	2021-01-29 23:00:20.123+00
4628	2	69	42	2021-01-29 23:00:23.569+00	2021-01-29 23:00:23.569+00
4629	3	69	43	2021-01-29 23:00:26.93+00	2021-01-29 23:00:26.93+00
4630	2	69	44	2021-01-29 23:00:30.538+00	2021-01-29 23:00:30.538+00
4631	3	69	45	2021-01-29 23:00:34.004+00	2021-01-29 23:00:34.004+00
4632	3	69	46	2021-01-29 23:00:37.538+00	2021-01-29 23:00:37.538+00
4633	1	69	47	2021-01-29 23:00:41.066+00	2021-01-29 23:00:41.066+00
4634	3	69	48	2021-01-29 23:00:44.657+00	2021-01-29 23:00:44.657+00
4635	3	69	49	2021-01-29 23:00:48.6+00	2021-01-29 23:00:48.6+00
4636	4	69	50	2021-01-29 23:00:52.411+00	2021-01-29 23:00:52.411+00
4637	3	69	51	2021-01-29 23:00:56.367+00	2021-01-29 23:00:56.367+00
4638	4	69	52	2021-01-29 23:01:00.196+00	2021-01-29 23:01:00.196+00
4639	1	69	53	2021-01-29 23:01:04.096+00	2021-01-29 23:01:04.096+00
4640	3	69	54	2021-01-29 23:01:07.98+00	2021-01-29 23:01:07.98+00
4641	4	69	55	2021-01-29 23:01:11.986+00	2021-01-29 23:01:11.986+00
4642	3	69	56	2021-01-29 23:01:16.194+00	2021-01-29 23:01:16.194+00
4643	2	69	57	2021-01-29 23:01:20.417+00	2021-01-29 23:01:20.417+00
4644	4	69	58	2021-01-29 23:01:24.323+00	2021-01-29 23:01:24.323+00
4645	3	69	59	2021-01-29 23:01:28.208+00	2021-01-29 23:01:28.208+00
4646	100	69	334	2021-01-29 23:02:28.879+00	2021-01-29 23:02:28.879+00
4647	0	69	60	2021-01-29 23:02:35.318+00	2021-01-29 23:02:35.318+00
4648	1	69	61	2021-01-29 23:02:38.621+00	2021-01-29 23:02:38.621+00
4649	0	69	62	2021-01-29 23:02:41.864+00	2021-01-29 23:02:41.864+00
4650	1	69	63	2021-01-29 23:02:44.939+00	2021-01-29 23:02:44.939+00
4651	0	69	64	2021-01-29 23:02:48.195+00	2021-01-29 23:02:48.195+00
4652	1	69	65	2021-01-29 23:02:51.454+00	2021-01-29 23:02:51.454+00
4653	0	69	66	2021-01-29 23:02:54.616+00	2021-01-29 23:02:54.616+00
4654	1	69	67	2021-01-29 23:02:57.946+00	2021-01-29 23:02:57.946+00
4655	1	69	68	2021-01-29 23:03:01.233+00	2021-01-29 23:03:01.233+00
4656	0	69	69	2021-01-29 23:03:04.568+00	2021-01-29 23:03:04.568+00
4657	1	69	70	2021-01-29 23:03:07.775+00	2021-01-29 23:03:07.775+00
4658	0	69	71	2021-01-29 23:03:11.119+00	2021-01-29 23:03:11.119+00
4659	4	69	72	2021-01-29 23:03:16.583+00	2021-01-29 23:03:16.583+00
4660	2	69	73	2021-01-29 23:03:19.511+00	2021-01-29 23:03:19.511+00
4661	1	69	74	2021-01-29 23:03:22.26+00	2021-01-29 23:03:22.26+00
4662	2	69	75	2021-01-29 23:03:25.07+00	2021-01-29 23:03:25.07+00
4663	3	69	76	2021-01-29 23:03:28.263+00	2021-01-29 23:03:28.263+00
4664	1	69	77	2021-01-29 23:03:31.081+00	2021-01-29 23:03:31.081+00
4665	2	69	78	2021-01-29 23:03:33.969+00	2021-01-29 23:03:33.969+00
4666	2	69	79	2021-01-29 23:03:37.03+00	2021-01-29 23:03:37.03+00
4667	2	69	80	2021-01-29 23:03:40+00	2021-01-29 23:03:40+00
4668	2	69	81	2021-01-29 23:03:42.478+00	2021-01-29 23:03:42.478+00
4669	2	69	82	2021-01-29 23:03:49.321+00	2021-01-29 23:03:49.321+00
4670	3	69	83	2021-01-29 23:03:52.785+00	2021-01-29 23:03:52.785+00
4671	3	69	84	2021-01-29 23:03:56.072+00	2021-01-29 23:03:56.072+00
4672	3	69	85	2021-01-29 23:03:59.561+00	2021-01-29 23:03:59.561+00
4673	2	69	86	2021-01-29 23:04:03.136+00	2021-01-29 23:04:03.136+00
4674	2	69	87	2021-01-29 23:04:06.361+00	2021-01-29 23:04:06.361+00
4675	3	69	88	2021-01-29 23:04:09.963+00	2021-01-29 23:04:09.963+00
4676	2	69	89	2021-01-29 23:04:13.449+00	2021-01-29 23:04:13.449+00
4677	2	69	90	2021-01-29 23:04:16.648+00	2021-01-29 23:04:16.648+00
4678	100	69	335	2021-01-29 23:05:28.496+00	2021-01-29 23:05:28.496+00
4679	1	69	91	2021-01-29 23:05:34.127+00	2021-01-29 23:05:34.127+00
4680	1	69	92	2021-01-29 23:05:37.097+00	2021-01-29 23:05:37.097+00
4681	1	69	93	2021-01-29 23:05:40.092+00	2021-01-29 23:05:40.092+00
4682	0	69	94	2021-01-29 23:05:42.999+00	2021-01-29 23:05:42.999+00
4683	1	69	95	2021-01-29 23:05:45.87+00	2021-01-29 23:05:45.87+00
4684	0	69	96	2021-01-29 23:05:48.86+00	2021-01-29 23:05:48.86+00
4685	1	69	97	2021-01-29 23:05:51.701+00	2021-01-29 23:05:51.701+00
4686	0	69	98	2021-01-29 23:05:54.64+00	2021-01-29 23:05:54.64+00
4687	1	69	99	2021-01-29 23:05:57.658+00	2021-01-29 23:05:57.658+00
4688	1	69	100	2021-01-29 23:06:00.483+00	2021-01-29 23:06:00.483+00
4689	0	69	101	2021-01-29 23:06:03.433+00	2021-01-29 23:06:03.433+00
4690	0	69	102	2021-01-29 23:06:06.279+00	2021-01-29 23:06:06.279+00
4691	1	69	103	2021-01-29 23:06:09.071+00	2021-01-29 23:06:09.071+00
4692	0	69	104	2021-01-29 23:06:11.97+00	2021-01-29 23:06:11.97+00
4693	0	69	105	2021-01-29 23:06:14.881+00	2021-01-29 23:06:14.881+00
4694	1	69	106	2021-01-29 23:06:17.846+00	2021-01-29 23:06:17.846+00
4695	0	69	107	2021-01-29 23:06:20.935+00	2021-01-29 23:06:20.935+00
4696	0	69	108	2021-01-29 23:06:23.882+00	2021-01-29 23:06:23.882+00
4697	1	69	109	2021-01-29 23:06:26.71+00	2021-01-29 23:06:26.71+00
4698	4	69	110	2021-01-29 23:06:32.893+00	2021-01-29 23:06:32.893+00
4699	1	69	111	2021-01-29 23:06:35.608+00	2021-01-29 23:06:35.608+00
4700	3	69	112	2021-01-29 23:06:38.548+00	2021-01-29 23:06:38.548+00
4701	1	69	113	2021-01-29 23:06:41.26+00	2021-01-29 23:06:41.26+00
4702	1	69	114	2021-01-29 23:06:44.226+00	2021-01-29 23:06:44.226+00
4703	2	69	115	2021-01-29 23:06:47.214+00	2021-01-29 23:06:47.214+00
4704	3	69	116	2021-01-29 23:06:50.29+00	2021-01-29 23:06:50.29+00
4705	3	69	117	2021-01-29 23:06:52.741+00	2021-01-29 23:06:52.741+00
4706	3	69	118	2021-01-29 23:06:55.021+00	2021-01-29 23:06:55.021+00
4707	1	69	119	2021-01-29 23:06:57.738+00	2021-01-29 23:06:57.738+00
4708	100	69	336	2021-01-29 23:07:44.798+00	2021-01-29 23:07:44.798+00
4709	0	69	120	2021-01-29 23:07:49.744+00	2021-01-29 23:07:49.744+00
4710	1	69	121	2021-01-29 23:07:52.543+00	2021-01-29 23:07:52.543+00
4711	0	69	122	2021-01-29 23:07:55.271+00	2021-01-29 23:07:55.271+00
4712	1	69	123	2021-01-29 23:07:58.315+00	2021-01-29 23:07:58.315+00
4713	0	69	124	2021-01-29 23:08:00.781+00	2021-01-29 23:08:00.781+00
4714	0	69	125	2021-01-29 23:08:03.814+00	2021-01-29 23:08:03.814+00
4715	1	69	126	2021-01-29 23:08:06.237+00	2021-01-29 23:08:06.237+00
4716	1	69	127	2021-01-29 23:08:08.676+00	2021-01-29 23:08:08.676+00
4717	0	69	128	2021-01-29 23:08:11.58+00	2021-01-29 23:08:11.58+00
4718	1	69	129	2021-01-29 23:08:14.116+00	2021-01-29 23:08:14.116+00
4719	0	69	130	2021-01-29 23:08:16.958+00	2021-01-29 23:08:16.958+00
4720	1	69	131	2021-01-29 23:08:19.404+00	2021-01-29 23:08:19.404+00
4721	0	69	132	2021-01-29 23:08:22.28+00	2021-01-29 23:08:22.28+00
4722	1	69	133	2021-01-29 23:08:24.959+00	2021-01-29 23:08:24.959+00
4723	1	69	134	2021-01-29 23:08:28.09+00	2021-01-29 23:08:28.09+00
4724	0	69	135	2021-01-29 23:08:30.533+00	2021-01-29 23:08:30.533+00
4725	2	69	136	2021-01-29 23:08:37.126+00	2021-01-29 23:08:37.126+00
4726	5	69	137	2021-01-29 23:08:39.828+00	2021-01-29 23:08:39.828+00
4727	3	69	138	2021-01-29 23:08:42.779+00	2021-01-29 23:08:42.779+00
4728	5	69	139	2021-01-29 23:08:45.525+00	2021-01-29 23:08:45.525+00
4729	3	69	140	2021-01-29 23:08:48.737+00	2021-01-29 23:08:48.737+00
4730	3	69	141	2021-01-29 23:08:51.605+00	2021-01-29 23:08:51.605+00
4731	5	69	142	2021-01-29 23:08:54.403+00	2021-01-29 23:08:54.403+00
4732	3	69	143	2021-01-29 23:08:57.329+00	2021-01-29 23:08:57.329+00
4733	2	69	144	2021-01-29 23:09:00.256+00	2021-01-29 23:09:00.256+00
4734	5	69	145	2021-01-29 23:09:02.806+00	2021-01-29 23:09:02.806+00
4735	3	69	146	2021-01-29 23:09:06.097+00	2021-01-29 23:09:06.097+00
4736	5	69	147	2021-01-29 23:09:08.989+00	2021-01-29 23:09:08.989+00
4737	2	69	148	2021-01-29 23:09:12.225+00	2021-01-29 23:09:12.225+00
4738	2	69	149	2021-01-29 23:09:14.956+00	2021-01-29 23:09:14.956+00
4739	5	69	150	2021-01-29 23:09:17.898+00	2021-01-29 23:09:17.898+00
4740	1	69	151	2021-01-29 23:09:54.652+00	2021-01-29 23:09:54.652+00
4741	1	69	152	2021-01-29 23:09:58.982+00	2021-01-29 23:09:58.982+00
4742	1	69	153	2021-01-29 23:10:03.27+00	2021-01-29 23:10:03.27+00
4743	0	69	154	2021-01-29 23:10:07.851+00	2021-01-29 23:10:07.851+00
4744	1	69	155	2021-01-29 23:10:11.941+00	2021-01-29 23:10:11.941+00
4745	1	69	156	2021-01-29 23:10:16.346+00	2021-01-29 23:10:16.346+00
4746	0	69	157	2021-01-29 23:10:20.477+00	2021-01-29 23:10:20.477+00
4747	1	69	158	2021-01-29 23:10:24.575+00	2021-01-29 23:10:24.575+00
4748	2	69	159	2021-01-29 23:10:37.449+00	2021-01-29 23:10:37.449+00
4749	2	69	160	2021-01-29 23:10:46.381+00	2021-01-29 23:10:46.381+00
4750	2	69	161	2021-01-29 23:10:55.318+00	2021-01-29 23:10:55.318+00
4751	1	69	162	2021-01-29 23:11:04.455+00	2021-01-29 23:11:04.455+00
4752	2	69	163	2021-01-29 23:11:13.643+00	2021-01-29 23:11:13.643+00
4753	0	69	164	2021-01-29 23:11:20.075+00	2021-01-29 23:11:20.075+00
4754	1	69	165	2021-01-29 23:11:23.256+00	2021-01-29 23:11:23.256+00
4755	1	69	166	2021-01-29 23:11:26.313+00	2021-01-29 23:11:26.313+00
4756	0	69	167	2021-01-29 23:11:29.439+00	2021-01-29 23:11:29.439+00
4757	1	69	168	2021-01-29 23:11:32.82+00	2021-01-29 23:11:32.82+00
4758	0	69	169	2021-01-29 23:11:36.044+00	2021-01-29 23:11:36.044+00
4759	1	69	170	2021-01-29 23:11:39.042+00	2021-01-29 23:11:39.042+00
4760	0	69	171	2021-01-29 23:11:42.783+00	2021-01-29 23:11:42.783+00
4761	1	69	172	2021-01-29 23:11:45.733+00	2021-01-29 23:11:45.733+00
4762	1	69	173	2021-01-29 23:11:48.728+00	2021-01-29 23:11:48.728+00
4763	1	69	174	2021-01-29 23:11:58.289+00	2021-01-29 23:11:58.289+00
4764	1	69	175	2021-01-29 23:12:05.051+00	2021-01-29 23:12:05.051+00
4765	0	69	176	2021-01-29 23:12:11.877+00	2021-01-29 23:12:11.877+00
4766	1	69	177	2021-01-29 23:12:18.765+00	2021-01-29 23:12:18.765+00
4767	5	69	337	2021-01-29 23:12:55.12+00	2021-01-29 23:12:55.12+00
4768	3	69	338	2021-01-29 23:12:58.658+00	2021-01-29 23:12:58.658+00
4769	3	69	339	2021-01-29 23:13:02.226+00	2021-01-29 23:13:02.226+00
4770	5	69	340	2021-01-29 23:13:06.304+00	2021-01-29 23:13:06.304+00
4771	5	69	341	2021-01-29 23:13:10.279+00	2021-01-29 23:13:10.279+00
4772	3	69	342	2021-01-29 23:13:13.877+00	2021-01-29 23:13:13.877+00
4773	6	69	343	2021-01-29 23:13:17.469+00	2021-01-29 23:13:17.469+00
4774	3	69	344	2021-01-29 23:13:21.314+00	2021-01-29 23:13:21.314+00
4775	3	69	345	2021-01-29 23:13:24.617+00	2021-01-29 23:13:24.617+00
4776	3	69	346	2021-01-29 23:13:28.201+00	2021-01-29 23:13:28.201+00
4777	5	69	347	2021-01-29 23:13:31.696+00	2021-01-29 23:13:31.696+00
4778	3	69	348	2021-01-29 23:13:35.202+00	2021-01-29 23:13:35.202+00
4779	4	69	349	2021-01-29 23:13:38.772+00	2021-01-29 23:13:38.772+00
4780	5	69	350	2021-01-29 23:13:42.48+00	2021-01-29 23:13:42.48+00
4781	2	69	351	2021-01-29 23:13:46.073+00	2021-01-29 23:13:46.073+00
4782	6	69	352	2021-01-29 23:13:50.009+00	2021-01-29 23:13:50.009+00
4783	3	69	353	2021-01-29 23:13:53.74+00	2021-01-29 23:13:53.74+00
4784	3	69	354	2021-01-29 23:13:57.177+00	2021-01-29 23:13:57.177+00
4785	6	69	355	2021-01-29 23:14:00.636+00	2021-01-29 23:14:00.636+00
4786	4	69	356	2021-01-29 23:14:04.392+00	2021-01-29 23:14:04.392+00
4787	3	69	357	2021-01-29 23:14:08.971+00	2021-01-29 23:14:08.971+00
4788	6	69	358	2021-01-29 23:14:13.271+00	2021-01-29 23:14:13.271+00
4789	4	69	359	2021-01-29 23:14:17.809+00	2021-01-29 23:14:17.809+00
4790	5	69	360	2021-01-29 23:14:22.148+00	2021-01-29 23:14:22.148+00
4791	2	69	361	2021-01-29 23:14:26.587+00	2021-01-29 23:14:26.587+00
4792	9	69	362	2021-01-29 23:14:31.172+00	2021-01-29 23:14:31.172+00
4793	3	69	363	2021-01-29 23:14:35.607+00	2021-01-29 23:14:35.607+00
4794	4	69	364	2021-01-29 23:14:39.825+00	2021-01-29 23:14:39.825+00
4795	1	69	186	2021-01-29 23:15:15.904+00	2021-01-29 23:15:15.904+00
4796	1	69	187	2021-01-29 23:15:18.432+00	2021-01-29 23:15:18.432+00
4797	2	69	188	2021-01-29 23:15:21.218+00	2021-01-29 23:15:21.218+00
4798	2	69	189	2021-01-29 23:15:23.584+00	2021-01-29 23:15:23.584+00
4799	4	69	190	2021-01-29 23:15:26.146+00	2021-01-29 23:15:26.146+00
4800	3	69	191	2021-01-29 23:15:28.749+00	2021-01-29 23:15:28.749+00
4801	1	69	192	2021-01-29 23:15:31.175+00	2021-01-29 23:15:31.175+00
4802	4	69	193	2021-01-29 23:15:33.736+00	2021-01-29 23:15:33.736+00
4803	2	69	194	2021-01-29 23:15:36.845+00	2021-01-29 23:15:36.845+00
4804	3	69	195	2021-01-29 23:15:39.409+00	2021-01-29 23:15:39.409+00
4805	1	69	196	2021-01-29 23:15:42.198+00	2021-01-29 23:15:42.198+00
4806	3	69	197	2021-01-29 23:15:44.889+00	2021-01-29 23:15:44.889+00
4807	2	69	198	2021-01-29 23:15:47.633+00	2021-01-29 23:15:47.633+00
4808	3	69	199	2021-01-29 23:15:50.23+00	2021-01-29 23:15:50.23+00
4809	1	69	200	2021-01-29 23:15:53.146+00	2021-01-29 23:15:53.146+00
4810	2	69	201	2021-01-29 23:15:56.181+00	2021-01-29 23:15:56.181+00
4811	3	69	202	2021-01-29 23:15:58.891+00	2021-01-29 23:15:58.891+00
4812	0	69	203	2021-01-29 23:16:09.172+00	2021-01-29 23:16:09.172+00
4813	0	69	204	2021-01-29 23:16:16.554+00	2021-01-29 23:16:16.554+00
4814	1	69	205	2021-01-29 23:16:23.608+00	2021-01-29 23:16:23.608+00
4815	0	69	206	2021-01-29 23:16:30.324+00	2021-01-29 23:16:30.324+00
4816	4	69	208	2021-01-29 23:17:10.523+00	2021-01-29 23:17:10.523+00
4817	4	69	209	2021-01-29 23:17:13.607+00	2021-01-29 23:17:13.607+00
4818	1	69	210	2021-01-29 23:17:16.601+00	2021-01-29 23:17:16.601+00
4819	5	69	211	2021-01-29 23:17:19.613+00	2021-01-29 23:17:19.613+00
4820	5	69	212	2021-01-29 23:17:22.524+00	2021-01-29 23:17:22.524+00
4821	4	69	213	2021-01-29 23:17:25.344+00	2021-01-29 23:17:25.344+00
4822	1	69	214	2021-01-29 23:17:28.234+00	2021-01-29 23:17:28.234+00
4823	6	69	215	2021-01-29 23:17:31.133+00	2021-01-29 23:17:31.133+00
4824	4	69	216	2021-01-29 23:17:34.075+00	2021-01-29 23:17:34.075+00
4825	3	69	217	2021-01-29 23:17:38.176+00	2021-01-29 23:17:38.176+00
4826	1	69	218	2021-01-29 23:17:41.033+00	2021-01-29 23:17:41.033+00
4827	3	69	219	2021-01-29 23:17:45.125+00	2021-01-29 23:17:45.125+00
4828	4	69	220	2021-01-29 23:17:48.265+00	2021-01-29 23:17:48.265+00
4829	6	69	221	2021-01-29 23:17:51.092+00	2021-01-29 23:17:51.092+00
4830	4	69	222	2021-01-29 23:17:53.943+00	2021-01-29 23:17:53.943+00
4831	1	69	223	2021-01-29 23:17:56.948+00	2021-01-29 23:17:56.948+00
4832	4	69	224	2021-01-29 23:17:59.948+00	2021-01-29 23:17:59.948+00
4833	5	69	225	2021-01-29 23:18:02.791+00	2021-01-29 23:18:02.791+00
4834	6	69	226	2021-01-29 23:18:05.933+00	2021-01-29 23:18:05.933+00
4835	1	69	227	2021-01-29 23:18:08.9+00	2021-01-29 23:18:08.9+00
4836	4	69	228	2021-01-29 23:18:11.669+00	2021-01-29 23:18:11.669+00
4837	6	69	229	2021-01-29 23:18:14.579+00	2021-01-29 23:18:14.579+00
4838	4	69	230	2021-01-29 23:18:17.453+00	2021-01-29 23:18:17.453+00
4839	6	69	231	2021-01-29 23:18:20.341+00	2021-01-29 23:18:20.341+00
4840	4	69	232	2021-01-29 23:18:23.717+00	2021-01-29 23:18:23.717+00
4841	6	69	233	2021-01-29 23:18:26.615+00	2021-01-29 23:18:26.615+00
4842	1	69	234	2021-01-29 23:18:29.609+00	2021-01-29 23:18:29.609+00
4843	5	69	235	2021-01-29 23:18:32.525+00	2021-01-29 23:18:32.525+00
4844	4	69	236	2021-01-29 23:18:35.533+00	2021-01-29 23:18:35.533+00
4845	3	69	237	2021-01-29 23:18:38.231+00	2021-01-29 23:18:38.231+00
4846	6	69	238	2021-01-29 23:18:41.249+00	2021-01-29 23:18:41.249+00
4847	2	69	239	2021-01-29 23:18:44.459+00	2021-01-29 23:18:44.459+00
4848	4	69	240	2021-01-29 23:18:47.334+00	2021-01-29 23:18:47.334+00
4849	1	69	242	2021-01-29 23:18:53.462+00	2021-01-29 23:18:53.462+00
4850	0	69	243	2021-01-29 23:18:56.324+00	2021-01-29 23:18:56.324+00
4851	0	69	244	2021-01-29 23:18:59.263+00	2021-01-29 23:18:59.263+00
4852	1	69	245	2021-01-29 23:19:02.32+00	2021-01-29 23:19:02.32+00
4853	0	69	246	2021-01-29 23:19:05.489+00	2021-01-29 23:19:05.489+00
4854	1	69	247	2021-01-29 23:19:08.862+00	2021-01-29 23:19:08.862+00
4855	0	69	248	2021-01-29 23:19:12.255+00	2021-01-29 23:19:12.255+00
4856	0	69	249	2021-01-29 23:19:15.643+00	2021-01-29 23:19:15.643+00
4857	0	69	250	2021-01-29 23:19:18.576+00	2021-01-29 23:19:18.576+00
4858	1	69	251	2021-01-29 23:19:22.333+00	2021-01-29 23:19:22.333+00
4859	0	69	252	2021-01-29 23:19:27.504+00	2021-01-29 23:19:27.504+00
4860	0	69	253	2021-01-29 23:19:31.056+00	2021-01-29 23:19:31.056+00
4861	0	69	254	2021-01-29 23:19:34.287+00	2021-01-29 23:19:34.287+00
4862	1	69	255	2021-01-29 23:19:37.538+00	2021-01-29 23:19:37.538+00
4863	0	69	256	2021-01-29 23:19:41.555+00	2021-01-29 23:19:41.555+00
4864	0	69	257	2021-01-29 23:19:45.245+00	2021-01-29 23:19:45.245+00
4865	1	69	258	2021-01-29 23:19:49.426+00	2021-01-29 23:19:49.426+00
4866	0	69	259	2021-01-29 23:19:53.656+00	2021-01-29 23:19:53.656+00
4867	1	69	260	2021-01-29 23:19:57.443+00	2021-01-29 23:19:57.443+00
4868	0	69	261	2021-01-29 23:20:00.758+00	2021-01-29 23:20:00.758+00
4869	1	69	262	2021-01-29 23:20:04.311+00	2021-01-29 23:20:04.311+00
4870	1	69	263	2021-01-29 23:20:07.776+00	2021-01-29 23:20:07.776+00
4871	0	69	264	2021-01-29 23:20:11.282+00	2021-01-29 23:20:11.282+00
4872	1	69	265	2021-01-29 23:20:14.741+00	2021-01-29 23:20:14.741+00
4873	0	69	266	2021-01-29 23:20:18.355+00	2021-01-29 23:20:18.355+00
4874	1	69	267	2021-01-29 23:20:21.935+00	2021-01-29 23:20:21.935+00
4875	0	69	268	2021-01-29 23:20:25.252+00	2021-01-29 23:20:25.252+00
4876	1	69	269	2021-01-29 23:20:28.837+00	2021-01-29 23:20:28.837+00
4877	0	69	270	2021-01-29 23:20:32.015+00	2021-01-29 23:20:32.015+00
4878	1	69	271	2021-01-29 23:20:36.278+00	2021-01-29 23:20:36.278+00
4879	0	69	272	2021-01-29 23:20:40.662+00	2021-01-29 23:20:40.662+00
4880	1	69	273	2021-01-29 23:20:44.59+00	2021-01-29 23:20:44.59+00
4881	0	69	274	2021-01-29 23:20:48.341+00	2021-01-29 23:20:48.341+00
4882	1	69	275	2021-01-29 23:20:52.311+00	2021-01-29 23:20:52.311+00
4883	1	69	276	2021-01-29 23:20:55.995+00	2021-01-29 23:20:55.995+00
4884	1	69	277	2021-01-29 23:20:59.791+00	2021-01-29 23:20:59.791+00
4885	0	69	278	2021-01-29 23:21:03.558+00	2021-01-29 23:21:03.558+00
4886	0	69	279	2021-01-29 23:21:08.736+00	2021-01-29 23:21:08.736+00
4887	1	69	280	2021-01-29 23:21:12.902+00	2021-01-29 23:21:12.902+00
4888	0	69	281	2021-01-29 23:21:17.481+00	2021-01-29 23:21:17.481+00
4889	0	69	282	2021-01-29 23:21:21.494+00	2021-01-29 23:21:21.494+00
4890	1	69	283	2021-01-29 23:21:25.504+00	2021-01-29 23:21:25.504+00
4891	1	69	284	2021-01-29 23:21:29.471+00	2021-01-29 23:21:29.471+00
4892	1	69	285	2021-01-29 23:21:33.266+00	2021-01-29 23:21:33.266+00
4893	2	69	286	2021-01-29 23:21:59.06+00	2021-01-29 23:21:59.06+00
4894	2	69	287	2021-01-29 23:22:01.71+00	2021-01-29 23:22:01.71+00
4895	1	69	288	2021-01-29 23:22:04.424+00	2021-01-29 23:22:04.424+00
4896	3	69	289	2021-01-29 23:22:07.206+00	2021-01-29 23:22:07.206+00
4897	3	69	290	2021-01-29 23:22:09.802+00	2021-01-29 23:22:09.802+00
4898	1	69	291	2021-01-29 23:22:12.821+00	2021-01-29 23:22:12.821+00
4899	2	69	292	2021-01-29 23:22:15.503+00	2021-01-29 23:22:15.503+00
4900	2	69	293	2021-01-29 23:22:18.048+00	2021-01-29 23:22:18.048+00
4901	3	69	294	2021-01-29 23:22:21.021+00	2021-01-29 23:22:21.021+00
4902	2	69	295	2021-01-29 23:22:23.989+00	2021-01-29 23:22:23.989+00
4903	2	69	296	2021-01-29 23:22:26.673+00	2021-01-29 23:22:26.673+00
4904	1	69	297	2021-01-29 23:22:29.62+00	2021-01-29 23:22:29.62+00
4905	2	69	298	2021-01-29 23:22:32.563+00	2021-01-29 23:22:32.563+00
4906	2	69	299	2021-01-29 23:22:35.283+00	2021-01-29 23:22:35.283+00
4907	4	69	300	2021-01-29 23:22:38.267+00	2021-01-29 23:22:38.267+00
4908	3	69	301	2021-01-29 23:22:40.954+00	2021-01-29 23:22:40.954+00
4909	2	69	302	2021-01-29 23:22:43.563+00	2021-01-29 23:22:43.563+00
4910	1	69	303	2021-01-29 23:22:46.379+00	2021-01-29 23:22:46.379+00
4911	2	69	304	2021-01-29 23:22:48.906+00	2021-01-29 23:22:48.906+00
4912	3	69	305	2021-01-29 23:22:51.524+00	2021-01-29 23:22:51.524+00
4913	1	69	306	2021-01-29 23:22:54.364+00	2021-01-29 23:22:54.364+00
4914	3	69	307	2021-01-29 23:22:57.157+00	2021-01-29 23:22:57.157+00
4915	3	69	308	2021-01-29 23:22:59.746+00	2021-01-29 23:22:59.746+00
4916	5	69	309	2021-01-29 23:23:02.543+00	2021-01-29 23:23:02.543+00
4917	2	69	310	2021-01-29 23:23:06.599+00	2021-01-29 23:23:06.599+00
4918	4	69	311	2021-01-29 23:23:09.387+00	2021-01-29 23:23:09.387+00
4919	2	69	312	2021-01-29 23:23:12.112+00	2021-01-29 23:23:12.112+00
4920	3	69	313	2021-01-29 23:23:14.716+00	2021-01-29 23:23:14.716+00
4921	3	69	314	2021-01-29 23:23:17.279+00	2021-01-29 23:23:17.279+00
4922	2	69	315	2021-01-29 23:23:20.035+00	2021-01-29 23:23:20.035+00
4923	3	69	316	2021-01-29 23:23:22.758+00	2021-01-29 23:23:22.758+00
4924	5	69	317	2021-01-29 23:23:25.907+00	2021-01-29 23:23:25.907+00
4925	4	69	318	2021-01-29 23:23:28.675+00	2021-01-29 23:23:28.675+00
4926	3	69	319	2021-01-29 23:23:31.328+00	2021-01-29 23:23:31.328+00
4927	5	69	320	2021-01-29 23:23:34.172+00	2021-01-29 23:23:34.172+00
4928	2	69	321	2021-01-29 23:23:36.85+00	2021-01-29 23:23:36.85+00
4929	2	69	322	2021-01-29 23:23:39.485+00	2021-01-29 23:23:39.485+00
4930	100	76	332	2021-02-05 19:17:07.227+00	2021-02-05 19:17:07.227+00
4931	1	76	3	2021-02-05 19:17:13.325+00	2021-02-05 19:17:13.325+00
4932	1	76	4	2021-02-05 19:17:16.817+00	2021-02-05 19:17:16.817+00
4933	0	76	5	2021-02-05 19:17:20.437+00	2021-02-05 19:17:20.437+00
4934	1	76	6	2021-02-05 19:17:24.823+00	2021-02-05 19:17:24.823+00
4935	1	76	7	2021-02-05 19:17:28.084+00	2021-02-05 19:17:28.084+00
4936	1	76	8	2021-02-05 19:17:31.586+00	2021-02-05 19:17:31.586+00
4937	1	76	9	2021-02-05 19:17:35.294+00	2021-02-05 19:17:35.294+00
4938	1	76	10	2021-02-05 19:17:38.691+00	2021-02-05 19:17:38.691+00
4939	1	76	11	2021-02-05 19:17:41.935+00	2021-02-05 19:17:41.935+00
4940	1	76	12	2021-02-05 19:17:45.07+00	2021-02-05 19:17:45.07+00
4941	1	76	13	2021-02-05 19:17:48.269+00	2021-02-05 19:17:48.269+00
4942	0	76	14	2021-02-05 19:17:51.869+00	2021-02-05 19:17:51.869+00
4943	0	76	15	2021-02-05 19:17:55.195+00	2021-02-05 19:17:55.195+00
4944	0	76	16	2021-02-05 19:17:58.344+00	2021-02-05 19:17:58.344+00
4945	0	76	17	2021-02-05 19:18:01.757+00	2021-02-05 19:18:01.757+00
4946	1	76	18	2021-02-05 19:18:05.045+00	2021-02-05 19:18:05.045+00
4947	4	76	19	2021-02-05 19:18:11.016+00	2021-02-05 19:18:11.016+00
4948	1	76	20	2021-02-05 19:18:14.182+00	2021-02-05 19:18:14.182+00
4949	3	76	21	2021-02-05 19:18:17.494+00	2021-02-05 19:18:17.494+00
4950	4	76	22	2021-02-05 19:18:20.401+00	2021-02-05 19:18:20.401+00
4951	3	76	23	2021-02-05 19:18:24.401+00	2021-02-05 19:18:24.401+00
4952	3	76	24	2021-02-05 19:18:26.977+00	2021-02-05 19:18:26.977+00
4953	4	76	25	2021-02-05 19:18:29.359+00	2021-02-05 19:18:29.359+00
4954	2	76	26	2021-02-05 19:18:32.376+00	2021-02-05 19:18:32.376+00
4955	3	76	27	2021-02-05 19:18:35.423+00	2021-02-05 19:18:35.423+00
4956	3	76	28	2021-02-05 19:18:38.798+00	2021-02-05 19:18:38.798+00
4957	2	76	29	2021-02-05 19:18:41.445+00	2021-02-05 19:18:41.445+00
4958	1	76	30	2021-02-05 19:18:44.553+00	2021-02-05 19:18:44.553+00
4959	3	76	31	2021-02-05 19:18:47.393+00	2021-02-05 19:18:47.393+00
4960	3	76	32	2021-02-05 19:18:50.293+00	2021-02-05 19:18:50.293+00
4961	4	76	33	2021-02-05 19:18:53.002+00	2021-02-05 19:18:53.002+00
4962	3	76	34	2021-02-05 19:18:56.012+00	2021-02-05 19:18:56.012+00
4963	4	76	35	2021-02-05 19:18:58.735+00	2021-02-05 19:18:58.735+00
4964	2	76	36	2021-02-05 19:19:01.99+00	2021-02-05 19:19:01.99+00
4965	100	76	333	2021-02-08 17:50:13.87+00	2021-02-08 17:50:13.87+00
4966	3	76	37	2021-02-08 17:50:20.456+00	2021-02-08 17:50:20.456+00
4967	3	76	38	2021-02-08 17:50:24.617+00	2021-02-08 17:50:24.617+00
4968	4	76	39	2021-02-08 19:06:29.659+00	2021-02-08 19:06:29.659+00
4969	1	76	40	2021-02-08 19:06:33.256+00	2021-02-08 19:06:33.256+00
4970	3	76	41	2021-02-08 19:06:36.851+00	2021-02-08 19:06:36.851+00
4971	100	76	334	2021-02-08 19:07:05.241+00	2021-02-08 19:07:05.241+00
4972	1	76	60	2021-02-08 19:07:10.955+00	2021-02-08 19:07:10.955+00
4973	0	76	61	2021-02-08 19:07:14.348+00	2021-02-08 19:07:14.348+00
4974	100	89	332	2021-02-08 19:21:50.197+00	2021-02-08 19:21:50.197+00
4975	0	89	3	2021-02-08 19:22:01.765+00	2021-02-08 19:22:01.765+00
4976	1	89	4	2021-02-08 19:22:05.546+00	2021-02-08 19:22:05.546+00
4977	0	89	5	2021-02-08 19:22:09.02+00	2021-02-08 19:22:09.02+00
4978	1	89	6	2021-02-08 19:22:12.9+00	2021-02-08 19:22:12.9+00
4979	0	89	7	2021-02-08 19:22:16.578+00	2021-02-08 19:22:16.578+00
4980	1	89	8	2021-02-08 19:22:26.071+00	2021-02-08 19:22:26.071+00
4981	0	89	9	2021-02-08 19:22:30.059+00	2021-02-08 19:22:30.059+00
4982	1	89	10	2021-02-08 19:22:41.116+00	2021-02-08 19:22:41.116+00
4983	100	89	333	2021-02-08 19:23:29.316+00	2021-02-08 19:23:29.316+00
4984	3	89	37	2021-02-08 19:23:39.698+00	2021-02-08 19:23:39.698+00
4985	2	89	38	2021-02-08 19:23:43.255+00	2021-02-08 19:23:43.255+00
4986	4	89	39	2021-02-08 19:23:47.048+00	2021-02-08 19:23:47.048+00
4987	1	89	40	2021-02-08 19:23:50.912+00	2021-02-08 19:23:50.912+00
4988	100	89	334	2021-02-08 19:24:28.783+00	2021-02-08 19:24:28.783+00
4989	1	89	60	2021-02-08 19:24:34.859+00	2021-02-08 19:24:34.859+00
4990	0	89	61	2021-02-08 19:24:38.514+00	2021-02-08 19:24:38.514+00
4991	1	89	62	2021-02-08 19:24:41.654+00	2021-02-08 19:24:41.654+00
4992	100	90	332	2021-02-08 19:33:02.116+00	2021-02-08 19:33:02.116+00
4993	1	90	3	2021-02-08 19:33:10.033+00	2021-02-08 19:33:10.033+00
4994	0	90	4	2021-02-08 19:33:13.709+00	2021-02-08 19:33:13.709+00
4995	1	90	5	2021-02-08 19:33:17.273+00	2021-02-08 19:33:17.273+00
4996	0	90	6	2021-02-08 19:33:20.913+00	2021-02-08 19:33:20.913+00
4997	1	90	7	2021-02-08 19:33:24.772+00	2021-02-08 19:33:24.772+00
4998	100	90	333	2021-02-08 19:34:15.728+00	2021-02-08 19:34:15.728+00
4999	3	90	37	2021-02-08 19:34:22.089+00	2021-02-08 19:34:22.089+00
5000	1	90	38	2021-02-08 19:34:26.096+00	2021-02-08 19:34:26.096+00
5001	4	90	39	2021-02-08 19:34:30.311+00	2021-02-08 19:34:30.311+00
5002	2	90	40	2021-02-08 19:34:34.347+00	2021-02-08 19:34:34.347+00
5003	100	90	334	2021-02-08 19:35:08.492+00	2021-02-08 19:35:08.492+00
5004	1	90	60	2021-02-08 19:35:15.008+00	2021-02-08 19:35:15.008+00
5005	0	90	61	2021-02-08 19:35:18.369+00	2021-02-08 19:35:18.369+00
5006	1	90	62	2021-02-08 19:35:22.29+00	2021-02-08 19:35:22.29+00
5007	1	90	63	2021-02-08 19:35:27.005+00	2021-02-08 19:35:27.005+00
5008	0	90	64	2021-02-08 19:35:30.282+00	2021-02-08 19:35:30.282+00
5009	1	90	65	2021-02-08 19:35:33.574+00	2021-02-08 19:35:33.574+00
5010	0	90	66	2021-02-08 19:35:37.411+00	2021-02-08 19:35:37.411+00
5011	1	90	67	2021-02-08 19:35:41.138+00	2021-02-08 19:35:41.138+00
5012	1	90	68	2021-02-08 19:35:44.458+00	2021-02-08 19:35:44.458+00
5013	1	90	69	2021-02-08 19:35:48.192+00	2021-02-08 19:35:48.192+00
5014	0	90	70	2021-02-08 19:35:52.208+00	2021-02-08 19:35:52.208+00
5015	0	90	71	2021-02-08 19:35:55.19+00	2021-02-08 19:35:55.19+00
5016	4	90	72	2021-02-08 19:36:02.525+00	2021-02-08 19:36:02.525+00
5017	3	90	73	2021-02-08 19:36:05.703+00	2021-02-08 19:36:05.703+00
5018	1	90	74	2021-02-08 19:36:08.722+00	2021-02-08 19:36:08.722+00
5019	3	90	75	2021-02-08 19:36:11.719+00	2021-02-08 19:36:11.719+00
5020	2	90	76	2021-02-08 19:36:14.937+00	2021-02-08 19:36:14.937+00
5021	1	90	77	2021-02-08 19:36:18.042+00	2021-02-08 19:36:18.042+00
5022	3	90	78	2021-02-08 19:36:20.956+00	2021-02-08 19:36:20.956+00
5023	3	90	79	2021-02-08 19:36:23.653+00	2021-02-08 19:36:23.653+00
5024	1	90	80	2021-02-08 19:36:26.396+00	2021-02-08 19:36:26.396+00
5025	2	90	81	2021-02-08 19:36:29.092+00	2021-02-08 19:36:29.092+00
5026	3	90	82	2021-02-08 19:36:35.359+00	2021-02-08 19:36:35.359+00
5027	2	90	83	2021-02-08 19:36:38.932+00	2021-02-08 19:36:38.932+00
5028	3	90	84	2021-02-08 19:36:42.279+00	2021-02-08 19:36:42.279+00
5029	2	90	85	2021-02-08 19:36:45.922+00	2021-02-08 19:36:45.922+00
5030	3	90	86	2021-02-08 19:36:49.487+00	2021-02-08 19:36:49.487+00
5031	2	90	87	2021-02-08 19:36:53.131+00	2021-02-08 19:36:53.131+00
5032	3	90	88	2021-02-08 19:36:57.026+00	2021-02-08 19:36:57.026+00
5033	4	90	89	2021-02-08 19:37:01.036+00	2021-02-08 19:37:01.036+00
5034	1	90	90	2021-02-08 19:37:04.905+00	2021-02-08 19:37:04.905+00
5035	100	91	332	2021-02-08 19:46:57.12+00	2021-02-08 19:46:57.12+00
5036	1	91	3	2021-02-08 19:47:15.112+00	2021-02-08 19:47:15.112+00
5037	1	91	4	2021-02-08 19:47:18.795+00	2021-02-08 19:47:18.795+00
5038	0	91	5	2021-02-08 19:47:22.546+00	2021-02-08 19:47:22.546+00
5039	1	91	6	2021-02-08 19:47:25.75+00	2021-02-08 19:47:25.75+00
5040	0	91	7	2021-02-08 19:47:29.194+00	2021-02-08 19:47:29.194+00
5041	1	91	8	2021-02-08 19:47:33.16+00	2021-02-08 19:47:33.16+00
5042	1	91	9	2021-02-08 19:47:37.189+00	2021-02-08 19:47:37.189+00
5043	0	91	10	2021-02-08 19:47:41.71+00	2021-02-08 19:47:41.71+00
5044	1	91	11	2021-02-08 19:47:45.745+00	2021-02-08 19:47:45.745+00
5045	1	91	12	2021-02-08 19:47:49.084+00	2021-02-08 19:47:49.084+00
5046	0	91	13	2021-02-08 19:47:53.06+00	2021-02-08 19:47:53.06+00
5047	1	91	14	2021-02-08 19:47:56.813+00	2021-02-08 19:47:56.813+00
5048	0	91	15	2021-02-08 19:48:00.913+00	2021-02-08 19:48:00.913+00
5049	1	91	16	2021-02-08 19:48:04.34+00	2021-02-08 19:48:04.34+00
5050	0	91	17	2021-02-08 19:48:07.93+00	2021-02-08 19:48:07.93+00
5051	1	91	18	2021-02-08 19:48:11.299+00	2021-02-08 19:48:11.299+00
5052	4	91	19	2021-02-08 19:48:19.402+00	2021-02-08 19:48:19.402+00
5053	3	91	20	2021-02-08 19:48:22.056+00	2021-02-08 19:48:22.056+00
5054	1	91	21	2021-02-08 19:48:24.985+00	2021-02-08 19:48:24.985+00
5055	4	91	22	2021-02-08 19:48:27.737+00	2021-02-08 19:48:27.737+00
5056	2	91	23	2021-02-08 19:48:30.384+00	2021-02-08 19:48:30.384+00
5057	3	91	24	2021-02-08 19:48:32.865+00	2021-02-08 19:48:32.865+00
5058	4	91	25	2021-02-08 19:48:35.278+00	2021-02-08 19:48:35.278+00
5059	2	91	26	2021-02-08 19:48:38.29+00	2021-02-08 19:48:38.29+00
5060	3	91	27	2021-02-08 19:48:40.581+00	2021-02-08 19:48:40.581+00
5061	4	91	28	2021-02-08 19:48:43.458+00	2021-02-08 19:48:43.458+00
5062	2	91	29	2021-02-08 19:48:46.253+00	2021-02-08 19:48:46.253+00
5063	1	91	30	2021-02-08 19:48:49.141+00	2021-02-08 19:48:49.141+00
5064	2	91	31	2021-02-08 19:48:52.165+00	2021-02-08 19:48:52.165+00
5065	3	91	32	2021-02-08 19:48:54.955+00	2021-02-08 19:48:54.955+00
5066	4	91	33	2021-02-08 19:48:58.087+00	2021-02-08 19:48:58.087+00
5067	3	91	34	2021-02-08 19:49:01.319+00	2021-02-08 19:49:01.319+00
5068	4	91	35	2021-02-08 19:49:03.907+00	2021-02-08 19:49:03.907+00
5069	2	91	36	2021-02-08 19:49:06.73+00	2021-02-08 19:49:06.73+00
5070	100	91	333	2021-02-08 19:50:30.57+00	2021-02-08 19:50:30.57+00
5071	3	91	37	2021-02-08 19:50:36.803+00	2021-02-08 19:50:36.803+00
5072	1	91	38	2021-02-08 19:50:40.511+00	2021-02-08 19:50:40.511+00
5073	3	91	39	2021-02-08 19:50:44.113+00	2021-02-08 19:50:44.113+00
5074	1	91	40	2021-02-08 19:50:47.601+00	2021-02-08 19:50:47.601+00
5075	4	91	41	2021-02-08 19:50:51.335+00	2021-02-08 19:50:51.335+00
5076	3	91	42	2021-02-08 19:50:54.885+00	2021-02-08 19:50:54.885+00
5077	2	91	43	2021-02-08 19:50:58.734+00	2021-02-08 19:50:58.734+00
5078	3	91	44	2021-02-08 19:51:02.465+00	2021-02-08 19:51:02.465+00
5079	2	91	45	2021-02-08 19:51:06.04+00	2021-02-08 19:51:06.04+00
5080	4	91	46	2021-02-08 19:51:09.608+00	2021-02-08 19:51:09.608+00
5081	2	91	47	2021-02-08 19:51:13.837+00	2021-02-08 19:51:13.837+00
5082	3	91	48	2021-02-08 19:51:17.384+00	2021-02-08 19:51:17.384+00
5083	3	91	49	2021-02-08 19:51:21.539+00	2021-02-08 19:51:21.539+00
5084	2	91	50	2021-02-08 19:51:25.749+00	2021-02-08 19:51:25.749+00
5085	4	91	51	2021-02-08 19:51:29.822+00	2021-02-08 19:51:29.822+00
5086	100	91	334	2021-02-08 19:51:59.745+00	2021-02-08 19:51:59.745+00
5087	1	91	60	2021-02-08 19:52:05.4+00	2021-02-08 19:52:05.4+00
5088	0	91	61	2021-02-08 19:52:08.878+00	2021-02-08 19:52:08.878+00
5089	1	91	62	2021-02-08 19:52:12.317+00	2021-02-08 19:52:12.317+00
5090	0	91	63	2021-02-08 19:52:15.411+00	2021-02-08 19:52:15.411+00
5091	1	91	64	2021-02-08 19:52:18.686+00	2021-02-08 19:52:18.686+00
5092	0	91	65	2021-02-08 19:52:22.111+00	2021-02-08 19:52:22.111+00
5093	1	91	66	2021-02-08 19:52:25.43+00	2021-02-08 19:52:25.43+00
5094	1	91	67	2021-02-08 19:52:28.76+00	2021-02-08 19:52:28.76+00
5095	1	91	68	2021-02-08 19:52:32.145+00	2021-02-08 19:52:32.145+00
5096	0	91	69	2021-02-08 19:52:35.563+00	2021-02-08 19:52:35.563+00
5097	1	91	70	2021-02-08 19:52:38.768+00	2021-02-08 19:52:38.768+00
5098	0	91	71	2021-02-08 19:52:42.635+00	2021-02-08 19:52:42.635+00
5099	4	91	72	2021-02-08 19:52:48.648+00	2021-02-08 19:52:48.648+00
5100	1	91	73	2021-02-08 19:52:51.604+00	2021-02-08 19:52:51.604+00
5101	1	91	74	2021-02-08 19:52:55.371+00	2021-02-08 19:52:55.371+00
5102	2	91	75	2021-02-08 19:52:58.473+00	2021-02-08 19:52:58.473+00
5103	3	91	76	2021-02-08 19:53:01.393+00	2021-02-08 19:53:01.393+00
5104	1	91	77	2021-02-08 19:53:04.276+00	2021-02-08 19:53:04.276+00
5105	100	93	332	2021-02-16 19:18:14.548+00	2021-02-16 19:18:14.548+00
5106	1	93	3	2021-02-16 19:18:23.471+00	2021-02-16 19:18:23.471+00
5107	1	93	4	2021-02-16 19:18:27.124+00	2021-02-16 19:18:27.124+00
5108	0	93	5	2021-02-16 19:18:30.594+00	2021-02-16 19:18:30.594+00
5109	1	93	6	2021-02-16 19:18:34.359+00	2021-02-16 19:18:34.359+00
5110	1	93	7	2021-02-16 19:18:37.913+00	2021-02-16 19:18:37.913+00
5111	1	93	8	2021-02-16 19:18:41.541+00	2021-02-16 19:18:41.541+00
5112	0	93	9	2021-02-16 19:18:45.067+00	2021-02-16 19:18:45.067+00
5113	1	93	10	2021-02-16 19:18:48.805+00	2021-02-16 19:18:48.805+00
5114	1	93	11	2021-02-16 19:18:52.312+00	2021-02-16 19:18:52.312+00
5115	1	93	12	2021-02-16 19:18:55.685+00	2021-02-16 19:18:55.685+00
5116	1	93	13	2021-02-16 19:18:59.121+00	2021-02-16 19:18:59.121+00
5117	0	93	14	2021-02-16 19:19:02.369+00	2021-02-16 19:19:02.369+00
5118	1	93	15	2021-02-16 19:19:06.354+00	2021-02-16 19:19:06.354+00
5119	1	93	16	2021-02-16 19:19:10.46+00	2021-02-16 19:19:10.46+00
5120	1	93	17	2021-02-16 19:19:14.102+00	2021-02-16 19:19:14.102+00
5121	1	93	18	2021-02-16 19:19:17.647+00	2021-02-16 19:19:17.647+00
5122	4	93	19	2021-02-16 19:19:28.026+00	2021-02-16 19:19:28.026+00
5123	3	93	20	2021-02-16 19:19:31.144+00	2021-02-16 19:19:31.144+00
5124	1	93	21	2021-02-16 19:19:33.954+00	2021-02-16 19:19:33.954+00
5125	4	93	22	2021-02-16 19:19:36.562+00	2021-02-16 19:19:36.562+00
5126	2	93	23	2021-02-16 19:19:39.52+00	2021-02-16 19:19:39.52+00
5127	3	93	24	2021-02-16 19:19:42.151+00	2021-02-16 19:19:42.151+00
5128	4	93	25	2021-02-16 19:19:44.921+00	2021-02-16 19:19:44.921+00
5129	2	93	26	2021-02-16 19:19:47.736+00	2021-02-16 19:19:47.736+00
5130	3	93	27	2021-02-16 19:19:50.439+00	2021-02-16 19:19:50.439+00
5131	1	93	28	2021-02-16 19:19:53.841+00	2021-02-16 19:19:53.841+00
5132	2	93	29	2021-02-16 19:19:56.713+00	2021-02-16 19:19:56.713+00
5133	3	93	30	2021-02-16 19:19:59.952+00	2021-02-16 19:19:59.952+00
5134	1	93	31	2021-02-16 19:20:02.898+00	2021-02-16 19:20:02.898+00
5135	3	93	32	2021-02-16 19:20:05.577+00	2021-02-16 19:20:05.577+00
5136	4	93	33	2021-02-16 19:20:08.307+00	2021-02-16 19:20:08.307+00
5137	3	93	34	2021-02-16 19:20:10.892+00	2021-02-16 19:20:10.892+00
5138	1	93	35	2021-02-16 19:20:13.706+00	2021-02-16 19:20:13.706+00
5139	2	93	36	2021-02-16 19:20:16.539+00	2021-02-16 19:20:16.539+00
5140	100	93	333	2021-02-16 19:21:25.51+00	2021-02-16 19:21:25.51+00
5141	3	93	37	2021-02-16 19:21:32.106+00	2021-02-16 19:21:32.106+00
5142	2	93	38	2021-02-16 19:21:35.638+00	2021-02-16 19:21:35.638+00
5143	4	93	39	2021-02-16 19:21:39.674+00	2021-02-16 19:21:39.674+00
5144	2	93	40	2021-02-16 19:21:43.142+00	2021-02-16 19:21:43.142+00
5145	3	93	41	2021-02-16 19:21:46.987+00	2021-02-16 19:21:46.987+00
5146	2	93	42	2021-02-16 19:21:51.058+00	2021-02-16 19:21:51.058+00
5147	3	93	43	2021-02-16 19:21:55.206+00	2021-02-16 19:21:55.206+00
5148	2	93	44	2021-02-16 19:21:59.941+00	2021-02-16 19:21:59.941+00
5149	100	93	334	2021-02-16 19:22:46.216+00	2021-02-16 19:22:46.216+00
5150	1	93	60	2021-02-16 19:22:52.577+00	2021-02-16 19:22:52.577+00
5151	1	93	61	2021-02-16 19:22:55.855+00	2021-02-16 19:22:55.855+00
5152	0	93	62	2021-02-16 19:22:59.304+00	2021-02-16 19:22:59.304+00
5153	1	93	63	2021-02-16 19:23:02.853+00	2021-02-16 19:23:02.853+00
5154	1	93	64	2021-02-16 19:23:06.664+00	2021-02-16 19:23:06.664+00
5155	1	93	65	2021-02-16 19:23:10.304+00	2021-02-16 19:23:10.304+00
5156	0	93	66	2021-02-16 19:23:13.684+00	2021-02-16 19:23:13.684+00
5157	0	93	67	2021-02-16 19:23:17.456+00	2021-02-16 19:23:17.456+00
5158	0	93	68	2021-02-16 19:23:21.415+00	2021-02-16 19:23:21.415+00
5159	1	93	69	2021-02-16 20:02:20.042+00	2021-02-16 20:02:20.042+00
5160	0	93	70	2021-02-16 20:02:24.362+00	2021-02-16 20:02:24.362+00
5161	0	93	71	2021-02-16 20:02:28.189+00	2021-02-16 20:02:28.189+00
5162	4	93	72	2021-02-16 20:02:34.501+00	2021-02-16 20:02:34.501+00
5163	100	95	332	2021-02-17 12:35:07.827+00	2021-02-17 12:35:07.827+00
5164	1	95	3	2021-02-17 12:35:14.6+00	2021-02-17 12:35:14.6+00
5165	1	95	4	2021-02-17 12:35:18.213+00	2021-02-17 12:35:18.213+00
5166	0	95	5	2021-02-17 12:35:21.422+00	2021-02-17 12:35:21.422+00
5167	1	95	6	2021-02-17 12:35:25.32+00	2021-02-17 12:35:25.32+00
5168	1	95	7	2021-02-17 12:35:29.154+00	2021-02-17 12:35:29.154+00
5169	1	95	8	2021-02-17 12:35:32.936+00	2021-02-17 12:35:32.936+00
5170	0	95	9	2021-02-17 12:35:36.715+00	2021-02-17 12:35:36.715+00
5171	1	95	10	2021-02-17 12:35:40.143+00	2021-02-17 12:35:40.143+00
5172	1	95	11	2021-02-17 12:35:43.404+00	2021-02-17 12:35:43.404+00
5173	1	95	12	2021-02-17 12:35:47.152+00	2021-02-17 12:35:47.152+00
5174	1	95	13	2021-02-17 12:35:50.932+00	2021-02-17 12:35:50.932+00
5175	0	95	14	2021-02-17 12:35:54.861+00	2021-02-17 12:35:54.861+00
5176	1	95	15	2021-02-17 12:35:58.475+00	2021-02-17 12:35:58.475+00
5177	0	95	16	2021-02-17 12:36:02.243+00	2021-02-17 12:36:02.243+00
5178	1	95	17	2021-02-17 12:36:06.336+00	2021-02-17 12:36:06.336+00
5179	1	95	18	2021-02-17 12:36:09.645+00	2021-02-17 12:36:09.645+00
5180	4	95	19	2021-02-17 12:36:18.216+00	2021-02-17 12:36:18.216+00
5181	3	95	20	2021-02-17 12:36:21.652+00	2021-02-17 12:36:21.652+00
5182	1	95	21	2021-02-17 12:36:24.823+00	2021-02-17 12:36:24.823+00
5183	1	95	22	2021-02-17 12:36:27.87+00	2021-02-17 12:36:27.87+00
5184	2	95	23	2021-02-17 12:36:31.527+00	2021-02-17 12:36:31.527+00
5185	3	95	24	2021-02-17 12:36:34.134+00	2021-02-17 12:36:34.134+00
5186	4	95	25	2021-02-17 12:36:37.029+00	2021-02-17 12:36:37.029+00
5187	2	95	26	2021-02-17 12:36:40.029+00	2021-02-17 12:36:40.029+00
5188	3	95	27	2021-02-17 12:36:42.886+00	2021-02-17 12:36:42.886+00
5189	1	95	28	2021-02-17 12:36:46.442+00	2021-02-17 12:36:46.442+00
5190	2	95	29	2021-02-17 12:36:49.502+00	2021-02-17 12:36:49.502+00
5191	1	95	30	2021-02-17 12:36:52.762+00	2021-02-17 12:36:52.762+00
5192	3	95	31	2021-02-17 12:36:56.156+00	2021-02-17 12:36:56.156+00
5193	3	95	32	2021-02-17 12:36:59.616+00	2021-02-17 12:36:59.616+00
5194	1	95	33	2021-02-17 12:37:02.73+00	2021-02-17 12:37:02.73+00
5195	3	95	34	2021-02-17 12:37:05.194+00	2021-02-17 12:37:05.194+00
5196	4	95	35	2021-02-17 12:37:07.99+00	2021-02-17 12:37:07.99+00
5197	2	95	36	2021-02-17 12:37:10.795+00	2021-02-17 12:37:10.795+00
5198	100	95	333	2021-02-17 12:38:11.578+00	2021-02-17 12:38:11.578+00
5199	2	95	37	2021-02-17 12:38:17.723+00	2021-02-17 12:38:17.723+00
5200	2	95	38	2021-02-17 12:38:21.413+00	2021-02-17 12:38:21.413+00
5201	3	95	39	2021-02-17 12:38:25.236+00	2021-02-17 12:38:25.236+00
5202	2	95	40	2021-02-17 12:38:29.002+00	2021-02-17 12:38:29.002+00
5203	3	95	41	2021-02-17 12:38:32.712+00	2021-02-17 12:38:32.712+00
5204	2	95	42	2021-02-17 12:38:36.506+00	2021-02-17 12:38:36.506+00
5205	100	95	334	2021-02-17 12:39:09.112+00	2021-02-17 12:39:09.112+00
5206	1	95	60	2021-02-17 12:39:15.057+00	2021-02-17 12:39:15.057+00
5207	1	95	61	2021-02-17 12:39:18.352+00	2021-02-17 12:39:18.352+00
5208	0	95	62	2021-02-17 12:39:21.621+00	2021-02-17 12:39:21.621+00
5209	1	95	63	2021-02-17 12:39:24.811+00	2021-02-17 12:39:24.811+00
5210	1	95	64	2021-02-17 12:39:28.37+00	2021-02-17 12:39:28.37+00
5211	0	95	65	2021-02-17 12:39:31.729+00	2021-02-17 12:39:31.729+00
5212	1	95	66	2021-02-17 12:39:34.803+00	2021-02-17 12:39:34.803+00
5213	1	95	67	2021-02-17 12:39:38.037+00	2021-02-17 12:39:38.037+00
5214	1	95	68	2021-02-17 12:39:41.335+00	2021-02-17 12:39:41.335+00
5215	0	95	69	2021-02-17 12:39:44.644+00	2021-02-17 12:39:44.644+00
5216	1	95	70	2021-02-17 12:39:48.155+00	2021-02-17 12:39:48.155+00
5217	1	95	71	2021-02-17 12:39:52.074+00	2021-02-17 12:39:52.074+00
5218	4	95	72	2021-02-17 12:39:58.332+00	2021-02-17 12:39:58.332+00
5219	1	95	73	2021-02-17 12:40:01.47+00	2021-02-17 12:40:01.47+00
5220	2	95	74	2021-02-17 12:40:04.497+00	2021-02-17 12:40:04.497+00
5221	3	95	75	2021-02-17 12:40:07.89+00	2021-02-17 12:40:07.89+00
5222	3	95	76	2021-02-17 12:40:10.657+00	2021-02-17 12:40:10.657+00
5223	1	95	77	2021-02-17 12:40:13.362+00	2021-02-17 12:40:13.362+00
5224	3	95	78	2021-02-17 12:40:16.374+00	2021-02-17 12:40:16.374+00
5225	2	95	79	2021-02-17 12:40:19.414+00	2021-02-17 12:40:19.414+00
5226	2	95	80	2021-02-17 12:40:22.316+00	2021-02-17 12:40:22.316+00
5227	2	95	81	2021-02-17 12:40:24.753+00	2021-02-17 12:40:24.753+00
5228	2	95	82	2021-02-17 12:40:31.371+00	2021-02-17 12:40:31.371+00
5229	2	95	83	2021-02-17 12:40:34.696+00	2021-02-17 12:40:34.696+00
5230	4	95	84	2021-02-17 12:40:39.016+00	2021-02-17 12:40:39.016+00
5231	2	95	85	2021-02-17 12:40:42.654+00	2021-02-17 12:40:42.654+00
5232	2	95	86	2021-02-17 12:40:46.523+00	2021-02-17 12:40:46.523+00
5233	3	95	87	2021-02-17 12:40:50.093+00	2021-02-17 12:40:50.093+00
5234	2	95	88	2021-02-17 12:40:53.523+00	2021-02-17 12:40:53.523+00
5235	1	95	89	2021-02-17 12:40:57.464+00	2021-02-17 12:40:57.464+00
5236	2	95	90	2021-02-17 12:41:01.149+00	2021-02-17 12:41:01.149+00
5237	100	94	335	2021-02-17 12:52:35.642+00	2021-02-17 12:52:35.642+00
5238	1	94	91	2021-02-17 12:52:41.092+00	2021-02-17 12:52:41.092+00
5239	1	94	92	2021-02-17 12:52:44.299+00	2021-02-17 12:52:44.299+00
5240	0	94	93	2021-02-17 12:52:47.43+00	2021-02-17 12:52:47.43+00
5241	0	94	94	2021-02-17 12:52:50.54+00	2021-02-17 12:52:50.54+00
5242	0	94	95	2021-02-17 12:52:54.23+00	2021-02-17 12:52:54.23+00
5243	1	94	96	2021-02-17 12:52:57.32+00	2021-02-17 12:52:57.32+00
5244	0	94	97	2021-02-17 12:53:00.185+00	2021-02-17 12:53:00.185+00
5245	1	94	98	2021-02-17 12:53:03.524+00	2021-02-17 12:53:03.524+00
5246	1	94	99	2021-02-17 12:53:06.814+00	2021-02-17 12:53:06.814+00
5247	0	94	100	2021-02-17 12:53:10.988+00	2021-02-17 12:53:10.988+00
5248	1	94	101	2021-02-17 12:53:14.202+00	2021-02-17 12:53:14.202+00
5249	0	94	102	2021-02-17 12:53:17.57+00	2021-02-17 12:53:17.57+00
5250	1	94	103	2021-02-17 12:53:20.65+00	2021-02-17 12:53:20.65+00
5251	1	94	104	2021-02-17 12:53:23.751+00	2021-02-17 12:53:23.751+00
5252	0	94	105	2021-02-17 12:53:26.711+00	2021-02-17 12:53:26.711+00
5253	1	94	106	2021-02-17 12:53:29.683+00	2021-02-17 12:53:29.683+00
5254	0	94	107	2021-02-17 12:53:33.004+00	2021-02-17 12:53:33.004+00
5255	0	94	108	2021-02-17 12:53:36.385+00	2021-02-17 12:53:36.385+00
5256	1	94	109	2021-02-17 12:53:39.597+00	2021-02-17 12:53:39.597+00
5257	3	94	110	2021-02-17 12:53:49.784+00	2021-02-17 12:53:49.784+00
5258	1	94	111	2021-02-17 12:53:52.846+00	2021-02-17 12:53:52.846+00
5259	3	94	112	2021-02-17 12:53:55.653+00	2021-02-17 12:53:55.653+00
5260	1	94	113	2021-02-17 12:53:58.61+00	2021-02-17 12:53:58.61+00
5261	1	94	114	2021-02-17 12:54:01.516+00	2021-02-17 12:54:01.516+00
5262	3	94	115	2021-02-17 12:54:04.483+00	2021-02-17 12:54:04.483+00
5263	4	94	116	2021-02-17 12:54:07.409+00	2021-02-17 12:54:07.409+00
5264	2	94	117	2021-02-17 12:54:10.65+00	2021-02-17 12:54:10.65+00
5265	4	94	118	2021-02-17 12:54:13.816+00	2021-02-17 12:54:13.816+00
5266	100	94	336	2021-02-17 12:54:39.284+00	2021-02-17 12:54:39.284+00
5267	1	94	120	2021-02-17 12:54:45.087+00	2021-02-17 12:54:45.087+00
5268	0	94	121	2021-02-17 12:54:47.904+00	2021-02-17 12:54:47.904+00
5269	1	94	122	2021-02-17 12:54:50.8+00	2021-02-17 12:54:50.8+00
5270	1	94	123	2021-02-17 12:54:53.396+00	2021-02-17 12:54:53.396+00
5271	0	94	124	2021-02-17 12:54:56.283+00	2021-02-17 12:54:56.283+00
5272	1	94	125	2021-02-17 12:54:59.04+00	2021-02-17 12:54:59.04+00
5273	1	94	126	2021-02-17 12:55:01.688+00	2021-02-17 12:55:01.688+00
5274	100	97	335	2021-02-17 13:32:33.304+00	2021-02-17 13:32:33.304+00
5275	1	97	91	2021-02-17 13:32:39.207+00	2021-02-17 13:32:39.207+00
5276	0	97	92	2021-02-17 13:32:42.271+00	2021-02-17 13:32:42.271+00
5277	0	97	93	2021-02-17 13:32:45.311+00	2021-02-17 13:32:45.311+00
5278	0	97	94	2021-02-17 13:32:48.456+00	2021-02-17 13:32:48.456+00
5279	1	97	95	2021-02-17 13:32:51.558+00	2021-02-17 13:32:51.558+00
5280	0	97	96	2021-02-17 13:32:54.659+00	2021-02-17 13:32:54.659+00
5281	1	97	97	2021-02-17 13:32:57.777+00	2021-02-17 13:32:57.777+00
5282	1	97	98	2021-02-17 13:33:00.869+00	2021-02-17 13:33:00.869+00
5283	0	97	99	2021-02-17 13:33:04.181+00	2021-02-17 13:33:04.181+00
5284	1	97	100	2021-02-17 13:33:07.255+00	2021-02-17 13:33:07.255+00
5285	100	97	336	2021-02-17 13:33:46.677+00	2021-02-17 13:33:46.677+00
5286	1	97	120	2021-02-17 13:33:53.813+00	2021-02-17 13:33:53.813+00
5287	0	97	121	2021-02-17 13:33:56.431+00	2021-02-17 13:33:56.431+00
5288	0	97	122	2021-02-17 13:34:00.157+00	2021-02-17 13:34:00.157+00
5289	1	97	123	2021-02-17 13:34:02.704+00	2021-02-17 13:34:02.704+00
5290	0	97	124	2021-02-17 13:34:05.541+00	2021-02-17 13:34:05.541+00
5291	0	97	125	2021-02-17 13:34:08.619+00	2021-02-17 13:34:08.619+00
5292	1	97	126	2021-02-17 13:34:11.643+00	2021-02-17 13:34:11.643+00
5293	100	96	332	2021-02-17 13:45:50.042+00	2021-02-17 13:45:50.042+00
5294	1	96	3	2021-02-17 13:45:57.644+00	2021-02-17 13:45:57.644+00
5295	1	96	4	2021-02-17 13:46:00.976+00	2021-02-17 13:46:00.976+00
5296	0	96	5	2021-02-17 13:46:04.387+00	2021-02-17 13:46:04.387+00
5297	1	96	6	2021-02-17 13:46:08.073+00	2021-02-17 13:46:08.073+00
5298	0	96	7	2021-02-17 13:46:12.38+00	2021-02-17 13:46:12.38+00
5299	1	96	8	2021-02-17 13:46:15.902+00	2021-02-17 13:46:15.902+00
5300	0	96	9	2021-02-17 13:46:20.397+00	2021-02-17 13:46:20.397+00
5301	1	96	10	2021-02-17 13:46:24.288+00	2021-02-17 13:46:24.288+00
5302	1	96	11	2021-02-17 13:46:28.173+00	2021-02-17 13:46:28.173+00
5303	1	96	12	2021-02-17 13:46:31.921+00	2021-02-17 13:46:31.921+00
5304	1	96	13	2021-02-17 13:46:35.494+00	2021-02-17 13:46:35.494+00
5305	0	96	14	2021-02-17 13:46:39.196+00	2021-02-17 13:46:39.196+00
5306	1	96	15	2021-02-17 13:46:43.552+00	2021-02-17 13:46:43.552+00
5309	0	96	18	2021-02-17 13:46:55.457+00	2021-02-17 13:46:55.457+00
5310	4	96	19	2021-02-17 13:47:05.239+00	2021-02-17 13:47:05.239+00
5311	3	96	20	2021-02-17 13:47:08.461+00	2021-02-17 13:47:08.461+00
5312	1	96	21	2021-02-17 13:47:11.544+00	2021-02-17 13:47:11.544+00
5313	3	96	22	2021-02-17 13:47:14.358+00	2021-02-17 13:47:14.358+00
5314	2	96	23	2021-02-17 13:47:17.352+00	2021-02-17 13:47:17.352+00
5315	3	96	24	2021-02-17 13:47:20.008+00	2021-02-17 13:47:20.008+00
5316	4	96	25	2021-02-17 13:47:22.627+00	2021-02-17 13:47:22.627+00
5317	2	96	26	2021-02-17 13:47:25.335+00	2021-02-17 13:47:25.335+00
5318	3	96	27	2021-02-17 13:47:27.955+00	2021-02-17 13:47:27.955+00
5319	4	96	28	2021-02-17 13:47:30.866+00	2021-02-17 13:47:30.866+00
5322	1	96	31	2021-02-17 13:47:39.376+00	2021-02-17 13:47:39.376+00
5323	3	96	32	2021-02-17 13:47:42.639+00	2021-02-17 13:47:42.639+00
5324	4	96	33	2021-02-17 13:47:46.089+00	2021-02-17 13:47:46.089+00
5325	3	96	34	2021-02-17 13:47:48.702+00	2021-02-17 13:47:48.702+00
5326	4	96	35	2021-02-17 13:47:51.454+00	2021-02-17 13:47:51.454+00
5327	2	96	36	2021-02-17 13:47:54.119+00	2021-02-17 13:47:54.119+00
5307	0	96	16	2021-02-17 13:46:47.448+00	2021-02-17 13:46:47.448+00
5308	1	96	17	2021-02-17 13:46:51.005+00	2021-02-17 13:46:51.005+00
5320	2	96	29	2021-02-17 13:47:33.656+00	2021-02-17 13:47:33.656+00
5321	4	96	30	2021-02-17 13:47:36.568+00	2021-02-17 13:47:36.568+00
5328	100	96	333	2021-02-17 13:48:55.605+00	2021-02-17 13:48:55.605+00
5329	2	96	37	2021-02-17 13:49:02.03+00	2021-02-17 13:49:02.03+00
5330	2	96	38	2021-02-17 13:49:05.924+00	2021-02-17 13:49:05.924+00
5331	3	96	39	2021-02-17 13:49:09.483+00	2021-02-17 13:49:09.483+00
5332	1	96	40	2021-02-17 13:49:12.882+00	2021-02-17 13:49:12.882+00
5333	3	96	41	2021-02-17 13:49:16.374+00	2021-02-17 13:49:16.374+00
5334	2	96	42	2021-02-17 13:49:20.099+00	2021-02-17 13:49:20.099+00
5335	100	96	334	2021-02-17 13:49:53.248+00	2021-02-17 13:49:53.248+00
5336	1	96	60	2021-02-17 13:49:58.749+00	2021-02-17 13:49:58.749+00
5337	1	96	61	2021-02-17 13:50:01.679+00	2021-02-17 13:50:01.679+00
5338	0	96	62	2021-02-17 13:50:04.813+00	2021-02-17 13:50:04.813+00
5339	1	96	63	2021-02-17 13:50:07.941+00	2021-02-17 13:50:07.941+00
5340	0	96	64	2021-02-17 13:50:11.556+00	2021-02-17 13:50:11.556+00
5341	1	96	65	2021-02-17 13:50:15.039+00	2021-02-17 13:50:15.039+00
5342	1	96	66	2021-02-17 13:50:18.45+00	2021-02-17 13:50:18.45+00
5343	1	96	67	2021-02-17 13:50:21.87+00	2021-02-17 13:50:21.87+00
5344	1	96	68	2021-02-17 13:50:24.994+00	2021-02-17 13:50:24.994+00
5345	0	96	69	2021-02-17 13:50:29.086+00	2021-02-17 13:50:29.086+00
5346	1	96	70	2021-02-17 13:50:32.167+00	2021-02-17 13:50:32.167+00
5347	1	96	71	2021-02-17 13:50:35.638+00	2021-02-17 13:50:35.638+00
5348	4	96	72	2021-02-17 13:50:40.987+00	2021-02-17 13:50:40.987+00
5349	1	96	73	2021-02-17 13:50:43.709+00	2021-02-17 13:50:43.709+00
5350	2	96	74	2021-02-17 13:50:47.411+00	2021-02-17 13:50:47.411+00
5351	2	96	75	2021-02-17 13:50:50.653+00	2021-02-17 13:50:50.653+00
5352	3	96	76	2021-02-17 13:50:53.902+00	2021-02-17 13:50:53.902+00
5353	1	96	77	2021-02-17 13:50:57.005+00	2021-02-17 13:50:57.005+00
5354	3	96	78	2021-02-17 13:51:00.206+00	2021-02-17 13:51:00.206+00
5355	2	96	79	2021-02-17 13:51:03.078+00	2021-02-17 13:51:03.078+00
5356	1	96	80	2021-02-17 13:51:05.784+00	2021-02-17 13:51:05.784+00
5357	2	96	81	2021-02-17 13:51:08.662+00	2021-02-17 13:51:08.662+00
5358	2	96	82	2021-02-17 13:51:15.421+00	2021-02-17 13:51:15.421+00
5359	3	96	83	2021-02-17 13:51:18.9+00	2021-02-17 13:51:18.9+00
5360	3	96	84	2021-02-17 13:51:22.433+00	2021-02-17 13:51:22.433+00
5361	2	96	85	2021-02-17 13:51:26.102+00	2021-02-17 13:51:26.102+00
5362	1	96	86	2021-02-17 13:51:29.601+00	2021-02-17 13:51:29.601+00
5363	2	96	87	2021-02-17 13:51:33.155+00	2021-02-17 13:51:33.155+00
5364	3	96	88	2021-02-17 13:51:36.905+00	2021-02-17 13:51:36.905+00
5365	3	96	89	2021-02-17 13:51:40.631+00	2021-02-17 13:51:40.631+00
5366	2	96	90	2021-02-17 13:51:44.288+00	2021-02-17 13:51:44.288+00
5367	1	99	151	2021-02-17 14:01:06.728+00	2021-02-17 14:01:06.728+00
5368	1	99	152	2021-02-17 14:01:11.032+00	2021-02-17 14:01:11.032+00
5369	1	99	153	2021-02-17 14:01:15.732+00	2021-02-17 14:01:15.732+00
5370	0	99	154	2021-02-17 14:01:20.012+00	2021-02-17 14:01:20.012+00
5371	1	99	155	2021-02-17 14:01:24.537+00	2021-02-17 14:01:24.537+00
5372	0	99	156	2021-02-17 14:01:29.065+00	2021-02-17 14:01:29.065+00
5373	1	99	157	2021-02-17 14:01:36.459+00	2021-02-17 14:01:36.459+00
5374	0	99	158	2021-02-17 14:01:42.085+00	2021-02-17 14:01:42.085+00
5375	2	99	159	2021-02-17 14:02:05.939+00	2021-02-17 14:02:05.939+00
5376	3	99	160	2021-02-17 14:02:19.407+00	2021-02-17 14:02:19.407+00
5377	1	99	161	2021-02-17 14:02:29.517+00	2021-02-17 14:02:29.517+00
5378	1	99	162	2021-02-17 14:02:38.926+00	2021-02-17 14:02:38.926+00
5379	2	99	163	2021-02-17 14:02:50.606+00	2021-02-17 14:02:50.606+00
5380	1	99	164	2021-02-17 14:03:11.016+00	2021-02-17 14:03:11.016+00
5381	0	99	165	2021-02-17 14:03:14.349+00	2021-02-17 14:03:14.349+00
5382	1	99	166	2021-02-17 14:03:17.91+00	2021-02-17 14:03:17.91+00
5383	0	99	167	2021-02-17 14:03:21.368+00	2021-02-17 14:03:21.368+00
5384	1	99	168	2021-02-17 14:03:24.815+00	2021-02-17 14:03:24.815+00
5385	1	99	169	2021-02-17 14:03:27.932+00	2021-02-17 14:03:27.932+00
5386	1	99	170	2021-02-17 14:03:31.174+00	2021-02-17 14:03:31.174+00
5387	1	99	171	2021-02-17 14:03:34.734+00	2021-02-17 14:03:34.734+00
5388	1	99	172	2021-02-17 14:03:38.149+00	2021-02-17 14:03:38.149+00
5389	0	99	173	2021-02-17 14:03:41.802+00	2021-02-17 14:03:41.802+00
5390	1	99	174	2021-02-17 14:03:56.953+00	2021-02-17 14:03:56.953+00
5391	1	99	175	2021-02-17 14:04:03.722+00	2021-02-17 14:04:03.722+00
5392	0	99	176	2021-02-17 14:04:10.677+00	2021-02-17 14:04:10.677+00
5393	1	99	177	2021-02-17 14:04:18.403+00	2021-02-17 14:04:18.403+00
5394	5	99	337	2021-02-17 14:04:42.017+00	2021-02-17 14:04:42.017+00
5395	3	99	338	2021-02-17 14:04:46.392+00	2021-02-17 14:04:46.392+00
5396	2	99	339	2021-02-17 14:04:51.093+00	2021-02-17 14:04:51.093+00
5397	4	99	340	2021-02-17 14:04:54.921+00	2021-02-17 14:04:54.921+00
5398	5	99	341	2021-02-17 14:05:11.735+00	2021-02-17 14:05:11.735+00
5399	2	99	342	2021-02-17 14:05:15.946+00	2021-02-17 14:05:15.946+00
5400	4	99	343	2021-02-17 14:05:19.618+00	2021-02-17 14:05:19.618+00
5401	2	99	344	2021-02-17 14:05:23.366+00	2021-02-17 14:05:23.366+00
5402	4	99	345	2021-02-17 14:05:26.988+00	2021-02-17 14:05:26.988+00
5403	5	99	346	2021-02-17 14:05:30.839+00	2021-02-17 14:05:30.839+00
5404	6	99	347	2021-02-17 14:05:34.692+00	2021-02-17 14:05:34.692+00
5405	3	99	348	2021-02-17 14:05:38.7+00	2021-02-17 14:05:38.7+00
5406	2	99	349	2021-02-17 14:05:42.615+00	2021-02-17 14:05:42.615+00
5407	5	99	350	2021-02-17 14:05:46.751+00	2021-02-17 14:05:46.751+00
5408	2	99	351	2021-02-17 14:05:51.92+00	2021-02-17 14:05:51.92+00
5409	4	99	352	2021-02-17 14:05:55.885+00	2021-02-17 14:05:55.885+00
5410	5	99	353	2021-02-17 14:06:00.166+00	2021-02-17 14:06:00.166+00
5411	6	99	354	2021-02-17 14:06:04.466+00	2021-02-17 14:06:04.466+00
5412	2	99	355	2021-02-17 14:06:08.444+00	2021-02-17 14:06:08.444+00
5413	2	99	356	2021-02-17 14:06:12.333+00	2021-02-17 14:06:12.333+00
5414	5	99	357	2021-02-17 14:06:16.726+00	2021-02-17 14:06:16.726+00
5415	6	99	358	2021-02-17 14:06:21.487+00	2021-02-17 14:06:21.487+00
5416	4	99	359	2021-02-17 14:06:26.046+00	2021-02-17 14:06:26.046+00
5417	7	99	360	2021-02-17 14:06:30.53+00	2021-02-17 14:06:30.53+00
5418	4	99	361	2021-02-17 14:06:35.631+00	2021-02-17 14:06:35.631+00
5419	8	99	362	2021-02-17 14:06:40.088+00	2021-02-17 14:06:40.088+00
5420	7	99	363	2021-02-17 14:06:48.69+00	2021-02-17 14:06:48.69+00
5421	6	99	364	2021-02-17 14:06:53.872+00	2021-02-17 14:06:53.872+00
5422	3	101	186	2021-02-17 14:17:11.265+00	2021-02-17 14:17:11.265+00
5423	2	101	187	2021-02-17 14:17:14.358+00	2021-02-17 14:17:14.358+00
5424	4	101	188	2021-02-17 14:17:17.148+00	2021-02-17 14:17:17.148+00
5425	2	101	189	2021-02-17 14:17:19.921+00	2021-02-17 14:17:19.921+00
5426	1	101	190	2021-02-17 14:17:22.88+00	2021-02-17 14:17:22.88+00
5427	3	101	191	2021-02-17 14:17:25.553+00	2021-02-17 14:17:25.553+00
5428	2	101	192	2021-02-17 14:17:28.491+00	2021-02-17 14:17:28.491+00
5429	4	101	193	2021-02-17 14:17:31.151+00	2021-02-17 14:17:31.151+00
5430	2	101	194	2021-02-17 14:17:34.135+00	2021-02-17 14:17:34.135+00
5431	3	101	195	2021-02-17 14:17:36.743+00	2021-02-17 14:17:36.743+00
5432	1	101	196	2021-02-17 14:17:39.831+00	2021-02-17 14:17:39.831+00
5433	4	101	197	2021-02-17 14:17:44.759+00	2021-02-17 14:17:44.759+00
5434	2	101	198	2021-02-17 14:17:47.825+00	2021-02-17 14:17:47.825+00
5435	3	101	199	2021-02-17 14:17:50.37+00	2021-02-17 14:17:50.37+00
5436	4	101	200	2021-02-17 14:17:53.094+00	2021-02-17 14:17:53.094+00
5437	1	101	201	2021-02-17 14:17:55.559+00	2021-02-17 14:17:55.559+00
5438	3	101	202	2021-02-17 14:17:58.053+00	2021-02-17 14:17:58.053+00
5439	1	101	203	2021-02-17 14:18:08.48+00	2021-02-17 14:18:08.48+00
5440	0	101	204	2021-02-17 14:18:15.788+00	2021-02-17 14:18:15.788+00
5441	0	101	205	2021-02-17 14:18:22.61+00	2021-02-17 14:18:22.61+00
5442	1	101	206	2021-02-17 14:18:29.796+00	2021-02-17 14:18:29.796+00
5443	6	103	208	2021-02-17 14:29:21.684+00	2021-02-17 14:29:21.684+00
5444	1	103	209	2021-02-17 14:29:24.753+00	2021-02-17 14:29:24.753+00
5445	4	103	210	2021-02-17 14:29:27.885+00	2021-02-17 14:29:27.885+00
5446	3	103	211	2021-02-17 14:29:31.672+00	2021-02-17 14:29:31.672+00
5447	5	103	212	2021-02-17 14:29:34.543+00	2021-02-17 14:29:34.543+00
5448	4	103	213	2021-02-17 14:29:37.496+00	2021-02-17 14:29:37.496+00
5449	1	103	214	2021-02-17 14:29:40.491+00	2021-02-17 14:29:40.491+00
5450	6	103	215	2021-02-17 14:29:43.17+00	2021-02-17 14:29:43.17+00
5451	5	103	216	2021-02-17 14:29:46.246+00	2021-02-17 14:29:46.246+00
5452	4	103	217	2021-02-17 14:29:49.424+00	2021-02-17 14:29:49.424+00
5453	6	103	218	2021-02-17 14:29:52.557+00	2021-02-17 14:29:52.557+00
5454	4	103	219	2021-02-17 14:29:55.671+00	2021-02-17 14:29:55.671+00
5455	5	103	220	2021-02-17 14:29:58.586+00	2021-02-17 14:29:58.586+00
5456	3	103	221	2021-02-17 14:30:02.088+00	2021-02-17 14:30:02.088+00
5457	4	103	222	2021-02-17 14:30:05.126+00	2021-02-17 14:30:05.126+00
5458	4	103	223	2021-02-17 14:30:08.099+00	2021-02-17 14:30:08.099+00
5459	1	103	224	2021-02-17 14:30:10.962+00	2021-02-17 14:30:10.962+00
5460	6	103	225	2021-02-17 14:30:13.655+00	2021-02-17 14:30:13.655+00
5461	1	103	226	2021-02-17 14:30:16.463+00	2021-02-17 14:30:16.463+00
5462	2	103	227	2021-02-17 14:30:20.067+00	2021-02-17 14:30:20.067+00
5463	4	103	228	2021-02-17 14:30:23.072+00	2021-02-17 14:30:23.072+00
5464	1	103	229	2021-02-17 14:30:26.144+00	2021-02-17 14:30:26.144+00
5465	4	103	230	2021-02-17 14:30:29.305+00	2021-02-17 14:30:29.305+00
5466	6	103	231	2021-02-17 14:30:32.37+00	2021-02-17 14:30:32.37+00
5467	3	103	232	2021-02-17 14:30:35.534+00	2021-02-17 14:30:35.534+00
5468	4	103	233	2021-02-17 14:30:38.297+00	2021-02-17 14:30:38.297+00
5469	2	103	234	2021-02-17 14:30:41.642+00	2021-02-17 14:30:41.642+00
5470	4	103	235	2021-02-17 14:30:44.887+00	2021-02-17 14:30:44.887+00
5471	3	103	236	2021-02-17 14:30:48.125+00	2021-02-17 14:30:48.125+00
5472	6	103	237	2021-02-17 14:30:51.447+00	2021-02-17 14:30:51.447+00
5473	6	103	238	2021-02-17 14:30:54.406+00	2021-02-17 14:30:54.406+00
5474	1	103	239	2021-02-17 14:30:57.655+00	2021-02-17 14:30:57.655+00
5475	4	103	240	2021-02-17 14:31:00.603+00	2021-02-17 14:31:00.603+00
5476	1	103	242	2021-02-17 14:31:16.541+00	2021-02-17 14:31:16.541+00
5477	0	103	243	2021-02-17 14:31:19.773+00	2021-02-17 14:31:19.773+00
5478	0	103	244	2021-02-17 14:31:22.858+00	2021-02-17 14:31:22.858+00
5479	1	103	245	2021-02-17 14:31:25.86+00	2021-02-17 14:31:25.86+00
5480	0	103	246	2021-02-17 14:31:29.098+00	2021-02-17 14:31:29.098+00
5481	0	103	247	2021-02-17 14:31:32.896+00	2021-02-17 14:31:32.896+00
5482	1	103	248	2021-02-17 14:31:36.323+00	2021-02-17 14:31:36.323+00
5483	0	103	249	2021-02-17 14:31:40.176+00	2021-02-17 14:31:40.176+00
5484	1	103	250	2021-02-17 14:31:43.393+00	2021-02-17 14:31:43.393+00
5485	0	103	251	2021-02-17 14:31:46.966+00	2021-02-17 14:31:46.966+00
5486	0	103	252	2021-02-17 14:31:50.706+00	2021-02-17 14:31:50.706+00
5487	1	103	253	2021-02-17 14:31:54.583+00	2021-02-17 14:31:54.583+00
5488	0	103	254	2021-02-17 14:31:58.074+00	2021-02-17 14:31:58.074+00
5489	0	103	255	2021-02-17 14:32:02.082+00	2021-02-17 14:32:02.082+00
5490	0	103	256	2021-02-17 14:32:05.715+00	2021-02-17 14:32:05.715+00
5491	0	103	257	2021-02-17 14:32:09.903+00	2021-02-17 14:32:09.903+00
5492	1	103	258	2021-02-17 14:32:13.896+00	2021-02-17 14:32:13.896+00
5493	1	103	259	2021-02-17 14:32:17.752+00	2021-02-17 14:32:17.752+00
5494	0	103	260	2021-02-17 14:32:21.563+00	2021-02-17 14:32:21.563+00
5495	0	103	261	2021-02-17 14:32:24.863+00	2021-02-17 14:32:24.863+00
5496	1	103	262	2021-02-17 14:32:28.656+00	2021-02-17 14:32:28.656+00
5497	1	103	263	2021-02-17 14:32:32.391+00	2021-02-17 14:32:32.391+00
5498	0	103	264	2021-02-17 14:32:35.991+00	2021-02-17 14:32:35.991+00
5499	0	103	265	2021-02-17 14:32:40.08+00	2021-02-17 14:32:40.08+00
5500	1	103	266	2021-02-17 14:32:44.095+00	2021-02-17 14:32:44.095+00
5501	0	103	267	2021-02-17 14:32:48.135+00	2021-02-17 14:32:48.135+00
5502	1	103	268	2021-02-17 14:32:51.488+00	2021-02-17 14:32:51.488+00
5503	1	103	269	2021-02-17 14:32:55.071+00	2021-02-17 14:32:55.071+00
5504	1	103	270	2021-02-17 14:32:58.781+00	2021-02-17 14:32:58.781+00
5505	1	103	271	2021-02-17 14:33:03.007+00	2021-02-17 14:33:03.007+00
5506	0	103	272	2021-02-17 14:33:08.036+00	2021-02-17 14:33:08.036+00
5507	1	103	273	2021-02-17 14:33:12.111+00	2021-02-17 14:33:12.111+00
5508	1	103	274	2021-02-17 14:33:16.241+00	2021-02-17 14:33:16.241+00
5509	1	103	275	2021-02-17 14:33:20.268+00	2021-02-17 14:33:20.268+00
5510	1	103	276	2021-02-17 14:33:24.097+00	2021-02-17 14:33:24.097+00
5511	1	103	277	2021-02-17 14:33:29.075+00	2021-02-17 14:33:29.075+00
5512	0	103	278	2021-02-17 14:33:32.794+00	2021-02-17 14:33:32.794+00
5513	0	103	279	2021-02-17 14:33:36.638+00	2021-02-17 14:33:36.638+00
5514	1	103	280	2021-02-17 14:33:41.529+00	2021-02-17 14:33:41.529+00
5515	0	103	281	2021-02-17 14:33:45.242+00	2021-02-17 14:33:45.242+00
5516	1	103	282	2021-02-17 14:33:49.999+00	2021-02-17 14:33:49.999+00
5517	1	103	283	2021-02-17 14:33:54.474+00	2021-02-17 14:33:54.474+00
5518	1	103	284	2021-02-17 14:33:58.591+00	2021-02-17 14:33:58.591+00
5519	1	103	285	2021-02-17 14:34:02.584+00	2021-02-17 14:34:02.584+00
5520	2	103	286	2021-02-17 14:34:38.917+00	2021-02-17 14:34:38.917+00
5521	3	103	287	2021-02-17 14:34:41.826+00	2021-02-17 14:34:41.826+00
5522	2	103	288	2021-02-17 14:34:44.422+00	2021-02-17 14:34:44.422+00
5523	3	103	289	2021-02-17 14:34:47.144+00	2021-02-17 14:34:47.144+00
5524	3	103	290	2021-02-17 14:34:50.151+00	2021-02-17 14:34:50.151+00
5525	1	103	291	2021-02-17 14:34:52.803+00	2021-02-17 14:34:52.803+00
5526	2	103	292	2021-02-17 14:34:55.485+00	2021-02-17 14:34:55.485+00
5527	3	103	293	2021-02-17 14:34:58.209+00	2021-02-17 14:34:58.209+00
5528	1	103	294	2021-02-17 14:35:00.902+00	2021-02-17 14:35:00.902+00
5529	3	103	295	2021-02-17 14:35:03.569+00	2021-02-17 14:35:03.569+00
5530	2	103	296	2021-02-17 14:35:06.454+00	2021-02-17 14:35:06.454+00
5531	3	103	297	2021-02-17 14:35:09.674+00	2021-02-17 14:35:09.674+00
5532	2	103	298	2021-02-17 14:35:12.761+00	2021-02-17 14:35:12.761+00
5533	2	103	299	2021-02-17 14:35:15.467+00	2021-02-17 14:35:15.467+00
5534	4	103	300	2021-02-17 14:35:18.401+00	2021-02-17 14:35:18.401+00
5535	3	103	301	2021-02-17 14:35:21.252+00	2021-02-17 14:35:21.252+00
5536	2	103	302	2021-02-17 14:35:24.294+00	2021-02-17 14:35:24.294+00
5537	1	103	303	2021-02-17 14:35:27.418+00	2021-02-17 14:35:27.418+00
5538	4	103	304	2021-02-17 14:35:30.705+00	2021-02-17 14:35:30.705+00
5539	3	103	305	2021-02-17 14:35:33.437+00	2021-02-17 14:35:33.437+00
5540	100	121	332	2021-03-26 11:40:20.912+00	2021-03-26 11:40:20.912+00
5541	1	121	3	2021-03-26 11:40:26.521+00	2021-03-26 11:40:26.521+00
5542	1	121	4	2021-03-26 11:40:29.851+00	2021-03-26 11:40:29.851+00
5543	0	121	5	2021-03-26 11:40:33.11+00	2021-03-26 11:40:33.11+00
5544	1	121	6	2021-03-26 11:40:36.586+00	2021-03-26 11:40:36.586+00
5545	0	121	7	2021-03-26 11:40:40.108+00	2021-03-26 11:40:40.108+00
5546	1	121	8	2021-03-26 11:40:43.332+00	2021-03-26 11:40:43.332+00
5547	0	121	9	2021-03-26 11:40:46.445+00	2021-03-26 11:40:46.445+00
5548	0	121	10	2021-03-26 11:40:49.662+00	2021-03-26 11:40:49.662+00
5549	1	121	11	2021-03-26 11:40:52.861+00	2021-03-26 11:40:52.861+00
5550	1	121	12	2021-03-26 11:40:56.091+00	2021-03-26 11:40:56.091+00
5551	1	121	13	2021-03-26 11:40:59.189+00	2021-03-26 11:40:59.189+00
5552	0	121	14	2021-03-26 11:41:02.649+00	2021-03-26 11:41:02.649+00
5553	0	121	15	2021-03-26 11:41:05.917+00	2021-03-26 11:41:05.917+00
5554	0	121	16	2021-03-26 11:41:09.178+00	2021-03-26 11:41:09.178+00
5555	0	121	17	2021-03-26 11:41:12.466+00	2021-03-26 11:41:12.466+00
5556	1	121	18	2021-03-26 11:41:15.61+00	2021-03-26 11:41:15.61+00
5557	4	121	19	2021-03-26 11:41:20.53+00	2021-03-26 11:41:20.53+00
5558	3	121	20	2021-03-26 11:41:22.994+00	2021-03-26 11:41:22.994+00
5559	1	121	21	2021-03-26 11:41:26.589+00	2021-03-26 11:41:26.589+00
5560	4	121	22	2021-03-26 11:41:29.577+00	2021-03-26 11:41:29.577+00
5561	2	121	23	2021-03-26 11:41:32.415+00	2021-03-26 11:41:32.415+00
5562	3	121	24	2021-03-26 11:41:34.837+00	2021-03-26 11:41:34.837+00
5563	4	121	25	2021-03-26 11:41:37.311+00	2021-03-26 11:41:37.311+00
5564	2	121	26	2021-03-26 11:41:39.934+00	2021-03-26 11:41:39.934+00
5565	3	121	27	2021-03-26 11:41:42.422+00	2021-03-26 11:41:42.422+00
5566	4	121	28	2021-03-26 11:41:44.914+00	2021-03-26 11:41:44.914+00
5567	2	121	29	2021-03-26 11:41:47.812+00	2021-03-26 11:41:47.812+00
5568	1	121	30	2021-03-26 11:41:50.49+00	2021-03-26 11:41:50.49+00
5569	4	121	31	2021-03-26 11:41:53.506+00	2021-03-26 11:41:53.506+00
5570	3	121	32	2021-03-26 11:41:55.937+00	2021-03-26 11:41:55.937+00
5571	4	121	33	2021-03-26 11:41:59.227+00	2021-03-26 11:41:59.227+00
5572	3	121	34	2021-03-26 11:42:01.947+00	2021-03-26 11:42:01.947+00
5573	4	121	35	2021-03-26 11:42:05.22+00	2021-03-26 11:42:05.22+00
5574	2	121	36	2021-03-26 11:42:07.609+00	2021-03-26 11:42:07.609+00
5575	100	121	334	2021-03-26 11:52:20.126+00	2021-03-26 11:52:20.126+00
5576	1	121	60	2021-03-26 11:52:25.786+00	2021-03-26 11:52:25.786+00
5577	1	121	61	2021-03-26 11:52:28.715+00	2021-03-26 11:52:28.715+00
5578	1	121	62	2021-03-26 11:52:31.783+00	2021-03-26 11:52:31.783+00
5579	1	121	63	2021-03-26 11:52:34.862+00	2021-03-26 11:52:34.862+00
5580	1	121	64	2021-03-26 11:52:37.678+00	2021-03-26 11:52:37.678+00
5581	0	121	65	2021-03-26 11:52:40.81+00	2021-03-26 11:52:40.81+00
5582	0	121	66	2021-03-26 11:52:44.257+00	2021-03-26 11:52:44.257+00
5583	1	121	67	2021-03-26 11:52:47.581+00	2021-03-26 11:52:47.581+00
5584	1	121	68	2021-03-26 11:52:50.709+00	2021-03-26 11:52:50.709+00
5585	0	121	69	2021-03-26 11:52:54.416+00	2021-03-26 11:52:54.416+00
5586	1	121	70	2021-03-26 11:52:57.45+00	2021-03-26 11:52:57.45+00
5587	1	121	71	2021-03-26 11:53:00.316+00	2021-03-26 11:53:00.316+00
5588	4	121	72	2021-03-26 11:53:05.886+00	2021-03-26 11:53:05.886+00
5589	1	121	73	2021-03-26 11:53:08.823+00	2021-03-26 11:53:08.823+00
5590	1	121	74	2021-03-26 11:53:11.201+00	2021-03-26 11:53:11.201+00
5591	2	121	75	2021-03-26 11:53:13.857+00	2021-03-26 11:53:13.857+00
5592	3	121	76	2021-03-26 11:53:16.658+00	2021-03-26 11:53:16.658+00
5593	1	121	77	2021-03-26 11:53:19.524+00	2021-03-26 11:53:19.524+00
5594	2	121	78	2021-03-26 11:53:22.05+00	2021-03-26 11:53:22.05+00
5595	3	121	79	2021-03-26 11:53:24.643+00	2021-03-26 11:53:24.643+00
5596	1	121	80	2021-03-26 11:53:27.255+00	2021-03-26 11:53:27.255+00
5598	1	121	82	2021-03-26 11:53:36.706+00	2021-03-26 11:53:36.706+00
5599	2	121	83	2021-03-26 11:53:40.309+00	2021-03-26 11:53:40.309+00
5597	2	121	81	2021-03-26 11:53:29.787+00	2021-03-26 11:53:29.787+00
5600	3	121	84	2021-03-26 11:53:44.067+00	2021-03-26 11:53:44.067+00
5601	2	121	85	2021-03-26 11:53:47.573+00	2021-03-26 11:53:47.573+00
5602	3	121	86	2021-03-26 11:53:50.911+00	2021-03-26 11:53:50.911+00
5603	2	121	87	2021-03-26 11:53:54.948+00	2021-03-26 11:53:54.948+00
5604	3	121	88	2021-03-26 11:53:58.543+00	2021-03-26 11:53:58.543+00
5605	3	121	89	2021-03-26 11:54:02.323+00	2021-03-26 11:54:02.323+00
5606	1	121	90	2021-03-26 11:54:05.759+00	2021-03-26 11:54:05.759+00
5607	100	123	335	2021-03-26 12:03:30.956+00	2021-03-26 12:03:30.956+00
5608	1	123	91	2021-03-26 12:03:36.316+00	2021-03-26 12:03:36.316+00
5609	0	123	92	2021-03-26 12:03:39.223+00	2021-03-26 12:03:39.223+00
5610	0	123	93	2021-03-26 12:03:42.158+00	2021-03-26 12:03:42.158+00
5611	0	123	94	2021-03-26 12:03:45.155+00	2021-03-26 12:03:45.155+00
5612	1	123	95	2021-03-26 12:03:47.986+00	2021-03-26 12:03:47.986+00
5613	0	123	96	2021-03-26 12:03:50.785+00	2021-03-26 12:03:50.785+00
5614	0	123	97	2021-03-26 12:03:53.433+00	2021-03-26 12:03:53.433+00
5615	1	123	98	2021-03-26 12:03:56.717+00	2021-03-26 12:03:56.717+00
5616	1	123	99	2021-03-26 12:03:59.422+00	2021-03-26 12:03:59.422+00
5617	1	123	100	2021-03-26 12:04:02.094+00	2021-03-26 12:04:02.094+00
5618	1	123	101	2021-03-26 12:04:04.859+00	2021-03-26 12:04:04.859+00
5619	1	123	102	2021-03-26 12:04:07.445+00	2021-03-26 12:04:07.445+00
5620	1	123	103	2021-03-26 12:04:10.067+00	2021-03-26 12:04:10.067+00
5621	1	123	104	2021-03-26 12:04:12.565+00	2021-03-26 12:04:12.565+00
5622	1	123	105	2021-03-26 12:04:15.337+00	2021-03-26 12:04:15.337+00
5623	0	123	106	2021-03-26 12:04:18.174+00	2021-03-26 12:04:18.174+00
5624	0	123	107	2021-03-26 12:04:20.822+00	2021-03-26 12:04:20.822+00
5625	1	123	108	2021-03-26 12:04:23.576+00	2021-03-26 12:04:23.576+00
5626	1	123	109	2021-03-26 12:04:26.322+00	2021-03-26 12:04:26.322+00
5627	3	123	110	2021-03-26 12:04:32.336+00	2021-03-26 12:04:32.336+00
5628	1	123	111	2021-03-26 12:04:35.393+00	2021-03-26 12:04:35.393+00
5629	2	123	112	2021-03-26 12:04:38.224+00	2021-03-26 12:04:38.224+00
5630	1	123	113	2021-03-26 12:04:41.286+00	2021-03-26 12:04:41.286+00
5631	1	123	114	2021-03-26 12:04:43.909+00	2021-03-26 12:04:43.909+00
5632	1	123	115	2021-03-26 12:04:46.781+00	2021-03-26 12:04:46.781+00
5633	1	123	116	2021-03-26 12:04:49.358+00	2021-03-26 12:04:49.358+00
5634	2	123	117	2021-03-26 12:04:52.669+00	2021-03-26 12:04:52.669+00
5635	1	123	118	2021-03-26 12:04:55.49+00	2021-03-26 12:04:55.49+00
5636	1	123	119	2021-03-26 12:04:57.948+00	2021-03-26 12:04:57.948+00
5637	100	123	336	2021-03-26 12:05:43.672+00	2021-03-26 12:05:43.672+00
5638	1	123	120	2021-03-26 12:05:49.429+00	2021-03-26 12:05:49.429+00
5639	1	123	121	2021-03-26 12:05:52.019+00	2021-03-26 12:05:52.019+00
5640	0	123	122	2021-03-26 12:05:54.91+00	2021-03-26 12:05:54.91+00
5641	1	123	123	2021-03-26 12:05:57.373+00	2021-03-26 12:05:57.373+00
5642	1	123	124	2021-03-26 12:05:59.853+00	2021-03-26 12:05:59.853+00
5643	1	123	125	2021-03-26 12:06:03.016+00	2021-03-26 12:06:03.016+00
5644	1	123	126	2021-03-26 12:06:05.635+00	2021-03-26 12:06:05.635+00
5645	1	123	127	2021-03-26 12:06:08.311+00	2021-03-26 12:06:08.311+00
5646	0	123	128	2021-03-26 12:06:11.028+00	2021-03-26 12:06:11.028+00
5647	1	123	129	2021-03-26 12:06:13.661+00	2021-03-26 12:06:13.661+00
5648	1	123	130	2021-03-26 12:06:15.995+00	2021-03-26 12:06:15.995+00
5649	0	123	131	2021-03-26 12:06:18.615+00	2021-03-26 12:06:18.615+00
5650	1	123	132	2021-03-26 12:06:21.198+00	2021-03-26 12:06:21.198+00
5651	1	123	133	2021-03-26 12:06:23.646+00	2021-03-26 12:06:23.646+00
5652	1	123	134	2021-03-26 12:06:26.049+00	2021-03-26 12:06:26.049+00
5653	0	123	135	2021-03-26 12:06:28.789+00	2021-03-26 12:06:28.789+00
5654	2	123	136	2021-03-26 12:06:35.448+00	2021-03-26 12:06:35.448+00
5655	4	123	137	2021-03-26 12:06:38.54+00	2021-03-26 12:06:38.54+00
5656	3	123	138	2021-03-26 12:06:41.51+00	2021-03-26 12:06:41.51+00
5657	5	123	139	2021-03-26 12:06:44.411+00	2021-03-26 12:06:44.411+00
5658	1	123	140	2021-03-26 12:06:47.842+00	2021-03-26 12:06:47.842+00
5659	4	123	141	2021-03-26 12:06:51.01+00	2021-03-26 12:06:51.01+00
5660	5	123	142	2021-03-26 12:06:54.156+00	2021-03-26 12:06:54.156+00
5661	1	123	143	2021-03-26 12:06:57.306+00	2021-03-26 12:06:57.306+00
5662	4	123	144	2021-03-26 12:07:00.475+00	2021-03-26 12:07:00.475+00
5663	5	123	145	2021-03-26 12:07:03.357+00	2021-03-26 12:07:03.357+00
5664	3	123	146	2021-03-26 12:07:07+00	2021-03-26 12:07:07+00
5665	5	123	147	2021-03-26 12:07:09.996+00	2021-03-26 12:07:09.996+00
5666	2	123	148	2021-03-26 12:07:13.221+00	2021-03-26 12:07:13.221+00
5667	3	123	149	2021-03-26 12:07:16.473+00	2021-03-26 12:07:16.473+00
5668	1	123	150	2021-03-26 12:07:19.503+00	2021-03-26 12:07:19.503+00
5669	2	126	186	2021-03-26 12:20:31.296+00	2021-03-26 12:20:31.296+00
5670	5	127	208	2021-03-26 12:24:07.867+00	2021-03-26 12:24:07.867+00
5671	4	127	209	2021-03-26 12:24:11.303+00	2021-03-26 12:24:11.303+00
5672	3	127	210	2021-03-26 12:24:14.559+00	2021-03-26 12:24:14.559+00
5673	2	127	211	2021-03-26 12:24:17.569+00	2021-03-26 12:24:17.569+00
5674	6	127	212	2021-03-26 12:24:20.607+00	2021-03-26 12:24:20.607+00
5675	4	127	213	2021-03-26 12:24:23.321+00	2021-03-26 12:24:23.321+00
5676	6	127	214	2021-03-26 12:24:26.431+00	2021-03-26 12:24:26.431+00
5677	2	127	286	2021-03-26 12:24:36.974+00	2021-03-26 12:24:36.974+00
5678	100	130	332	2021-03-28 08:39:07.778+00	2021-03-28 08:39:07.778+00
5679	1	130	3	2021-03-28 08:39:13.225+00	2021-03-28 08:39:13.225+00
5680	1	130	4	2021-03-28 08:39:16.839+00	2021-03-28 08:39:16.839+00
5681	0	130	5	2021-03-28 08:39:20.216+00	2021-03-28 08:39:20.216+00
5682	0	130	6	2021-03-28 08:39:23.713+00	2021-03-28 08:39:23.713+00
5683	0	130	7	2021-03-28 08:39:27.64+00	2021-03-28 08:39:27.64+00
5684	0	130	8	2021-03-28 08:39:31.326+00	2021-03-28 08:39:31.326+00
5685	1	130	9	2021-03-28 08:39:34.465+00	2021-03-28 08:39:34.465+00
5686	0	130	10	2021-03-28 08:39:37.771+00	2021-03-28 08:39:37.771+00
5687	1	130	11	2021-03-28 08:39:41.267+00	2021-03-28 08:39:41.267+00
5688	1	130	12	2021-03-28 08:39:45.04+00	2021-03-28 08:39:45.04+00
5689	1	130	13	2021-03-28 08:39:48.436+00	2021-03-28 08:39:48.436+00
5690	0	130	14	2021-03-28 08:39:52.084+00	2021-03-28 08:39:52.084+00
5691	1	130	15	2021-03-28 08:39:55.806+00	2021-03-28 08:39:55.806+00
5692	0	130	16	2021-03-28 08:39:59.61+00	2021-03-28 08:39:59.61+00
5693	1	130	17	2021-03-28 08:40:02.947+00	2021-03-28 08:40:02.947+00
5694	1	130	18	2021-03-28 08:40:06.436+00	2021-03-28 08:40:06.436+00
5695	4	130	19	2021-03-28 08:40:13.271+00	2021-03-28 08:40:13.271+00
5696	3	130	20	2021-03-28 08:40:16.357+00	2021-03-28 08:40:16.357+00
5697	1	130	21	2021-03-28 08:40:19.365+00	2021-03-28 08:40:19.365+00
5698	4	130	22	2021-03-28 08:40:22.638+00	2021-03-28 08:40:22.638+00
5699	2	130	23	2021-03-28 08:40:25.632+00	2021-03-28 08:40:25.632+00
5700	3	130	24	2021-03-28 08:40:29.109+00	2021-03-28 08:40:29.109+00
5701	4	130	25	2021-03-28 08:40:32.271+00	2021-03-28 08:40:32.271+00
5702	2	130	26	2021-03-28 08:40:35.255+00	2021-03-28 08:40:35.255+00
5703	3	130	27	2021-03-28 08:40:46.798+00	2021-03-28 08:40:46.798+00
5704	4	130	28	2021-03-28 08:40:49.894+00	2021-03-28 08:40:49.894+00
5705	2	130	29	2021-03-28 08:40:52.752+00	2021-03-28 08:40:52.752+00
5706	1	130	30	2021-03-28 08:40:55.422+00	2021-03-28 08:40:55.422+00
5707	1	130	31	2021-03-28 08:40:58.236+00	2021-03-28 08:40:58.236+00
5708	3	130	32	2021-03-28 08:41:44.743+00	2021-03-28 08:41:44.743+00
5709	4	130	33	2021-03-28 08:41:47.518+00	2021-03-28 08:41:47.518+00
5710	3	130	34	2021-03-28 08:41:50.175+00	2021-03-28 08:41:50.175+00
5711	4	130	35	2021-03-28 08:41:53.306+00	2021-03-28 08:41:53.306+00
5712	2	130	36	2021-03-28 08:41:56.249+00	2021-03-28 08:41:56.249+00
5713	100	130	333	2021-03-28 08:49:59.34+00	2021-03-28 08:49:59.34+00
5714	2	130	37	2021-03-28 08:50:04.19+00	2021-03-28 08:50:04.19+00
5715	3	130	38	2021-03-28 08:50:08.16+00	2021-03-28 08:50:08.16+00
5716	3	130	39	2021-03-28 08:50:11.472+00	2021-03-28 08:50:11.472+00
5717	1	130	40	2021-03-28 08:50:15.549+00	2021-03-28 08:50:15.549+00
5718	2	130	41	2021-03-28 08:50:18.968+00	2021-03-28 08:50:18.968+00
5719	1	130	42	2021-03-28 08:50:22.88+00	2021-03-28 08:50:22.88+00
5720	1	130	43	2021-03-28 08:50:26.328+00	2021-03-28 08:50:26.328+00
5721	1	130	44	2021-03-28 08:50:30.89+00	2021-03-28 08:50:30.89+00
5722	2	130	45	2021-03-28 08:50:34.293+00	2021-03-28 08:50:34.293+00
5723	2	130	46	2021-03-28 08:50:38.077+00	2021-03-28 08:50:38.077+00
5724	1	130	47	2021-03-28 08:50:41.439+00	2021-03-28 08:50:41.439+00
5725	2	130	48	2021-03-28 08:50:45.338+00	2021-03-28 08:50:45.338+00
5726	2	130	49	2021-03-28 08:50:49.175+00	2021-03-28 08:50:49.175+00
5727	3	130	50	2021-03-28 08:50:54.031+00	2021-03-28 08:50:54.031+00
5728	1	130	51	2021-03-28 08:50:57.889+00	2021-03-28 08:50:57.889+00
5729	3	130	52	2021-03-28 08:51:02.078+00	2021-03-28 08:51:02.078+00
5730	2	130	53	2021-03-28 08:51:05.875+00	2021-03-28 08:51:05.875+00
5731	1	130	54	2021-03-28 08:51:10.031+00	2021-03-28 08:51:10.031+00
5732	1	130	55	2021-03-28 08:51:13.717+00	2021-03-28 08:51:13.717+00
5733	2	130	56	2021-03-28 08:51:18.064+00	2021-03-28 08:51:18.064+00
5734	3	130	57	2021-03-28 08:51:21.731+00	2021-03-28 08:51:21.731+00
5735	2	130	58	2021-03-28 08:51:25.809+00	2021-03-28 08:51:25.809+00
5736	4	130	59	2021-03-28 08:51:29.816+00	2021-03-28 08:51:29.816+00
5737	100	130	334	2021-03-28 08:52:01.057+00	2021-03-28 08:52:01.057+00
5738	1	130	60	2021-03-28 08:52:07.732+00	2021-03-28 08:52:07.732+00
5739	1	130	61	2021-03-28 08:52:10.857+00	2021-03-28 08:52:10.857+00
5740	0	130	62	2021-03-28 08:52:14.238+00	2021-03-28 08:52:14.238+00
5741	1	130	63	2021-03-28 08:52:17.632+00	2021-03-28 08:52:17.632+00
5742	0	130	64	2021-03-28 08:52:21.093+00	2021-03-28 08:52:21.093+00
5743	0	130	65	2021-03-28 08:52:24.533+00	2021-03-28 08:52:24.533+00
5744	1	130	66	2021-03-28 08:52:27.736+00	2021-03-28 08:52:27.736+00
5745	1	130	67	2021-03-28 08:52:30.997+00	2021-03-28 08:52:30.997+00
5746	0	130	68	2021-03-28 08:52:34.341+00	2021-03-28 08:52:34.341+00
5747	0	130	69	2021-03-28 08:52:37.942+00	2021-03-28 08:52:37.942+00
5748	1	130	70	2021-03-28 08:52:41.182+00	2021-03-28 08:52:41.182+00
5749	0	130	71	2021-03-28 08:52:44.617+00	2021-03-28 08:52:44.617+00
5750	4	130	72	2021-03-28 08:52:49.917+00	2021-03-28 08:52:49.917+00
5751	1	130	73	2021-03-28 08:52:52.763+00	2021-03-28 08:52:52.763+00
5752	1	130	74	2021-03-28 08:52:55.728+00	2021-03-28 08:52:55.728+00
5753	2	130	75	2021-03-28 08:52:58.732+00	2021-03-28 08:52:58.732+00
5754	3	130	76	2021-03-28 08:53:01.586+00	2021-03-28 08:53:01.586+00
5755	1	130	77	2021-03-28 08:53:04.526+00	2021-03-28 08:53:04.526+00
5756	3	130	78	2021-03-28 08:53:08.123+00	2021-03-28 08:53:08.123+00
5757	4	130	79	2021-03-28 08:53:11.261+00	2021-03-28 08:53:11.261+00
5758	1	130	80	2021-03-28 08:53:14.174+00	2021-03-28 08:53:14.174+00
5759	2	130	81	2021-03-28 08:53:17.827+00	2021-03-28 08:53:17.827+00
5760	1	130	82	2021-03-28 08:53:25.988+00	2021-03-28 08:53:25.988+00
5761	2	130	83	2021-03-28 08:53:29.844+00	2021-03-28 08:53:29.844+00
5762	2	130	84	2021-03-28 08:53:33.179+00	2021-03-28 08:53:33.179+00
5763	1	130	85	2021-03-28 08:53:36.654+00	2021-03-28 08:53:36.654+00
5764	1	130	86	2021-03-28 08:53:40.235+00	2021-03-28 08:53:40.235+00
5765	2	130	87	2021-03-28 08:53:43.622+00	2021-03-28 08:53:43.622+00
5766	2	130	88	2021-03-28 08:53:47.084+00	2021-03-28 08:53:47.084+00
5767	1	130	89	2021-03-28 08:53:50.702+00	2021-03-28 08:53:50.702+00
5768	2	130	90	2021-03-28 08:53:54.115+00	2021-03-28 08:53:54.115+00
5769	100	132	332	2021-03-28 09:01:10.241+00	2021-03-28 09:01:10.241+00
5770	1	132	3	2021-03-28 09:01:20.138+00	2021-03-28 09:01:20.138+00
5771	0	132	4	2021-03-28 09:01:24.044+00	2021-03-28 09:01:24.044+00
5772	0	132	5	2021-03-28 09:01:27.318+00	2021-03-28 09:01:27.318+00
5773	0	132	6	2021-03-28 09:01:31.075+00	2021-03-28 09:01:31.075+00
5774	1	132	7	2021-03-28 09:01:34.695+00	2021-03-28 09:01:34.695+00
5775	0	132	8	2021-03-28 09:01:38.661+00	2021-03-28 09:01:38.661+00
5776	1	132	9	2021-03-28 09:01:41.865+00	2021-03-28 09:01:41.865+00
5777	0	132	10	2021-03-28 09:01:45.125+00	2021-03-28 09:01:45.125+00
5778	1	132	11	2021-03-28 09:01:48.51+00	2021-03-28 09:01:48.51+00
5779	1	132	12	2021-03-28 09:01:51.61+00	2021-03-28 09:01:51.61+00
5780	0	132	13	2021-03-28 09:01:55.067+00	2021-03-28 09:01:55.067+00
5781	1	132	14	2021-03-28 09:01:58.292+00	2021-03-28 09:01:58.292+00
5782	1	132	15	2021-03-28 09:02:01.467+00	2021-03-28 09:02:01.467+00
5783	0	132	16	2021-03-28 09:02:04.796+00	2021-03-28 09:02:04.796+00
5784	1	132	17	2021-03-28 09:02:07.911+00	2021-03-28 09:02:07.911+00
5785	1	132	18	2021-03-28 09:02:11.514+00	2021-03-28 09:02:11.514+00
5786	4	132	19	2021-03-28 09:02:16.864+00	2021-03-28 09:02:16.864+00
5787	4	132	20	2021-03-28 09:02:19.953+00	2021-03-28 09:02:19.953+00
5788	1	132	21	2021-03-28 09:02:22.769+00	2021-03-28 09:02:22.769+00
5789	4	132	22	2021-03-28 09:02:25.743+00	2021-03-28 09:02:25.743+00
5790	2	132	23	2021-03-28 09:02:28.989+00	2021-03-28 09:02:28.989+00
5791	3	132	24	2021-03-28 09:02:31.952+00	2021-03-28 09:02:31.952+00
5792	4	132	25	2021-03-28 09:02:35.082+00	2021-03-28 09:02:35.082+00
5793	2	132	26	2021-03-28 09:02:38.261+00	2021-03-28 09:02:38.261+00
5794	2	132	27	2021-03-28 09:02:41.739+00	2021-03-28 09:02:41.739+00
5795	4	132	28	2021-03-28 09:02:45.509+00	2021-03-28 09:02:45.509+00
5796	2	132	29	2021-03-28 09:02:48.653+00	2021-03-28 09:02:48.653+00
5797	1	132	30	2021-03-28 09:02:51.473+00	2021-03-28 09:02:51.473+00
5798	1	132	31	2021-03-28 09:02:54.312+00	2021-03-28 09:02:54.312+00
5799	3	132	32	2021-03-28 09:02:57.775+00	2021-03-28 09:02:57.775+00
5800	3	132	33	2021-03-28 09:03:00.973+00	2021-03-28 09:03:00.973+00
5801	3	132	34	2021-03-28 09:03:03.871+00	2021-03-28 09:03:03.871+00
5802	4	132	35	2021-03-28 09:03:06.762+00	2021-03-28 09:03:06.762+00
5803	2	132	36	2021-03-28 09:03:09.582+00	2021-03-28 09:03:09.582+00
5804	100	134	332	2021-03-28 09:11:57.611+00	2021-03-28 09:11:57.611+00
5805	1	134	3	2021-03-28 09:12:04.244+00	2021-03-28 09:12:04.244+00
5806	1	134	4	2021-03-28 09:12:07.587+00	2021-03-28 09:12:07.587+00
5807	1	134	5	2021-03-28 09:12:11.178+00	2021-03-28 09:12:11.178+00
5808	1	134	6	2021-03-28 09:12:14.41+00	2021-03-28 09:12:14.41+00
5809	1	134	7	2021-03-28 09:12:18.45+00	2021-03-28 09:12:18.45+00
5810	1	134	8	2021-03-28 09:12:22.093+00	2021-03-28 09:12:22.093+00
5811	1	134	9	2021-03-28 09:12:29.789+00	2021-03-28 09:12:29.789+00
5812	1	134	10	2021-03-28 09:12:46.331+00	2021-03-28 09:12:46.331+00
5813	1	134	11	2021-03-28 09:12:56.285+00	2021-03-28 09:12:56.285+00
5814	1	134	12	2021-03-28 09:13:01.141+00	2021-03-28 09:13:01.141+00
5815	1	134	13	2021-03-28 09:13:05.369+00	2021-03-28 09:13:05.369+00
5816	1	134	14	2021-03-28 09:13:08.491+00	2021-03-28 09:13:08.491+00
5817	1	134	15	2021-03-28 09:13:11.626+00	2021-03-28 09:13:11.626+00
5818	1	134	16	2021-03-28 09:13:14.701+00	2021-03-28 09:13:14.701+00
5819	1	134	17	2021-03-28 09:13:19.257+00	2021-03-28 09:13:19.257+00
5820	1	134	18	2021-03-28 09:13:22.964+00	2021-03-28 09:13:22.964+00
5821	1	134	19	2021-03-28 09:13:33.897+00	2021-03-28 09:13:33.897+00
5822	1	134	20	2021-03-28 09:13:36.167+00	2021-03-28 09:13:36.167+00
5823	1	134	21	2021-03-28 09:13:39.161+00	2021-03-28 09:13:39.161+00
5824	1	134	22	2021-03-28 09:13:43.523+00	2021-03-28 09:13:43.523+00
5825	1	134	23	2021-03-28 09:13:48.834+00	2021-03-28 09:13:48.834+00
5826	1	134	24	2021-03-28 09:13:52.71+00	2021-03-28 09:13:52.71+00
5827	1	134	25	2021-03-28 09:14:00.106+00	2021-03-28 09:14:00.106+00
5828	1	134	26	2021-03-28 09:14:03.102+00	2021-03-28 09:14:03.102+00
5829	1	134	27	2021-03-28 09:14:10.807+00	2021-03-28 09:14:10.807+00
5830	1	134	28	2021-03-28 09:14:13.382+00	2021-03-28 09:14:13.382+00
5831	1	134	29	2021-03-28 09:14:16.157+00	2021-03-28 09:14:16.157+00
5832	1	134	30	2021-03-28 09:14:18.703+00	2021-03-28 09:14:18.703+00
5833	1	134	31	2021-03-28 09:14:21.032+00	2021-03-28 09:14:21.032+00
5834	1	134	32	2021-03-28 09:14:24.153+00	2021-03-28 09:14:24.153+00
5835	1	134	33	2021-03-28 09:14:28.196+00	2021-03-28 09:14:28.196+00
5836	1	134	34	2021-03-28 09:14:30.911+00	2021-03-28 09:14:30.911+00
5837	1	134	35	2021-03-28 09:14:33.632+00	2021-03-28 09:14:33.632+00
5838	1	134	36	2021-03-28 09:14:36.583+00	2021-03-28 09:14:36.583+00
5839	100	137	332	2021-04-02 00:24:05.629+00	2021-04-02 00:24:05.629+00
5840	1	137	3	2021-04-02 00:24:11.655+00	2021-04-02 00:24:11.655+00
5841	0	137	4	2021-04-02 00:24:15.164+00	2021-04-02 00:24:15.164+00
5842	1	137	5	2021-04-02 00:24:19.957+00	2021-04-02 00:24:19.957+00
5843	0	137	6	2021-04-02 00:24:23.102+00	2021-04-02 00:24:23.102+00
5844	0	137	7	2021-04-02 00:24:26.326+00	2021-04-02 00:24:26.326+00
5845	0	137	8	2021-04-02 00:24:29.131+00	2021-04-02 00:24:29.131+00
5846	0	137	9	2021-04-02 00:24:32.193+00	2021-04-02 00:24:32.193+00
5847	0	137	10	2021-04-02 00:24:35.59+00	2021-04-02 00:24:35.59+00
5848	1	137	11	2021-04-02 00:24:39.009+00	2021-04-02 00:24:39.009+00
5849	1	137	12	2021-04-02 00:24:42.119+00	2021-04-02 00:24:42.119+00
5850	0	137	13	2021-04-02 00:24:45.569+00	2021-04-02 00:24:45.569+00
5851	1	137	14	2021-04-02 00:24:48.903+00	2021-04-02 00:24:48.903+00
5852	1	137	15	2021-04-02 00:24:51.999+00	2021-04-02 00:24:51.999+00
5853	0	137	16	2021-04-02 00:24:55.514+00	2021-04-02 00:24:55.514+00
5854	0	137	17	2021-04-02 00:24:59.057+00	2021-04-02 00:24:59.057+00
5855	0	137	18	2021-04-02 00:25:02.17+00	2021-04-02 00:25:02.17+00
5856	4	137	19	2021-04-02 00:25:07.721+00	2021-04-02 00:25:07.721+00
5857	3	137	20	2021-04-02 00:25:10.843+00	2021-04-02 00:25:10.843+00
5858	1	137	21	2021-04-02 00:25:13.969+00	2021-04-02 00:25:13.969+00
5859	4	137	22	2021-04-02 00:25:16.775+00	2021-04-02 00:25:16.775+00
5860	2	137	23	2021-04-02 00:25:19.585+00	2021-04-02 00:25:19.585+00
5861	3	137	24	2021-04-02 00:25:22.342+00	2021-04-02 00:25:22.342+00
5862	4	137	25	2021-04-02 00:25:25.256+00	2021-04-02 00:25:25.256+00
5863	2	137	26	2021-04-02 00:25:27.971+00	2021-04-02 00:25:27.971+00
5864	3	137	27	2021-04-02 00:25:30.633+00	2021-04-02 00:25:30.633+00
5865	4	137	28	2021-04-02 00:25:33.566+00	2021-04-02 00:25:33.566+00
5866	2	137	29	2021-04-02 00:25:36.175+00	2021-04-02 00:25:36.175+00
5867	2	137	30	2021-04-02 00:25:38.829+00	2021-04-02 00:25:38.829+00
5868	1	137	31	2021-04-02 00:25:43.086+00	2021-04-02 00:25:43.086+00
5869	3	137	32	2021-04-02 00:25:45.566+00	2021-04-02 00:25:45.566+00
5870	4	137	33	2021-04-02 00:25:48.045+00	2021-04-02 00:25:48.045+00
5871	3	137	34	2021-04-02 00:25:50.563+00	2021-04-02 00:25:50.563+00
5872	4	137	35	2021-04-02 00:25:55.831+00	2021-04-02 00:25:55.831+00
5873	4	137	35	2021-04-02 00:25:55.831+00	2021-04-02 00:25:55.831+00
5874	2	137	36	2021-04-02 00:25:58.495+00	2021-04-02 00:25:58.495+00
5875	2	151	286	2021-04-09 19:31:04.424+00	2021-04-09 19:31:04.424+00
\.


--
-- Data for Name: respostaschamados; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.respostaschamados (id, usuario_id, chamado_id, mensagem, data, lido, created_at, updated_at) FROM stdin;
1	1	1	Dúvidas	27/10/2020, às 17:34	t	2020-10-27 17:34:02.163+00	2020-10-27 17:36:43.884+00
2	1	1	Dúvidas	27/10/2020, às 17:34	t	2020-10-27 17:34:02.164+00	2020-10-27 17:36:43.885+00
3	1	1	Dúvidas	27/10/2020, às 17:34	t	2020-10-27 17:34:02.386+00	2020-10-27 17:36:43.885+00
4	1	1	Dúvidas	27/10/2020, às 17:34	t	2020-10-27 17:34:02.542+00	2020-10-27 17:36:43.885+00
5	1	1	Dúvidas	27/10/2020, às 17:34	t	2020-10-27 17:34:02.634+00	2020-10-27 17:36:43.885+00
6	1	1	Dúvidas	27/10/2020, às 17:34	t	2020-10-27 17:34:02.674+00	2020-10-27 17:36:43.962+00
7	4	1	Sobre a dúvida 1, você... 	27/10/2020, às 17:37	t	2020-10-27 17:37:33.897+00	2020-10-27 17:37:39.319+00
8	1	1	não estou entendendo.	27/10/2020, às 17:38	t	2020-10-27 17:38:12.967+00	2020-10-27 17:38:14.401+00
9	1	1	não estou entendendo.	27/10/2020, às 17:38	t	2020-10-27 17:38:13.19+00	2020-10-27 17:38:14.442+00
10	1	1	não estou entendendo.	27/10/2020, às 17:38	t	2020-10-27 17:38:17.944+00	2020-10-27 17:38:18.381+00
11	1	1	não estou entendendo 2.	27/10/2020, às 17:39	f	2020-10-27 17:39:33.21+00	2020-10-27 17:39:33.21+00
\.


--
-- Data for Name: testes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.testes (id, numero, plm, pcr, pcm, horas, finalizado, nivel_id, prova_id, usuario_id, created_at, updated_at) FROM stdin;
7	0	436	70	305	6	f	2	1	1	2020-10-20 01:21:32.234+00	2020-10-20 01:21:32.234+00
8	0	74	50	37	52	f	2	2	5	2020-10-27 16:14:48.941+00	2020-10-27 16:14:48.941+00
9	1	500	50	250	7.7	f	4	2	5	2020-10-27 17:21:50.352+00	2020-10-27 17:21:50.352+00
10	0	1677	80	1342	1	f	2	3	1	2021-01-24 13:38:54.135+00	2021-01-24 13:38:54.135+00
11	0	27	60	16	121	f	2	5	7	2021-02-01 21:05:18.655+00	2021-02-01 21:05:18.655+00
12	0	70	60	42	46	f	2	4	6	2021-02-02 14:02:24.584+00	2021-02-02 14:02:24.584+00
13	1	500	50	250	7.7	f	4	5	7	2021-02-02 17:27:42.751+00	2021-02-02 17:27:42.751+00
14	2	550	60	330	5.9	f	4	5	7	2021-02-02 17:54:48.016+00	2021-02-02 17:54:48.016+00
15	3	600	10	60	32.2	f	4	5	7	2021-02-02 18:10:00.593+00	2021-02-02 18:10:00.593+00
16	4	650	0	0	Infinity	f	4	5	7	2021-02-02 18:23:28.9+00	2021-02-02 18:23:28.9+00
17	5	700	70	490	3.9	f	4	5	7	2021-02-02 18:31:53.277+00	2021-02-02 18:31:53.277+00
18	1	500	0	0	Infinity	f	4	3	1	2021-02-14 03:27:17.166+00	2021-02-14 03:27:17.166+00
19	0	145	80	116	17	f	2	8	1	2021-02-16 04:20:09.752+00	2021-02-16 04:20:09.752+00
20	0	119	100	119	16	f	2	10	1	2021-02-16 05:07:10.998+00	2021-02-16 05:07:10.998+00
21	0	2096	90	1886	1	f	2	12	1	2021-02-17 07:35:21.627+00	2021-02-17 07:35:21.627+00
22	10	950	80	760	2.5	f	4	13	1	2021-02-19 16:25:01.121+00	2021-02-19 16:25:01.121+00
23	9	900	30	270	7.2	f	4	13	1	2021-02-19 16:38:11.3+00	2021-02-19 16:38:11.3+00
24	1	500	60	300	6.4	f	4	11	9	2021-03-04 15:28:25.55+00	2021-03-04 15:28:25.55+00
25	2	550	70	385	5	f	4	11	9	2021-03-04 15:45:30.662+00	2021-03-04 15:45:30.662+00
26	3	600	50	300	6.4	f	4	11	9	2021-03-04 15:56:14.041+00	2021-03-04 15:56:14.041+00
27	4	650	80	520	3.7	f	4	11	9	2021-03-04 16:02:11.353+00	2021-03-04 16:02:11.353+00
28	5	700	50	350	5.5	f	4	11	9	2021-03-04 16:07:09.544+00	2021-03-04 16:07:09.544+00
29	0	466	80	373	5	f	2	13	1	2021-03-05 14:22:45.79+00	2021-03-05 14:22:45.79+00
30	7	800	20	160	12.1	f	4	13	1	2021-03-06 00:19:58.977+00	2021-03-06 00:19:58.977+00
31	1	500	70	350	5.5	f	4	15	9	2021-03-08 19:39:31.014+00	2021-03-08 19:39:31.014+00
32	2	550	50	275	7	f	4	15	9	2021-03-08 19:50:36.725+00	2021-03-08 19:50:36.725+00
33	3	600	60	360	5.4	f	4	15	9	2021-03-08 19:59:50.601+00	2021-03-08 19:59:50.601+00
34	0	21	60	13	149	f	2	17	11	2021-03-10 14:03:50.62+00	2021-03-10 14:03:50.62+00
35	0	101	60	61	32	f	2	18	12	2021-03-10 14:41:34.758+00	2021-03-10 14:41:34.758+00
36	1	500	70	350	5.5	f	4	19	12	2021-03-10 15:42:47.944+00	2021-03-10 15:42:47.944+00
37	2	550	50	275	7	f	4	20	12	2021-03-10 16:04:49.868+00	2021-03-10 16:04:49.868+00
38	3	600	60	360	5.4	f	4	20	12	2021-03-10 16:11:16.091+00	2021-03-10 16:11:16.091+00
39	4	650	50	325	5.9	f	4	20	12	2021-03-10 16:19:41.876+00	2021-03-10 16:19:41.876+00
40	5	700	60	420	4.6	f	4	20	12	2021-03-10 16:26:19.686+00	2021-03-10 16:26:19.686+00
41	6	750	60	450	4.3	f	4	21	12	2021-03-10 16:43:05.952+00	2021-03-10 16:43:05.952+00
42	7	800	80	640	3	f	4	21	12	2021-03-10 16:57:10.868+00	2021-03-10 16:57:10.868+00
43	8	850	50	425	4.5	f	4	21	12	2021-03-10 17:00:07.622+00	2021-03-10 17:00:07.622+00
44	9	900	60	540	3.6	f	4	21	12	2021-03-10 17:03:54.304+00	2021-03-10 17:03:54.304+00
45	10	950	80	760	2.5	f	4	21	12	2021-03-10 17:08:07.68+00	2021-03-10 17:08:07.68+00
46	10	950	30	285	6.8	f	4	16	1	2021-03-17 10:50:43.408+00	2021-03-17 10:50:43.408+00
47	9	900	40	360	5.4	f	4	16	1	2021-03-17 11:05:07.77+00	2021-03-17 11:05:07.77+00
48	9	900	40	360	5.4	f	4	16	1	2021-03-17 11:05:07.773+00	2021-03-17 11:05:07.773+00
49	1	500	50	250	7.7	f	4	23	13	2021-03-18 12:34:24.035+00	2021-03-18 12:34:24.035+00
50	2	550	60	330	5.9	f	4	23	13	2021-03-18 12:47:18.078+00	2021-03-18 12:47:18.078+00
51	3	600	30	180	10.7	f	4	23	13	2021-03-18 12:57:37.261+00	2021-03-18 12:57:37.261+00
52	4	650	50	325	5.9	f	4	23	13	2021-03-18 13:08:06.409+00	2021-03-18 13:08:06.409+00
53	5	700	60	420	4.6	f	4	23	13	2021-03-18 13:14:20.456+00	2021-03-18 13:14:20.456+00
54	0	5	60	3	644	f	2	23	13	2021-03-18 13:31:35.624+00	2021-03-18 13:31:35.624+00
153	13	1100	10	110	17.6	f	4	32	17	2021-03-23 06:31:50.261+00	2021-03-23 06:31:50.261+00
159	20	1450	20	290	6.7	f	4	32	17	2021-03-23 07:35:18.01+00	2021-03-23 07:35:18.01+00
161	20	1450	20	290	6.7	f	4	25	1	2021-03-23 08:29:29.698+00	2021-03-23 08:29:29.698+00
163	12	1050	60	630	3.1	f	4	35	18	2021-03-23 16:08:07.94+00	2021-03-23 16:08:07.94+00
65	5	700	40	280	6.9	f	4	16	1	2021-03-18 22:12:03.738+00	2021-03-18 22:12:03.738+00
66	9	900	40	360	5.4	f	4	24	1	2021-03-19 01:08:30.211+00	2021-03-19 01:08:30.211+00
165	1	500	60	300	6.4	f	4	36	19	2021-03-25 02:47:56.168+00	2021-03-25 02:47:56.168+00
167	3	600	30	180	10.7	f	4	36	19	2021-03-25 03:05:05.188+00	2021-03-25 03:05:05.188+00
169	5	700	40	280	6.9	f	4	36	19	2021-03-25 03:07:56.325+00	2021-03-25 03:07:56.325+00
171	7	800	20	160	12.1	f	4	36	19	2021-03-25 03:31:27.019+00	2021-03-25 03:31:27.019+00
173	9	900	40	360	5.4	f	4	36	19	2021-03-25 03:35:23.508+00	2021-03-25 03:35:23.508+00
72	5	700	40	280	6.9	f	4	25	1	2021-03-19 04:59:37.95+00	2021-03-19 04:59:37.95+00
73	0	41	60	25	77	f	2	26	14	2021-03-19 14:09:15.202+00	2021-03-19 14:09:15.202+00
74	1	500	60	300	6.4	f	4	26	14	2021-03-19 14:34:04.692+00	2021-03-19 14:34:04.692+00
75	2	550	50	275	7	f	4	26	14	2021-03-19 14:44:37.424+00	2021-03-19 14:44:37.424+00
76	3	600	70	420	4.6	f	4	26	14	2021-03-19 14:53:55.985+00	2021-03-19 14:53:55.985+00
77	0	1	70	1	1933	f	2	27	15	2021-03-19 15:18:57.153+00	2021-03-19 15:18:57.153+00
78	5	700	60	420	4.6	f	4	26	14	2021-03-19 15:25:04.04+00	2021-03-19 15:25:04.04+00
79	6	750	70	525	3.7	f	4	26	14	2021-03-19 15:57:26.001+00	2021-03-19 15:57:26.001+00
80	7	800	60	480	4	f	4	26	14	2021-03-19 16:10:35.272+00	2021-03-19 16:10:35.272+00
81	8	850	50	425	4.5	f	4	26	14	2021-03-19 16:20:17.545+00	2021-03-19 16:20:17.545+00
82	9	900	60	540	3.6	f	4	26	14	2021-03-19 16:22:48.948+00	2021-03-19 16:22:48.948+00
83	10	950	50	475	4.1	f	4	26	14	2021-03-19 16:31:40.174+00	2021-03-19 16:31:40.174+00
154	14	1150	20	230	8.4	f	4	32	17	2021-03-23 06:38:50.477+00	2021-03-23 06:38:50.477+00
156	11	1000	10	100	19.3	f	4	32	17	2021-03-23 06:46:43.54+00	2021-03-23 06:46:43.54+00
158	15	1200	20	240	8.1	f	4	32	17	2021-03-23 07:26:28.251+00	2021-03-23 07:26:28.251+00
160	19	1400	20	280	6.9	f	4	32	17	2021-03-23 07:37:04.243+00	2021-03-23 07:37:04.243+00
162	11	1000	0	0	Infinity	f	4	35	18	2021-03-23 16:04:18.645+00	2021-03-23 16:04:18.645+00
164	0	1118	70	783	2	f	2	36	19	2021-03-25 01:39:11.757+00	2021-03-25 01:39:11.757+00
166	2	550	50	275	7	f	4	36	19	2021-03-25 03:01:55.147+00	2021-03-25 03:01:55.147+00
168	4	650	40	260	7.4	f	4	36	19	2021-03-25 03:06:51.816+00	2021-03-25 03:06:51.816+00
170	6	750	30	225	8.6	f	4	36	19	2021-03-25 03:30:13.468+00	2021-03-25 03:30:13.468+00
172	8	850	0	0	Infinity	f	4	36	19	2021-03-25 03:33:33.63+00	2021-03-25 03:33:33.63+00
174	10	950	30	285	6.8	f	4	36	19	2021-03-25 03:36:31.557+00	2021-03-25 03:36:31.557+00
175	11	1000	30	300	6.4	f	4	36	19	2021-03-25 03:38:41.047+00	2021-03-25 03:38:41.047+00
176	12	1050	20	210	9.2	f	4	36	19	2021-03-25 03:39:29.681+00	2021-03-25 03:39:29.681+00
177	13	1100	10	110	17.6	f	4	36	19	2021-03-25 03:40:15.249+00	2021-03-25 03:40:15.249+00
105	0	3354	70	2348	1	f	2	30	16	2021-03-19 19:52:50.146+00	2021-03-19 19:52:50.146+00
178	14	1150	20	230	8.4	f	4	36	19	2021-03-25 03:41:16.87+00	2021-03-25 03:41:16.87+00
179	15	1200	20	240	8.1	f	4	36	19	2021-03-25 03:42:07.504+00	2021-03-25 03:42:07.504+00
180	16	1250	30	375	5.2	f	4	36	19	2021-03-25 03:44:04.558+00	2021-03-25 03:44:04.558+00
181	17	1300	30	390	5	f	4	36	19	2021-03-25 03:46:39.097+00	2021-03-25 03:46:39.097+00
182	18	1350	40	540	3.6	f	4	36	19	2021-03-25 03:47:28.876+00	2021-03-25 03:47:28.876+00
183	19	1400	20	280	6.9	f	4	36	19	2021-03-25 03:48:19.7+00	2021-03-25 03:48:19.7+00
184	20	1450	20	290	6.7	f	4	36	19	2021-03-25 03:49:38.923+00	2021-03-25 03:49:38.923+00
185	1	500	100	500	3.9	f	4	37	19	2021-03-25 05:37:41.585+00	2021-03-25 05:37:41.585+00
186	0	264	60	158	12	f	2	41	20	2021-03-25 07:26:05.495+00	2021-03-25 07:26:05.495+00
187	20	1450	20	290	6.7	f	4	41	20	2021-03-25 11:59:51.731+00	2021-03-25 11:59:51.731+00
188	0	86	60	52	37	f	2	43	22	2021-03-26 11:31:08.558+00	2021-03-26 11:31:08.558+00
189	1	500	0	0	Infinity	f	4	43	22	2021-03-26 13:29:42.266+00	2021-03-26 13:29:42.266+00
190	2	550	60	330	5.9	f	4	43	22	2021-03-26 13:46:43.87+00	2021-03-26 13:46:43.87+00
119	0	2396	80	1917	1	f	2	32	17	2021-03-23 03:06:14.47+00	2021-03-23 03:06:14.47+00
120	1	500	50	250	7.7	f	4	32	17	2021-03-23 04:14:21.922+00	2021-03-23 04:14:21.922+00
121	2	550	50	275	7	f	4	32	17	2021-03-23 04:34:09.158+00	2021-03-23 04:34:09.158+00
122	3	600	30	180	10.7	f	4	32	17	2021-03-23 04:36:06.843+00	2021-03-23 04:36:06.843+00
123	4	650	40	260	7.4	f	4	32	17	2021-03-23 04:37:22.069+00	2021-03-23 04:37:22.069+00
124	5	700	20	140	13.8	f	4	32	17	2021-03-23 04:38:43.44+00	2021-03-23 04:38:43.44+00
125	6	750	30	225	8.6	f	4	32	17	2021-03-23 04:50:22.741+00	2021-03-23 04:50:22.741+00
126	7	800	0	0	Infinity	f	4	32	17	2021-03-23 04:51:36.945+00	2021-03-23 04:51:36.945+00
127	8	850	0	0	Infinity	f	4	32	17	2021-03-23 04:52:43.217+00	2021-03-23 04:52:43.217+00
128	9	900	40	360	5.4	f	4	32	17	2021-03-23 05:16:42.422+00	2021-03-23 05:16:42.422+00
129	10	950	30	285	6.8	f	4	32	17	2021-03-23 05:18:05.317+00	2021-03-23 05:18:05.317+00
191	3	600	50	300	6.4	f	4	43	22	2021-03-26 14:15:46.244+00	2021-03-26 14:15:46.244+00
192	4	650	60	390	5	f	4	43	22	2021-03-26 14:23:06.829+00	2021-03-26 14:23:06.829+00
193	5	700	50	350	5.5	f	4	43	22	2021-03-26 14:28:19.032+00	2021-03-26 14:28:19.032+00
194	6	750	40	300	6.4	f	4	43	22	2021-03-26 15:20:24.557+00	2021-03-26 15:20:24.557+00
195	7	800	50	400	4.8	f	4	43	22	2021-03-26 15:26:19.905+00	2021-03-26 15:26:19.905+00
196	9	900	50	450	4.3	f	4	43	22	2021-03-26 15:29:23.312+00	2021-03-26 15:29:23.312+00
197	8	850	60	510	3.8	f	4	43	22	2021-03-26 15:32:20.203+00	2021-03-26 15:32:20.203+00
198	10	950	40	380	5.1	f	4	43	22	2021-03-26 15:37:15.977+00	2021-03-26 15:37:15.977+00
199	11	1000	50	500	3.9	f	4	43	22	2021-03-26 16:01:55.407+00	2021-03-26 16:01:55.407+00
200	12	1050	60	630	3.1	f	4	43	22	2021-03-26 16:06:29.969+00	2021-03-26 16:06:29.969+00
201	13	1100	40	440	4.4	f	4	43	22	2021-03-26 16:14:42.585+00	2021-03-26 16:14:42.585+00
202	14	1150	70	805	2.4	f	4	43	22	2021-03-26 16:19:46.893+00	2021-03-26 16:19:46.893+00
203	15	1200	50	600	3.2	f	4	43	22	2021-03-26 16:24:39.777+00	2021-03-26 16:24:39.777+00
204	16	1250	40	500	3.9	f	4	43	22	2021-03-26 16:35:57.439+00	2021-03-26 16:35:57.439+00
205	17	1300	50	650	3	f	4	43	22	2021-03-26 16:39:03.219+00	2021-03-26 16:39:03.219+00
206	18	1350	50	675	2.9	f	4	43	22	2021-03-26 16:52:55.495+00	2021-03-26 16:52:55.495+00
207	19	1400	60	840	2.3	f	4	43	22	2021-03-26 17:02:27.298+00	2021-03-26 17:02:27.298+00
208	20	1450	40	580	3.3	f	4	43	22	2021-03-26 17:08:28.864+00	2021-03-26 17:08:28.864+00
209	1	500	50	250	7.7	f	4	44	24	2021-03-28 09:31:08.78+00	2021-03-28 09:31:08.78+00
210	20	1450	20	290	6.7	f	4	44	24	2021-03-28 10:06:05.277+00	2021-03-28 10:06:05.277+00
211	10	950	30	285	6.8	f	4	44	24	2021-03-28 10:15:36.393+00	2021-03-28 10:15:36.393+00
212	0	67	60	40	48	f	2	46	30	2021-04-01 23:02:50.575+00	2021-04-01 23:02:50.575+00
213	0	86	60	52	37	f	2	47	31	2021-04-01 23:13:45.538+00	2021-04-01 23:13:45.538+00
214	1	500	50	250	7.7	f	4	47	31	2021-04-01 23:28:29.112+00	2021-04-01 23:28:29.112+00
215	2	550	60	330	5.9	f	4	47	31	2021-04-01 23:40:40.364+00	2021-04-01 23:40:40.364+00
216	3	600	50	300	6.4	f	4	47	31	2021-04-01 23:46:15.939+00	2021-04-01 23:46:15.939+00
217	4	650	60	390	5	f	4	47	31	2021-04-01 23:51:41.863+00	2021-04-01 23:51:41.863+00
218	5	700	70	490	3.9	f	4	47	31	2021-04-01 23:55:18.745+00	2021-04-01 23:55:18.745+00
219	6	750	60	450	4.3	f	4	47	31	2021-04-03 13:22:30.843+00	2021-04-03 13:22:30.843+00
220	7	800	50	400	4.8	f	4	47	31	2021-04-03 13:27:14.998+00	2021-04-03 13:27:14.998+00
221	8	850	40	340	5.7	f	4	47	31	2021-04-03 13:31:03.672+00	2021-04-03 13:31:03.672+00
222	9	900	70	630	3.1	f	4	47	31	2021-04-03 13:33:45.342+00	2021-04-03 13:33:45.342+00
223	10	950	60	570	3.4	f	4	47	31	2021-04-03 13:37:29.059+00	2021-04-03 13:37:29.059+00
224	11	1000	40	400	4.8	f	4	47	31	2021-04-03 14:16:57.846+00	2021-04-03 14:16:57.846+00
225	12	1050	60	630	3.1	f	4	47	31	2021-04-03 14:20:03.461+00	2021-04-03 14:20:03.461+00
226	13	1100	50	550	3.5	f	4	47	31	2021-04-03 14:24:47.438+00	2021-04-03 14:24:47.438+00
227	14	1150	70	805	2.4	f	4	47	31	2021-04-03 14:28:37.981+00	2021-04-03 14:28:37.981+00
228	15	1200	10	120	16.1	f	4	47	31	2021-04-03 14:32:47.336+00	2021-04-03 14:32:47.336+00
229	16	1250	70	875	2.2	f	4	47	31	2021-04-03 14:40:15.383+00	2021-04-03 14:40:15.383+00
230	17	1300	40	520	3.7	f	4	47	31	2021-04-03 14:44:01.299+00	2021-04-03 14:44:01.299+00
231	18	1350	50	675	2.9	f	4	47	31	2021-04-03 14:50:12.672+00	2021-04-03 14:50:12.672+00
232	19	1400	60	840	2.3	f	4	47	31	2021-04-03 14:52:59.113+00	2021-04-03 14:52:59.113+00
233	20	1450	50	725	2.7	f	4	47	31	2021-04-03 14:56:58.939+00	2021-04-03 14:56:58.939+00
234	2	550	100	550	3.5	f	4	48	32	2021-04-09 06:31:02.564+00	2021-04-09 06:31:02.564+00
235	0	898	60	539	4	f	2	48	32	2021-04-09 06:40:20.632+00	2021-04-09 06:40:20.632+00
236	0	110	60	66	29	f	2	49	33	2021-04-09 19:19:09.616+00	2021-04-09 19:19:09.616+00
237	1	500	50	250	7.7	f	4	49	33	2021-04-09 20:12:37.795+00	2021-04-09 20:12:37.795+00
238	2	550	70	385	5	f	4	49	33	2021-04-09 20:27:22.753+00	2021-04-09 20:27:22.753+00
239	3	600	60	360	5.4	f	4	49	33	2021-04-09 20:32:55.41+00	2021-04-09 20:32:55.41+00
240	4	650	50	325	5.9	f	4	49	33	2021-04-09 20:38:30.619+00	2021-04-09 20:38:30.619+00
241	5	700	60	420	4.6	f	4	49	33	2021-04-09 20:43:13.994+00	2021-04-09 20:43:13.994+00
242	6	750	80	600	3.2	f	4	49	33	2021-04-09 20:51:25.894+00	2021-04-09 20:51:25.894+00
243	7	800	10	80	24.2	f	4	49	33	2021-04-09 20:57:48.212+00	2021-04-09 20:57:48.212+00
244	8	850	70	595	3.2	f	4	49	33	2021-04-09 21:03:33.889+00	2021-04-09 21:03:33.889+00
245	9	900	60	540	3.6	f	4	49	33	2021-04-09 21:07:53.526+00	2021-04-09 21:07:53.526+00
246	10	950	50	475	4.1	f	4	49	33	2021-04-09 21:12:46.302+00	2021-04-09 21:12:46.302+00
247	11	1000	60	600	3.2	f	4	49	33	2021-04-09 21:22:45.088+00	2021-04-09 21:22:45.088+00
248	12	1050	50	525	3.7	f	4	49	33	2021-04-09 21:55:13.419+00	2021-04-09 21:55:13.419+00
249	13	1100	70	770	2.5	f	4	49	33	2021-04-09 22:02:14.15+00	2021-04-09 22:02:14.15+00
250	14	1150	40	460	4.2	f	4	49	33	2021-04-09 22:10:07.79+00	2021-04-09 22:10:07.79+00
251	15	1200	70	840	2.3	f	4	49	33	2021-04-09 22:14:38.629+00	2021-04-09 22:14:38.629+00
252	16	1250	60	750	2.6	f	4	49	33	2021-04-09 22:23:44.231+00	2021-04-09 22:23:44.231+00
253	17	1300	40	520	3.7	f	4	49	33	2021-04-09 22:29:02.15+00	2021-04-09 22:29:02.15+00
254	18	1350	50	675	2.9	f	4	49	33	2021-04-09 22:39:57.722+00	2021-04-09 22:39:57.722+00
255	19	1400	80	1120	1.7	f	4	49	33	2021-04-09 22:44:06.347+00	2021-04-09 22:44:06.347+00
256	20	1450	60	870	2.2	f	4	49	33	2021-04-09 22:49:50.41+00	2021-04-09 22:49:50.41+00
257	6	750	40	300	6.4	f	4	50	33	2021-04-09 22:57:41.288+00	2021-04-09 22:57:41.288+00
258	7	800	70	560	3.5	f	4	50	33	2021-04-09 23:01:57.176+00	2021-04-09 23:01:57.176+00
259	8	850	50	425	4.5	f	4	50	33	2021-04-09 23:09:01.166+00	2021-04-09 23:09:01.166+00
260	9	900	80	720	2.7	f	4	50	33	2021-04-09 23:12:14.859+00	2021-04-09 23:12:14.859+00
261	10	950	30	285	6.8	f	4	50	33	2021-04-09 23:16:25.052+00	2021-04-09 23:16:25.052+00
262	0	110	70	77	25	f	2	52	35	2021-04-12 16:42:26.507+00	2021-04-12 16:42:26.507+00
263	1	500	60	300	6.4	f	4	52	35	2021-04-12 16:58:01.716+00	2021-04-12 16:58:01.716+00
264	2	550	50	275	7	f	4	52	35	2021-04-12 17:59:50.4+00	2021-04-12 17:59:50.4+00
265	3	600	70	420	4.6	f	4	52	35	2021-04-12 18:07:15.686+00	2021-04-12 18:07:15.686+00
266	4	650	60	390	5	f	4	52	35	2021-04-12 18:15:16.952+00	2021-04-12 18:15:16.952+00
267	5	700	50	350	5.5	f	4	52	35	2021-04-12 18:20:18.601+00	2021-04-12 18:20:18.601+00
268	6	750	50	375	5.2	f	4	52	35	2021-04-12 18:29:38.008+00	2021-04-12 18:29:38.008+00
269	7	800	40	320	6	f	4	52	35	2021-04-12 18:34:38.45+00	2021-04-12 18:34:38.45+00
270	8	850	70	595	3.2	f	4	52	35	2021-04-12 18:37:44.781+00	2021-04-12 18:37:44.781+00
271	9	900	60	540	3.6	f	4	52	35	2021-04-12 18:41:24.334+00	2021-04-12 18:41:24.334+00
272	10	950	50	475	4.1	f	4	52	35	2021-04-12 18:45:28.593+00	2021-04-12 18:45:28.593+00
273	11	1000	60	600	3.2	f	4	52	35	2021-04-13 15:31:12.629+00	2021-04-13 15:31:12.629+00
274	12	1050	40	420	4.6	f	4	52	35	2021-04-13 15:35:27.749+00	2021-04-13 15:35:27.749+00
275	13	1100	50	550	3.5	f	4	52	35	2021-04-13 15:40:48.01+00	2021-04-13 15:40:48.01+00
276	14	1150	40	460	4.2	f	4	52	35	2021-04-13 15:46:35.391+00	2021-04-13 15:46:35.391+00
277	15	1200	70	840	2.3	f	4	52	35	2021-04-13 15:50:44.623+00	2021-04-13 15:50:44.623+00
278	16	1250	60	750	2.6	f	4	52	35	2021-04-13 15:59:57.367+00	2021-04-13 15:59:57.367+00
279	17	1300	30	390	5	f	4	52	35	2021-04-13 16:04:19.1+00	2021-04-13 16:04:19.1+00
280	18	1350	80	1080	1.8	f	4	52	35	2021-04-13 16:10:40.109+00	2021-04-13 16:10:40.109+00
281	19	1400	80	1120	1.7	f	4	52	35	2021-04-13 16:13:17.92+00	2021-04-13 16:13:17.92+00
282	20	1450	60	870	2.2	f	4	52	35	2021-04-13 16:18:02.612+00	2021-04-13 16:18:02.612+00
283	1	500	50	250	7.7	f	4	48	32	2021-04-19 05:01:59.615+00	2021-04-19 05:01:59.615+00
284	3	600	30	180	10.7	f	4	48	32	2021-04-19 05:03:06.563+00	2021-04-19 05:03:06.563+00
285	4	650	40	260	7.4	f	4	48	32	2021-04-19 05:04:19.778+00	2021-04-19 05:04:19.778+00
286	5	700	40	280	6.9	f	4	48	32	2021-04-19 05:05:17.609+00	2021-04-19 05:05:17.609+00
287	6	750	30	225	8.6	f	4	48	32	2021-04-19 05:06:51.811+00	2021-04-19 05:06:51.811+00
288	7	800	20	160	12.1	f	4	48	32	2021-04-19 05:07:52.839+00	2021-04-19 05:07:52.839+00
289	8	850	0	0	Infinity	f	4	48	32	2021-04-19 05:15:49.244+00	2021-04-19 05:15:49.244+00
290	9	900	10	90	21.5	f	4	48	32	2021-04-19 05:16:28.903+00	2021-04-19 05:16:28.903+00
291	10	950	30	285	6.8	f	4	48	32	2021-04-19 05:17:08.471+00	2021-04-19 05:17:08.471+00
292	11	1000	20	200	9.7	f	4	48	32	2021-04-19 05:21:16.286+00	2021-04-19 05:21:16.286+00
293	12	1050	0	0	Infinity	f	4	48	32	2021-04-19 05:22:35.661+00	2021-04-19 05:22:35.661+00
294	13	1100	10	110	17.6	f	4	48	32	2021-04-19 05:23:19.195+00	2021-04-19 05:23:19.195+00
295	14	1150	10	115	16.8	f	4	48	32	2021-04-19 05:24:00.733+00	2021-04-19 05:24:00.733+00
296	15	1200	20	240	8.1	f	4	48	32	2021-04-19 05:24:35.05+00	2021-04-19 05:24:35.05+00
297	16	1250	10	125	15.5	f	4	48	32	2021-04-19 05:25:14.028+00	2021-04-19 05:25:14.028+00
298	17	1300	10	130	14.9	f	4	48	32	2021-04-19 05:25:52.186+00	2021-04-19 05:25:52.186+00
299	18	1350	20	270	7.2	f	4	48	32	2021-04-19 05:26:32.292+00	2021-04-19 05:26:32.292+00
300	19	1400	10	140	13.8	f	4	48	32	2021-04-19 05:27:13.352+00	2021-04-19 05:27:13.352+00
301	20	1450	10	145	13.3	f	4	48	32	2021-04-19 05:27:57.181+00	2021-04-19 05:27:57.181+00
\.


--
-- Data for Name: tipos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tipos (id, nome, created_at, updated_at) FROM stdin;
1	No monitor	2020-12-17 19:34:52.036+00	2020-12-17 19:34:52.036+00
2	Com timer	2020-12-21 15:43:04.911+00	2020-12-21 15:43:04.911+00
3	Repasses	2020-12-21 15:43:12.836+00	2020-12-21 15:43:12.836+00
\.


--
-- Data for Name: usuarios; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.usuarios (id, nome, email, password_hash, admin, created_at, updated_at) FROM stdin;
2	Auno	aluno@aluno.com	$2a$08$Rx.oxjBPS9.F61ZrX1.AneWP6LCAp1RtYJ.0hA66EMwrChzQ8GODK	f	2020-10-20 06:32:48.719+00	2020-10-20 06:32:48.719+00
3	Teste	teste@teste.com	$2a$08$pwjRxdZ/3uMQkOZITTgCe.dOn2xPmEBlknSlKQHiqmVlM5P30U/Vy	f	2020-10-20 06:33:01.578+00	2020-10-20 06:33:01.578+00
4	Alcides	admin@methodus.com	$2a$08$DUbxf.RnHp0rEZs4aGJodeZL.JwwlayZOIy4iiZNPskUhTNFg7a3a	t	2020-10-20 06:33:36.001+00	2020-10-20 06:38:36.883+00
5	mailto:admin@methodus.com	info@methodus.com.br	$2a$08$U.gu3YlsSQdCo1wANYbiReslP9F9bTvUSqSsZ7K9l5dWEmDX6m2MO	f	2020-10-27 16:04:44.393+00	2020-10-27 16:04:44.393+00
1	Alexandre Feio	alefeio@gmail.com	$2a$08$edTvX.G.snJH3WkgfYFZiej9wEPOftNrVthb3VotvqgU1XGM0X4pW	t	2020-10-17 06:47:05.794+00	2020-12-18 15:19:54.204+00
6	Alexandre Thiago	alexandrefpenha@gmail.com	$2a$08$/to8E8UaU/T8mJbjYka9u.7ODIQcuQQp9s6hNmnMCRZp74yzKpPv.	f	2021-01-07 17:44:37.319+00	2021-01-07 17:44:37.319+00
7	Alcides Schotten	alcidesschotten@methodus.com.br	$2a$08$uLyeylHCJTYF79fSXwezsOt5pSR7RvsyyqcqqL6Gk/STRkNwXWIgu	f	2021-01-13 17:00:19.325+00	2021-01-13 17:00:19.325+00
8	Geni	geni.po@terra.com.be	$2a$08$Tm3DkvIe6x/mfECuEMcwqeAXqaiM6RVEIZ9iQ7hIe8NOyZXvEtrx2	f	2021-01-17 17:17:52.605+00	2021-01-17 17:17:52.605+00
9	Alcides Schotten	contato@methodus.com.br	$2a$08$iaogU0gWB4E9WgtJHqVSueuBjyPKVHBz3h9IiciWWxIU1rJ2P/U8W	f	2021-02-16 18:22:05.25+00	2021-02-16 18:22:05.25+00
10	Alcides Schotten	alcides@methodus.com.br	$2a$08$hhWGaUBmnQNWNaZkYcf9lOoOh41YaHJqYJACsNY2Zhr9o8vUwoFBC	f	2021-02-17 12:25:14.465+00	2021-02-17 12:25:14.465+00
11	Geraldno	geraldino@methodus.com.br	$2a$08$.kCwQRnhCpI.2V2YddSGDOlGiD.NXTf6xoXsTgij9PHj/PRmNWrLC	f	2021-03-10 13:38:23.412+00	2021-03-10 13:38:23.412+00
12	Alcides Silva	silva@methodus.com.br	$2a$08$.FgB4zKsGxf1UVI1gaDxy.Gari2Dd3tA.aOG3LATkkcJRIgMCxLZ.	f	2021-03-10 14:35:29.708+00	2021-03-10 14:35:29.708+00
13	Alcides Geral	geral@methodus.com.br	$2a$08$i0/Svt0baNd.XNcDS/L.4OR5O4lNdOh.VsGkAbAFP6DSFSkIblK4.	f	2021-03-18 11:47:07.635+00	2021-03-18 11:47:07.635+00
14	Silva Schotten	silva.schotten@methodus.com.br	$2a$08$Sy81BZq0vOFodnsVh85TX.SsulLriGCTGuGONvtU5fPQSx0s5HvjS	f	2021-03-19 14:03:06.192+00	2021-03-19 14:03:06.192+00
15	Teste	teste@email.com	$2a$08$dnywrLOBifCL14lz.0CnruOuztyftr/9temk4tNbTVWkNz/C6ckyW	f	2021-03-19 15:16:37.937+00	2021-03-19 15:16:37.937+00
16	Novo Usuário	novousuario@email.com	$2a$08$fT5y23sfNu0TJsFdXXPgc.s0HS3oKL1dZgs7WnZ2p4jEsw1dcU/O.	f	2021-03-19 19:49:06.242+00	2021-03-19 19:49:06.242+00
17	Novo Usuário	novo@email.com	$2a$08$K6FYRUNYKvvLmjJz0TD.ZuMVOhgOTTaAjY/85wrT6NBZMrq47RsvO	f	2021-03-23 02:48:43.611+00	2021-03-23 02:48:43.611+00
18	schotten silva	schotten.silva@gmail.com	$2a$08$8aGOMkWemBH7hxeo9ztQcuYvLaE8r1TwcLooL7X4LHrPPpMoIzdT.	f	2021-03-23 15:28:40.753+00	2021-03-23 15:28:40.753+00
19	User1	user1@email.com	$2a$08$MfkYCGRZPDJnrUceTJLSBeIC8fUSMmc08zPwQ3yLfz/WqbM1cMuvW	f	2021-03-25 01:30:27.948+00	2021-03-25 01:30:27.948+00
20	User2	user2@email.com	$2a$08$5rrSby5EnTqj1R7fvUCNC.RXLyczDlV.UsS6X3jksNruSzsCxT8ha	f	2021-03-25 07:22:29.193+00	2021-03-25 07:22:29.193+00
21	Arcidio Silv	arcidio.silva@gmail.com	$2a$08$MVxSjPa2CcA8m/6HmlXVnu.3SqapdaLfLpjGQSu7Qv0hoVZ1Gy9RC	f	2021-03-26 11:05:53.015+00	2021-03-26 11:05:53.015+00
22	Arcidio Schotten	arcidio.schotten@gmail.com	$2a$08$nrVFPNyynK39vI9Qa.4eK.9ZWt9tKcsnmvx04q2DFTZM.jV0CbWna	f	2021-03-26 11:22:50.382+00	2021-03-26 11:22:50.382+00
23	Nilton Moraes Neto	nilton.moraes@bussoladoinvestidor.com	$2a$08$nAaLJz9VZIO5CG4jgvNj4eZe3GhGAE0Q2ukUO6RlB1hgP.w9/jcBa	f	2021-03-26 19:13:21.65+00	2021-03-26 19:13:21.65+00
24	test1	usertes1@email.com	$2a$08$BLvR.Ebh2g0cgrqrfZW32eJD/cEFs8.qbZTY8XGW3AQFCaxUBgiBC	f	2021-03-28 05:14:00.351+00	2021-03-28 05:14:00.351+00
25	Ale	alefeio2@gmail.com	$2a$08$ScBzN2Brsbew8k86CyeY.eVbX7yBaVTZfRSSjk7pUioTIT/PCXIFa	f	2021-03-29 19:34:09.815+00	2021-03-29 19:34:09.815+00
26	Novo Usuário	novousuario@gmail.com	$2a$08$RECCtk/VVK7jPMmHLmxl.eUGbRLbgGwUl4mY/RA9jpT4l3Otghv7y	f	2021-03-29 20:31:34.273+00	2021-03-29 20:31:34.273+00
27	New User	alefeiotetefdf@gmail.com	$2a$08$Tavjx7Ko74RamE8HZ0MpgOE6AK4OofGC6Q1fhywK4NtQq.PqaRJIO	f	2021-03-30 04:02:01.121+00	2021-03-30 04:02:01.121+00
28	Nilton	nilton.mmn@gmail.com	$2a$08$zX2HFMGy7GX.uy4Bn2r3yuFr4iQv.KwJKi0acQYYtNJe9wkkCE5Am	f	2021-03-30 18:30:01.045+00	2021-03-30 18:30:01.045+00
29	Alexandre	alefeion@gmail.com	$2a$08$mj468kQ71WR5n8ISg0D59ezRmbyZtSLoomzydOfuvZGK5NVRyItGW	f	2021-03-30 18:30:13.489+00	2021-03-30 18:30:13.489+00
30	Schotten Arcidio	schotten.arcidio@methodus.com.br	$2a$08$Fo3uKtlhFuW0x9O469PdPux5MLyv70L6KJfPDOvsAIA1hEOVsQB8O	f	2021-04-01 22:53:37.025+00	2021-04-01 22:53:37.025+00
31	Schotten Alcides	schotten.alcides@methodus.com.br	$2a$08$AV.tG1bm1okEXrxyYbVgkeaDL4KrMYUm85nCCREhXYz01kw9EavF2	f	2021-04-01 23:06:36.59+00	2021-04-01 23:06:36.59+00
32	New User	newuser@email.com	$2a$08$vpokao94J8dE9Q2s7nb./uXQnuuLGvtGV113.cE/aB9ukOMFNPF6G	f	2021-04-09 04:05:00.632+00	2021-04-09 04:05:00.632+00
33	Teste Final	testefinal.alcides@methodus.com.br	$2a$08$23rI6mcL4Xf3kCoh.cPoCONn3lFpH7jzXwpevOLd.q.DqSJmDeVEO	f	2021-04-09 19:08:51.265+00	2021-04-09 19:08:51.265+00
34	Avaliação Final	avaliacao.final@gmail.com	$2a$08$rBxK4sc2m2Ot5GbUFE2HpeR/5NJKWVj5x5FE4/mAv6pskNZZJcJ1e	f	2021-04-12 16:24:55.768+00	2021-04-12 16:24:55.768+00
35	Avaliação	avaliacao@gmail.com	$2a$08$ps3Dxp0gKLhZPTThI3/0meHvb5t11AUn1mrZReLE7dHwF1Nqt4REa	f	2021-04-12 16:32:12.821+00	2021-04-12 16:32:12.821+00
\.


--
-- Name: aulas_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.aulas_id_seq', 1, false);


--
-- Name: categoria_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.categoria_id_seq', 2, true);


--
-- Name: chamados_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.chamados_id_seq', 1, true);


--
-- Name: exercicios_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.exercicios_id_seq', 364, true);


--
-- Name: modulos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.modulos_id_seq', 4, true);


--
-- Name: niveis_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.niveis_id_seq', 4, true);


--
-- Name: provas2_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.provas2_id_seq', 1, false);


--
-- Name: provas2s_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.provas2s_id_seq', 151, true);


--
-- Name: provas3s_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.provas3s_id_seq', 1, false);


--
-- Name: provas_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.provas_id_seq', 61, true);


--
-- Name: resposta_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.resposta_id_seq', 5875, true);


--
-- Name: respostaschamados_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.respostaschamados_id_seq', 11, true);


--
-- Name: testes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.testes_id_seq', 301, true);


--
-- Name: tipos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tipos_id_seq', 3, true);


--
-- Name: usuarios_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.usuarios_id_seq', 35, true);


--
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- Name: aulas aulas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.aulas
    ADD CONSTRAINT aulas_pkey PRIMARY KEY (id);


--
-- Name: categoria categoria_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categoria
    ADD CONSTRAINT categoria_pkey PRIMARY KEY (id);


--
-- Name: chamados chamados_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chamados
    ADD CONSTRAINT chamados_pkey PRIMARY KEY (id);


--
-- Name: exercicios exercicios_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.exercicios
    ADD CONSTRAINT exercicios_pkey PRIMARY KEY (id);


--
-- Name: modulos modulos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.modulos
    ADD CONSTRAINT modulos_pkey PRIMARY KEY (id);


--
-- Name: niveis niveis_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.niveis
    ADD CONSTRAINT niveis_pkey PRIMARY KEY (id);


--
-- Name: provas2 provas2_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.provas2
    ADD CONSTRAINT provas2_pkey PRIMARY KEY (id);


--
-- Name: provas2s provas2s_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.provas2s
    ADD CONSTRAINT provas2s_pkey PRIMARY KEY (id);


--
-- Name: provas3s provas3s_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.provas3s
    ADD CONSTRAINT provas3s_pkey PRIMARY KEY (id);


--
-- Name: provas provas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.provas
    ADD CONSTRAINT provas_pkey PRIMARY KEY (id);


--
-- Name: resposta resposta_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.resposta
    ADD CONSTRAINT resposta_pkey PRIMARY KEY (id);


--
-- Name: respostaschamados respostaschamados_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.respostaschamados
    ADD CONSTRAINT respostaschamados_pkey PRIMARY KEY (id);


--
-- Name: testes testes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.testes
    ADD CONSTRAINT testes_pkey PRIMARY KEY (id);


--
-- Name: tipos tipos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tipos
    ADD CONSTRAINT tipos_pkey PRIMARY KEY (id);


--
-- Name: usuarios usuarios_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_email_key UNIQUE (email);


--
-- Name: usuarios usuarios_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (id);


--
-- Name: aulas aulas_prova_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.aulas
    ADD CONSTRAINT aulas_prova_id_fkey FOREIGN KEY (prova_id) REFERENCES public.provas(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: aulas aulas_usuario_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.aulas
    ADD CONSTRAINT aulas_usuario_id_fkey FOREIGN KEY (usuario_id) REFERENCES public.usuarios(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: chamados chamados_usuario_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chamados
    ADD CONSTRAINT chamados_usuario_id_fkey FOREIGN KEY (usuario_id) REFERENCES public.usuarios(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: exercicios exercicios_admin_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.exercicios
    ADD CONSTRAINT exercicios_admin_id_fkey FOREIGN KEY (admin_id) REFERENCES public.usuarios(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: exercicios exercicios_categoria_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.exercicios
    ADD CONSTRAINT exercicios_categoria_id_fkey FOREIGN KEY (categoria_id) REFERENCES public.categoria(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: exercicios exercicios_modulo_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.exercicios
    ADD CONSTRAINT exercicios_modulo_id_fkey FOREIGN KEY (modulo_id) REFERENCES public.modulos(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: exercicios exercicios_tipo_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.exercicios
    ADD CONSTRAINT exercicios_tipo_id_fkey FOREIGN KEY (tipo_id) REFERENCES public.tipos(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: provas2 provas2_usuario_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.provas2
    ADD CONSTRAINT provas2_usuario_id_fkey FOREIGN KEY (usuario_id) REFERENCES public.usuarios(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: provas2s provas2s_usuario_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.provas2s
    ADD CONSTRAINT provas2s_usuario_id_fkey FOREIGN KEY (usuario_id) REFERENCES public.usuarios(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: provas3s provas3s_usuario_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.provas3s
    ADD CONSTRAINT provas3s_usuario_id_fkey FOREIGN KEY (usuario_id) REFERENCES public.usuarios(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: provas provas_usuario_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.provas
    ADD CONSTRAINT provas_usuario_id_fkey FOREIGN KEY (usuario_id) REFERENCES public.usuarios(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: resposta resposta_exercicio_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.resposta
    ADD CONSTRAINT resposta_exercicio_id_fkey FOREIGN KEY (exercicio_id) REFERENCES public.exercicios(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: resposta resposta_prova_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.resposta
    ADD CONSTRAINT resposta_prova_id_fkey FOREIGN KEY (prova_id) REFERENCES public.provas2s(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: respostaschamados respostaschamados_chamado_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.respostaschamados
    ADD CONSTRAINT respostaschamados_chamado_id_fkey FOREIGN KEY (chamado_id) REFERENCES public.chamados(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: respostaschamados respostaschamados_usuario_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.respostaschamados
    ADD CONSTRAINT respostaschamados_usuario_id_fkey FOREIGN KEY (usuario_id) REFERENCES public.usuarios(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: testes testes_nivel_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.testes
    ADD CONSTRAINT testes_nivel_id_fkey FOREIGN KEY (nivel_id) REFERENCES public.niveis(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: testes testes_prova_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.testes
    ADD CONSTRAINT testes_prova_id_fkey FOREIGN KEY (prova_id) REFERENCES public.provas(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: testes testes_usuario_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.testes
    ADD CONSTRAINT testes_usuario_id_fkey FOREIGN KEY (usuario_id) REFERENCES public.usuarios(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- PostgreSQL database dump complete
--

--
-- Database "postgres" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 13.0 (Debian 13.0-1.pgdg100+1)
-- Dumped by pg_dump version 13.0 (Debian 13.0-1.pgdg100+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE postgres;
--
-- Name: postgres; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.utf8';


ALTER DATABASE postgres OWNER TO postgres;

\connect postgres

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: DATABASE postgres; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON DATABASE postgres IS 'default administrative connection database';


--
-- PostgreSQL database dump complete
--

--
-- PostgreSQL database cluster dump complete
--

